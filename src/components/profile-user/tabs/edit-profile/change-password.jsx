import * as React from "react";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import useAxios from "axios-hooks";
import { useForm } from "react-hook-form";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline.js";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";

export const ChangePassword = () => {
  const { register, handleSubmit } = useForm();
  const [, updateInfo] = useAxios({ method: "POST" }, { manual: true });
  const [error, setError] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (values) => {
    const newPass = values.newPass;
    const cfNewPass = values.cfNewPass;
    if (newPass.length < 8) {
      setError("New password must be at least 8 characters");
      return;
    }
    if (newPass !== cfNewPass) {
      setError("New password and confirm password don't match");
      return;
    }
    updateInfo(`Users/ChangePassword?oldPass=${values.currPass}&newPass=${newPass}`)
      .then((res) => {
        if (res?.data) {
          enqueueSnackbar("Update password successfully", { variant: "success" });
          setError(null);
        }
      })
      .catch((e) => {
        setError(e.response.data.devMsg);
      });
  };

  return (
    <Container maxWidth={"sm"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          width={320}
          gap={2}
          sx={{
            "& .MuiFormHelperText-root ": {
              color: "#9ab",
            },
          }}
        >
          <TextField
            required
            fullWidth
            label="Current password"
            type={"password"}
            size="small"
            sx={{
              width: "100%",
              fontSize: { xs: "14px", md: "16px" },
              " input,label,fieldset": {
                borderColor: "#9ab !important",
                color: "#9ab !important",
              },
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
            {...register("currPass")}
          />
          <TextField
            required
            label="New password"
            type={"password"}
            size="small"
            helperText={"Minimum 8 charaters"}
            sx={{
              width: "100%",
              fontSize: { xs: "14px", md: "16px" },
              " input,label,fieldset": {
                borderColor: "#9ab !important",
                color: "#9ab !important",
              },
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
            {...register("newPass")}
          />
          <TextField
            required
            label="Confirm new password"
            type={"password"}
            size="small"
            sx={{
              width: "100%",
              fontSize: { xs: "14px", md: "16px" },
              " input,label,fieldset": {
                borderColor: "#9ab !important",
                color: "#9ab !important",
              },
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
            {...register("cfNewPass")}
          />
          <Box gap={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            {error && (
              <Box sx={{ color: "#fc0707", display: "flex", gap: 0.5, alignItems: "center" }}>
                <ErrorOutlineIcon sx={{ fontSize: 20 }} />
                <Typography fontSize={13} pt={0.25}>
                  {error}
                </Typography>
              </Box>
            )}
            <Button type="submit" variant={"contained"}>
              Update password
            </Button>
          </Box>
        </Stack>
      </form>
    </Container>
  );
};
