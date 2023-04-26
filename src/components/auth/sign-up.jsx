import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import baseAPI from "../../apis/baseAPI";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link to="">Your Website</Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [errorUserName, setErrorUserName] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!validate(data)) {
      return;
    }

    baseAPI
      .postAsync(`Users/signup`, {
        UserName: data.get("userName"),
        Email: data.get("email"),
        Password: data.get("password"),
      })
      .then((res) => {
        if (res) {
          // Chuyển đến trang login
          navigate("/sign-in");
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

    if (data.get("userName")) {
      setErrorUserName(false);
    } else {
      setErrorUserName(true);
    }

    if (data.get("password")) {
      setErrorPassword(false);
    } else {
      setErrorPassword(true);
    }

    if (!errorUserName && !errorEmail && !errorPassword) {
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
      <Container component="main" maxWidth="xs" sx={{ background: "#fff" }}>
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="UserName"
                  autoFocus
                  error={errorUserName}
                  helperText={errorUserName ? "UserName is required." : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={errorEmail || errorMsg}
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  helperText={errorEmail ? "Email is invalid." : errorMsg}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={errorPassword}
                  helperText={errorPassword ? "Password is required." : ""}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/sign-in" style={{ textDecoration: "underline", color: "#0095ff" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: -3 }} />
      </Container>
    </ThemeProvider>
  );
}
