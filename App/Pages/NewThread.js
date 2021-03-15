import React, { useState, useEffect } from "react";
import {
  Paper,
  TextField,
  Grid,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {connect} from 'react-redux';

import TextEditor from "../Components/TextEditor/TextEditor";
import NewThreadStyles from "../Styling/NewThreadStyle";
import {createThreads} from "../store/threads"

const NewThread = (props) => {
  const { classes, user, createThread } = props;
  const [thread, setThread] = useState({ title: "", text: "", story: false, userId: '' });

  useEffect(() => {
    setThread({...thread, userId: user.id})
  }, [])


  // callback that is passed to TextEditor that controls all text before hitting backend
  const textHandler = (event) => {
    if (event.target.name === "story") {
      setThread({ ...thread, [event.target.name]: event.target.checked });
    } else {
      setThread({ ...thread, [event.target.name]: event.target.value });
    }
  };

  // submits new thread
  const threadSubmitter = () => {
    createThread(thread)
  }

  console.log(`the thread is: ${JSON.stringify(thread)}`);

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10}>
        <Box className={classes.borderBox} border={3}>
          <Paper
            elevation={3}
            square={true}
            className={classes.root}
            variant="outlined"
          >
            <Typography variant="h3" className={classes.subHeader}>
              New Thread
            </Typography>
            {/* thread title */}
            <Grid container spacing={2} className={classes.topContainer} alignItems="center">
              <Grid item xs={9}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  required={true}
                  name="title"
                  label="Thread Title"
                  type="title"
                  id="title"
                  onChange={textHandler}
                  value={thread.title}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkBox}
                      checked={thread.story}
                      onChange={textHandler}
                      name="story"
                      color="secondary"
                    />
                  }
                  label="Is Thread A Story?"
                />
              </Grid>
            </Grid>
            <TextEditor setThread={setThread} thread={thread}/>
            <div className={classes.buttonContainer}>
            <Button variant="contained" color="secondary" onClick={threadSubmitter}>
                  Create Thread
            </Button>
            </div>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

const mapDispatchCreateThreads = (dispatch) => ({
  createThread: (thread) => dispatch(createThreads(thread))
})

const mapState = (state) => {
  return {
    user: state.users.user
  }
}

export default connect(mapState, mapDispatchCreateThreads)(withStyles(NewThreadStyles)(NewThread));
