import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import FilmCard from "../common/film-card.jsx";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import { Link } from "react-router-dom";

export const FilmCardsStackedFive = ({ posters }) => {
  // console.log(posters);

  return (
    <Box
      display={"flex"}
      width={289}
      sx={{
        mb: 2,
        "&:hover": {
          border: "2px solid #00e054",
          borderRadius: 1.5,
        },
      }}
    >
      {Array.from({ length: 5 }).map((i, idx) => (
        <Box key={idx} position={"relative"} zIndex={10 - idx} left={`-${idx * (50 / 5)}%`}>
          <FilmCard list={true} shadow={idx !== 4} src={posters && posters[idx]?.Poster_path} />
        </Box>
      ))}
    </Box>
  );
};

export const PopularLists = () => {
  return (
    <>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
        popular lists
      </Typography>
      <Divider />
      <Grid container spacing={1}>
        {Array.from({ length: 3 }).map((i, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={12}>
            <ListPreview
              title={"Lorem Ipsum is simply dummy text"}
              fullname={"Bá Hiệp Nguyễn"}
              username={"bahiep"}
              favoriteCount={4}
              commentCount={50}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default function ListPreview(props) {
  const { title, username, fullname, favoriteCount, commentCount } = props;
  return (
    <Box
      mt={2}
      sx={(theme) => ({
        [theme.breakpoints.only("xs")]: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      })}
    >
      <Link to={"/u/hiep/lists/id123"}>
        <FilmCardsStackedFive />
        <Typography variant={"body1"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
          {title}
        </Typography>
      </Link>

      <Box display={"flex"} gap={0.5} alignItems={"center"} my={1}>
        <Box
          component={Link}
          to={`/u/${username}`}
          display={"flex"}
          gap={0.5}
          alignItems={"center"}
          sx={{ ":hover": { color: "#fff" } }}
        >
          <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {fullname ?? username}
          </Typography>
        </Box>
        <FavoriteIcon fontSize={"small"} />
        <Typography variant={"body2"} ml={0.5} mr={1}>
          {favoriteCount}
        </Typography>
        <ChatBubbleIcon fontSize={"small"} />
        <Typography variant={"body2"} ml={0.5}>
          {commentCount}
        </Typography>
      </Box>
    </Box>
  );
}
