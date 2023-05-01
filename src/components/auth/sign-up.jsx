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
import baseAPI from "../../apis/baseAPI";
import { useSnackbar } from "notistack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Copyright } from "../common/layout/footer.jsx";
import { HeaderHeight } from "../common/layout/header/index.jsx";
import UserStore from "../../store/user.store.js";

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [errorUsername, setErrorUsername] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  useEffect(() => {
    if (UserStore.isLoggedIn) navigate("/");
  }, [UserStore.isLoggedIn]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (validateFields(data)) {
      baseAPI
        .postAsync(`Users/signup`, {
          UserName: data.get("userName"),
          Email: data.get("email"),
          Password: data.get("password"),
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
    const emailAccepted = validateEmail(data.get("email"));
    const usernameFilled = data.get("userName");
    const passwordFilled = data.get("password");
    setErrorEmail(!emailAccepted);

    setErrorUsername(!usernameFilled);

    setErrorPassword(!passwordFilled);

    return emailAccepted && usernameFilled && passwordFilled;
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
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
                  error={errorUsername}
                  helperText={errorUsername && "Username is required."}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={errorEmail}
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  helperText={errorEmail && "Email is invalid."}
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
                  helperText={errorPassword && "Password is required."}
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
