import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./login.module.scss";

const LoginPage = () => {
  return (
    <Paper classes={styles.root}>
      <Typography classes="title" variant="h5">
        Enter to Your acc
      </Typography>
      <TextField
        className={styles.field}
        label="E-Mail"
        error
        helperText="Your main is error"
        fullWidth
      />
      <TextField className={styles.field} label="Password" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Enter
      </Button>
    </Paper>
  );
};

export default LoginPage;
