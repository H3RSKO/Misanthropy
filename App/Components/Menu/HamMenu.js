import React, {useState} from 'react'
import { Menu, MenuItem, Button, ListItemText, ListItem } from '@material-ui/core'
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import hamMenuStyles from './HamMenuStyles'
import { logOutCurrentUser } from "../../store/user";

const HamMenu = (props) => {
  const { classes, logOut } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const clickHandler = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.hamburgerContainer}>
      <div onClick={clickHandler}

      aria-controls="customized-menu"
      aria-haspopup="true">
        <img src='/images/sciMenu2.png' style={{height: '1.35em'}} />
      </div>
      <Menu className={classes.menu}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={-3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="customized-menu"
        anchorEl={anchorEl}
        >
      {/* need to create userpage */}
      <MenuItem>
        <ListItem>
          <Link to="/userpage">
            <ListItemText primary="User Page">
              User Page
            </ListItemText>
          </Link>
        </ListItem>
      </MenuItem>
      <MenuItem>
      <ListItem>
        <Link to="/">
          <ListItemText primary="Logout"
            onClick={logOut}
          >
            Logout
          </ListItemText>
        </Link>
        </ListItem>
      </MenuItem>
      </Menu>
    </div>
  )
}


const mapDispatch = (dispatch) => {
  return {
    logOut: () => dispatch(logOutCurrentUser()),
  };
};


export default connect(null, mapDispatch)(withStyles(hamMenuStyles)(HamMenu))
