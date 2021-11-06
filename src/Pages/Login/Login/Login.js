import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import login from "../../../images/login.png";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading, user, authError, singInGoogle } = useAuth();
  // auth redirect ar jonno history and location use korte hoy and use firea base a jeikha a loginuser ase seikhan  change korte hoy
  const location = useLocation();
  const history = useHistory();

  const hanleOnChaenge = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // set new data akto bidghute type ar
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };
  const hanleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    // console.log(loginData);
    e.preventDefault();
  };
  const handleGoogleSingIn = () => {
    singInGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ mt: 8 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            Login
          </Typography>
          <form onSubmit={hanleLogin}>
            <TextField
              sx={{ width: "75%", mb: 3 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={hanleOnChaenge}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", mt: 2 }}
              id="standard-basic"
              label="Your Password"
              variant="standard"
              name="password"
              onBlur={hanleOnChaenge}
              type="password"
            />
            <Button
              type="submit"
              sx={{ width: "75%", mt: 2 }}
              variant="contained"
            >
              Sign In
            </Button>
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button style={{ marginTop: "20px" }} variant="text">
                New User? please register
              </Button>
            </Link>
            {authError && <Alert severity="error">{authError}</Alert>}
            {isLoading && <CircularProgress color="secondary" />}
            {user?.email && (
              <Alert style={{ marginTop: "20px" }} severity="success">
                <AlertTitle>Login Successfully </AlertTitle> user email id
                <strong>{user.email}</strong>
              </Alert>
            )}
            <p></p>
            ---------------------------
            <Button
              onClick={handleGoogleSingIn}
              type="submit"
              sx={{ width: "75%", mt: 2 }}
              variant="contained"
            >
              Google Sign in
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
