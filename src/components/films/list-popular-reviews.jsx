import { Box, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FilmsListPopularReviews() {
  let listReviews = [
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
        "Everyone is trying to rip off the way John Wick movies do action but I wish they would also try to rip off the way John Wick movies are really pretty and lit extremely well",
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

  const handleLikeFilm = (filmId) => {};

  const formatTotalNumber = (number) => {
    if (number < 1000) return number;
    if (number < 10000) return Math.round((number / 1000) * 10) / 10 + "k";
    else return Math.round(number / 1000) + "k";
  };

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
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            marginBottom: "24px",
            paddingBottom: "24px",
            borderBottom: "1px solid #9ab",
            color: "#9ab",
            ":last-child": {
              border: "none",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "60px", md: "80px" },
              aspectRatio: "2/3",
              overflow: "hidden",
              marginRight: "20px",
              border: "2px solid #9ab0",
              transition: "0.2s",
              boxSizing: "content-box",
              ":hover": {
                border: "2px solid #9ab",
              },
              ":hover .btn-action-card-film": {
                opacity: "1",
              },
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={review.film.thumbnail}
              alt="Image-review-film"
              sx={{ width: "100%", minHeight: "100%" }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                bottom: "10px",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                transition: "0.2s",
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
                    color: review.film.isLiked ? "#ff9010" : "#9ab",
                    margin: "2px 4px",
                    ":hover": {
                      color: review.film.isLiked ? "#e08012" : "#8592a0",
                    },
                    fontSize: "18px",
                  }}
                  onClick={() => handleLikeFilm(review.film.id)}
                ></FavoriteIcon>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: "1" }}>
            <Box sx={{ marginBottom: "6px" }}>
              <Box
                component="a"
                sx={{
                  fontSize: { xs: "22px", md: "28px" },
                  fontWeight: "700",
                  marginRight: "8px",
                  display: "inline-block",
                  color: "#9ab",
                  transition: "0.2s",
                  ":hover": {
                    color: "#40bcf4",
                  },
                  textDecoration: "none",
                }}
                href={"/" + review.user.userName + '/reviews/' + review.id}
              >
                {review.film.name}
              </Box>
              <Box sx={{ display: "inline-block" }}>{review.film.yearRelease}</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "star", sm: "center" },
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", sm: "start" },
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: 'center',
                  marginBottom: {xs: '8px', sm: '0'}
                }}
              >
                <Box
                  component="a"
                  href={"/" + review.user.userName}
                  sx={{
                    width: "24px",
                    aspectRatio: "1/1",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginRight: "6px",
                    ":hover": {
                      border: "1px solid #9ab",
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={review.user.avatar}
                  ></Box>
                </Box>
                <Box
                  component="a"
                  href={"/" + review.user.userName}
                  sx={{
                    color: "#9ab",
                    textDecoration: "none",
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: "600",
                    marginRight: "12px",
                    transition: "0.2s",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {review.user.userFullname}
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ lineHeight: "1px", marginRight: "12px" }}>
                  {Array.from({ length: review.rate }).map((i, idx) => (
                    <StarIcon key={idx} sx={{ color: "#00c030", fontSize: { xs: "18px", md: "20px" } }}></StarIcon>
                  ))}
                </Box>
                <Box
                  component="a"
                  href={"/" + review.user.userName + '/reviews/' + review.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#9ab",
                    transition: "0.2s",
                    textDecoration: "none",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                >
                  <ChatBubbleIcon sx={{ fontSize: "20px", marginRight: "4px" }}></ChatBubbleIcon>
                  <Box sx={{ fontSize: { xs: "14px", md: "14px" } }}>{formatTotalNumber(review.totalComment)}</Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ fontSize: { xs: "14px", md: "16px" } }}>{review.content}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
