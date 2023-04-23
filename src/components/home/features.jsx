import { Box, Card, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft.js";
import StarRateIcon from "@mui/icons-material/StarRate.js";
import EventNoteIcon from "@mui/icons-material/EventNote.js";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp.js";

const FeatureCard = (props) => {
  const { children, content } = props;
  return (
    <Box
      component={Card}
      sx={{
        width: "100%",
        height: 100,
        ":hover": { background: "#00c030" },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxShadow: 0,
      }}
    >
      <Box px={2}>{children}</Box>
      <Box sx={{ flexGrow: 1 }} pr={2}>
        <Typography variant={"body1"} fontSize={{ sm: 15, xs: 14 }}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export const Features = () => {
  return (
    <>
      <Typography variant={"h6"} mt={5} textAlign={"center"}>
        FilmJournal lets you...
      </Typography>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={12} md={6} lg={4}>
          <FeatureCard content={"Keep track of every film you’ve ever watched (or just start from the day you join)"}>
            <VisibilityIcon sx={{ fontSize: 50 }} />
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FeatureCard content={"Show some love for your favorite films, lists and reviews with a “like”"}>
            <FavoriteIcon sx={{ fontSize: 50 }} />
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FeatureCard content={"Write and share reviews, and follow friends and other members to read theirs"}>
            <FormatAlignLeftIcon sx={{ fontSize: 50 }} />
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FeatureCard content={"Rate each film on a five-star scale (with halves) to record and share your reaction"}>
            <StarRateIcon sx={{ fontSize: 50 }} />
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FeatureCard content={"Keep a diary of your film watching as well as adding films to your watch list"}>
            <EventNoteIcon sx={{ fontSize: 50 }} />
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FeatureCard content={"Compile and share lists of films on any topic and keep a watchlist of films to see"}>
            <GridViewSharpIcon sx={{ fontSize: 50 }} />
          </FeatureCard>
        </Grid>
      </Grid>
    </>
  );
};
