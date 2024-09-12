import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { AppDispatch } from "../../redux/store";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

import styles from "./login.module.scss";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "David@test.com",
      password: "DavidPwd123$",
    },
  });

  const onSubmit = (values: { email: string; password: string }) => {
    dispatch(fetchAuth(values));
  };

  return (
    <Paper className={styles.root}>
      <Typography className="title" variant="h5">
        Enter to Your acc
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          type="email"
          helperText={errors.email?.message}
          {...register("email", { required: "Add your main" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", { required: "Add your pwd" })}
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Enter
        </Button>
      </form>
    </Paper>
  );
};

export default LoginPage;
