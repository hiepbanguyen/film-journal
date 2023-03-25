import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const CustomButton2 = styled(Button)({
  padding: "10px 0 10px 0",
  color: "#bcd",
  "&:hover": {
    color: "#fff",
  },
});

export default function SigninAndShare() {
  return (
    <Stack
      sx={{ color: "#bcd", background: "#456", borderRadius: 1 }}
      divider={<Divider variant="fullWidth" sx={{ borderColor: "#2c3440" }} />}
    >
      <CustomButton2 href={"/sign-in"}>
        <Typography fontSize={14} textAlign="center">
          Sign in to log or review...
        </Typography>
      </CustomButton2>
      <CustomButton2>
        <Typography fontSize={14} textAlign="center">
          Share
        </Typography>
      </CustomButton2>
    </Stack>
  );
}
