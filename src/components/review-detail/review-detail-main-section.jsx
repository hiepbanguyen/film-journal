import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotesIcon from "@mui/icons-material/Notes";
import FilmCard from "../common/film-card";
import React from "react";

function LikedReview(props) {
  return (
    <Box
      component="a"
      href={props.likedReview.reviewLink}
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "12px",
        ":hover img": {
          border: "1px solid #fff",
        },
      }}
    >
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Box
          component="img"
          src={props.likedReview.userAvatar}
          sx={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            marginBottom: "0",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: "-2px",
            right: "-2px",
          }}
        >
          <NotesIcon
            sx={{
              fontSize: "16px",
              color: "#9ab",
              bgcolor: "#14181c",
              borderRadius: "50%",
              border: "1px solid #9ab",
            }}
          ></NotesIcon>
        </Box>
      </Box>
      <Box
        sx={{
          lineHeight: "1px",
        }}
      >
        {Array.from({ length: props.likedReview.reviewRate }).map((star, index) => (
          <StarIcon
            sx={{
              fontSize: "12px",
              color: "#9ab",
            }}
            key={index}
          ></StarIcon>
        ))}
      </Box>
    </Box>
  );
}

const ReviewContent = (props) => {
  return (
    <>
      <Typography fontSize={15} my={3}>
        {props.reviewDetail.reviewContent}
      </Typography>
      {/* Likes */}
      <Box my={1} display={"flex"} alignItems={"stretch"} fontWeight={600} fontSize={14} gap={0.5}>
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
          {props.reviewDetail.likesCount} {" likes"}
        </span>
      </Box>
      {/* User like related review */}
      <Box
        sx={{
          textTransform: "uppercase",
          fontSize: 12,
          color: "#9ab",
        }}
      >
        {props.reviewDetail.userFirstName} liked these review
      </Box>
      <Divider sx={{ mb: 1 }} />
      <Box>
        {props.listLikedReview.map((likedReview, index) => (
          <LikedReview likedReview={likedReview} key={index}></LikedReview>
        ))}
      </Box>
    </>
  );
};

export default function ReviewDetailMainSection(props) {
  return (
    <>
      <Box sx={{ flexGrow: 1, color: "#9ab" }} mb={5}>
        {/* Review */}
        <Box display={"flex"} gap={3}>
          {/* Thumbail - link */}
          <FilmCard size={{ xs: 100, sm: 140, md: 200 }} src={props.reviewDetail.poster} />
          <Box flex={1}>
            {/* Info Review */}
            {/* User */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Avatar sx={{ width: 28, height: 28, mr: 1 }} />
              <Box
                component="span"
                sx={{
                  color: "#9ab",
                  fontSize: "12px",
                }}
              >
                {"Review by "}
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {props.reviewDetail.userName}
                </span>
              </Box>
            </Box>
            <Divider sx={{ my: 0.5, display: { xs: "none", sm: "block" } }} />
            {/* Info Post */}
            <Box>
              {/* Name Film */}
              <Box
                my={1}
                sx={{
                  fontSize: { xs: 16, md: 18 },
                  fontWeight: "600",
                  color: "#adbfd2",
                }}
              >
                {props.reviewDetail.filmName}
                <Box
                  component="span"
                  sx={{
                    pl: 1,
                    fontWeight: "400",
                    color: "#adbfd2",
                  }}
                >
                  {props.reviewDetail.yearRelease}
                </Box>
              </Box>
              {/* Release Year - Star Rate */}
              {/* Watched Time */}
              <Box
                sx={{
                  fontSize: { xs: "12px" },
                  fontWeight: "400",
                  color: "#adbfd2",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                <Rating
                  readOnly
                  value={props.reviewDetail.rate}
                  sx={{
                    fontSize: {
                      xs: 18,
                      md: 20,
                    },
                  }}
                />
                {props.reviewDetail.watchedTime}
              </Box>
            </Box>

            {/* Review Content */}
            <Box sx={(theme) => ({ [theme.breakpoints.only("xs")]: { display: "none" } })}>
              <ReviewContent {...props} />
            </Box>
          </Box>
        </Box>
        <Box sx={(theme) => ({ [theme.breakpoints.not("xs")]: { display: "none" } })}>
          <ReviewContent {...props} />
        </Box>
      </Box>
    </>
  );
}
