import Container from "@mui/system/Container";
import SearchForm from "../common/search-form.jsx";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PaginatedGrid from "../common/paginated_grid.jsx";
import FilmCard from "../common/film-card";
import { listComment, reviewDetail } from "../review-detail/index.jsx";
import React from "react";
import { observer } from "mobx-react-lite";
import UserStore from "../../store/user.store.js";
import ListCommentSection from "./list-comment-section.jsx";

let films = [
  {
    poster:
      "https://a.ltrbxd.com/resized/alternative-poster/4/8/0/1/8/p/xjKFeCjUkv5WMU4MOxdf4NXqaIZ-0-125-0-187-crop.jpg?v=9f52f061b1",
    title: "Speed Racer",
    id: "fsaewca",
  },
  {
    poster:
      "https://a.ltrbxd.com/resized/alternative-poster/4/8/0/1/8/p/xjKFeCjUkv5WMU4MOxdf4NXqaIZ-0-125-0-187-crop.jpg?v=9f52f061b1",
    title: "2001",
    id: "fsadsca",
  },
  {
    poster:
      "https://a.ltrbxd.com/resized/alternative-poster/5/1/8/0/4/p/5tG8ONymGQ8LSe8arNhToGcfDG6-0-125-0-187-crop.jpg?v=693ae067b6",
    title: "Willy Wanky",
    id: "fsasccaca",
  },
];

const listFilms = Array(17).fill(films).flat(1);

const LikeButton = observer(() => {
  const [likeState, setLikeState] = React.useState(true);

  return (
    <>
      {UserStore.isLoggedIn && (
        <Button
          onClick={() => setLikeState(!likeState)}
          variant={"outlined"}
          sx={{
            height: 40,
            borderColor: likeState ? "transparent" : "#9ab",
            bgcolor: likeState ? "rgba(255, 89, 89, 1)" : "transparent",
            ":hover": {
              bgcolor: likeState ? "rgb(199,68,68)" : "transparent",
              borderColor: likeState ? "transparent" : "rgba(255, 89, 89, 1)",
              color: likeState ? "#fff" : "rgba(255, 89, 89, 1)",
            },
          }}
        >
          {likeState ? "Liked" : "Like"}
        </Button>
      )}
    </>
  );
});

export default function ListDetail() {
  return (
    <Container sx={{ marginTop: 10, color: "#9ab" }}>
      <Box px={{ xs: 0, md: 12 }}>
        <Box display={"flex"} sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Typography fontSize={14}>Created by</Typography>
            <Link to={"/hiep"}>
              <Box display={"flex"} alignItems={"center"} gap={1} fontSize={14} sx={{ ":hover": { color: "#fff" } }}>
                <Avatar sx={{ height: 30, width: 30 }} />
                <strong>{"Ba Hiep"}</strong>
              </Box>
            </Link>
            <Typography fontSize={25} pt={0.25}>
              ·
            </Typography>
            <Typography color={"#eee"} fontSize={14}>
              {"100 films"}
            </Typography>
          </Box>
          <LikeButton />
        </Box>
        <Typography mb={2} fontSize={14}>
          <i>Last updated: 6d</i>
        </Typography>
        <Box mb={{ xs: 2, lg: 0 }}>
          <SearchForm />
        </Box>
        <Divider variant={"fullWidth"} sx={{ my: 3 }} />
        <Typography variant={"h5"} color={"#fff"} mb={1}>
          <strong> {"List title"}</strong>
        </Typography>
        <Typography mb={3} fontSize={15}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Typography>
        <PaginatedGrid itemsPerPage={48}>
          {/*{Array(45)*/}
          {/*  .map(() => films[(Math.random() * 100) % 3])*/}
          {listFilms.map((i, idx) => (
            <FilmCard size={"100%"} key={idx} link={`/film/${i.title.replace(" ", "-")}/${i.id}`} src={i.poster} />
          ))}
        </PaginatedGrid>
        <Typography textTransform={"uppercase"} fontWeight={"bold"}>
          15 likes
        </Typography>
        <Divider />
        <Box display={"flex"} flexWrap={"wrap"} gap={0.25} mb={4} mt={1}>
          {Array.from({ length: 10 }).map((i, idx) => (
            <Avatar key={idx} />
          ))}
        </Box>
        <ListCommentSection listComment={listComment} reviewDetail={reviewDetail} />
        {/*<FilmsListPopularFilms />*/}
      </Box>
    </Container>
  );
}
