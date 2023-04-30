import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PaginationBase from "../common/pagination-base.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import { Comment } from "../common/comment.jsx";
import UserStore from "../../store/user.store.js";
import { useNavigate } from "react-router-dom";

const PageSize = 10;
export default function ReviewCommentSection(props) {
  const { reviewId } = props;
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [newCommentContent, setNewCommentContent] = useState("");
  const [pageIdx, setPageIdx] = React.useState(1);
  const [{ data, loading, error }, refetchComments] = useAxios({
    url: `Reviews/${reviewId}/Comments`,
    method: "POST",
    data: {
      pageSize: PageSize,
      pageIndex: pageIdx,
    },
    useCache: false,
  });
  const [{}, postComment] = useAxios(
    {
      url: `Comments/${reviewId}/reviews`,
      method: "post",
    },
    { manual: true },
  );

  useEffect(() => {
    // if (data) console.log(data);
    if (!loading) {
      setComments(data?.Data ?? []);
    }
  }, [loading]);

  useEffect(() => {
    refetchComments();
  }, [pageIdx, reviewId]);

  const handleNewCommentContentChange = (event) => {
    setNewCommentContent(event.target.value);
  };

  const postNewComment = async () => {
    if (!UserStore.isLoggedIn) navigate("/sign-in");
    if (newCommentContent.trim() === "") return;
    // setComments([...comments, newComment]);
    await postComment({
      data: {
        Content: newCommentContent,
      },
    });
    await refetchComments();
    setNewCommentContent("");
  };

  const handleChangePage = (newPage) => {
    // console.log(newPage);
    setPageIdx(newPage);
  };

  return (
    <Box sx={{ flexGrow: 1, color: "#9ab" }}>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Typography textTransform={"uppercase"} fontWeight={"bold"}>
            {data.Total ?? 0} comments
          </Typography>
          <Divider />
          <Box mb={3}>
            {comments.map((i, idx) => (
              <Comment {...i} key={idx} />
            ))}
          </Box>
          <PaginationBase totalPage={data.TotalPage ?? 1} pageIndex={pageIdx} onChange={handleChangePage} />
        </>
      )}
      <Box sx={{ marginBottom: "80px" }}>
        <Grid container spacing={4} columns={13}>
          <Grid item xs={13} md={4}></Grid>
          <Grid item xs={13} md={9}>
            <Box
              component="textarea"
              placeholder={"Write your comment here..."}
              sx={{
                height: "100px",
                maxHeight: "100px",
                width: "100%",
                backgroundColor: "#2c3440",
                border: "none",
                borderRadius: 1,
                padding: "5px",
                color: "#9ab",
                ":focus": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
                marginBottom: "12px",
              }}
              value={newCommentContent}
              onChange={handleNewCommentContentChange}
            ></Box>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00b020 !important",
                  ":hover": { backgroundColor: "#00b020 !important" },
                }}
                onClick={postNewComment}
                disabled={newCommentContent.trim() === ""}
              >
                Post
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
