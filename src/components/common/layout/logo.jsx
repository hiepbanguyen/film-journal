import GroupWorkIcon from "@mui/icons-material/GroupWork";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Box component={Link} to={"/"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
    <GroupWorkIcon sx={{ mr: 1 }} />
    <Typography
      variant="h5"
      noWrap
      sx={{
        mr: 2,
        fontFamily: "monospace",
        letterSpacing: ".3rem",
      }}
    >
      FilmJournal
    </Typography>
  </Box>
);
