import React, { useEffect, useState } from "react";
const {
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
} = require("@material-ui/core");
import postStyle from "./postStyle";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import DOMPurify from "dompurify";
import PostHandler from "../PostHandler/PostHandler";
import dayjs from "dayjs";

const createMarkup = (html) => {
  html = html.replace(/<a /g, '<a style="color: green;"');
  return {
    __html: DOMPurify.sanitize(html),
  };
};

const Post = ({ p, classes}) => {
  // console.log({ p });
  return (
    <Card key={p.id} style={{display: "grid"}}>
      <Grid
        container
        spacing={1}
        // justify="spaceBetween"
        direction="row"

      >
        <Grid className={classes.userInfo} item xs={3}>
          <Grid item xs={12}>
            <img src={p.user.photo} className={classes.userPhoto}/>
          </Grid>
          <Grid item xs={12}>
            {p.user.userName}
          </Grid>
          <Grid item xs={12}>
            Joined {dayjs(p.user.createdAt).format("MM-DD-YYYY")}
          </Grid>
        </Grid>
        <Grid item xs={9} className={classes.postTextContainer}>
          <CardContent className={classes.postText}>
            <Typography
              // className={classes.postText}
              dangerouslySetInnerHTML={createMarkup(p.text)}
            >
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
            {/* <PostHandler /> */}
    </Card>
  );
};

export default withStyles(postStyle)(Post);
