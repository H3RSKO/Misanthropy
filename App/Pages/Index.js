import React, {useState, useEffect} from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import indexStyles from "../Styling/IndexStyle";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home'
import Stories from './Stories'
import ProfilePage from './ProfilePage'
import {Signup, Login} from './AuthForm'
import Navbar from "../Components/Navbar/Navbar"


const Index = (props) => {
  const { classes, user } = props;
  console.log(props)
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => setCurrentUser(user), [])
  console.log(`Just set the current user to ${currentUser}`)

  return (
    <Grid container direction="row" justify="center">
      <Navbar />
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

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapState)(withStyles(indexStyles)(Index));
