import React from "react";
import { Paper, Button, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import profilePageStyle from '../Styling/ProfilePageStyle'
import { useState, useEffect } from "react";
import {fetchUsers} from '../store'
import {connect} from 'react-redux'

const ProfilePage = (props) => {

  const { classes } = props

  useEffect(() => {
    props.getUsers()
  }, [])

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10} >
      <Box className={classes.borderBox} border={3}>
        <Paper
          elevation={3}
          square={true}
          className={classes.root}
        >
          Profile Page
          {props.users.map(user => (
            <div>{user.name}</div>
          ))}
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
    getUsers: () => dispatch(fetchUsers()),
})

const mapState = (state) => ({users: state})

export default connect(mapState, mapDispatch)(withStyles(profilePageStyle)(ProfilePage))

