import React from "react";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import SendIcon from "@material-ui/icons/Send";
import ChatIcon from "@material-ui/icons/Chat";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { makeStyles } from "@material-ui/core/styles";

import { toggleLeftMenu, toggleRightMenu } from "../../actions";

import ProfilePicture from "./ProfilePicture";
import FactionSlider from "./FactionSlider";
import SkillsList from "./SkillsList";

const useStyles = makeStyles({
  card: {
    maxWidth: "95%",
    position: "relative"
  },
  media: {
    height: 140
  },
  inviteFriends: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mbSpacing: {
    marginBottom: "10px"
  },
  closeButton: {
    position: "absolute",
    zIndex: 4
  },
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const UserBar = (props, user) => {
  const classes = useStyles();
  // user argument is an object with all of the stats about a particular user
  return (
    <div className={classes.flexContainer}>
      <Hidden lgUp>
        <Grid container justify="flex-start">
          <Grid item>
            <IconButton onClick={props.toggleRightMenu}>
              <ChevronRightIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>
      <Card className={classes.card}>
        <CardActionArea>
          <ProfilePicture />
          <CardContent>
            <div className={classes.inviteFriends}>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="p"
                align="left"
              >
                INVITE FRIENDS
              </Typography>
              <div className={classes.buttons}>
                <IconButton>
                  <SendIcon />
                </IconButton>
                <IconButton>
                  <ChatIcon />
                </IconButton>
              </div>
            </div>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              align="left"
            >
              FACTIONS
            </Typography>
            <FactionSlider className={classes.mbSpacing} />
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              align="left"
            >
              SKILLS
            </Typography>
            <SkillsList />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
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
)(UserBar);
