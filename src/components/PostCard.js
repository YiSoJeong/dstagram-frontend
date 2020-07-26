import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography
} from "@material-ui/core";
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

export default function PostCard(props) {
  const classes = useStyles();

  const { post } = props;

  // TODO: image가져오는 방법 research
  return (
    <Grid item>
      <Card className={classes.card} elevation={3}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>R</Avatar>}
          title={post.nickname}
        />
        <CardMedia className={classes.media} image="/.jpg" title="" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
