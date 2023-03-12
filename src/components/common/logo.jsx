import AdbIcon from "@mui/icons-material/Adb.js";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

export const Logo = () => (
  <Box component={Link} href={"/"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
    <AdbIcon sx={{ mr: 1 }} />
    <Typography
      variant="h5"
      noWrap
      sx={{
        mr: 2,
        fontFamily: "monospace",
        letterSpacing: ".3rem",
      }}
    >
      FilmLogger
    </Typography>
  </Box>
);
