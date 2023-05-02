import React from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import FilmCard from "../common/film-card.jsx";
import { Loading } from "../common/loading";
import useAxios from "axios-hooks";

const FilmCardsStackedFiveBig = ({ posters }) => {
  // console.log(posters);

  return (
    <Box
      display={"flex"}
      width={303}
      sx={{
        mb: 2,
        "&:hover": {
          border: "2px solid #00e054",
          borderRadius: 1.5,
        },
      }}
    >
      {Array.from({ length: 5 }).map((i, idx) => (
        <Box key={idx} position={"relative"} zIndex={10 - idx} left={`-${idx * 25}%`}>
          <FilmCard list={true} shadow={idx !== 4} size={120} src={posters[idx]?.Poster_path} />
        </Box>
      ))}
    </Box>
  );
};

function PopularListPreview(props) {
  const { title, username, fullname, userAvatar, favoriteCount, commentCount, posters, listLink } = props;
  // console.log(posters);
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
      <Link to={listLink}>
        <FilmCardsStackedFiveBig posters={posters} />
        <Typography variant={"body1"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
          {title.slice(0, 34)}
          {title.length > 34 && "..."}
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

const WeeklyPopular = () => {
  const [{ data, loading, error }, refetch] = useAxios(`Lists/Popular/Week`);
  // console.log("render weekly popular");
  return (
    <>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"} mt={5}>
        popular this week
      </Typography>
      <Divider variant={"fullWidth"} />
      <Box display={"flex"} flexWrap={"wrap"} gap={{ xs: 2, md: 5, lg: 10 }} justifyContent={"center"} color={"#9ab"}>
        {loading ? (
          <Loading paddingY={10} />
        ) : (
          <>
            {data.map((i, idx) => (
              <PopularListPreview
                key={idx}
                title={i.ListName ?? ""}
                fullname={i.User?.FullName ?? ""}
                username={i.User?.UserName ?? ""}
                userAvatar={i.User?.Avatar ?? ""}
                favoriteCount={i.LikesCount ?? 0}
                commentCount={i.CommentsCount ?? 0}
                posters={i.List}
                listLink={`/u/${i.User?.UserName}/lists/${i.ListID}`}
              />
            ))}
          </>
        )}
      </Box>
    </>
  );
};
export default WeeklyPopular;
