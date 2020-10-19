import React from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import homeStyle from '../Styling/HomeStyle'

const Home = (props) => {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10} >
        <Paper
          elevation={3}
          square={true}
          className={classes.root}
        >
          <div className={classes.subHeader}>Listen to the stories whispered accross the void.</div>
          <Grid container direction="row" justify="center" >
            <Grid item xs={6} className={classes.buttons}>
              <Button variant="contained" color="primary">
                Stories
              </Button>
            </Grid>
            <Grid item xs={6} className={classes.buttons}>
              <Button variant="contained" color="primary">
                Forum
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(homeStyle)(Home);
