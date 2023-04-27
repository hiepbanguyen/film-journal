import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import PaginationBase from "../common/pagination-base.jsx";
import { Comment } from "../common/comment.jsx";

export default function ListCommentSection(props) {
  const { data } = props;
  console.log(data);
  // const [comments, setComments] = useState(data.Data ?? []);
  let listComment = props.listComment;
  const [newCommentContent, setNewCommentContent] = useState("");

  const handleNewCommentContentChange = (event) => {
    setNewCommentContent(event.target.value);
  };

  const postNewComment = () => {
    if (newCommentContent.trim() === "") return;

    const newComment = {
      userName: "Apple",
      userAvatar: "https://picsum.photos/200/200",
      content: newCommentContent,
      time: new Date(),
      id: Math.random() * 100,
    };
    listComment.list.push(newComment);

    setNewCommentContent("");
  };

  const handleEnterInput = (event) => {
    if (event.keyCode === 13) {
      postNewComment();
    }
  };
  const [pageIdx, setPageIdx] = React.useState(1);

  const handleChangePage = (newPage) => {
    console.log("New page film", newPage);
    setPageIdx(newPage);
  };

  return (
    <Box sx={{ flexGrow: 1, color: "#9ab" }}>
      <Typography textTransform={"uppercase"} fontWeight={"bold"}>
        {0} comments
      </Typography>
      <Divider />
      <Box mb={3}>
        {listComment.list.map((comment, idx) => (
          <Comment {...comment} key={idx} />
        ))}
      </Box>
      <PaginationBase totalPage={2} pageIndex={pageIdx} onChange={handleChangePage} />
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
              onKeyUp={handleEnterInput}
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
