import { useParams } from "react-router-dom";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { ListPreviewHorizontal } from "../common/list-preview-horizontal.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import PaginationBase from "../common/pagination-base.jsx";

export default function ListsSearch() {
  const { searchParams } = useParams();
  const [pageIndex, setPageIndex] = React.useState(1);
  const [{ data, loading }] = useAxios({
    url: `Users/list/search/${searchParams.replace("%", " ")}`,
    method: "POST",
    data: {
      pageSize: 10,
      pageIndex: pageIndex,
    },
  });

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
  };

  return (
    <>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Typography color={"#fff"} fontStyle={"italic"}>
            Found {data?.Total ?? 0} list(s) matching <strong>'{searchParams}'</strong>:
          </Typography>
          <Stack divider={<Divider />}>
            {data?.Data?.lists?.map((i, idx) => (
              <Box key={idx} my={2}>
                <ListPreviewHorizontal
                  title={i.ListName ?? ""}
                  description={i.Description ?? ""}
                  fullname={i.User?.FullName ?? ""}
                  username={i.User?.UserName ?? ""}
                  userAvatar={i.User?.Avatar ?? ""}
                  favoriteCount={i.LikesCount ?? 0}
                  commentCount={i.CommentsCount ?? 0}
                  posters={i.List}
                  films={i.Total ?? 0}
                  listLink={`/u/${i.User?.UserName}/lists/${i.ListID}`}
                />
              </Box>
            ))}
          </Stack>
          <PaginationBase totalPage={data?.TotalPage ?? 0} pageIndex={pageIndex} onChange={handleChangePage} />
        </>
      )}
    </>
  );
}
