import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export default function SigninAndShare() {
  return (
    <Box mt={5}>
      <Box
        component={Button}
        className="box_share"
        sx={{
          borderBottom: "1px solid #2c3440",
          borderRadius: "5px 5px 0 0",
          "&:hover": {
            background: "rgba(108,131,155,0.8)",
          },
        }}
      >
        Sign in to log, rate or review
      </Box>
      <Box
        component={Button}
        className="box_share"
        sx={{
          borderRadius: "0 0 5px 5px",
          "&:hover": {
            background: "rgba(108,131,155,0.8)",
          },
        }}
      >
        Share
      </Box>
    </Box>
  );
}
