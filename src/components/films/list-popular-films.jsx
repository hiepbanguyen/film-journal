import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ViewsLikesLists from "../common/views-likes-lists.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import FilmCard from "../common/film-card";

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
        <>
          {data?.Data?.length > 0 && (
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
                    <FilmCard
                      size={"100%"}
                      src={i?.Poster_path}
                      link={`/films/${i?.FilmID ?? 0}`}
                      alt={"Film Poster"}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <ViewsLikesLists
                      views={i?.ReviewsCount ?? 0}
                      likes={i?.LikesCount ?? 0}
                      lists={i?.Appears ?? 0}
                      filmId={i?.FilmID}
                    />
                  </Box>
                </Box>
              ))}
            </Carousel>
          )}
        </>
      )}
    </Box>
  );
}
