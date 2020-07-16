import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  rowfield: {
    width: 300
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Typography variant="h6" gutterBottom>
        dstagram
      </Typography>
      <Grid item>
        <TextField
          className={classes.rowfield}
          color="secondary"
          label="email"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          className={classes.rowfield}
          color="secondary"
          label="password"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button
          className={classes.rowfield}
          variant="contained"
          color="secondary"
        >
          로그인
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={classes.rowfield}
          variant="contained"
          color="secondary"
        >
          회원가입
        </Button>
      </Grid>
    </Grid>
  );
}
