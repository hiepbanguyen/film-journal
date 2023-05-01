import { Button, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

const CustomButton2 = styled(Button)({
  padding: "10px 0 10px 0",
  color: "#bcd",
  "&:hover": {
    color: "#fff",
  },
});

export default function SigninAndShare() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Stack
      sx={{ color: "#bcd", background: "#456", borderRadius: 1 }}
      divider={<Divider sx={{ borderColor: "#2c3440" }} />}
    >
      <CustomButton2>
        <Link to={"/sign-in"}>
          <Typography fontSize={14} textAlign="center">
            Sign in to log or review...
          </Typography>
        </Link>
      </CustomButton2>
      <CustomButton2
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          enqueueSnackbar("Film link copied", { variant: "success" });
        }}
      >
        <Typography fontSize={14} textAlign="center">
          Share
        </Typography>
      </CustomButton2>
    </Stack>
  );
}
