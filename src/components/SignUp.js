import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";
import AlertDialog from "./AlertDialog";
import Api from "../api/api";

const useStyles = makeStyles(theme => ({
  rowfield: {
    width: 300
  }
}));

const initUser = {
  email: "",
  name: "",
  nickname: "",
  password: ""
};

export default function Login() {
  const classes = useStyles();

  const [openAlert, setOpenAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState("");
  const [userInfo, setUserInfo] = useState(initUser);

  const onChangeUserInfo = name => event =>
    setUserInfo({ ...userInfo, [name]: event.target.value });

  const onClickSignUp = async event => {
    event.preventDefault();

    const userValues = Object.values(userInfo);
    if (userValues.includes("")) {
      await setAlertInfo("emptyInput");
      setOpenAlert(true);
    }

    // TODO: 200 OK, 409 데이터 중복 처리
    Api.post("/sign-up", userInfo)
      .then(res => {
        console.log(res);
        window.location.href = "/";
      })
      .catch(async err => {
        console.log(err);
        // 여기로 err코드 오는 건가?
        if (err === 409) {
          await setAlertInfo("existUser");
          setOpenAlert(true);
        }
      });
  };

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <TextField
            className={classes.rowfield}
            color="secondary"
            label="이메일"
            variant="outlined"
            value={userInfo.email}
            onChange={onChangeUserInfo("email")}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.rowfield}
            color="secondary"
            label="이름"
            variant="outlined"
            value={userInfo.name}
            onChange={onChangeUserInfo("name")}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.rowfield}
            color="secondary"
            label="닉네임"
            variant="outlined"
            value={userInfo.nickname}
            onChange={onChangeUserInfo("nickname")}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.rowfield}
            color="secondary"
            label="비밀번호"
            variant="outlined"
            value={userInfo.password}
            onChange={onChangeUserInfo("password")}
          />
        </Grid>
        <Grid item>
          <Button
            className={classes.rowfield}
            variant="contained"
            color="secondary"
            onClick={onClickSignUp}
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
      <AlertDialog
        open={openAlert}
        handleClose={() => setOpenAlert(false)}
        info={alertInfo}
      />
    </>
  );
}
