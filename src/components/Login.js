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

const initLoginInfo = {
  email: "",
  password: ""
};

export default function Login() {
  const classes = useStyles();

  const [openAlert, setOpenAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState("");
  const [loginInfo, setLoginInfo] = useState(initLoginInfo);

  const onChangeLoginInfo = name => e =>
    setLoginInfo({ ...loginInfo, [name]: e.target.value });

  const onClickLogin = () => {
    // TODO: 200 OK, 400 알 수 없는 정보
    Api.post("/sign-in", loginInfo)
      .then(res => {
        console.log(res);
        // TODO: accessToken, refreshToken 받아서 context에 등록? sessionStorage에 등록?
        window.location.href = "/home";
      })
      .catch(async err => {
        console.log(err);
        // 여기로 err코드 오는 건가?
        if (err === 400) {
          await setAlertInfo("loginError");
          setOpenAlert(true);
        }
      });
  };

  const onClickSignUp = () => {
    window.location.href = "/sign-up";
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <TextField
          className={classes.rowfield}
          color="secondary"
          label="이메일"
          variant="outlined"
          value={loginInfo.email}
          onChange={onChangeLoginInfo("email")}
        />
      </Grid>
      <Grid item>
        <TextField
          className={classes.rowfield}
          color="secondary"
          label="비밀번호"
          variant="outlined"
          value={loginInfo.password}
          onChange={onChangeLoginInfo("password")}
        />
      </Grid>
      <Grid item>
        <Button
          className={classes.rowfield}
          variant="contained"
          color="secondary"
          onClick={onClickLogin}
        >
          로그인
        </Button>
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
      <AlertDialog
        open={openAlert}
        handleClose={() => setOpenAlert(false)}
        info={alertInfo}
      />
    </Grid>
  );
}
