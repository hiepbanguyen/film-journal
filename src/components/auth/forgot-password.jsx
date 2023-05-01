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
import { HeaderHeight } from "../common/layout/header/index.jsx";
import UserStore from "../../store/user.store.js";

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

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = React.useState("");

  useEffect(() => {
    if (UserStore.isLoggedIn) navigate("/");
  }, [UserStore.isLoggedIn]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!validateEmail(data.get("email"))) {
      setErrorMsg("Email is invalid.");
      return;
    } else {
      setErrorMsg("");
    }
    baseAPI
      .getAsync(`Users/ForgotPassword`, {
        params: {
          email: data.get("email"),
        },
      })
      .then((res) => {
        if (res) {
          navigate("/sign-in");
        }
      })
      .catch((err) => {
        setErrorMsg(err.response.data.devMsg);
      });
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
            paddingTop: 20,
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
            Reset my password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={errorMsg}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  helperText={errorMsg}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Reset password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
