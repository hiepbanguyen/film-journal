import { Avatar, Box, Button, Rating, Typography } from "@mui/material";
import FilmCard from "./film-card.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import EventNoteIcon from "@mui/icons-material/EventNote";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ReviewContent = ({ link, content, likeCount, spoiler }) => {
  const [hasSpoiler, setHasSpoiler] = useState(!!spoiler);

  return (
    <>
      {hasSpoiler ? (
        <Button
          onClick={() => {
            setHasSpoiler(false);
          }}
          variant={"contained"}
          sx={{
            color: "#9ab",
            backgroundColor: "#28323d",
            ":hover": { backgroundColor: "#3b4957", color: "#fff" },
          }}
        >
          This review may contains spoilers. Click here to open!
        </Button>
      ) : (
        <Typography component={Link} to={link ?? ""} fontSize={15} mb={1}>
          {String(content).slice(0, 210)}
          {content.length > 210 && (
            <>
              {"... "}
              <Box component={"span"} sx={{ ":hover": { color: "#00e8ff" } }}>
                See more
              </Box>
            </>
          )}
        </Typography>
      )}
      <Box
        component={Link}
        to={link ?? ""}
        mt={1}
        display={"flex"}
        alignItems={"stretch"}
        fontWeight={600}
        fontSize={14}
        gap={0.5}
      >
        <FavoriteIcon
          sx={{
            fontSize: 18,
          }}
        />
        <span>
          {likeCount} {" likes"}
        </span>
      </Box>
    </>
  );
};

export default function ReviewPreview(props) {
  const {
    title,
    filmId,
    releasedYear,
    poster,
    content,
    username,
    fullname,
    userAvatar,
    ratings,
    likeCount,
    commentCount,
    spoiler,
    reviewDate,
    link,
    notShowFilmCard,
    notShowUser,
    notShowTitle,
  } = props;

  return (
    <Box my={2}>
      <Box display={"flex"} alignItems={{ xs: "center", sm: "flex-start" }} gap={2}>
        {!notShowFilmCard && <FilmCard src={poster} link={`/films/${filmId}`} />}
        <Box>
          {!notShowTitle && (
            <Typography
              component={Link}
              to={link ?? ""}
              variant={"h6"}
              sx={{ color: "#fff", ":hover": { color: "#00e8ff" } }}
            >
              <strong style={{ color: "inherit" }}>{title}</strong>{" "}
              <span style={{ fontSize: 17, color: "#9ab" }}>{releasedYear}</span>
            </Typography>
          )}
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
                <Avatar sx={{ width: 25, height: 25 }} src={userAvatar} />
                <Typography variant={"body2"} fontWeight={600}>
                  {fullname ? fullname : username}
                </Typography>
              </Box>
            )}
            {reviewDate && (
              <Link to={link ?? ""}>
                <Box display={"flex"} gap={1} sx={{ pt: 0.25 }}>
                  <EventNoteIcon fontSize={"small"} />
                  <Typography fontSize={14}>{moment(reviewDate).format("MMM DD, YYYY")}</Typography>
                </Box>
              </Link>
            )}
            <Link to={link ?? ""}>
              <Box display={"flex"} alignItems={"stretch"}>
                <Rating value={ratings} size={"medium"} readOnly />
              </Box>
            </Link>
            <Link to={link ?? ""}>
              <Box display={"flex"} gap={1}>
                <ChatBubbleIcon fontSize={"small"} />
                <Typography variant={"body2"}>{commentCount}</Typography>
              </Box>
            </Link>
          </Box>
          <Box sx={(theme) => ({ [theme.breakpoints.only("xs")]: { display: "none" } })}>
            <ReviewContent link={link} content={content} likeCount={likeCount} spoiler={spoiler} />
          </Box>
        </Box>
      </Box>
      <Box mt={1} sx={(theme) => ({ [theme.breakpoints.not("xs")]: { display: "none" } })}>
        <ReviewContent link={link} content={content} likeCount={likeCount} spoiler={spoiler} />
      </Box>
    </Box>
  );
}
