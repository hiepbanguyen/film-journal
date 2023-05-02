import { Box, Divider, Grid, Typography } from "@mui/material";
import * as React from "react";
import { UserLikeFilms } from "./films.jsx";
import { useParams } from "react-router-dom";
import { UserLikeReviews } from "./reviews.jsx";
import { UserLikeLists } from "./lists.jsx";

const dataListLikedFilm = {
  totalPage: 2,
  total: 37,
  pageIndex: 1,
  pageSize: 20,
  list: [],
};
const dataListLikedReview = {
  totalPage: 2,
  total: 12,
  pageIndex: 1,
  pageSize: 6,
  list: [],
};
const dataListLikedList = {
  totalPage: 2,
  total: 18,
  pageIndex: 1,
  pageSize: 10,
  list: [],
};

export default function ProfileLikes() {
  const { username } = useParams();
  const [pageIndexReview, setPageIndexReview] = React.useState(dataListLikedReview.pageIndex);
  const [pageIndexList, setPageIndexList] = React.useState(dataListLikedList.pageIndex);

  const handleChangePageReview = (newPage) => {
    console.log("New page review", newPage);
    setPageIndexReview(newPage);
  };
  const handleChangePageList = (newPage) => {
    console.log("New page list", newPage);
    setPageIndexList(newPage);
  };

  return (
    <Box sx={{ margin: "24px 0", color: "#9ab" }}>
      <Grid container columns={12} columnSpacing={6} rowSpacing={6}>
        <Grid item xs={12} lg={3.5}>
          <Typography>Films</Typography>
          <Divider />
          <UserLikeFilms username={username} />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Typography>Reviews</Typography>
          <Divider />
          <UserLikeReviews username={username} />
        </Grid>
        <Grid item xs={12} lg={3.5}>
          <Typography>Lists</Typography>
          <Divider />
          <UserLikeLists username={username} />
        </Grid>
      </Grid>
    </Box>
  );
}
