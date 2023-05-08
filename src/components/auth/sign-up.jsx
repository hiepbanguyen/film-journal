import * as React from "react";
import { useEffect } from "react";
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
import { useSnackbar } from "notistack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Copyright } from "../common/layout/footer.jsx";
import { HeaderHeight } from "../common/layout/header/index.jsx";
import UserStore from "../../store/user.store.js";
import useAxios from "axios-hooks";
import CircularProgress from "@mui/material/CircularProgress";

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [errorUsername, setErrorUsername] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [{ loading }, signUp] = useAxios({ url: "Users/signup", method: "POST" }, { manual: true });

  useEffect(() => {
    if (UserStore.isLoadedFromLocal && UserStore.isLoggedIn) navigate("/");
  }, [UserStore.isLoadedFromLocal, UserStore.isLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (validateFields(data)) {
      await signUp({
        data: {
          UserName: data.get("userName"),
          Email: data.get("email"),
          Password: data.get("password"),
        },
      })
        .then((res) => {
          if (res) {
            enqueueSnackbar("Register successfully, please confirm your email to sign in", { variant: "success" });
            // Chuyển đến trang login
            navigate("/sign-in");
          }
        })
        .catch((err) => {
          setErrorMsg(err.response.data.devMsg);
        });
    }
  };

  const validateFields = (data) => {
    setErrorUsername("");
    setErrorEmail("");
    setErrorPassword("");

    let emailAccepted = false;
    if (data.get("email")) {
      if (validateEmail(data.get("email"))) {
        emailAccepted = true;
      } else {
        setErrorEmail("Invalid email!");
      }
    } else {
      setErrorEmail("Email required!");
    }

    let usernameAccepted = false;
    if (data.get("userName")) {
      if (validateUsername(data.get("userName"))) {
        usernameAccepted = true;
      } else {
        setErrorUsername("Invalid username, should contain only letters, numbers, underscores and dots");
      }
    } else {
      setErrorUsername("Username required!");
    }

    let passwordAccepted = false;
    if (data.get("password")) {
      if (validatePassword(data.get("password"))) {
        passwordAccepted = true;
      } else {
        setErrorPassword("Password must be at least 8 characters");
      }
    } else {
      setErrorPassword("Password required!");
    }

    return emailAccepted && usernameAccepted && passwordAccepted;
  };

  const validateUsername = (username) => {
    return new RegExp(/^[a-zA-Z0-9._]+$/).test(username);
  };
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

  const validatePassword = (pass) => {
    return pass.length >= 8;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ background: "#fff", mt: HeaderHeight / 8 }}>
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} mb={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  autoFocus
                  error={!!errorUsername}
                  helperText={errorUsername}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  error={!!errorEmail}
                  helperText={errorEmail}
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
                  error={!!errorPassword}
                  helperText={errorPassword}
                />
              </Grid>
            </Grid>
            {errorMsg && (
              <Box sx={{ color: "#fc0707", display: "flex", gap: 0.5, alignItems: "center" }}>
                <ErrorOutlineIcon sx={{ fontSize: 20 }} />
                <Typography fontSize={13} pt={0.25}>
                  {errorMsg}
                </Typography>
              </Box>
            )}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
              Sign Up
              {loading && <CircularProgress size={20} sx={{ position: "absolute", left: "61%", color: "#fff" }} />}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/sign-in" style={{ textDecoration: "underline", color: "#0095ff" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Box pt={3} textAlign={"center"}>
              <Copyright />
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
