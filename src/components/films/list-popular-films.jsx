import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function FilmsListPopularFilms() {
  const [listPopularFilms, setListPopularFilms] = useState([
    { id: 1, thumbnail: "https://picsum.photos/200/300", totalLikes: 12300, totalReviews: 32454 },
    { id: 2, thumbnail: "https://picsum.photos/201/300", totalLikes: 23445, totalReviews: 567567 },
    { id: 3, thumbnail: "https://picsum.photos/202/300", totalLikes: 453645, totalReviews: 567567 },
    { id: 4, thumbnail: "https://picsum.photos/203/300", totalLikes: 567567, totalReviews: 56757 },
    { id: 5, thumbnail: "https://picsum.photos/200/301", totalLikes: 12300, totalReviews: 32454 },
    { id: 6, thumbnail: "https://picsum.photos/201/302", totalLikes: 23445, totalReviews: 567567 },
    { id: 7, thumbnail: "https://picsum.photos/202/303", totalLikes: 453645, totalReviews: 567567 },
    { id: 8, thumbnail: "https://picsum.photos/203/304", totalLikes: 567567, totalReviews: 56757 },
    { id: 9, thumbnail: "https://picsum.photos/201/301", totalLikes: 12300, totalReviews: 32454 },
    { id: 10, thumbnail: "https://picsum.photos/201/302", totalLikes: 23445, totalReviews: 567567 },
    { id: 11, thumbnail: "https://picsum.photos/202/300", totalLikes: 453645, totalReviews: 567567 },
    { id: 12, thumbnail: "https://picsum.photos/203/303", totalLikes: 567567, totalReviews: 56757 },
    { id: 13, thumbnail: "https://picsum.photos/203/303", totalLikes: 567567, totalReviews: 56757 },
    { id: 14, thumbnail: "https://picsum.photos/200/304", totalLikes: 12300, totalReviews: 32454 },
    { id: 15, thumbnail: "https://picsum.photos/201/304", totalLikes: 23445, totalReviews: 567567 },
    { id: 16, thumbnail: "https://picsum.photos/202/303", totalLikes: 453645, totalReviews: 567567 },
    { id: 17, thumbnail: "https://picsum.photos/203/302", totalLikes: 567567, totalReviews: 56757 },
    { id: 18, thumbnail: "https://picsum.photos/203/301", totalLikes: 567567, totalReviews: 56757 },
  ]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };
  return (
    <Box className="films-list-popular-film">
      <Carousel
        draggable={false}
        swipeable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        responsive={responsive}
      >
        {listPopularFilms.map((film) => (
          <Box
            key={film.id}
            sx={{
              margin: "0 16px",
              borderRadius: "4px",
              overflow: "hidden",
              border: "1px solid #9ab",
              aspectRatio: "2/3",
            }}
          >
            <Box
              component="img"
              src={film.thumbnail}
              sx={{ minWidth: "100%", minHeight: "100%", objectFit: "cover", borderRadius: "4px" }}
            ></Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
