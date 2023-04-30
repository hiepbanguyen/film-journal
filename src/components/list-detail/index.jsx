import Container from "@mui/system/Container";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React from "react";
import ListCommentSection from "./list-comment-section.jsx";
import { PaginatedFilmsGrid } from "../common/paginated-films-grid.jsx";
import { EditButton } from "../common/edit-button.jsx";
import { LikeButton } from "../common/like-button.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading";
import { PageNotExist } from "../common/page-not-exist.jsx";
import { estimatedTimeElapsed } from "../../utils/time.js";

export default function ListDetail() {
  const { listId } = useParams();
  const [{ data: detail, loading: detailLoading, error: detailError }, refetchDetail] = useAxios(
    `Lists/${listId}/Detail`,
  );

  if (!detailLoading && !detail) return <PageNotExist />;

  return (
    <Container sx={{ marginTop: 10, color: "#9ab" }}>
      <Box px={{ xs: 0, md: 12 }}>
        {detailLoading ? (
          <Loading paddingY={5} />
        ) : (
          <>
            <Box display={"flex"} sx={{ justifyContent: "space-between", alignItems: "center" }}>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <Typography fontSize={14}>Created by</Typography>
                <Link to={`/u/${detail?.User?.UserName}`}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                    fontSize={14}
                    sx={{ ":hover": { color: "#fff" } }}
                  >
                    <Avatar sx={{ height: 30, width: 30 }} />
                    <strong>{detail?.User?.FullName ?? detail?.User?.UserName}</strong>
                  </Box>
                </Link>
                <Typography fontSize={25} pt={0.25}>
                  ·
                </Typography>
                <Typography color={"#eee"} fontSize={14}>
                  {`${detail?.Total ?? 0} films`}
                </Typography>
              </Box>
              <EditButton username={detail?.User?.UserName ?? ""} />
            </Box>
            <Box my={1} display={"flex"} alignItems={"center"} fontWeight={600} fontSize={14} gap={1}>
              <LikeButton likes={detail?.TotalLike ?? 0} type={"list"} id={listId} refetchDetail={refetchDetail} />
            </Box>
            {detail?.ModifiedDate && (
              <Typography mb={2} fontSize={14}>
                <i>Last updated: {estimatedTimeElapsed(new Date(detail?.ModifiedDate))}</i>
              </Typography>
            )}
          </>
        )}
        <PaginatedFilmsGrid fetchUrl={`Lists/${listId}/Films`}>
          <Divider sx={{ my: 3 }} />
          <Typography variant={"h5"} color={"#fff"} mb={1}>
            <strong> {detail?.ListName ?? ""}</strong>
          </Typography>
          <Typography mb={3} fontSize={15}>
            {detail?.Description ?? ""}
          </Typography>
        </PaginatedFilmsGrid>
        <ListCommentSection listId={listId} />
        {/*<FilmsListPopularFilms />*/}
      </Box>
    </Container>
  );
}
