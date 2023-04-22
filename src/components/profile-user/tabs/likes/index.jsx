import { Box, Button, Divider, Grid } from "@mui/material";
import * as React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PaginationBase from "../../../common/pagination-base";
import FilmCard from "../../../common/film-card";
import ReviewPreview from "../../../common/review-preview";
import ListPreview from "../../../home/list-preview";

export default function ProfileLikes() {

    let dataListLikedFilm = {
        totalPage: 2,
        total: 37,
        pageIndex: 1,
        pageSize: 20,
        list: []
    }
    let dataListLikedReview = {
        totalPage: 2,
        total: 12,
        pageIndex: 1,
        pageSize: 6,
        list: []
    }
    let dataListLikedList = {
        totalPage: 2,
        total: 18,
        pageIndex: 1,
        pageSize: 10,
        list: []
    }

    const [pageIndexFilm, setPageIndexFilm] = React.useState(dataListLikedFilm.pageIndex)
    const [pageIndexReview, setPageIndexReview] = React.useState(dataListLikedReview.pageIndex)
    const [pageIndexList, setPageIndexList] = React.useState(dataListLikedList.pageIndex)

    const handleChangePageFilm = (newPage) => {
        console.log('New page film', newPage)
        setPageIndexFilm(newPage)
    }
    const handleChangePageReview = (newPage) => {
        console.log('New page review', newPage)
        setPageIndexReview(newPage)
    }
    const handleChangePageList = (newPage) => {
        console.log('New page list', newPage)
        setPageIndexList(newPage)
    }

  return (
    <Box sx={{ margin: "24px 0", color: "#9ab" }}>
      <Grid container columns={12} columnSpacing={6} rowSpacing={6}>
        <Grid item xs={12} md={3.5}>
          <Box sx={{ marginBottom: "12px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>Films</Box>
            </Box>
            <Divider></Divider>
          </Box>
          <Box sx={{height: '24px'}}>
            <PaginationBase totalPage={dataListLikedFilm.totalPage} pageIndex={pageIndexFilm} onChange={handleChangePageFilm}></PaginationBase>
          </Box>
          <Grid container columns={12} rowSpacing={1}>
            {Array.from({ length: 20 }).map((i, index) => (
              <Grid key={index} item xs={4} sm={2} md={4}>
                <FilmCard></FilmCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ marginBottom: "12px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>Reviews</Box>
            </Box>
            <Divider></Divider>
          </Box>

          <Box sx={{height: '24px'}}>
            <PaginationBase totalPage={dataListLikedReview.totalPage} pageIndex={pageIndexReview} onChange={handleChangePageReview}></PaginationBase>
          </Box>

          <Box>
            {Array.from({ length: 6 }).map((i, idx) => (
              <Box mb={4} key={idx}>
                <ReviewPreview
                  title={"A film title"}
                  releasedYear={2022}
                  content={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the"
                  }
                  username={"bahiepnguyen"}
                  fullname={"Nguyen Ba Hiep"}
                  ratings={4}
                  likeCount={10}
                  commentCount={50}
                  reviewDate={new Date()}
                />
                <Divider></Divider>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={3.5}>
          <Box sx={{ marginBottom: "12px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>Lists</Box>
            </Box>
            <Divider></Divider>
          </Box>

          <Box sx={{height: '24px'}}>
            <PaginationBase totalPage={dataListLikedList.totalPage} pageIndex={pageIndexList} onChange={handleChangePageList}></PaginationBase>
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