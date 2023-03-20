import { Box, Button, Typography } from "@mui/material";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded.js";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import { formatCompactNumber } from "../../utils/number.js";

export default function ViewsLikesLists(props) {
  return (
    <>
      <Button variant={"contained"} sx={{ px: 1, textTransform: "none", background: "#456", color: "#bcd" }}>
        <RemoveRedEyeRoundedIcon style={{ fontSize: "18px", color: "#00c030" }} />
        <Typography
          fontSize={14}
          sx={(theme) => ({ color: "#00c030", [theme.breakpoints.not("xs")]: { display: "none" } })}
        >
          Views
        </Typography>
        <Typography fontSize={13} pl={1}>
          {formatCompactNumber(props.views)}
        </Typography>
      </Button>
      <Button variant={"contained"} sx={{ px: 1, textTransform: "none", background: "#456", color: "#bcd" }}>
        <GridViewSharpIcon style={{ fontSize: "18px", color: "#40bcf4" }} />
        <Typography
          fontSize={14}
          sx={(theme) => ({ color: "#00c030", [theme.breakpoints.not("xs")]: { display: "none" } })}
        >
          Lists
        </Typography>
        <Typography fontSize={13} pl={1}>
          {formatCompactNumber(props.lists)}
        </Typography>
      </Button>
      <Button variant={"contained"} sx={{ px: 1, textTransform: "none", background: "#456", color: "#bcd" }}>
        <FavoriteIcon style={{ fontSize: "18px", color: "#ff9010" }} />
        <Typography
          fontSize={14}
          sx={(theme) => ({ color: "#00c030", [theme.breakpoints.not("xs")]: { display: "none" } })}
        >
          Likes
        </Typography>
        <Typography fontSize={13} pl={1}>
          {formatCompactNumber(props.likes)}
        </Typography>
      </Button>
    </>
  );
}
