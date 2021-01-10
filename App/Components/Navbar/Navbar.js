import React, { useState, useEffect } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  withWidth
} from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import navbarStyles from "./NavbarStyles";
import AlienHead from "../../../public/icons/alien-head";
import HamMenu from '../Menu/HamMenu'
import { withStyles } from "@material-ui/core/styles";


const Navbar = (props) => {
  const { classes, user, logOut, width } = props;
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => setCurrentUser(user), []);
  if (currentUser !== user) setCurrentUser(user);

  console.log(`width is: ${width}`)

  return (
    <div className={classes.navBarContainer}>
      <AppBar position="sticky">
        <Toolbar className={classes.root}>
          <Typography variant="h6" className={classes.title} >
            <Link to="/" color="white" className={classes.webName}>
              Misanthropy.space
            </Link>
          </Typography>
          {currentUser.loggedIn ? (
            <Grid
              container
              direction="row"
              justify="flex-end"
              className={classes.navbarRight}
            >
              {/* if screen <600 px dont show welcome */}
              {width != 'xs' &&
              <Typography variant="h6" className={classes.title}>
                <AlienHead />
                {` Welcome, ${user.userName}!`}
              </Typography> }
              <HamMenu />
            </Grid>
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
    user: state.user,
  };
};


export default connect(mapState, null)(withStyles(navbarStyles)(withWidth()(Navbar)));
