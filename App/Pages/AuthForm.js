import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import lock from '../../public/icons/lock.svg';
import authFormStyles from '../Styling/AuthFormStyles';
import {addNewUser, authenticateUser} from '../store'
import SignedIn from '../Components/SignedIn/SignedIn'

const AuthForm = (props) => {
  const {createUser, signInUser, signup, error} = props
  const classes = authFormStyles();

  const [user, setUser] = useState({userName: '', email: '', password: ''})
  const [isSignedIn, setIsSignedIn] = useState(false)

  // Takes form input and saves to state
  const handleInputChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    signup ? await createUser({userName: user.userName, email: user.email, password: user.password}) : await signInUser({userName: user.userName, password: user.password})
    console.log('user>>> ', user)
    // opens dialog to confirm account creation and open home page
    setIsSignedIn(true)
  }
  console.log('>> props: ', props)
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
          {signup ? <div>Sign Up</div> : <div>Sign In</div>}
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
            {signup? <Grid item xs={12}>
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
            </Grid> : <></>}
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
            {signup ? <div>Sign Up</div> : <div>Sign In</div>}
          </Button>
          {signup ? <Grid container justify="flex-center">
            <Grid item>
              <Link href="/login" variant="body1">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> : <Grid container justify="flex-center">
            <Grid item>
              <Link href="/signup" variant="body1">
                Need an account? Sign Up!
              </Link>
            </Grid>
          </Grid>}
        </form>
      </div>
      </Paper>
        </Box>
        {error && error.response && <div> {error.response.data} </div>}
        {isSignedIn ? <SignedIn signup={signup} history={props.history} user={props.user}/> : <></>}
    </Container>
  );
}

const mapSignupState = (state) => {
  return {
    signup: true,
    users: state.users,
    // error: state.users.error,
  }
}

const mapLoginState = (state) => {
  return {
    signup: false,
    // error: state.user.error,
  }
}


const mapDispatchSignUp = (dispatch) => {
  return {
    createUser: (newUser) => dispatch(addNewUser(newUser))
  }
}

// 1: create thunk to sign in user
// 1.5: make API route to authenticate user
// 2: set authform page to display correct by signup vs login
const mapDispatchSignIn = (dispatch) => {
  return {
    signInUser: (user) => dispatch(authenticateUser(user))
  }
}

export const Signup = connect(mapSignupState, mapDispatchSignUp)(withStyles(authFormStyles)(AuthForm))

export const Login = connect(mapLoginState, mapDispatchSignIn)(withStyles(authFormStyles)(AuthForm))

