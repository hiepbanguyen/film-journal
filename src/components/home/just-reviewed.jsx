import { Box, Divider, Grid, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "./film-card.jsx";

export const JustReviewed = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          Just Reviewed...
        </Typography>
        <Typography variant={"body2"} mt={5}>
          1,249,135,774 films watched
        </Typography>
      </Box>
      <Divider variant="fullWidth" color={"#fff"} />
      <Grid container mt={1} spacing={1}>
        {Array.from({ length: 12 }).map((i, idx) => (
          <Grid item key={idx} lg={1} sm={2} xs={3}>
            <FilmCard size={"small"} />
          </Grid>
        ))}
      </Grid>
      <Typography variant={"h5"} mt={5} textAlign={"center"}>
        Write and share reviews. Compile your own lists. Share your life in film.
      </Typography>
      <Typography variant={"body1"} textAlign={"center"} mb={3}>
        Below are some popular reviews and lists from this week.{" "}
        <Link href={"/sign-up/"} color={"inherit"}>
          <strong>Sign up</strong>
        </Link>{" "}
        to create your own.
      </Typography>
    </>
  );
};
