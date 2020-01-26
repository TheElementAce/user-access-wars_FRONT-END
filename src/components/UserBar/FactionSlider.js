import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  slider: {
    backgroundColor: "blue"
  },
  card: {
    maxWidth: 250,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridColumnGap: "15px",
    gridAutoFlow: "column"
  },
  media: {
    height: 140
  },
  element: {
    maxWidth: 60
  }
});

const FactionSlider = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.element}>
        <img src="https://via.placeholder.com/90" alt="Nilfgaard" />
      </div>
      <div className={classes.element}>
        <img src="https://via.placeholder.com/90" alt="Nilfgaard" />
      </div>
      <div className={classes.element}>
        <img src="https://via.placeholder.com/90" alt="Nilfgaard" />
      </div>
      <div className={classes.element}>
        <img src="https://via.placeholder.com/90" alt="Nilfgaard" />
      </div>
      <div className={classes.element}>
        <img src="https://via.placeholder.com/90" alt="Nilfgaard" />
      </div>
    </div>
  );
};

export default FactionSlider;
