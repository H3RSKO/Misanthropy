import React from "react";
import { connect } from "react-redux";
import addNewUser from "../store";
import {
  Paper,
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import {
  createMuiTheme,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import authFormStyles from "../Styling/AuthFormStyles";
import { addNewUsers } from "../store";

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, classes } = props;

  // const formTheme = createMuiTheme({
  //   palette: {
  //     primary: { main: "#f0fffb", contrastText: "#fff" },
  //     secondary: { main: "#f0fffb", contrastText: "#fff" },
  //   },
  // });

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10}>
        {displayName}
        <Box className={classes.borderBox} border={3}>
          <Paper elevation={3} square={true} className={classes.root}>
            <Box>
              {/* <ThemeProvider theme={formTheme}> */}
                <FormControl color="main">
                  <InputLabel htmlFor="my-input" style={{ color: "white" }} variant="outlined">
                    Email address
                  </InputLabel>
                  <Input aria-describedby="my-helper-text" style={{ color: "white" }}/>
                  <FormHelperText id="myHelperText" className="formInput" style={{ color: "white" }}>
                    We'll never share your email.
                  </FormHelperText>
                </FormControl>
              {/* </ThemeProvider> */}
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
  };
};

const mapDispatch = (dispatch) => {
  return {
    addUser: () => dispatch(addNewUser()),
  };
};

const mapState = (state) => ({ users: state });

export default connect(
  mapSignup,
  mapDispatch
)(withStyles(authFormStyles)(AuthForm));
