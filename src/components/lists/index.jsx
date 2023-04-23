import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import WeeklyPopular from "./weekly-popular.jsx";
import RecentlyLike from "./recently-liked.jsx";
import { MostEngaged } from "./most-engaged.jsx";
import { ListAllTime } from "./all-time-popular.jsx";
import { Link } from "react-router-dom";
import { MonthlyPopular } from "./monthly-popular.jsx";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Lists = () => {
  const [tab, setTab] = React.useState("Collect, curate, and share. Lists are the perfect way to group films.");
  const classes = useStyles();

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <div className={classes.container}>
        <Typography variant="h5" color="#abc" marginTop="30px">
          {tab}
        </Typography>
        <Link to={"new"}>
          <Button
            sx={{ color: "#fff", backgroundColor: "#175f70", fontSize: "13px", marginTop: "15px" }}
            variant="contained"
          >
            Start your own list
          </Button>
        </Link>
      </div>
      <WeeklyPopular />
      <Grid container spacing={5} color={"#9ab"} my={1}>
        <Grid item xs={12} lg={8}>
          <RecentlyLike />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MonthlyPopular />
        </Grid>
      </Grid>
      <MostEngaged />
      <ListAllTime />
    </Container>
  );
};
export default Lists;
