import { Button, Tooltip, Typography } from "@mui/material";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded.js";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import { formatCompactNumber } from "../../utils/number.js";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "#bcd",
  background: "transparent",
  "&:hover": {
    background: "#456",
  },
});

export default function ViewsLikesLists(props) {
  const { views, likes, lists, filmId } = props;

  const _filmId = filmId ?? 1;
  return (
    <>
      <Tooltip title={`Reviewed by ${views} users`}>
        <Link to={`/films/${_filmId}/reviews`}>
          <CustomButton>
            <RemoveRedEyeRoundedIcon style={{ fontSize: "18px", color: "#00c030" }} />
            <Typography
              fontSize={14}
              pl={0.25}
              sx={(theme) => ({ color: "#00c030", [theme.breakpoints.not("xs")]: { display: "none" } })}
            >
              Reviews
            </Typography>
            <Typography fontSize={13} pl={0.5}>
              {formatCompactNumber(views)}
            </Typography>
          </CustomButton>
        </Link>
      </Tooltip>
      <Tooltip title={`Appears in ${lists} lists`}>
        <Link to={`/films/${_filmId}/lists`}>
          <CustomButton>
            <GridViewSharpIcon style={{ fontSize: "18px", color: "#40bcf4" }} />
            <Typography
              fontSize={14}
              pl={0.5}
              sx={(theme) => ({ color: "#40bcf4", [theme.breakpoints.not("xs")]: { display: "none" } })}
            >
              Lists
            </Typography>
            <Typography fontSize={13} pl={1}>
              {formatCompactNumber(lists)}
            </Typography>
          </CustomButton>
        </Link>
      </Tooltip>
      <Tooltip title={`Liked by ${likes} users`}>
        <Link to={`/films/${_filmId}/likes`}>
          <CustomButton>
            <FavoriteIcon style={{ fontSize: "18px", color: "#ff9010" }} />
            <Typography
              fontSize={14}
              pl={0.5}
              sx={(theme) => ({ color: "#ff9010", [theme.breakpoints.not("xs")]: { display: "none" } })}
            >
              Likes
            </Typography>
            <Typography fontSize={13} pl={1}>
              {formatCompactNumber(likes)}
            </Typography>
          </CustomButton>
        </Link>
      </Tooltip>
    </>
  );
}
