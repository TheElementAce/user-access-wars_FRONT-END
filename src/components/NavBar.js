import React from "react";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import MenuIcon from "@material-ui/icons/Menu";
import RefreshIcon from "@material-ui/icons/Refresh";
import PersonIcon from "@material-ui/icons/Person";

import { makeStyles } from "@material-ui/core/styles";

import { toggleLeftMenu, toggleRightMenu } from "../actions";

import MenuBar from "./MenuBar";
import UserBar from "./UserBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  gridContainer: {
    backgroundColor: "#5596e6"
  },
  gridItem: {
    backgroundColor: "#d3d8de"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  toolBarGridItem: {
    textAlign: "left"
  },
  toolBarGridItemAlt: {
    textAlign: "right"
  },
  drawerContainer: {
    width: 250
  }
}));

const NavBar = props => {
  const classes = useStyles();

  return (
    <div>
      <SwipeableDrawer
        open={props.menuReducer.leftMenuOpen}
        className={classes.drawerContainer}
      >
        <MenuBar />
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="right"
        open={props.menuReducer.rightMenuOpen}
        className={classes.drawerContainer}
      >
        <UserBar />
      </SwipeableDrawer>
      <AppBar position="static">
        <Toolbar edge="start">
          <Grid container alignItems="center">
            <Hidden lgUp>
              <Grid item xs={2} className={classes.toolBarGridItem}>
                <IconButton
                  aria-label="left-sidebar"
                  onClick={props.toggleLeftMenu}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item className={classes.toolBarGridItem}>
              <IconButton aria-label="refresh">
                <RefreshIcon />
              </IconButton>
            </Grid>
            <Grid item xs className={classes.toolBarGridItem}>
              <Typography>Page Title</Typography>
            </Grid>
            <Hidden lgUp>
              <Grid item className={classes.toolBarGridItemAlt}>
                <IconButton
                  aria-label="right-sidebar"
                  onClick={props.toggleRightMenu}
                >
                  <PersonIcon />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(
  mapStateToProps,
  {
    toggleLeftMenu,
    toggleRightMenu
  }
)(NavBar);
