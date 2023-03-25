import { Avatar, Box, Divider, Grid, Rating, Typography } from "@mui/material";
import FilmCard from "./film-card";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";

export const PopularReviews = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          popular reviews this week
        </Typography>
        <Typography variant={"caption"} mt={5}>
          MORE
        </Typography>
      </Box>
      <Divider variant="fullWidth" />
      <Box>
        {Array.from({ length: 6 }).map((i, idx) => (
          <ReviewPreview
            key={idx}
            title={"A film title"}
            releasedYear={2022}
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the" +
              " leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
            username={"Bá Hiệp Nguyễn"}
            ratings={4}
            likeCount={10}
            dislikeCount={0}
            commentCount={50}
          />
        ))}
      </Box>
    </>
  );
};

export default function ReviewPreview(props) {
  const { title, releasedYear, content, username, ratings, likeCount, dislikeCount, commentCount } = props;
  return (
    <>
      <Grid container spacing={1} my={3}>
        <Grid item xs={2}>
          <FilmCard />
        </Grid>
        <Grid item xs={10}>
          <Typography variant={"h5"}>
            <strong style={{ color: "#fff" }}>{title}</strong> <span style={{ fontSize: 17 }}>{releasedYear}</span>
          </Typography>
          <Box display={"flex"} alignItems={"center"} my={1}>
            <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
            <Typography variant={"body2"} ml={1} fontWeight={600}>
              {username}
            </Typography>
            <Rating value={3.5} size={"medium"} readOnly sx={{ mx: 2 }} />
            <ChatBubbleIcon fontSize={"small"} />
            <Typography variant={"body2"} ml={0.5}>
              {commentCount}
            </Typography>
          </Box>
          <Typography fontSize={15}>{content}</Typography>
          <Box display={"flex"} alignItems={"center"} mt={1}>
            <ThumbUpIcon fontSize={"small"} />
            <Typography variant={"body2"} ml={1} mr={2}>
              {likeCount}
            </Typography>
            <ThumbDownIcon fontSize={"small"} />
            <Typography variant={"body2"} ml={1}>
              {dislikeCount}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider variant={"fullWidth"} />
    </>
  );
}
