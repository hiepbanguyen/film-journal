import { Avatar, Box, Rating, Typography } from "@mui/material";
import FilmCard from "./film-card.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import EventNoteIcon from "@mui/icons-material/EventNote";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function ReviewPreview(props) {
  const {
    title,
    releasedYear,
    poster,
    content,
    username,
    fullname,
    ratings,
    likeCount,
    commentCount,
    reviewDate,
    link,
    notShowFilmCard,
    notShowUser,
  } = props;
  return (
    <Box my={2}>
      <Box display={"flex"} alignItems={{ xs: "center", sm: "flex-start" }} gap={2}>
        {!notShowFilmCard && <FilmCard src={poster} />}
        <Box>
          <Typography
            component={Link}
            to={link ?? ""}
            variant={"h5"}
            sx={{ color: "#fff", ":hover": { color: "#00e8ff" } }}
          >
            <strong style={{ color: "inherit" }}>{title}</strong>{" "}
            <span style={{ fontSize: 17, color: "#9ab" }}>{releasedYear}</span>
          </Typography>
          <Box display={"flex"} flexWrap={"wrap"} gap={2} alignItems={"center"} my={1}>
            {!notShowUser && (
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
            )}
            {reviewDate && (
              <Box display={"flex"} gap={1} sx={{ pt: 0.25 }}>
                <EventNoteIcon fontSize={"small"} />
                <Typography fontSize={14}>{moment(reviewDate).format("MMM DD, YYYY")}</Typography>
              </Box>
            )}
            <Rating value={ratings} size={"medium"} readOnly />
            <Box display={"flex"} gap={1}>
              <ChatBubbleIcon fontSize={"small"} />
              <Typography variant={"body2"}>{commentCount}</Typography>
            </Box>
          </Box>
          <Box sx={(theme) => ({ [theme.breakpoints.only("xs")]: { display: "none" } })}>
            <Typography component={Link} to={link ?? ""} fontSize={15} mb={1}>
              {String(content).slice(0, 210)}
              {"..."}
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
        <Typography component={Link} to={link ?? ""} fontSize={15} mb={1}>
          {String(content).slice(0, 210)}
          {"..."}
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
