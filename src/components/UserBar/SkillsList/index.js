import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import SkillElement from "./SkillElement";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  }
});

const SkillsList = () => {
  const classes = useStyles();

  const skills = [
    {
      name: "coding",
      momentum: "up",
      streakNumber: 12
    },
    {
      name: "discipline",
      momentum: "down",
      streakNumber: 4
    },
    {
      name: "publicSpeaking",
      momentum: "up",
      streakNumber: 8
    }
  ];

  return (
    <div className={classes.grid}>
      <SkillElement skills={skills} />
    </div>
  );
};

export default SkillsList;
