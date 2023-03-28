import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NotesIcon from '@mui/icons-material/Notes';

export default function FilmsListPopularFilms() {
  let listPopularFilms = [
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
    {
      id: 16,
      thumbnail: "https://picsum.photos/202/303",
      totalLikes: 453645,
      totalReviews: 567567,
      isLiked: false,
      isWatched: true,
    },
    {
      id: 17,
      thumbnail: "https://picsum.photos/203/302",
      totalLikes: 567567,
      totalReviews: 56757,
      isLiked: false,
      isWatched: false,
    },
    {
      id: 18,
      thumbnail: "https://picsum.photos/203/301",
      totalLikes: 567567,
      totalReviews: 56757,
      isLiked: true,
      isWatched: true,
    },
  ];

  const handleLikeFilm = (filmId) => {
    let old = listPopularFilms.find((film) => film.id === filmId);

    if (old.isLiked) old.isLiked = false;
    else old.isLiked = true;
  };

  const formatTotalNumber = (number) => {
    if(number < 1000) return number;
    if(number < 10000) return Math.round(number / 1000 * 10) / 10 + 'k';
    else return Math.round(number / 1000) + 'k';
  }

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
  return (
    <Box className="films-list-popular-film">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #9ab",
          marginBottom: "16px",
          fontSize: "14px",
        }}
      >
        <Box sx={{ textTransform: "uppercase" }}>Popular films this week</Box>
        <Box></Box>
      </Box>
      <Carousel
        draggable={false}
        swipeable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        responsive={responsive}
      >
        {listPopularFilms.map((film) => (
          <Box>
            <Box
              key={film.id}
              sx={{
                margin: "0 8px",
                borderRadius: "4px",
                overflow: "hidden",
                aspectRatio: "2/3",
                position: "relative",
                marginBottom: '8px',
                border: "2px solid #9ab",
                transition: "0.3s",
                ":hover": {
                  border: "2px solid #00c030",
                },
                ":hover .btn-action-card-film": {
                  opacity: "1",
                },
              }}
            >
              <Box
                component="img"
                src={film.thumbnail}
                sx={{
                  minWidth: "100%",
                  minHeight: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  transition: "0.3s",
                  opacity: "0",
                }}
                className="btn-action-card-film"
              >
                <Box
                  sx={{
                    backgroundColor: "#000000d1",
                    lineHeight: "1px",
                    borderRadius: "6px",
                  }}
                >
                  <FavoriteIcon
                    sx={{
                      cursor: "pointer",
                      color: film.isLiked ? "#ff9010" : "#9ab",
                      margin: "2px 4px",
                      ":hover": {
                        color: film.isLiked ? "#e08012" : "#8592a0",
                      },
                    }}
                    onClick={() => handleLikeFilm(film.id)}
                  ></FavoriteIcon>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: '100%',
                fontSize: '14px'
              }}
            >
              <NotesIcon sx={{marginRight:'2px', color: '#40bcf4'}}></NotesIcon>
              {formatTotalNumber(film.totalLikes)}
              <FavoriteIcon sx={{margin:'0 2px 0 16px', color: '#ff9010'}}></FavoriteIcon>
              {formatTotalNumber(film.totalLikes)}
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
