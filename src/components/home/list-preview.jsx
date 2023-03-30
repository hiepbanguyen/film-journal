import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import FilmCard from "../common/film-card.jsx";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

export const PopularLists = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"}>
          popular lists
        </Typography>
        <Typography variant={"caption"}>MORE</Typography>
      </Box>
      <Divider variant="fullWidth" />
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

export const FilmCardsStackedFive = () => {
  return (
    <Link to={"/hiep/list/id123"}>
      <Box
        display={"flex"}
        width={289}
        sx={{
          mb: 2,
          "&:hover": {
            border: "2px solid #00e054",
            borderRadius: 1.5,
          },
        }}
      >
        {Array.from({ length: 5 }).map((i, idx) => (
          <Box key={idx} position={"relative"} zIndex={10 - idx} left={`-${idx * (50 / 5)}%`}>
            <FilmCard list={true} shadow={idx !== 4} />
          </Box>
        ))}
      </Box>
    </Link>
  );
};

const FilmCardsStackedTen = () => {
  return (
    <Link to={"/"}>
      <Box
        display={"flex"}
        width={555}
        sx={{
          mb: 2,
          "&:hover": {
            border: "2px solid #00e054",
            borderRadius: 1.5,
          },
        }}
      >
        {Array.from({ length: 10 }).map((i, idx) => (
          <Box key={idx} position={"relative"} zIndex={10 - idx} left={`-${idx * 5}%`}>
            <FilmCard list={true} shadow={idx !== 9} />
          </Box>
        ))}
      </Box>
    </Link>
  );
};

export const ListPreviewHorizontal = (props) => {
  const { title, username, favoriteCount, commentCount, films, description } = props;

  return (
    <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} mt={3} mb={5}>
      <Box>
        <FilmCardsStackedFive />
      </Box>
      <Box ml={{ sm: 3 }}>
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
          <ChatBubbleIcon fontSize={"small"} />
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
        <FilmCardsStackedFive />
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

export const CrewList = (props) => {
  const { title } = props;
  return (
    <Box mt={2} mb={2}>
      <FilmCardsStackedFive />
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
          <Typography variant={"body1"} marginLeft={3}>
            {title}
          </Typography>
          <Typography variant={"body1"} marginLeft={2} color={"#9dbad7"}>
            {year}
          </Typography>
        </Box>
        <Box alignItems={"center"} marginLeft={3}>
          <Box display={"flex"} mt={0.5}>
            <Typography variant={"body2"}>
              {Array.from({ length: ratings }).map((i, idx) => (
                <StarIcon sx={{ color: "#00c030" }} fontSize={"small"} key={idx} />
              ))}
            </Typography>
            <Typography variant={"body1"} marginLeft={2} color={"#fff"}>
              {watchedAt}
            </Typography>
          </Box>
          <Typography variant={"body2"} mr={1} mt={0.5}>
            {description}
          </Typography>
          <Box display={"flex"} mt={1}>
            <FavoriteIcon fontSize={"small"} />
            <Typography variant={"body2"} marginLeft={1} color={"#e4d5d5"}>
              {" "}
              Like review
            </Typography>
            <Typography variant={"body2"} marginLeft={1} color={"#fff"}>
              {" "}
              {`${favoriteCount}`} likes
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const AllTimeList = (props) => {
  const { title, username, year } = props;
  return (
    <Box mt={2} mb={2}>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.not("xs")]: {
            display: "none",
          },
        })}
      >
        <FilmCardsStackedFive />
      </Box>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.only("xs")]: {
            display: "none",
          },
        })}
      >
        <FilmCardsStackedTen />
      </Box>
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
    <Box
      mt={2}
      sx={(theme) => ({
        [theme.breakpoints.only("xs")]: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      })}
    >
      <FilmCardsStackedFive />
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
        <ChatBubbleIcon fontSize={"small"} />
        <Typography variant={"body2"} ml={0.5}>
          {commentCount}
        </Typography>
      </Box>
    </Box>
  );
}
