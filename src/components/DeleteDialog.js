import React from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogActions
} from "@material-ui/core";

export default function DeleteDialog(props) {
  const { open, handleClose } = props;

  const onClickDelete = () => {
    handleClose();
  };

  return (
    <Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="contained" color="secondary" onClick={onClickDelete}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
