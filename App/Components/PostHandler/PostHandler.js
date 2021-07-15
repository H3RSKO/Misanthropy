// check to see if user is logged in

// display text editor and

// thread id or post that is's replying to are passed in.
// and the posthandler will be displayed either on the bottom of the page if it is a reply to the thread or under a post if it is a reply to the post

import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import postHandlerStyle from "./postHandlerStyle";


const PostHandler = (props) => {
  let {replyingTo, classes} = props

  return (
      <div className={classes.postHandlerContainer}>
        Buttons to reply etc... will go here.
      </div>
   )
}

const mapState = (state) => ({
  user: state.users.user
})

export default connect(mapState, null)(withStyles(postHandlerStyle)(PostHandler));
