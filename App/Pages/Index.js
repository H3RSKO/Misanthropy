import React, {useState, useEffect} from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import indexStyles from "../Styling/IndexStyle";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {checkUserCookie} from '../store/user'
import Home from './Home'
import Stories from './Stories'
import ProfilePage from './ProfilePage'
import {Signup, Login} from './AuthForm'
import Navbar from "../Components/Navbar/Navbar"


const Index = (props) => {
  const { classes, user, checkUser } = props;
  const [currentUser, setCurrentUser] = useState({loggedIn: false})

  if(user) setCurrentUser(user)

  useEffect(() => {
    if (document.cookie && !currentUser.loggedIn) {
      const userChecker = async (cookie) => {
        try {
          await checkUser(cookie)
        } catch(err) {console.log(err)}
      }
      // get plain sid
      const cookieSID = document.cookie.split("=s%3A").pop()
      userChecker(cookieSID)
    }
  }, [])

  return (
    <Grid container direction="row" justify="center" className={classes.container}>
      <Navbar style={{"margin-bottom": "2em"}} />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stories" component={Stories} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
      </Switch>
    </Grid>
  );
};

const mapState = (state) => {user: state.userName}

const mapDispatch = (dispatch) => {
  return {
    checkUser: (cookie) => dispatch(checkUserCookie(cookie))
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapState, mapDispatch)(withStyles(indexStyles)(Index));
