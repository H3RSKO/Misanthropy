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

  const createMarkup = (html) => {
    html = html.replace(/<a /g, '<a style="color: green;"');
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

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
            {}
          </Typography>
          <Box style={{ display: "grid" }}>
            {/* need to be able to pull current thread */}
            {currentPosts &&
              currentPosts.posts.map((p) => (
                <Card key={p.id}>
                  <Grid container spacing={1} justify="spaceBetween" className={classes.userInfo}>
                  {console.log("p is: >> ", p)}
                  <Grid item xs={3}>
                    Poster info
                  </Grid>
                  <Grid container xs={9} className={classes.postText}>
                  <CardContent>
                    <Typography
                      // className={classes.postText}
                      dangerouslySetInnerHTML={createMarkup(p.text)}
                    >
                      {/* <div dangerouslySetInnerHTML={createMarkup(p.text)}>
            </div> */}
                    </Typography>
                    <PostHandler />
                  </CardContent>
                  </Grid>
                  {/* need to add user name and style post */}
                  {/* {p.userId} */}
                  </Grid>
                </Card>
              ))}
            {/* <Button onClick={PostHandler} style={{justifySelf: 'flex-end'}}>Reply to Thread</Button> */}
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
