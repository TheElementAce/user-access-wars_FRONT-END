import React from "react";
import { connect } from "redux";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { SwipeableDrawer } from "@material-ui/core";

import MenuBar from "./MenuBar";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

const SwipeableMenu = () => {
  const classes = useStyles();

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <MenuBar />
    </div>
  );

  return <div className={classes.list} />;
};

const mapStateToProps = state => {
  console.log(state);

  return state;
};

export default connect()(SwipeableMenu);
