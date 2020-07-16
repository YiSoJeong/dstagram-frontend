import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./components/Login";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    <Box className={classes.root} display="flex" justifyContent="center">
      <Grid item xs={6} display="flex" justifyContent="center">
        <Paper className={classes.paper} elevation={3}>
          <Login />
        </Paper>
      </Grid>
    </Box>
  );
}

export default App;
