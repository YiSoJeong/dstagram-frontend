import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Button, TextField, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function Upload() {
  const classes = makeStyles();

  const onClickCancle = () => {
    window.location.href = "/home";
  };

  const onClickUpload = () => {
    window.location.href = "/home";
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item>
        <img
          className={classes.media}
          src={"https://material-ui.com/static/images/grid-list/star.jpg"}
          alt={""}
        />
      </Grid>
      <Grid item>
        <input type="file" name="file" onChange={null} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="게시글"
          color="secondary"
          multiline
          rows={4}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button color="secondary" onClick={onClickCancle}>
          취소
        </Button>
        <Button color="secondary" onClick={onClickUpload}>
          완료
        </Button>
      </Grid>
    </Grid>
  );
}
