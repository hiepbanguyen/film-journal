import React from "react";
import useAxios from "axios-hooks";
import { Box, Grid } from "@mui/material";
import { Loading } from "../../../common/loading.jsx";
import PaginationBase from "../../../common/pagination-base.jsx";
import ListPreview from "../../../home/popular-lists.jsx";

const DefaultPageSize = 5;

export const UserLikeLists = ({ username }) => {
  const [pageIdx, setPageIdx] = React.useState(1);
  const [{ data, loading, error }, fetchFilms] = useAxios({
    url: `Users/${username}/Profile/Like/Lists`,
    method: "POST",
    data: {
      pageSize: DefaultPageSize,
      pageIndex: pageIdx,
    },
  });

  const handleChangePage = (newPage) => {
    setPageIdx(newPage);
    // fetchFilms();
  };

  return (
    <Box>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Box height={35} mt={2}>
            <PaginationBase totalPage={data?.TotalPage ?? 1} pageIndex={pageIdx} onChange={handleChangePage} />
          </Box>
          {data?.Data.length > 0 && (
            <Grid container spacing={1} columns={12}>
              {data?.Data?.map((i, idx) => (
                <Grid item key={idx} xs={12} md={6} lg={12} sx={{ justifyContent: "center", display: "flex" }}>
                  <ListPreview
                    title={i.ListName ?? ""}
                    fullname={i.User?.FullName ?? ""}
                    username={i.User?.UserName ?? ""}
                    userAvatar={i.User?.Avatar ?? ""}
                    favoriteCount={i.LikesCount ?? 0}
                    commentCount={i.CommentsCount ?? 0}
                    posters={i.List}
                    listLink={`/u/${i.User?.UserName}/lists/${i.ListID}`}
                    notShowUser={true}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </Box>
  );
};
