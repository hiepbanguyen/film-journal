import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import React from "react";
import MemberPreview from "../common/member-preview.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import PaginationBase from "../common/pagination-base.jsx";

export default function MemberSearch() {
  const { searchParams } = useParams();
  const [pageIndex, setPageIndex] = React.useState(1);
  const [{ data, loading }] = useAxios({
    url: `Users/member/search/${searchParams.replace("%", " ")}`,
    method: "POST",
    data: {
      pageSize: 15,
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
            Found {data?.Total ?? 0} member(s) matching <strong>'{searchParams}'</strong>:
          </Typography>
          <Stack gap={1} mt={2}>
            {data?.Data?.members?.map((i, idx) => (
              <MemberPreview
                fullname={i?.Fullname}
                username={i?.UserName ?? ""}
                followers={i?.TotalFollowers ?? 0}
                following={i?.TotalFollowing ?? 0}
                filmsReviewed={i?.TotalReviewed ?? 0}
                avatar={i?.Avatar}
              />
            ))}
          </Stack>
          <PaginationBase totalPage={data?.TotalPage ?? 0} pageIndex={pageIndex} onChange={handleChangePage} />
        </>
      )}
    </>
  );
}
