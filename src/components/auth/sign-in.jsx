import * as React from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import baseAPI from "../../apis/baseApi";
import UserStore from "../../store/user.store.js";
import { Copyright } from "../common/layout/footer.jsx";
import { HeaderHeight } from "../common/layout/header/index.jsx";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline.js";

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  let email = queryParams.get("email");
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  useEffect(() => {
    if (UserStore.isLoggedIn) navigate("/");
  }, [UserStore.isLoggedIn]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!validate(data)) {
      return;
    }

    baseAPI
      .getAsync(`Users/login`, {
        params: {
          email: data.get("email"),
          password: data.get("password"),
        },
      })
      .then((res) => {
        if (res) {
          // set the user information in localStorage
          UserStore.saveLoginInfo(res.data.Token, res.data.User);
          // localStorage.setItem("userInfo", JSON.stringify());
          // localStorage.setItem("token", JSON.stringify());
          // Chuyển đến trang homepage
          navigate(-1);
        }
      })
      .catch((err) => {
        setErrorMsg(err.response.data.devMsg);
      });
  };

  const validate = (data) => {
    if (!validateEmail(data.get("email"))) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    if (data.get("password")) {
      setErrorPassword(false);
    } else {
      setErrorPassword(true);
    }

    if (!errorEmail && !errorPassword) {
      return true;
    }
    return false;
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "90vh", mt: HeaderHeight / 8 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              mt: 5,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                defaultValue={email}
                error={errorEmail}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={errorEmail && "Email is invalid."}
              />
              <TextField
                error={errorPassword}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={errorPassword && "Password is required."}
              />
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              {errorMsg && (
                <Box sx={{ color: "#fc0707", display: "flex", gap: 0.5, alignItems: "center" }}>
                  <ErrorOutlineIcon sx={{ fontSize: 20 }} />
                  <Typography fontSize={13} pt={0.25}>
                    {errorMsg}
                  </Typography>
                </Box>
              )}
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs={6}>
                  <Link to="/forgot-password" style={{ textDecoration: "underline", color: "#0095ff" }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link to="/sign-up" style={{ textDecoration: "underline", color: "#0095ff" }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box pt={3} textAlign={"center"}>
                <Copyright />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
