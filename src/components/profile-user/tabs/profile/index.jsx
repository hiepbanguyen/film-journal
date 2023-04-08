import { Box, Divider, Grid, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "../../../common/film-card.jsx";
import ListIcon from "@mui/icons-material/List";
import { WatchList } from "./watchlist.jsx";
import { RecentList } from "./recent-list.jsx";
import ListFollow from "./following.jsx";
import CompiledRatings from "../../../common/compiled-ratings.jsx";
import Activity from "./activity.jsx";
import { PopularReview, RecentReview } from "./reviews.jsx";

export const ProfileTab = () => {
  return (
    <Grid container spacing={5} sx={{ color: "#fff", mt: 1 }}>
      <Grid item xs={8}>
        <Typography variant={"body1"} textTransform={"uppercase"} color="#fff">
          favorite films
        </Typography>
        <Divider />
        <Grid container mt={1} spacing={2.9}>
          {Array.from({ length: 4 }).map((i, idx) => (
            <Grid item key={idx}>
              <FilmCard size={140} />
            </Grid>
          ))}
        </Grid>

        <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
          <Typography variant={"body1"} textTransform={"uppercase"} mt={5} color="#fff">
            recent likes
          </Typography>
        </Box>
        <Divider />
        <Grid container mt={1} spacing={2.9}>
          {Array.from({ length: 4 }).map((i, idx) => (
            <Grid item key={idx}>
              <FilmCard size={140} />
              <Rating defaultValue={3} readOnly />
              <ListIcon sx={{ color: "#8ea3c9", marginLeft: 1 }} fontSize={"small"} />
            </Grid>
          ))}
        </Grid>
        <RecentReview />
        <PopularReview />
        {/*<Grid container spacing={3}>*/}
        {/*  <Grid item xs={6}>*/}
        {/*    <ProfileTags />*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={6}>*/}
        {/*    <ListFollow />*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
      </Grid>
      <Grid item xs={4}>
        <CompiledRatings />
        <ListFollow />
        <WatchList />
        <RecentList title={"haon1231asdzxcasdasdasdasdasdas"} films={12} />
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
          <Typography variant={"body1"} textTransform={"uppercase"} mt={5} color="#fff">
            activity
          </Typography>
        </Box>
        <Divider />
        <Activity />
      </Grid>
    </Grid>
  );
};
