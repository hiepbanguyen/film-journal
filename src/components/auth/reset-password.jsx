import * as React from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HeaderHeight } from "../common/layout/header/index.jsx";
import UserStore from "../../store/user.store.js";
import useAxios from "axios-hooks";
import { observer } from "mobx-react-lite";

const theme = createTheme();

export const ResetPassword = observer(() => {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("email");
  const token = queryParams.get("token");
  const navigate = useNavigate();
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [, fetch] = useAxios({ url: "Users/ResetPassword" }, { manual: true });

  useEffect(() => {
    if (UserStore.isLoggedIn) {
      navigate("/");
    }
  }, [UserStore.isLoggedIn]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("new-password") == "") {
      setErrorPassword("The password is required.");
      return;
    }
    if (data.get("confirm-password") == "") {
      setErrorConfirmPassword("The password is required.");
      return;
    }
    if (data.get("new-password") != data.get("confirm-password")) {
      setError("The passwords you entered were not identical. Please try again.");
      return;
    }

    fetch({
      params: {
        token: token,
        pass: data.get("new-password"),
        confirmPass: data.get("confirm-password"),
      },
    })
      .then((res) => {
        if (res) {
          navigate(`/sign-in?email=${email}`);
        }
      })
      .catch((err) => {
        setError(err.response.data.devMsg);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ background: "#fff", mt: HeaderHeight / 8 }}>
        {" "}
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Avatar sx={{ mt: 10, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={!!errorPassword}
                  required
                  fullWidth
                  id="new-password"
                  label="New Password"
                  name="new-password"
                  type="password"
                  autoComplete="new-password"
                  helperText={errorPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errorPassword}
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  autoComplete="confirm-password"
                  helperText={errorConfirmPassword ? errorConfirmPassword : error}
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
});
