import AdbIcon from "@mui/icons-material/Adb.js";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Box component={Link} to={"/"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
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
