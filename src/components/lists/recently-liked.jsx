import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import ListPreview from "../home/list-preview";
import ReviewPreview from "../home/review-preview";

const Root = styled("div")({
  flexGrow: 1,
  padding: 2,
  marginTop: 30
});

const useStyles = makeStyles((theme) => ({
  divider: {
    width: '90%',
  },
}));

const RecentlyLike = () => {
  const classes = useStyles();

  return (
    <Root>
      <Container maxWidth="lg">
       
        <Grid container spacing={1} color={"#fff"}>
          <Grid item xs={8}> 
          <Typography variant="h11" color="#abc">
        RECENTLY LIKED
        </Typography>
          <Divider className={classes.divider} color={"#fff"} />
        {Array.from({ length: 10 }).map((i, idx) => (
          <Grid key={idx} item xs={6}>
            <ListPreview
              title={"Lorem Ipsum is simply dummy text"}
              username={"Bá Hiệp Nguyễn"}
              filmCount={400}
              reviewCount={50}
            />
          </Grid>
        ))}
        </Grid>
        <Grid item xs={4}> 
        <Typography variant="h11" color="#abc">
        RECENTLY LIKED
        </Typography>
        <Divider className={classes.divider} color={"#fff"} />
        {Array.from({ length: 10 }).map((i, idx) => (
          <Grid key={idx} item xs={6}>
            <ListPreview
              title={"Lorem Ipsum is simply dummy text"}
              username={"Bá Hiệp Nguyễn"}
              filmCount={400}
              reviewCount={50}
            />
          </Grid>
        ))}
        </Grid>
      </Grid>
      </Container>
    </Root >
  );
};
export default RecentlyLike;