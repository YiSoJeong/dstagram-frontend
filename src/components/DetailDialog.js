import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Card,
  CardMedia,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 250
  },
  media: {
    width: 550,
    height: 550
  }
});

export default function DetailDialog(props) {
  const classes = useStyles();
  const { openDetail, setOpenDetail } = props;

  const onClickUpdate = () => {
    window.location.href = "/user";
  };

  const onClickDelete = () => {
    window.location.href = "/user";
  };

  const onClickCancle = () => {
    window.location.href = "/user";
  };

  const onClickUpload = () => {
    window.location.href = "/user";
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={openDetail}
      onClose={() => setOpenDetail(false)}
    >
      <DialogContent>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item>
            <img
              className={classes.media}
              src={"https://material-ui.com/static/images/grid-list/star.jpg"}
              alt={""}
            />
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
            <Button color="secondary" onClick={onClickUpdate}>
              수정
            </Button>
            <Button color="secondary" onClick={onClickDelete}>
              삭제
            </Button>
            <Button color="secondary" onClick={onClickCancle}>
              취소
            </Button>
            <Button color="secondary" onClick={onClickUpload}>
              완료
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
