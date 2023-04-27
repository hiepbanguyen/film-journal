import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import FilmCard from "../common/film-card.jsx";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import { Link } from "react-router-dom";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import React from "react";

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
  const [{ data, loading, error }, refetch] = useAxios(`Lists/Popular/Week`);

  return (
    <>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
        popular lists
      </Typography>
      <Divider />
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <Grid container spacing={1}>
          {data.map((i, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={12}>
              <ListPreview
                title={i.ListName ?? ""}
                fullname={i.User?.FullName ?? ""}
                username={i.User?.UserName ?? ""}
                userAvatar={i.User?.Avatar ?? ""}
                favoriteCount={i.TotalLike ?? 0}
                commentCount={i.TotalComment ?? 0}
                posters={i.List}
                listLink={`/u/${i.User?.UserName}/lists/${i.ListID}`}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default function ListPreview(props) {
  const { title, username, fullname, userAvatar, favoriteCount, commentCount, posters, listLink } = props;
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
      <Link to={listLink ?? ""}>
        <FilmCardsStackedFive posters={posters} />
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
          <Avatar sx={{ width: 25, height: 25 }} src={userAvatar} />
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
