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

  console.log('user in navbar >> ', user)
  useEffect(() => setCurrentUser(user), [])
  if(currentUser !== user)setCurrentUser(user)

  return (
    <div className={classes.navBarContainer}>
      <AppBar position="sticky">
        <Toolbar className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Misanthropy.space
          </Typography>
          {currentUser.loggedIn ? (
            <Grid container direction="row" justify="flex-end" className={classes.navbarRight}>
              <Typography
                variant="h6"
                className={classes.title}
              >
                  <AlienHead />
                  {` Welcome, ${user.userName}!`}
              </Typography>
              {/* need to create userpage */}
              <Link to="/userpage" >
                <Button color="inherit" style={{'marginLeft': '1em'}}>User Page</Button>
              </Link>
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

export default connect(mapState, null)(withStyles(navbarStyles)(Navbar));