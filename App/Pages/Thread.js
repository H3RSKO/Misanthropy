import React, { useEffect, useState } from "react";
import {
  Paper,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import threadStyle from "../Styling/ThreadStyle";
import { fetchPosts } from "../store/posts";
import { getThreadInfo } from "../store/threads"
import DOMPurify from "dompurify";
import PostHandler from '../Components/PostHandler/PostHandler'
import Post from "../Components/Post/Post";

const Thread = (props) => {
  const { getPosts, posts, users, classes, getThread } = props;
  const threadId = props.match.params.threadId;
  console.log(props);
  const [currentPosts, setCurrentPosts] = useState();

  console.log("thread props are: ", props);
  console.log("thread ID is: ", threadId);

  useEffect(() => {
    const loadPostsAndThreadInfo = async () => {
      const posts = await getPosts(threadId);
      const threadInfo = await getThread(threadId)
      console.log("posts are: ", posts);
      console.log("threadInfo is: ", threadInfo);
      setCurrentPosts(posts);
    };
    loadPostsAndThreadInfo();
  }, []);

  // const createMarkup = (html) => {
  //   html = html.replace(/<a /g, '<a style="color: green;"');
  //   return {
  //     __html: DOMPurify.sanitize(html),
  //   };
  // };

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10}>
        <Paper
          elevation={3}
          square={true}
          className={classes.root}
          variant="outlined"
        >
          <Typography type="h1">
            {currentPosts && console.log(currentPosts.posts)}
            <Button onClick={PostHandler} style={{justifySelf: 'flex-end'}}>Reply to Thread</Button>
          </Typography>
          <Box style={{ display: "grid" }}>
            {/* need to be able to pull current thread */}
            {currentPosts &&
               currentPosts.posts.map((p) => (
                <div className={classes.postComtainer}>
                  <Post p={p} />
                </div>
               ))}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
// thunk

const mapState = (state) => ({
  user: state.users.user,
  posts: state.posts.posts,
  thread: state.threads.thread
});

const mapDispatch = (dispatch) => ({
  getPosts: (threadId) => dispatch(fetchPosts(threadId)),
  getThread: (threadId) => dispatch(getThreadInfo(threadId))
});

export default connect(mapState, mapDispatch)(withStyles(threadStyle)(Thread));
