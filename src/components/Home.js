import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import PostCard from "./PostCard";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
  home: {
    overflow: "scroll",
    height: 700,
    padding: 4
  }
}));

export default function Login() {
  const classes = useStyles();

  useEffect(() => {});

  return (
    <>
      <Grid
        className={classes.home}
        container
        direction="column"
        alignItems="center"
        spacing={1}
      >
        <Grid container direction="column" alignItems="center" spacing={1}>
          <PostCard />
          <PostCard />
          <PostCard />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
