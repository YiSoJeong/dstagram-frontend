import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog(props) {
  const { open, handleClose } = props;

  const message = {
    loginError: "사용자를 찾을 수 없습니다.",
    existUser: "기존에 있는 사용자 입니다."
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{message["loginError"]}</DialogTitle>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          확인
        </Button>
      </Dialog>
    </div>
  );
}
