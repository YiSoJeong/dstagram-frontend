import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

export default function DeleteDialog(props) {
  const { open, handleClose } = props;

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
