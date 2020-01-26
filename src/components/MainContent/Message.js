import React from "react";

import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import announces from "../../schema/sampleAnnouncements";

const useStyles = makeStyles(theme => ({
  text: {
    textAlign: "left"
  }
}));

const Message = ({ winnner }) => {
  const classes = useStyles();

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const generateRandomAnnounce = () => {
    let min = 0;
    let max = announces.length - 1;
    return announces[getRndInteger(min, max)];
  };

  return <Typography align="left">{generateRandomAnnounce()}</Typography>;
};

export default Message;
