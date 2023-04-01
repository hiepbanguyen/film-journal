import Container from "@mui/system/Container";
import SearchForm from "../common/search-form.jsx";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PaginatedGrid from "../common/paginated_grid.jsx";
import FilmCard from "../common/film-card";
import Tags from "../common/tags.jsx";
import ReviewDetailListComment from "../review-detail/review-detail-list-comment.jsx";
import { listComment, reviewDetail } from "../review-detail/index.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import React from "react";

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

export default function ListDetail() {
  return (
    <Container sx={{ marginTop: 10, color: "#9ab" }}>
      <Box px={{ xs: 1, md: 12 }}>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <Typography>Created by</Typography>
          <Link to={"/hiep"}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Avatar sx={{ height: 30, width: 30 }} />
              <strong>{"Ba Hiep"}</strong>
            </Box>
          </Link>
          <Typography fontSize={35} pt={0.5}>
            ·
          </Typography>
          <Typography color={"#fff"}>{"100 films"}</Typography>
        </Box>
        <Box display={"flex"} alignItems={"stretch"} fontWeight={600} fontSize={14} gap={0.5}>
          <FavoriteIcon
            sx={{
              fontSize: 18,
              "& :hover": {
                cursor: "pointer",
                color: "rgba(255, 89, 89, 1)",
              },
            }}
          />
          <span>
            {15} {" likes"}
          </span>
        </Box>
        <Typography mb={2} mt={1}>
          <i>Last updated: 6d</i>
        </Typography>
        <Box mb={{ xs: 2, lg: 0 }}>
          <SearchForm />
        </Box>
        <Divider variant={"fullWidth"} />
        <Typography variant={"h5"} color={"#fff"} mt={1.5} mb={1}>
          <strong> {"List title"}</strong>
        </Typography>
        <Typography mb={3}>
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
        <Typography>Tags</Typography>
        <Divider variant={"fullWidth"} sx={{ mb: 1.5 }} />
        <Tags />
        <Box mt={2}></Box>
        <ReviewDetailListComment listComment={listComment} reviewDetail={reviewDetail} />
        {/*<FilmsListPopularFilms />*/}
      </Box>
    </Container>
  );
}
