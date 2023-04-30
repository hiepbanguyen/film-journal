import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ViewsLikesLists from "../common/views-likes-lists.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import FilmCard from "../common/film-card";

const listPopularFilms = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/200/300",
    totalLikes: 12300,
    totalReviews: 3454,
    isLiked: true,
    isWatched: true,
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/201/300",
    totalLikes: 445,
    totalReviews: 5567,
    isLiked: false,
    isWatched: true,
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/202/300",
    totalLikes: 465,
    totalReviews: 567,
    isLiked: false,
    isWatched: false,
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/203/300",
    totalLikes: 667,
    totalReviews: 557,
    isLiked: false,
    isWatched: true,
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/200/301",
    totalLikes: 1300,
    totalReviews: 3454,
    isLiked: false,
    isWatched: false,
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/201/302",
    totalLikes: 245,
    totalReviews: 567,
    isLiked: false,
    isWatched: true,
  },
  {
    id: 7,
    thumbnail: "https://picsum.photos/202/303",
    totalLikes: 645,
    totalReviews: 5567,
    isLiked: false,
    isWatched: true,
  },
  {
    id: 8,
    thumbnail: "https://picsum.photos/203/304",
    totalLikes: 5567,
    totalReviews: 56757,
    isLiked: false,
    isWatched: false,
  },
  {
    id: 9,
    thumbnail: "https://picsum.photos/201/301",
    totalLikes: 300,
    totalReviews: 3454,
    isLiked: true,
    isWatched: true,
  },
  {
    id: 10,
    thumbnail: "https://picsum.photos/201/302",
    totalLikes: 25,
    totalReviews: 5667,
    isLiked: false,
    isWatched: false,
  },
  {
    id: 11,
    thumbnail: "https://picsum.photos/202/300",
    totalLikes: 5,
    totalReviews: 67,
    isLiked: false,
    isWatched: true,
  },
  {
    id: 12,
    thumbnail: "https://picsum.photos/203/303",
    totalLikes: 57,
    totalReviews: 557,
    isLiked: false,
    isWatched: true,
  },
  {
    id: 13,
    thumbnail: "https://picsum.photos/203/303",
    totalLikes: 567567,
    totalReviews: 56757,
    isLiked: false,
    isWatched: false,
  },
  {
    id: 14,
    thumbnail: "https://picsum.photos/200/304",
    totalLikes: 12300,
    totalReviews: 32454,
    isLiked: true,
    isWatched: true,
  },
  {
    id: 15,
    thumbnail: "https://picsum.photos/201/304",
    totalLikes: 23445,
    totalReviews: 567567,
    isLiked: false,
    isWatched: false,
  },
];

const responsive = {
  medium: {
    breakpoint: { max: 3000, min: 900 },
    items: 5,
    slidesToSlide: 5,
  },
  small: {
    breakpoint: { max: 899, min: 600 },
    items: 4,
    slidesToSlide: 4,
  },
  xsmall: {
    breakpoint: { max: 599, min: 0 },
    items: 3,
    slidesToSlide: 3,
  },
};

export default function FilmsListPopularFilms() {
  const [{ data, loading, error }] = useAxios({
    url: `Films/Popular`,
    method: "POST",
    data: {
      pageSize: 15,
      pageIndex: 1,
    },
  });

  return (
    <Box className="films-list-popular-film" sx={{ marginBottom: 5 }}>
      <Box
        sx={{
          marginBottom: "16px",
          fontSize: "16px",
        }}
      >
        <Typography sx={{ textTransform: "uppercase" }}>Popular films this week</Typography>
        <Divider />
      </Box>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <Carousel
          draggable={false}
          swipeable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          responsive={responsive}
        >
          {data?.Data?.map((i, idx) => (
            <Box key={idx}>
              <Box p={1}>
                <FilmCard size={"100%"} src={i?.Poster_path} link={`Films/${i?.FilmID ?? 0}`} alt={"Film Poster"} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <ViewsLikesLists views={i?.ReviewsCount ?? 0} likes={i?.LikesCount ?? 0} lists={i?.Appears ?? 0} />
              </Box>
            </Box>
          ))}
        </Carousel>
      )}
    </Box>
  );
}
