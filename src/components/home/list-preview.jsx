import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import FilmCard from "./film-card";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite.js";

export const PopularLists = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          popular lists
        </Typography>
        <Typography variant={"caption"} mt={5}>
          MORE
        </Typography>
      </Box>
      <Divider variant="fullWidth" color={"#fff"} />
      <Grid container spacing={1}>
        {Array.from({ length: 4 }).map((i, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={12}>
            <ListPreview
              title={"Lorem Ipsum is simply dummy text"}
              username={"Bá Hiệp Nguyễn"}
              favoriteCount={4}
              commentCount={50}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const FilmCardsStacked = () => {
  return (
    <Box position={"relative"} height={160}>
      {Array.from({ length: 5 }).map((i, idx) => (
        <Box key={idx} position={"absolute"} zIndex={10 - idx} left={`${idx * 15}%`}>
          <FilmCard elevation={3} />
        </Box>
      ))}
    </Box>
  );
};

export const ListPreviewHorizontal = (props) => {
  const { title, username, favoriteCount, commentCount, films, description } = props;

  return (
    <Box display={"flex"} my={2}>
      <Box width={"50%"}>
        <FilmCardsStacked />
      </Box>
      <Box width={"50%"}>
        <Typography variant={"body2"}>{title}</Typography>
        <Box display={"flex"} alignItems={"center"} my={1}>
          <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {username}
          </Typography>
          <Typography variant={"body2"} ml={0.5} mr={0.8}>
          {`${films}`} films
          </Typography>
          <FavoriteIcon fontSize={"small"} />
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {favoriteCount}
          </Typography>
          <CommentIcon fontSize={"small"} />
          <Typography variant={"body2"} ml={0.5}>
            {commentCount}
          </Typography>
        </Box>
        <Typography variant={"body2"}>{description}</Typography>
      </Box>
    </Box>
  );
};

export const ListPreviewVertical = (props) => {
  const { title, username, films } = props;

  return (
    <Box my={2}>
      <Box width={"100%"}>
        <FilmCardsStacked />
      </Box>
      <Box width={"100%"}>
        <Typography variant={"body2"}>{title}</Typography>
        <Box display={"flex"} alignItems={"center"} my={1}>
          <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {username}
          </Typography>
          <Typography variant={"body2"} ml={0.5} mr={0.8}>
          {`${films}`} films
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default function ListPreview(props) {
  const { title, username, favoriteCount, commentCount } = props;
  return (
    <Box mt={2} mb={2} ml={{ md: 0, xs: "5%" }}>
      <FilmCardsStacked />
      <Typography variant={"body2"}>{title}</Typography>
      <Box display={"flex"} alignItems={"center"} my={1}>
        <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
        <Typography variant={"body2"} ml={0.5} mr={1}>
          {username}
        </Typography>
        <FavoriteIcon fontSize={"small"} />
        <Typography variant={"body2"} ml={0.5} mr={1}>
          {favoriteCount}
        </Typography>
        <CommentIcon fontSize={"small"} />
        <Typography variant={"body2"} ml={0.5}>
          {commentCount}
        </Typography>
      </Box>
    </Box>
  );
}
