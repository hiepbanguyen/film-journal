import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import FilmCard from "../common/film-card";
import React from "react";
import { EditButton } from "../common/edit-button.jsx";
import { Link } from "react-router-dom";
import moment from "moment";
import { LikeButton } from "../common/like-button.jsx";
import { estimatedTimeElapsed } from "../../utils/time.js";

function LikedReview(props) {
  const { link, rating, avatar } = props;
  return (
    <Box
      component={Link}
      to={link ?? ""}
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
      <Box pb={0.5} sx={{ position: "relative", display: "inline-block" }}>
        <Avatar
          src={avatar}
          sx={{
            height: 50,
            width: 50,
          }}
        />
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
          />
        </Box>
      </Box>
      <Rating readOnly value={rating} sx={{ fontSize: 12 }} />
    </Box>
  );
}

const ReviewContent = (props) => {
  const { data } = props;
  return (
    <>
      <Typography fontSize={15} my={3}>
        {data.Content ?? ""}
      </Typography>
      {/* Likes */}
      <Box my={1} display={"flex"} alignItems={"center"} fontWeight={600} fontSize={14} gap={1}>
        <LikeButton />
        <span>
          {data.TotalLike ?? 0} {" likes"}
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
        <b>{data.User?.FullName ?? data.User?.UserName ?? ""}</b> liked these review
      </Box>
      <Divider sx={{ mb: 1 }} />
      <Box>
        {data.ReviewsLikedByUser?.map((i, index) => (
          <LikedReview
            key={index}
            link={`/u/${i?.UserName}/reviews/${i?.ReviewID}`}
            avatar={i.Avatar ?? ""}
            rating={i.Rate ?? 0}
          />
        ))}
      </Box>
    </>
  );
};

export default function ReviewDetailMain(props) {
  const { data } = props;
  return (
    <>
      <Box sx={{ flexGrow: 1, color: "#9ab" }} mb={5}>
        {/* Review */}
        <Box display={"flex"} gap={3}>
          {/* Thumbail - link */}
          <FilmCard size={{ xs: 100, sm: 140, md: 200 }} src={data.Film?.Poster_path} />
          <Box flex={1}>
            {/* Info Review */}
            {/* User */}
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box
                component={Link}
                to={data.User?.UserName ? `/u/${data.User?.UserName}` : ""}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Avatar sx={{ width: 28, height: 28, mr: 1 }} src={data.User?.Avatar ?? ""} />
                <Box
                  component="span"
                  sx={{
                    color: "#9ab",
                    fontSize: "12px",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {"Review by "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {data.User?.FullName ?? data.User?.UserName ?? ""}
                  </span>
                </Box>
              </Box>
              <EditButton username={data.User?.UserName ?? ""} />
            </Box>
            <Divider sx={{ my: 0.5, display: { xs: "none", sm: "block" } }} />
            {/* Info Post */}
            <Box>
              {/* Name Film */}
              <Link to={data.Film?.FilmID ? `/films/${data.Film?.FilmID}` : ""}>
                <Box
                  my={1}
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    fontWeight: "600",
                    color: "#adbfd2",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {data.Film?.Title ?? ""}
                  <span
                    style={{
                      paddingLeft: "4px",
                      fontWeight: 400,
                    }}
                  >
                    {data.Film?.Release_date ? new Date(data.Film?.Release_date).getFullYear() : ""}
                  </span>
                </Box>
              </Link>
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
                  value={data.Rate ?? 0}
                  sx={{
                    fontSize: {
                      xs: 18,
                      md: 20,
                    },
                  }}
                />
                {data.WatchedDate ? "Watched " + moment(data.WatchedDate).format("DD MMM, YYYY") : ""}
                {data.ModifiedDate && <i>Last updated: {estimatedTimeElapsed(new Date(data?.ModifiedDate))}</i>}
              </Box>
            </Box>

            {/* Review Content */}
            <Box sx={(theme) => ({ [theme.breakpoints.only("xs")]: { display: "none" } })}>
              <ReviewContent {...props} data={data} />
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
