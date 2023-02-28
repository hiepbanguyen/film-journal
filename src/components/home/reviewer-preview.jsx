import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import FilmCard from "./film-card";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite.js";

export const PopularReviewers = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          popular reviewers
        </Typography>
        <Typography variant={"caption"} mt={5}>
          MORE
        </Typography>
      </Box>
      <Divider variant="fullWidth" color={"#fff"} />
      <Box>
        {Array.from({ length: 5 }).map((i, idx) => (
          <ListPreview
            key={idx}
            title={"Lorem Ipsum is simply dummy text"}
            username={"Bá Hiệp Nguyễn"}
            filmCount={400}
            reviewCount={50}
          />
        ))}
      </Box>
    </>
  );
};

export default function ListPreview(props) {
  const { username, filmCount, reviewCount } = props;
  return (
    <>
      <Box display={"flex"} alignItems={"center"} mt={2} mb={1}>
        <Avatar sx={{ width: 40, height: 40 }}>H</Avatar>
        <Box>
          <Typography variant={"body1"} ml={1} fontWeight={"bold"}>
            {username}
          </Typography>
          <Typography variant={"caption"} ml={1}>
            {filmCount}
            {" films, "}
            {reviewCount}
            {" reviews."}
          </Typography>
        </Box>
      </Box>
      <Divider variant={"fullWidth"} color={"#fff"} />
    </>
  );
}
