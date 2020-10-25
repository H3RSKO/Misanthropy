import React from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import indexStyles from "../Styling/IndexStyle";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home'
import Stories from './Stories'
import ProfilePage from './ProfilePage'

const Index = (props) => {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10} justify="center" className={classes.header}>
        <h1>Misanthropy.space</h1>
      </Grid>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stories" component={Stories} />
          <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Grid>
  );
};

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(indexStyles)(Index);
