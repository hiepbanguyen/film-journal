import * as React from "react";
import { Box, Button, Divider } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Grid from "@mui/material/Grid";
import PaginationBase from "../../../common/pagination-base";
import { FilmCardsStackedFive } from "../../../home/popular-lists.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../../../common/loading";

export const UserLists = (props) => {
  const { username } = useParams(); //
  const [pageIndex, setPageIndex] = React.useState(1);
  const [{ data, loading, error }] = useAxios(`Lists/Users?pageSize=5&pageIndex=${pageIndex}&userName=${username}`);

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
  };

  return (
    <Box sx={{ margin: "48px 0", color: "#9ab" }}>
      <Grid container columns={12} spacing={4}>
        <Grid item xs={12} lg={8}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ textTransform: "uppercase" }}>Lists</Box>
          </Box>
          <Divider />
          {loading ? (
            <Loading paddingY={10} />
          ) : (
            <>
              <Box>
                <Box sx={{ marginBottom: "20px" }}>
                  {data?.Data?.map((i, idx) => (
                    <ListFilmCard key={idx} data={i} />
                  ))}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <PaginationBase totalPage={data?.TotalPage ?? 0} pageIndex={pageIndex} onChange={handleChangePage} />
                </Box>
              </Box>
            </>
          )}
        </Grid>
        <Grid item xs={12} lg={4}>
          <Link to={`/lists/new`}>
            <Button style={{ marginTop: "20px" }} variant="contained">
              Add New List
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export const ListFilmCard = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px" + " 0",
        }}
      >
        <Box
          component={Link}
          to={data?.ListID ?? ""}
          sx={{
            display: "flex",
            position: "relative",
          }}
        >
          <FilmCardsStackedFive posters={data?.List} />
        </Box>
        <Box sx={{ width: 1, padding: "0 20px" }}>
          <Box
            component={Link}
            to={data?.ListID ?? ""}
            sx={{ marginBottom: "8px", fontWeight: "700", fontSize: "20px", color: "#fff" }}
          >
            {data?.ListName ?? ""}
          </Box>
          <Box sx={{ marginBottom: "8px", display: "flex", alignItems: "center", fontSize: "14px" }}>
            <Box sx={{ marginRight: "16px" }}>{data?.FilmsCount ?? 0} films</Box>
            <Box sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}>
              <FavoriteIcon sx={{ marginRight: "4px", fontSize: "16px" }} /> {data?.LikesCount ?? 0}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ChatBubbleIcon sx={{ marginRight: "4px", fontSize: "16px" }} /> {data?.CommentsCount ?? 0}
            </Box>
          </Box>
          <Box sx={{ fontSize: "16px", lineHeight: "24px", maxHeight: "48px", overflow: "hidden" }}>
            {data?.Description ?? ""}
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
