import React from "react";

import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareIcon from "@material-ui/icons/Share";

import Message from "./Message";
import CommentMaker from "./CommentMaker";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "90%"
  },
  userBlock: {
    display: "flex",
    width: "97%",
    boxSizing: "border-box",
    padding: "13px 13px"
  },
  rightBlock: {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    // border: "1px solid black",
    marginLeft: "10px"
  },
  userInfo: {
    display: "flex",
    flexDirection: "column"
  },
  userInfo__row1: {
    marginTop: "-5px",
    fontWeight: 700,
    textAlign: "left"
  },
  userInfo__row2: {
    marginTop: "-15px",
    display: "flex",
    justifyContent: "flex-start"
  },
  skill: {
    border: "1px solid black",
    fontSize: "12px",
    borderRadius: "7px",
    lineHeight: "12px",
    padding: "4px 6px"
  },
  icons: {
    textAlign: "left",
    marginLeft: "-12px"
  },
  customHorzRule: {
    position: "relative",
    height: "2px",
    backgroundColor: "#b5b5b5",
    marginBottom: "10px"
  }
}));

const BulletinCard = ({ winner }) => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5
      }}
    />
  );

  const classes = useStyles();

  const renderSkillBlocks = () => {
    const skillsList = winner.skills;

    skillsList.forEach(skill => {
      return <p>{skill}</p>;
    });
  };

  return (
    <Paper className={classes.userBlock}>
      <Avatar variant="square" src={winner.profilePicURL} />
      <div className={classes.rightBlock}>
        <Grid container direction="column" justify="flex-start">
          <Grid item>
            <div className={classes.userInfo}>
              <div className={classes.userInfo__row1}>
                <p>
                  {winner.firstName} {winner.lastName}&nbsp;&nbsp;🔥{" "}
                  {winner.streakNumber}
                </p>
              </div>
              <div className={classes.userInfo__row2}>
                <p className={classes.skill}>{winner.skills[0]}</p>

                <p>&nbsp;&nbsp;</p>

                <p className={classes.skill}>{winner.skills[1]}</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Message />
          </Grid>
          <Grid item className={classes.icons}>
            <IconButton>
              <ThumbUpIcon />
            </IconButton>
            <IconButton>
              <ChatBubbleIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Grid>
          <div className={classes.customHorzRule} />
          <Grid item>
            <CommentMaker />
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default BulletinCard;
