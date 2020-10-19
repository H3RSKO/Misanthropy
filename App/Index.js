import React from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import indexStyles from "./Styling/IndexStyle";

const Index = (props) => {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10} justify="center" className={classes.header}>
        <h1>Misanthropy.space</h1>
      </Grid>
      <Grid item xs={10} >
        <Paper
          elevation={3}
          square={true}
          className={classes.root}
        >
          <div className={classes.subHeader}>Listen to the stories whispered accross the void.</div>
          <Grid container direction="row" justify="center">
            <Grid item xs={6} className={classes.header}>
              <Button variant="contained" color="primary">
                Forum
              </Button>
            </Grid>
            <Grid item xs={6} className={classes.header}>
              <Button variant="contained" color="primary">
                Stories
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(indexStyles)(Index);
