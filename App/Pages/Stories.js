import React from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import storiesStyle from '../Styling/StoriesStyle'

const Stories = (props) => {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10} >
        <Paper
          elevation={3}
          square={true}
          className={classes.root}
        >
          TEST
        </Paper>
      </Grid>
    </Grid>
  )
}

Stories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(storiesStyle)(Stories);
