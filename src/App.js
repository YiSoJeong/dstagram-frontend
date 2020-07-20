import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  Login,
  SignUp,
  AlertDialog,
  DeleteDialog,
  Home,
  Header,
  Profile
} from "./components";
import { BrowserRouter, Route } from "react-router-dom";

/*
TODO: profile component 만들기
TODO: Upload component 만들기
TODO: Detail component 만들기
*/

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50
  },
  paper: {
    height: 850,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  rowfield: {
    width: 300
  }
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Box className={classes.root} display="flex" justifyContent="center">
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={3}>
            <Header />
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/user" component={Profile} />
          </Paper>
        </Grid>
      </Box>
    </BrowserRouter>
  );
}

export default App;
