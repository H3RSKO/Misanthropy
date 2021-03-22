import React, {useEffect, useState} from "react";
import { Paper, Button, Grid, Box, Card, CardContent, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import threadStyle from "../Styling/ThreadStyle"
import {fetchPosts} from '../store/posts'
import DOMPurify from 'dompurify';


const Thread = (props) => {
  const {getPosts, posts, users, classes} = props
  const threadId = props.match.params.threadId

  const [currentPosts, setCurrentPosts] = useState()

  console.log("thread props are: ", props)
  console.log("thread ID is: ", threadId)

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await getPosts(threadId)
      console.log("posts are: ", posts)
      setCurrentPosts(posts)
    }
    loadPosts()
  }, [])

  const createMarkup = (html) => {
    html = `<style>a {color:green;}</style>` + html
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10}>
      <Paper
            elevation={3}
            square={true}
            className={classes.root}
            variant="outlined"
          >
      <Box style={{display: 'grid'}}>
      <Button style={{justifySelf: 'flex-end'}}>Reply to Thread</Button>
      {users && users.user.loggedIn && (<Button>Reply to Thread</Button>)}
        {/* need to be able to pull current thread */}
        {currentPosts && currentPosts.posts.map(p => (
          <Card key={p.id}>
            {console.log("p is: >> ", p)}
            <CardContent>
            <Typography className={classes.postText} dangerouslySetInnerHTML={createMarkup(p.text)}>

            {/* <div dangerouslySetInnerHTML={createMarkup(p.text)}>
            </div> */}
            </Typography>
            </CardContent>
            {/* need to add user name and style post */}
          {/* {p.userId} */}
          </Card>
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
  posts: state.posts.posts
})

const mapDispatch = (dispatch) => ({
  getPosts: (threadId) => dispatch(fetchPosts(threadId))
})

export default connect(mapState, mapDispatch)(withStyles(threadStyle)(Thread))
