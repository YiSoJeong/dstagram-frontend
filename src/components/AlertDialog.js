import React from "react";
import { Button, Dialog, DialogTitle } from "@material-ui/core";

export default function AlertDialog(props) {
  const { open, handleClose, info } = props;

  const message = {
    loginError: "사용자를 찾을 수 없습니다.",
    existUser: "기존에 있는 사용자 입니다.",
    emptyInput: "모든 정보를 입력해 주세요."
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{message[info]}</DialogTitle>
      <Button variant="contained" color="secondary" onClick={handleClose}>
        확인
      </Button>
    </Dialog>
  );
}
