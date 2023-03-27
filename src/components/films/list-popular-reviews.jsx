import { Box, Grid } from "@mui/material";

export default function FilmsListPopularReviews() {
  let listReviews = [
    {
      id: 1,
      film: { id: 1, name: "Jonh Wick: Chapter 4", yearRelease: 2023, thumbnail: "https://picsum.photos/200/300" },
      user: {
        avatar: "https://picsum.photos/48/48",
        userFullname: "Charlie Puth",
        userName: "charlieputh69",
        userId: 1,
      },
      content:
        "Everyone is trying to rip off the way John Wick movies do action but I wish they would also try to rip off the way John Wick movies are really pretty and lit extremely well",
      rate: 4,
      totalComment: 265,
      totalLike: 3654,
      isLiked: true,
    },
    {
      id: 2,
      film: { id: 2, name: "Avenger 7: End Game", yearRelease: 2019, thumbnail: "https://picsum.photos/200/300" },
      user: {
        avatar: "https://picsum.photos/48/48",
        userFullname: "Selena Gomez",
        userName: "selena69",
        userId: 2,
      },
      content:
        "John Wick's biggest enemy was those damn stairs",
      rate: 4,
      totalComment: 265,
      totalLike: 3654,
      isLiked: false,
    },
  ];
  return <Box className="films-list-review"></Box>;
}
