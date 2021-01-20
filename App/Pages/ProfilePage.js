import React, { useState, useEffect } from "react";
import { Paper, Button, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import profilePageStyle from '../Styling/ProfilePageStyle'
import {fetchUsers} from '../store'
import {connect} from 'react-redux'

const ProfilePage = (props) => {

  const { classes, user } = props

    console.log(`the user is ${user}`)

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10} >
      <Box className={classes.borderBox} border={3}>
        <Paper
          elevation={3}
          square={true}
          className={classes.root}
        >
          Welcome {user.userName}!
        </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatch = (dispatch) => ({
    getProfile: () => dispatch(fetchUsers()),
})

const mapState = (state) => ({user: state.users.user})

export default connect(mapState, mapDispatch)(withStyles(profilePageStyle)(ProfilePage))

