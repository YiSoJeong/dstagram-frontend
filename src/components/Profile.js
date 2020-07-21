import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import DetailDialog from "./DetailDialog";
import {
  Grid,
  Avatar,
  Button,
  GridList,
  GridListTile
} from "@material-ui/core";

// import image from 'path/to/image.jpg';
// [etc...]

const tileData = [
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  },
  {
    // img: img,
    title: "Image",
    author: "author"
  }
  // {
  //   [etc...]
  // },
];

const useStyles = makeStyles(theme => ({
  userInfo: {},
  gridImage: {
    marginTop: 50,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 600
  }
}));

export default function Profile() {
  const classes = useStyles();

  const [openDetail, setOpenDetail] = useState(false);

  const onClickLogout = () => {
    window.location.href = "/";
  };

  const onClickImg = () => {
    setOpenDetail(true);
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid container className={classes.userInfo}>
        <Grid item xs={2}>
          <Avatar style={{ marginLeft: 64 }}>W</Avatar>
        </Grid>
        <Grid item xs={6}>
          nickname
        </Grid>
        <Grid item xs={4}>
          <Button
            style={{ marginLeft: 64 }}
            variant="contained"
            color="secondary"
            onClick={onClickLogout}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
      <Grid className={classes.gridImage}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={1} cols={1}>
              <img
                src={"https://material-ui.com/static/images/grid-list/star.jpg"}
                alt={tile.title}
                onClick={onClickImg}
              />
            </GridListTile>
          ))}
          <DetailDialog openDetail={openDetail} setOpenDetail={setOpenDetail} />
        </GridList>
      </Grid>
      <Footer />
    </Grid>
  );
}
