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
      content: "John Wick's biggest enemy was those damn stairs",
      rate: 4,
      totalComment: 265,
      totalLike: 3654,
      isLiked: false,
    },
  ];

  return (
    <Box className="films-list-popular-review">
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
        <Box sx={{ textTransform: "uppercase" }}>Popular reviews this week</Box>
        <Box></Box>
      </Box>
      {listReviews.map((review) => (
        <Box sx={{ display: "flex", alignItems: "start" }}>
          <Box sx={{ width: { xs: "60px", md: "80px" }, aspectRatio: "2/3", overflow: 'hidden', marginRight: '20px' }}>
            <Box
              component="img"
              src={review.film.thumbnail}
              alt="Image-review-film"
              sx={{ width: '100%', minHeight: '100%'  }}
            ></Box>
          </Box>
          <Box sx={{ flex: "1" }}>
            <Box sx={{marginBottom: '8px'}}><Box sx={{ fontSize: '28px', fontWeight: '700', marginRight: '8px', display: 'inline-block' }}>{review.film.name}</Box><Box sx={{display: 'inline-block'}}>{review.film.yearRelease}</Box></Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
