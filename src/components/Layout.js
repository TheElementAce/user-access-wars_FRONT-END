import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

import { makeStyles } from "@material-ui/core/styles";

import MenuBar from "./MenuBar";
import MainContent from "./MainContent";
import NavBar from "./NavBar";
import UserBar from "./UserBar";

import Faker from "faker";

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
  sideBarLeft: {
    position: "sticky !important"
  },
  mainContentWrapper: {
    width: "100%"
  }
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className="root">
      <NavBar />
      <Grid
        container
        className={classes.gridContainer}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Hidden mdDown>
          <Grid item xs={2} className={classes.gridItem}>
            <Paper className={classes.paper}>
              <MenuBar className={classes.sideBarLeft} />
            </Paper>
          </Grid>
        </Hidden>
        <Grid item xs={true} className={classes.gridItem}>
          <Paper className={classes.paper}>
            <Grid container direction="row">
              <Grid item className={classes.mainContentWrapper}>
                <MainContent />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Hidden mdDown>
          <Grid item xs={3} className={classes.gridItem}>
            <Paper className={classes.paper}>
              <UserBar />
            </Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Layout;
