import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import FilmCard from "./film-card";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite.js";

export const PopularLists = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          popular lists
        </Typography>
        <Typography variant={"caption"} mt={5}>
          MORE
        </Typography>
      </Box>
      <Divider variant="fullWidth" color={"#fff"} />
      <Box>
        {Array.from({ length: 3 }).map((i, idx) => (
          <ListPreview
            key={idx}
            title={"Lorem Ipsum is simply dummy text"}
            username={"Bá Hiệp Nguyễn"}
            favoriteCount={4}
            commentCount={50}
          />
        ))}
      </Box>
    </>
  );
};

const FilmCardsStacked = () => {
  return (
    <Box position={"relative"} height={160}>
      {Array.from({ length: 5 }).map((i, idx) => (
        <Box key={idx} position={"absolute"} zIndex={10 - idx} left={idx * 34}>
          <FilmCard elevation={3} />
        </Box>
      ))}
    </Box>
  );
};

export default function ListPreview(props) {
  const { title, username, favoriteCount, commentCount } = props;
  return (
    <Box mt={2} mb={4}>
      <FilmCardsStacked />
      <Typography variant={"body2"}>{title}</Typography>
      <Box display={"flex"} alignItems={"center"} my={1}>
        <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
        <Typography variant={"body2"} ml={0.5} mr={1}>
          {username}
        </Typography>
        <FavoriteIcon fontSize={"small"} />
        <Typography variant={"body2"} ml={0.5} mr={1}>
          {favoriteCount}
        </Typography>
        <CommentIcon fontSize={"small"} />
        <Typography variant={"body2"} ml={0.5}>
          {commentCount}
        </Typography>
      </Box>
    </Box>
  );
}
