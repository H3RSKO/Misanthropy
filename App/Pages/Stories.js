import React, {useEffect, useState} from "react";
import { Paper, Button, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import storiesStyle from "../Styling/StoriesStyle";
import {fetchThreads} from '../store'
import user from "../store/user";

const Stories = (props) => {
  const { classes, getThreads, threads, user } = props;

  const [stateThreads, setStateThreads] = useState([])

  useEffect(() => {
    const loadThreads = async () => {
      const threads = await setStateThreads(getThreads)
      return threads
    }
    loadThreads()
  }, [])



  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10}>
        <Box className={classes.borderBox} border={3}>
          <Paper elevation={3} square={true} className={classes.root}>
            {user.loggedIn && <Button>
              <Link to='/newthread' className={classes.link}>
                New Thread
                </Link>
              </Button>}
            {threads && threads.threads.map((thread) => (
              <div key={thread.id}>
                {thread.title}
                {/* need to make this link to a page just for the thread  */}
              </div>
            ))}
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

Stories.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapState = (state) => ({
  threads: state.threads,
  user: state.users.user
})

const mapDispatch = (dispatch) => ({
  getThreads: () => dispatch(fetchThreads())
})

export default connect(mapState, mapDispatch)(withStyles(storiesStyle)(Stories));
