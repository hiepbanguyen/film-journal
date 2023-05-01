import { Box, Divider, Grid, Stack } from "@mui/material";
import * as React from "react";
import PaginationBase from "../../../common/pagination-base";
import FilmCard from "../../../common/film-card";
import ReviewPreview from "../../../common/review-preview";
import ListPreview from "../../../home/popular-lists.jsx";

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
  const [pageIndexFilm, setPageIndexFilm] = React.useState(dataListLikedFilm.pageIndex);
  const [pageIndexReview, setPageIndexReview] = React.useState(dataListLikedReview.pageIndex);
  const [pageIndexList, setPageIndexList] = React.useState(dataListLikedList.pageIndex);

  const handleChangePageFilm = (newPage) => {
    console.log("New page film", newPage);
    setPageIndexFilm(newPage);
  };
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
          <Box sx={{ marginBottom: "12px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>Films</Box>
            </Box>
            <Divider></Divider>
          </Box>
          <Box sx={{ height: "24px" }}>
            <PaginationBase
              totalPage={dataListLikedFilm.totalPage}
              pageIndex={pageIndexFilm}
              onChange={handleChangePageFilm}
            />
          </Box>
          <Grid container columns={12} rowSpacing={1}>
            {Array.from({ length: 20 }).map((i, index) => (
              <Grid key={index} item xs={4} sm={2} lg={4}>
                <FilmCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Box sx={{ marginBottom: "12px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>Reviews</Box>
            </Box>
            <Divider></Divider>
          </Box>

          <Box sx={{ height: "24px" }}>
            <PaginationBase
              totalPage={dataListLikedReview.totalPage}
              pageIndex={pageIndexReview}
              onChange={handleChangePageReview}
            />
          </Box>

          <Stack color={"#9ab"} mt={1}>
            {Array.from({ length: 5 }).map((i, idx) => (
              <ReviewPreview
                key={idx}
                title={"A film title"}
                releasedYear={2022}
                content={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the" +
                  " leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                }
                ratings={4}
                likeCount={10}
                commentCount={50}
                reviewDate={new Date()}
                notShowUser={true}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={3.5}>
          <Box sx={{ marginBottom: "12px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>Lists</Box>
            </Box>
            <Divider></Divider>
          </Box>

          <Box sx={{ height: "24px" }}>
            <PaginationBase
              totalPage={dataListLikedList.totalPage}
              pageIndex={pageIndexList}
              onChange={handleChangePageList}
            />
          </Box>

          <Box>
            {Array.from({ length: 6 }).map((i, idx) => (
              <Box mb={4} key={idx}>
                <ListPreview
                  title={"Lorem Ipsum is simply dummy text"}
                  fullname={"Bá Hiệp Nguyễn"}
                  username={"bahiep"}
                  favoriteCount={4}
                  commentCount={50}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
