import { Box, Grid } from "@mui/material";
import ReviewCard from "../common/review-card";
import * as React from "react";

export default function FilmsListPopularReviews() {
  let data = [
    {
      id: 1,
      film: {
        id: 1,
        name: "Jonh Wick: Chapter 4",
        yearRelease: 2023,
        thumbnail: "https://picsum.photos/201/300",
        isLiked: true,
      },
      user: {
        avatar: "https://picsum.photos/49/48",
        userFullname: "Charlie Puth",
        userName: "charlieputh69",
        userId: 1,
      },
      content:
        "Everyone is trying to rip off the way John Wick movies do action but Everyone is trying to rip off the way John Wick movies do action but Everyone is trying to rip off the way John Wick movies do action but Everyone is trying to rip off the way John Wick movies do action butEveryone is trying to rip off the way John Wick movies do action but I wish they would also try to rip off the way John Wick movies are really pretty and lit extremely well",
      rate: 2,
      totalComment: 63445,
      totalLike: 3654,
      isLiked: true,
    },
    {
      id: 2,
      film: {
        id: 2,
        name: "Avenger 7: End Game",
        yearRelease: 2019,
        thumbnail: "https://picsum.photos/200/301",
        isLiked: false,
      },
      user: {
        avatar: "https://picsum.photos/48/49",
        userFullname: "Selena Gomez",
        userName: "selena69",
        userId: 2,
      },
      content: "John Wick's biggest enemy was those damn stairs",
      rate: 5,
      totalComment: 2465,
      totalLike: 3654,
      isLiked: false,
    },
  ];

  const [listReviews, setListReviews] = React.useState(data)

  return (
    <Box className="films-list-popular-review">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #9ab",
          marginBottom: "16px",
          fontSize: "16px",
        }}
      >
        <Box sx={{ textTransform: "uppercase" }}>Popular reviews this week</Box>
        <Box></Box>
      </Box>
      {listReviews.map((review) => (
        <ReviewCard review={review}></ReviewCard>
      ))}
    </Box>
  );
}
