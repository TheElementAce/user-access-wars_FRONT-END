import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import SearchIcon from "@material-ui/icons/Search";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import FilterListIcon from "@material-ui/icons/FilterList";
import SettingsIcon from "@material-ui/icons/Settings";

import BulletinCard from "./BulletinCard";
import Message from "./Message";

import { User } from "../../schema/users";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  width100: {
    width: "100%"
  },
  widgetBar: {
    width: "100%",
    marginBottom: "20px"
  },
  postFilterBar: {
    margin: "15px 0px"
  }
}));

const MainContent = props => {
  const classes = useStyles();

  const winner = new User();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.widgetBar}
      >
        <Grid item>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
        </Grid>
      </Grid>

      <BulletinCard winner={winner} className={classes.width100} />

      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.postFilterBar}
      >
        <Grid item>
          <Grid container alignItems="center">
            <Typography style={{ marginRight: "15px" }}>
              <Link href="#" onClick="preventDefault">
                HISTORY
              </Link>
            </Typography>
            <Typography style={{ marginRight: "15px" }}>
              <Link href="#" onClick="preventDefault">
                FRIENDS
              </Link>
            </Typography>
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContent;
