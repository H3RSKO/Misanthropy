import React from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import homeStyle from '../Styling/HomeStyle'
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

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
          <Typography variant="h3" className={classes.subHeader}>Listen to the stories whispered accross the void.</Typography>
          <Grid container direction="row" justify="center" >
            <Grid item xs={6} className={classes.buttons}>
            <Link to="/stories">
              <Button variant="contained" color="primary">
                Stories
              </Button>
            </Link>
            </Grid>
            <Grid item xs={6} className={classes.buttons}>
            <Link to="/">
              <Button variant="contained" color="primary">
                Forum
              </Button>
              </Link>
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
