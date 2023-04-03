import { Box, Divider, Grid, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "../../../common/film-card.jsx";
import ListIcon from "@mui/icons-material/List";
import { WatchList } from "./watchlist.jsx";
import { RecentList } from "./recent-list.jsx";
import ListFollow from "./following.jsx";
import ProfileTags from "./profile-tags.jsx";
import CompiledRatings from "../../../common/compiled-ratings.jsx";
import Activity from "./activity.jsx";
import { PopularReview, RecentReview } from "./reviews.jsx";

export const ProfileTab = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={7}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
            <Typography variant={"body1"} textTransform={"uppercase"} mt={5} color="#fff">
              favorite films
            </Typography>
          </Box>
          <Divider variant="fullWidth" />
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
          <Divider variant="fullWidth" />
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
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ProfileTags />
            </Grid>
            <Grid item xs={6}>
              <ListFollow />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4} sx={{ color: "#fff", mt: 4 }}>
          <CompiledRatings />
          <WatchList />
          <RecentList title={"haon1231asdzxcasdasdasdasdasdas"} films={12} />
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
            <Typography variant={"body1"} textTransform={"uppercase"} mt={5} color="#fff">
              activity
            </Typography>
          </Box>
          <Divider variant="fullWidth" />
          <Activity />
        </Grid>
      </Grid>
    </>
  );
};
