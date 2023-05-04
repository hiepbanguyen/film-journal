import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import MemberPreview from "../../common/member-preview.jsx";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { Loading } from "../../common/loading.jsx";
import PaginationBase from "../../common/pagination-base.jsx";

export default function AllFilmLikes() {
  const { filmId } = useParams();
  const [pageIndex, setPageIndex] = React.useState(1);
  const [{ data, loading, error }] = useAxios(
    `Films/ListUserLiked?pageSize=20&pageIndex=${pageIndex}&filmID=${filmId}`,
  );

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
  };

  return (
    <Container sx={{ mt: 10, color: "#9ab", pb: 5 }}>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={3}>
        <Stack gap={3} width={{ sm: 170 }}>
          <NavBar />
        </Stack>
        <Box flex={1}>
          {loading ? (
            <Loading paddingY={10} />
          ) : (
            <>
              <Typography color={"#fff"} fontStyle={"italic"} mb={2}>
                <b> {data?.Total ?? 0}</b> member(s) who liked <strong>Avatar the Airbender</strong>
              </Typography>
              <Stack divider={<Divider />} gap={1}>
                {data?.Data?.map((i, idx) => (
                  <React.Fragment key={idx}>
                    <MemberPreview
                      fullname={i.FullName ?? ""}
                      username={i.UserName ?? ""}
                      followers={i.Follower ?? 0}
                      following={i.Following ?? 0}
                      filmsReviewed={i.Reviews ?? 0}
                      avatar={i.Avatar ?? ""}
                    />
                  </React.Fragment>
                ))}
              </Stack>
              <PaginationBase totalPage={data?.TotalPage ?? 0} pageIndex={pageIndex} onChange={handleChangePage} />
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
}
