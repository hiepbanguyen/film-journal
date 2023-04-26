import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { estimatedTimeElapsed } from "../../utils/time.js";
import PaginationBase from "../common/pagination-base.jsx";

export default function ReviewDetailListComment(props) {
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
        {listComment.total} comments
      </Typography>
      <Divider />
      <Box mb={3}>
        {listComment.list.map((comment, idx) => (
          <Comment comment={comment} key={idx} />
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

function Comment(props) {
  return (
    <>
      <Box
        my={2}
        sx={{
          flexGrow: 1,
          color: "#9ab",
          fontSize: "14px",
          display: "flex",
        }}
      >
        <Grid container spacing={1}>
          {/* User-time */}
          <Grid item xs={12} md={3}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Box
                component={Link}
                to={"/u/" + props.comment.userName.toLowerCase()}
                display={"flex"}
                alignItems={"center"}
                gap={1}
                sx={{ ":hover": { color: "#fff" } }}
              >
                <Avatar sx={{ width: 25, height: 25 }} alt="User Avatar test" src={props.comment.userAvatar} />
                <Typography variant={"body2"} fontWeight={600}>
                  {props.comment.userName}
                </Typography>{" "}
              </Box>
              <Typography variant={"body2"}>{estimatedTimeElapsed(props.comment.time)}</Typography>
            </Box>
          </Grid>
          {/* Comment-content */}
          <Grid item xs={12} md={9} sx={{ display: "flex", alignItems: "center" }}>
            {props.comment.content}
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
}

// Format Date to string (from date to now)
