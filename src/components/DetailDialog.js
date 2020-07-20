import React from "react";
import {
  Grid,
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

export default function DetailDialog(props) {
  const { openDetail, setOpenDetail } = props;

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={openDetail}
      onClose={() => setOpenDetail(false)}
    >
      <DialogContent>
        <DialogContentText>
          You can set my maximum width and whether to adapt or not.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
