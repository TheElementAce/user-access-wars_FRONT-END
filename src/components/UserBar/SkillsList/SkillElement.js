import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  },
  elementGrid: {
    display: "flex",
    flexWrap: "wrap"
  },
  element: {
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
    marginRight: "15px",
    marginBottom: "10px",
    padding: "4px 6px",
    boxShadow: "2px 2px 3px 1px #E4E4E4",
    borderRadius: "3px"
  }
});

const momentumPass = string => {
  if (string) {
    if (string === "up") {
      return <ArrowUpwardIcon color="primary" />;
    } else if (string === "down") {
      return <ArrowDownwardIcon color="error" />;
    }
  }

  return <NotInterestedIcon />;
};

const SkillElement = props => {
  /*
  props: {
    skills: [
      {
        name: 'coding',
        momentum: 'up',
        streakNumber: 12
      },
      {
        name: 'discipline',
        momentum: 'down',
        streakNumber: 4
      }
    ]
  }
  */
  const classes = useStyles();

  return (
    <div className={classes.elementGrid}>
      {props.skills.map(element => {
        return (
          <div className={classes.element}>
            <Typography>#{element.name}</Typography>
            {momentumPass(element.momentum)}
            <Typography>{element.streakNumber}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export default SkillElement;
