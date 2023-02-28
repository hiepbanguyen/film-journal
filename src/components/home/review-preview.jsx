import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import FilmCard from "./film-card";
import StarIcon from "@mui/icons-material/Star";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export const PopularReviews = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          popular reviews this week
        </Typography>
        <Typography variant={"caption"} mt={5}>
          MORE
        </Typography>
      </Box>
      <Divider variant="fullWidth" color={"#fff"} />
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
      {" "}
      <Grid container spacing={1} mt={1} mb={2}>
        <Grid item xs={2}>
          <FilmCard />
        </Grid>
        <Grid item xs={10}>
          <Typography variant={"h6"}>
            <strong>{title}</strong> {releasedYear}
          </Typography>
          <Box display={"flex"} alignItems={"center"} my={1}>
            <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
            <Typography variant={"body2"} ml={0.5}>
              {username}
            </Typography>
            <Box mx={2}>
              {Array.from({ length: ratings }).map((i, idx) => (
                <StarIcon sx={{ color: "#00c030" }} fontSize={"small"} key={idx} />
              ))}
            </Box>
            <CommentIcon fontSize={"small"} />
            <Typography variant={"body2"} ml={0.5}>
              {commentCount}
            </Typography>
          </Box>
          <Typography variant={"body1"}>{content}</Typography>
          <Box display={"flex"} alignItems={"center"} mt={1}>
            <ThumbUpIcon />
            <Typography variant={"body2"} ml={1} mr={2}>
              {likeCount}
            </Typography>
            <ThumbDownIcon />
            <Typography variant={"body2"} ml={1}>
              {dislikeCount}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider variant={"fullWidth"} color={"#fff"} />
    </>
  );
}
