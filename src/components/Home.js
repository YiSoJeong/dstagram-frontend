import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import PostCard from "./PostCard";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
  home: {}
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.home}
      container
      direction="column"
      alignItems="center"
      spacing={5}
    >
      <Grid>
        <PostCard />
      </Grid>
      <Footer />
    </Grid>
  );
}
