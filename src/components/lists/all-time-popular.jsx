import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../home/popular-lists.jsx";
import { Link } from "react-router-dom";
import FilmCard from "../common/film-card.jsx";

const FilmCardsStackedTen = () => {
  return (
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
  );
};

const AllTimePopular = (props) => {
  const { title, username, year } = props;
  return (
    <Box component={Link} to={"/u/hiep/lists/id123"} mt={2} mb={2}>
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
      <Typography variant={"body1"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
        {title}
      </Typography>
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

export const ListAllTime = (props) => {
  return (
    <Box mb={2}>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"} mt={5}>
        all-time popular
      </Typography>
      <Divider />
      <Grid container spacing={2} color={"#9ab"}>
        {Array.from({ length: 2 }).map((i, idx) => (
          <Grid key={idx} item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center" }}>
            <AllTimePopular title={"Lorem Ipsum is simply dummy text"} username={"Hoan"} year={"4"} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
