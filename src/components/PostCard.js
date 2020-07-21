import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 550,
    maxHeight: 550
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function PostCard() {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card} elevation={3}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>R</Avatar>}
          title="nickname"
        />
        <CardMedia className={classes.media} image="/.jpg" title="" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            게시글 내용이다. 나는 할 수 있다! 우리는 할 수 있다! 종강해서 기분이
            좋다. 놀고 싶은데 못 논다ㅠ
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
