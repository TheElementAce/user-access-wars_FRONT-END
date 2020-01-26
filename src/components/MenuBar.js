import React from "react";
import { connect } from "react-redux";

import toggleDrawer from "../helpers";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import StarsIcon from "@material-ui/icons/Stars";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleIcon from "@material-ui/icons/People";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ChatIcon from "@material-ui/icons/Chat";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { toggleLeftMenu, toggleRightMenu } from "../actions";

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
  datMenu: {
    width: 250
  }
}));

const MenuBar = props => {
  const classes = useStyles();

  const menuText = [
    "Friends",
    "Stage",
    "Profile",
    "Factions",
    "Investors",
    "Chat"
  ];

  const menuIcons = [
    <EmojiPeopleIcon />,
    <StarsIcon />,
    <AccountCircleIcon />,
    <PeopleIcon />,
    <LocalAtmIcon />,
    <ChatIcon />
  ];

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-start"
      className={props.menuReducer.leftMenuOpen ? classes.datMenu : ""}
    >
      <Hidden lgUp>
        <Grid container justify="flex-end">
          <Grid item>
            <IconButton onClick={props.toggleLeftMenu}>
              <ChevronLeftIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>
      <List>
        {menuText.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{menuIcons[index]}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    toggleLeftMenu,
    toggleRightMenu
  }
)(MenuBar);
