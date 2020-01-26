import React from "react";

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachmentIcon from "@material-ui/icons/Attachment";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles(theme => ({
  root: {},
  leftMostIcon: {
    marginLeft: "-14px"
  }
}));

const CommentMaker = () => {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <form className={classes.root} noValidate autoComplete="off">
          <InputBase
            placeholder="Write a comment..."
            inputProps={{ "aria-label": "naked" }}
          />
        </form>
      </Grid>
      <Grid item>
        <IconButton className={classes.leftMostIcon}>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachmentIcon />
        </IconButton>
        <IconButton>
          <DescriptionIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CommentMaker;
