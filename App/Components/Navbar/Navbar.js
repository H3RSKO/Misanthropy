import React, {useState, useEffect} from "react";
import {
  Grid,
  AppBar,
  Fab,
  Toolbar,
  IconButton,
  MenuIcon,
  Typography,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import navbarStyles from "./NavbarStyles";
import AlienHead from "../../../public/icons/alien-head"
import { withStyles } from "@material-ui/core/styles";


const Navbar = (props) => {
  const { classes, user } = props;
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => setCurrentUser(user), [])
  if(currentUser !== user)setCurrentUser(user)

  console.log('here<<>> : ', props)
  console.log('here<<>>@@2 : ', user)
  console.log('here<<>>@@2 currentUser: ', currentUser)

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Misanthropy.space
          </Typography>
          {console.log("the user is>> ", user)}
          {currentUser.loggedIn ? (
            <div>
              <Typography
                variant="h6"
                className={classes.title}
              ><AlienHead />{` Welcome ${user.userName}`}</Typography>{" "}
              {/* need to create userpage */}
              <Link to="/userpage">
                <Button color="inherit">User Page</Button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

// allow navbar to see user logged-in status
const mapState = (state) => {
  return {
    user: state,
  };
};

export default connect(mapState, null)(withStyles(navbarStyles)(Navbar));
