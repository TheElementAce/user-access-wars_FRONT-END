import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 250
  },
  media: {
    height: 200
  }
});

const ProfilePicture = (props, user) => {
  // user argument is an object with all of the stats about a particular user
  const classes = useStyles();

  return (
    <CardMedia
      className={classes.media}
      image="https://via.placeholder.com/250"
    />
  );
};

export default ProfilePicture;
