import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import lock from '../../public/icons/lock.svg';
import authFormStyles from '../Styling/AuthFormStyles';
import {addNewUser} from '../store'

const SignUp = (props) => {
  const {createUser} = props
  const classes = authFormStyles();

  const [user, setUser] = useState({userName: '', email: '', password: ''})

  // Takes form input and saves to state
  const handleInputChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
    console.log('input change ', user)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createUser({userName: user.userName, email: user.email, password: user.password})
  }

  return (
    <Container component="main" maxWidth="xs">
    <Box className={classes.borderBox} border={3}>
      <Paper elevation={3} square={true} className={classes.root}>
      <CssBaseline />
      <div className={classes.paper} >
        <Avatar className={classes.avatar}>
          <img src={lock} alt='lock-icon' />
        </Avatar>
        <Typography component="h1" variant="h5" color="secondary">
          Sign up
        </Typography>
        <form className={classes.form} noValidate color="secondary" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="userName"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                autoFocus
                onChange={handleInputChange}
                value={user.userName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
                value={user.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
                value={user.password}
              />
            </Grid>
            <Grid item xs={12} className={classes.disclaimer} >
            Emails are not required for sign-up, but are the only way to regain access to your account if you lose the password.
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}

          >
            Sign Up
          </Button>
          <Grid container justify="flex-center">
            <Grid item>
              <Link href="#" variant="body1">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </Paper>
        </Box>
    </Container>
  );
}


const mapDispatchSignUp = (dispatch) => {

  return {
    createUser: (newUser) => dispatch(addNewUser(newUser))
  }
}

export const Signup = connect(null, mapDispatchSignUp)(withStyles(authFormStyles)(SignUp))
// export default withStyles(authFormStyles)(SignUp);
