import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import login from "../../../images/login.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { SignInUsingPassord, isLoading, user, authError } = useAuth();
  const [loginData, setLoginData] = useState([]);
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("password did not match");
      return;
    }
    SignInUsingPassord(loginData.email, loginData.password);

    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Retype Password"
                type="password"
                name="password2"
                onChange={handleOnChange}
                variant="standard"
              />

              <Button
                type="submit"
                sx={{ width: "75%", mt: 2 }}
                variant="contained"
              >
                Register
              </Button>
              <Link style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already register ? please Login</Button>
              </Link>
            </form>
          )}
          {user?.email && (
            <Alert severity="success">
              <AlertTitle>SuccessFully created user</AlertTitle> user email id
              <strong>{user.email}</strong>
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
          {isLoading && <CircularProgress color="secondary" />}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;