import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../home/popular-lists.jsx";
import { Link } from "react-router-dom";
import FilmCard from "../common/film-card.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import React from "react";

const FilmCardsStackedTen = ({ posters }) => {
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
          <FilmCard list={true} shadow={idx !== 9} src={posters && posters[idx]?.Poster_path} />
        </Box>
      ))}
    </Box>
  );
};

const AllTimePopular = (props) => {
  const { title, username, fullname, userAvatar, films, posters, listLink } = props;
  return (
    <Box component={Link} to={listLink ?? ""} mt={2} mb={2}>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.not("xs")]: {
            display: "none",
          },
        })}
      >
        <FilmCardsStackedFive posters={posters}/>
      </Box>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.only("xs")]: {
            display: "none",
          },
        })}
      >
        <FilmCardsStackedTen posters={posters}/>
      </Box>
      <Typography variant={"body1"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
        {title}
      </Typography>
      <Box display={"flex"} alignItems={"center"} my={1}>
        <Avatar sx={{ width: 25, height: 25 }} src={userAvatar ?? ""}/>
        <Typography variant={"body2"} ml={0.5} mr={1}>
          Created by {`${fullname ?? username}`}
        </Typography>
        <Typography variant={"body2"} ml={0.5} mr={1}>
          {`${films}`} films
        </Typography>
      </Box>
    </Box>
  );
};

export const ListAllTime = () => {
  const [{ data, loading, error }, refetch] = useAxios(`Lists/TopLike`);

  return (
    <Box mb={2}>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"} mt={5}>
        all-time popular
      </Typography>
      <Divider/>

      {loading ? (
        <Loading paddingY={10}/>
      ) : (
        <Grid container spacing={2} color={"#9ab"}>            {data.map((i, idx) => (
          <Grid key={idx} item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center" }}>
            <AllTimePopular
              title={i.ListName ?? ""}
              fullname={i.User?.FullName ?? ""}
              username={i.User?.UserName ?? ""}
              userAvatar={i.User?.Avatar ?? ""}
              films={i.Total ?? 0}
              posters={i.List}
              listLink={`/u/${i.User?.UserName}/lists/${i.ListID}`}
            />
          </Grid>
        ))}
        </Grid>
      )}
    </Box>
  );
};
