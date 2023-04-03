import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";
import FilmCard from "../common/film-card.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import React from "react";
import { Link } from "react-router-dom";

export const PopularReviews = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"}>
          popular reviews this week
        </Typography>
        <Typography variant={"caption"}>MORE</Typography>
      </Box>
      <Divider variant="fullWidth" />
      <Box>
        {Array.from({ length: 6 }).map((i, idx) => (
          <React.Fragment key={idx}>
            <ReviewPreview
              title={"A film title"}
              releasedYear={2022}
              content={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the" +
                " leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
              username={"bahiepnguyen"}
              fullname={"Nguyen Ba Hiep"}
              ratings={4}
              likeCount={10}
              dislikeCount={0}
              commentCount={50}
            />
            {idx < 5 && <Divider variant={"fullWidth"} />}
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};

function ReviewPreview(props) {
  const { title, releasedYear, content, username, fullname, ratings, likeCount, commentCount } = props;
  return (
    <Box my={2}>
      <Box display={"flex"} alignItems={{ xs: "center", sm: "flex-start" }} gap={2}>
        <FilmCard />
        <Box>
          <Typography
            component={Link}
            to={`/u/${username}/reviews/123`}
            variant={"h5"}
            sx={{ color: "#fff", ":hover": { color: "#00e8ff" } }}
          >
            <strong style={{ color: "inherit" }}>{title}</strong>{" "}
            <span style={{ fontSize: 17, color: "#9ab" }}>{releasedYear}</span>
          </Typography>
          <Box display={"flex"} flexWrap={"wrap"} gap={2} alignItems={"center"} my={1}>
            <Box
              component={Link}
              to={`/u/${username}`}
              display={"flex"}
              alignItems={"center"}
              gap={1}
              sx={{ ":hover": { color: "#fff" } }}
            >
              <Avatar sx={{ width: 25, height: 25 }} />
              <Typography variant={"body2"} fontWeight={600}>
                {fullname ?? username}
              </Typography>
            </Box>
            <Rating value={ratings} size={"medium"} readOnly />
            <Box
              component={Link}
              to={`/u/${username}/reviews/123`}
              display={"flex"}
              gap={1}
              sx={{ ":hover": { color: "#fff" } }}
            >
              <ChatBubbleIcon fontSize={"small"} />
              <Typography variant={"body2"}>{commentCount}</Typography>
            </Box>
          </Box>
          <Box sx={(theme) => ({ [theme.breakpoints.only("xs")]: { display: "none" } })}>
            <Typography component={Link} to={`/u/${username}/reviews/123`} fontSize={15} mb={1}>
              {content}
            </Typography>
            <Box mt={1} display={"flex"} alignItems={"stretch"} fontWeight={600} fontSize={14} gap={0.5}>
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
                {likeCount} {" likes"}
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={1} sx={(theme) => ({ [theme.breakpoints.not("xs")]: { display: "none" } })}>
        <Typography component={Link} to={`/u/${username}/reviews/123`} fontSize={15} mb={1}>
          {content}
        </Typography>
        <Box mt={1} display={"flex"} alignItems={"stretch"} fontWeight={600} fontSize={14} gap={0.5}>
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
            {likeCount} {" likes"}
          </span>
        </Box>
      </Box>
    </Box>
  );
}
