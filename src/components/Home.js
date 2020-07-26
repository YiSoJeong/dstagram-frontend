import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Api from "../api/api";

import PostCard from "./PostCard";
import Footer from "./Footer";

const USER_TOKEN = "token";

const useStyles = makeStyles(theme => ({
  home: {
    overflow: "scroll",
    height: 700,
    padding: 4
  }
}));

export default function Login() {
  const classes = useStyles();

  const [board, setBoard] = useState([]);

  const userId = "user";

  useEffect(() => {
    // TODO: USER_TOKEN context에서 받아오기? localStorage에서 받아오기?
    const AuthStr = "Bearer ".concat(USER_TOKEN);
    // TODO: userId왜 필요했었지..?
    Api.get(`/${userId}/board`, { headers: { Authorization: AuthStr } })
      .then(res => {
        console.log(res.data);
        setBoard(res.data);
      })
      .catch(err => {
        console.log("login err", err);
      });
  }, []);

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
          {board.map(post => (
            <PostCard />
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
