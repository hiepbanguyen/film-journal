import { Box } from "@mui/material";

export default function SigninAndShare() {
  return (
    <Box mt={5}>
      <Box className="box_share" style={{ borderBottom: "1px solid #2c3440", borderRadius: "5px 5px 0 0" }}>
        Sign in to log, rate or review
      </Box>
      <Box className="box_share" style={{ borderRadius: "0 0 5px 5px" }}>
        Share
      </Box>
    </Box>
  );
}
