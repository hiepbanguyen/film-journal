import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Box component={Link} to={"/"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
    <Box component={"img"} src={"/logo.png"} sx={{ width: 35, height: 35 }} />
    <Typography
      variant="h5"
      noWrap
      sx={{
        ml: 1,
        mr: 2,
        fontFamily: "monospace",
        letterSpacing: ".3rem",
      }}
    >
      FilmJournal
    </Typography>
  </Box>
);
