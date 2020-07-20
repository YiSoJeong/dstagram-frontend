import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles(theme => ({
  footer: {
    position: "absolute",
    top: 850
  },
  margin: {
    marginLeft: 100,
    marginRight: 100
  }
}));

export default function Footer() {
  const classes = useStyles();

  const onClickHome = () => {
    window.location.href = "/home";
  };

  const onClickUpload = () => {
    window.location.href = "/upload";
  };

  const onClickUser = () => {
    window.location.href = "/user";
  };

  return (
    <Grid item className={classes.footer}>
      <Fab color="secondary" className={classes.margin} onClick={onClickHome}>
        <HomeIcon />
      </Fab>
      <Fab color="secondary" className={classes.margin} onClick={onClickUpload}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" className={classes.margin} onClick={onClickUser}>
        <PersonIcon />
      </Fab>
    </Grid>
  );
}
