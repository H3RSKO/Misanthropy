import React from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import indexStyles from "./Styling/IndexStyle";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Pages/Home'
import Stories from './Pages/Stories'

const Index = (props) => {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10} justify="center" className={classes.header}>
        <h1>Misanthropy.space</h1>
      </Grid>
      <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/stories">
            <Stories />
          </Route>
      </Switch>
      </Router>
    </Grid>
  );
};

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(indexStyles)(Index);
