import { Avatar, Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import FilmCard from "./film-card";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import StarIcon from "@mui/icons-material/Star";


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

export const FilmCardsStacked = () => {
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

const FilmCardsStacked2 = () => {
  return (
    <Box position={"relative"} height={160}>
      {Array.from({ length: 10 }).map((i, idx) => (
        <Box key={idx} position={"absolute"} zIndex={10 - idx} left={`${idx * 9}%`}>
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

export const ListShowdown = (props) => {
  const { title, description } = props;
  return (
    <Box mt={2} mb={2} ml={{ md: 0, xs: "5%" }}>
      <Grid container mt={5} spacing={1}>
        {Array.from({ length: 1 }).map((i, idx) => (
          <Grid item key={idx} xs={12}>
            <FilmCard size={"medium"} />
          </Grid>
        ))}
      </Grid>
      <Typography variant={"body2"}>{title}</Typography>
      <Box display={"flex"} alignItems={"center"} my={1}>
        <Typography variant={"body2"} ml={0.5}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export const CrewList = (props) => {
  const { title } = props;
  return (
    <Box mt={2} mb={2} ml={{ md: 0, xs: "5%" }}>
      <FilmCardsStacked />
      <Typography variant={"body2"}>{title}</Typography>
    </Box>
  );
};

export const RecentReviewFilm = (props) => {
  const { title, year, ratings, watchedAt, description, favoriteCount } = props;

  return (
    <Box display={"flex"} marginTop={3}>
      <Box width={"20%"}>
        <FilmCard />
      </Box>
      <Box width={"80%"}>
        <Box display={"flex"}>
          <Typography variant={"body1"} marginLeft={3}>{title}</Typography>
          <Typography variant={"body1"} marginLeft={2} color={"#9dbad7"}>{year}</Typography>
        </Box>
        <Box alignItems={"center"} marginLeft={3}>
          <Box display={"flex"} mt={0.5}>
            <Typography variant={"body2"}>
              {Array.from({ length: ratings }).map((i, idx) => (
                <StarIcon sx={{ color: "#00c030" }} fontSize={"small"} key={idx} />
              ))}
            </Typography>
            <Typography variant={"body1"} marginLeft={2} color={"#fff"}>{watchedAt}</Typography>
          </Box>
          <Typography variant={"body2"} mr={1} mt={0.5}>
            {description}
          </Typography>
          <Box display={"flex"} mt={1}>
            <FavoriteIcon fontSize={"small"} />
            <Typography variant={"body2"} marginLeft={1} color={"#e4d5d5"}> Like review</Typography>
            <Typography variant={"body2"} marginLeft={1} color={"#fff"}> {`${favoriteCount}`} likes</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const AllTimeList = (props) => {
  const { title, username, year } = props;
  return (
    <Box mt={2} mb={2} ml={{ md: 0, xs: "5%" }}>
      <FilmCardsStacked2 />
      <Typography variant={"body2"}>{title}</Typography>
      <Box display={"flex"} alignItems={"center"} my={1}>
        <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
        <Typography variant={"body2"} ml={0.5} mr={1}>
          Created by {`${username}`}
        </Typography>
        <Typography variant={"body2"} ml={0.5} mr={1}>
          {`${year}`} years
        </Typography>
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
