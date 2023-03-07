import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Popular from "./popular.jsx";
import RecentlyLike from "./recently-liked.jsx";

const Root = styled("div")({
  flexGrow: 1,
  padding: 2,
});

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
    <Root>
      <Container maxWidth="lg">
        <div className={classes.container}>
          <Typography variant="h5" color="#abc" marginTop="30px">{tab}</Typography>
          <Button style={{ color: "#fff", backgroundColor: "#175f70", fontSize: "13px", marginTop: "15px" }} variant="contained">Start your own list</Button>
        </div>
      </Container>
      <Popular />
      <RecentlyLike />
    </Root >
  );
};
export default Lists;