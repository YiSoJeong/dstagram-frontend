import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField
} from "@material-ui/core";
import DeleteDialog from "./DeleteDialog";

const useStyles = makeStyles({
  media: {
    width: 550,
    height: 550
  }
});

export default function DetailDialog(props) {
  const classes = useStyles();
  const { openDetail, setOpenDetail } = props;

  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const onClickUpdate = () => {
    setIsUpdate(true);
  };

  const onClickDelete = () => {
    setIsDelete(true);
  };

  const onClickCancle = () => {
    setIsUpdate(false);
  };

  const onClickUpload = () => {};

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
              disabled={!isUpdate}
            />
          </Grid>
          <Grid item>
            {isUpdate ? (
              <Box>
                <Button color="secondary" onClick={onClickCancle}>
                  취소
                </Button>
                <Button color="secondary" onClick={onClickUpload}>
                  완료
                </Button>
              </Box>
            ) : (
              <Box>
                <Button color="secondary" onClick={onClickUpdate}>
                  수정
                </Button>
                <Button color="secondary" onClick={onClickDelete}>
                  삭제
                </Button>
              </Box>
            )}
          </Grid>
          <DeleteDialog
            open={isDelete}
            handleClose={() => setIsDelete(false)}
          />
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
