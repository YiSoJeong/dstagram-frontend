import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Grid } from "@material-ui/core";
import { Login, SignUp, Home, Header, Profile, Upload } from "./components";

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
            <Route exact path="/upload" component={Upload} />
          </Paper>
        </Grid>
      </Box>
    </BrowserRouter>
  );
}

export default App;
