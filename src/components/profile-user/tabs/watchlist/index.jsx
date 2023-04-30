import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import Grid from "@mui/material/Grid";
import PaginationBase from "../../../common/pagination-base";
import SearchForm from "../../../common/search-form.jsx";

export const UserWatchList = (props) => {
  const { username } = useParams();

  const handleChangePage = (newPage) => {
    console.log("newPage: ", newPage);
  };
  let data = {
    total: 24,
    pageIndex: 1,
    pageSize: 24,
    totalPage: 1,
    list: [
      {
        id: 1,
        thumbnail: "https://picsum.photos/200/300",
        totalLikes: 12300,
        totalReviews: 3454,
        isLiked: true,
        isWatched: true,
      },
      {
        id: 2,
        thumbnail: "https://picsum.photos/201/300",
        totalLikes: 445,
        totalReviews: 5567,
        isLiked: false,
        isWatched: true,
      },
      {
        id: 3,
        thumbnail: "https://picsum.photos/202/300",
        totalLikes: 465,
        totalReviews: 567,
        isLiked: false,
        isWatched: false,
      },
      {
        id: 4,
        thumbnail: "https://picsum.photos/203/300",
        totalLikes: 667,
        totalReviews: 557,
        isLiked: false,
        isWatched: true,
      },
      {
        id: 5,
        thumbnail: "https://picsum.photos/200/301",
        totalLikes: 1300,
        totalReviews: 3454,
        isLiked: false,
        isWatched: false,
      },
      {
        id: 6,
        thumbnail: "https://picsum.photos/201/302",
        totalLikes: 245,
        totalReviews: 567,
        isLiked: false,
        isWatched: true,
      },
      {
        id: 7,
        thumbnail: "https://picsum.photos/202/303",
        totalLikes: 645,
        totalReviews: 5567,
        isLiked: false,
        isWatched: true,
      },
      {
        id: 8,
        thumbnail: "https://picsum.photos/203/304",
        totalLikes: 5567,
        totalReviews: 56757,
        isLiked: false,
        isWatched: false,
      },
      {
        id: 9,
        thumbnail: "https://picsum.photos/201/301",
        totalLikes: 300,
        totalReviews: 3454,
        isLiked: true,
        isWatched: true,
      },
      {
        id: 10,
        thumbnail: "https://picsum.photos/201/302",
        totalLikes: 25,
        totalReviews: 5667,
        isLiked: false,
        isWatched: false,
      },
      {
        id: 11,
        thumbnail: "https://picsum.photos/202/300",
        totalLikes: 5,
        totalReviews: 67,
        isLiked: false,
        isWatched: true,
      },
      {
        id: 12,
        thumbnail: "https://picsum.photos/203/303",
        totalLikes: 57,
        totalReviews: 557,
        isLiked: false,
        isWatched: true,
      },
      {
        id: 13,
        thumbnail: "https://picsum.photos/203/303",
        totalLikes: 567567,
        totalReviews: 56757,
        isLiked: false,
        isWatched: false,
      },
      {
        id: 14,
        thumbnail: "https://picsum.photos/200/304",
        totalLikes: 12300,
        totalReviews: 32454,
        isLiked: true,
        isWatched: true,
      },
      {
        id: 15,
        thumbnail: "https://picsum.photos/201/304",
        totalLikes: 23445,
        totalReviews: 567567,
        isLiked: false,
        isWatched: false,
      },
      {
        id: 16,
        thumbnail: "https://picsum.photos/202/303",
        totalLikes: 453645,
        totalReviews: 567567,
        isLiked: false,
        isWatched: true,
      },
      {
        id: 17,
        thumbnail: "https://picsum.photos/203/302",
        totalLikes: 567567,
        totalReviews: 56757,
        isLiked: false,
        isWatched: false,
      },
      {
        id: 18,
        thumbnail: "https://picsum.photos/203/301",
        totalLikes: 567567,
        totalReviews: 56757,
        isLiked: true,
        isWatched: true,
      },
      {
        id: 19,
        thumbnail: "https://picsum.photos/200/304",
        totalLikes: 12300,
        totalReviews: 32454,
        isLiked: true,
        isWatched: true,
      },
      {
        id: 20,
        thumbnail: "https://picsum.photos/201/304",
        totalLikes: 23445,
        totalReviews: 567567,
        isLiked: false,
        isWatched: false,
      },
      {
        id: 21,
        thumbnail: "https://picsum.photos/202/303",
        totalLikes: 453645,
        totalReviews: 567567,
        isLiked: false,
        isWatched: true,
      },
      {
        id: 22,
        thumbnail: "https://picsum.photos/203/302",
        totalLikes: 567567,
        totalReviews: 56757,
        isLiked: false,
        isWatched: false,
      },
      {
        id: 23,
        thumbnail: "https://picsum.photos/203/301",
        totalLikes: 567567,
        totalReviews: 56757,
        isLiked: true,
        isWatched: true,
      },
      {
        id: 24,
        thumbnail: "https://picsum.photos/204/302",
        totalLikes: 567567,
        totalReviews: 56757,
        isLiked: true,
        isWatched: true,
      },
    ],
  };

  return (
    <Box
      sx={{
        marginTop: "32px",
      }}
    >
      <Box sx={{ marginBottom: "24px", display: "flex", justifyContent: "center" }}>
        <SearchForm />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <Typography textTransform={"uppercase"}>Watch List</Typography>
        <Box>{data.total}</Box>
      </Box>
      <Divider sx={{ mb: 3 }} />

      {data.list.length > 0 ? (
        <Box>
          <Box>
            <Grid container columns={24}>
              {data.list.map((film) => (
                <Grid key={film.id} item xs={8} sm={6} md={4} lg={3}>
                  <FilmCard key={film.id} film={film}></FilmCard>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <PaginationBase totalPage={data.totalPage} pageIndex={data.pageIndex} onChange={handleChangePage} />
          </Box>
        </Box>
      ) : (
        <Box>Không có dữ liệu</Box>
      )}
    </Box>
  );
};

function FilmCard(props) {
  const { film } = props;
  return (
    <Link to={"/films/" + film.id}>
      <Box
        key={film.id}
        sx={{
          margin: "0 8px",
          borderRadius: "6px",
          overflow: "hidden",
          aspectRatio: "2/3",
          position: "relative",
          marginBottom: "8px",
          border: "2px solid #9ab",
          transition: "0.2s",
          ":hover": {
            border: "2px solid #00c030",
          },
          ":hover .btn-action-card-film": {
            opacity: "1",
          },
        }}
      >
        <Box
          component="img"
          src={film.thumbnail}
          sx={{
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            transition: "0.2s",
            opacity: "0",
          }}
          className="btn-action-card-film"
        >
          <Box
            sx={{
              backgroundColor: "#000000d1",
              lineHeight: "1px",
              borderRadius: "6px",
            }}
          >
            <FavoriteIcon
              sx={{
                cursor: "pointer",
                color: film.isLiked ? "#ff9010" : "#9ab",
                margin: "2px 4px",
                ":hover": {
                  color: film.isLiked ? "#e08012" : "#8592a0",
                },
                fontSize: "18px",
              }}
              onClick={() => handleLikeFilm(film.id)}
            ></FavoriteIcon>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
