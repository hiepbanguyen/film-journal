import { PostAdd } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ReviewDetailListComment(props) {
  const [newCommentContent, setNewCommentContent] = useState("");

  const handleNewCommentContentChange = (event) => {
    setNewCommentContent(event.target.value);
  };

  const postNewComment = () => {
    if (newCommentContent.trim() === "") return;

    let newComment = {
      userName: "Apple",
      userAvatar: "https://picsum.photos/200/200",
      content: newCommentContent,
      time: new Date(),
      id: Math.random() * 100,
    };
    listComment.list.push(newComment);

    setNewCommentContent("");
    newComment = {};
    return;
  };

  const HandleEnterInput = (event) => {
    if (event.keyCode === 13) {
      postNewComment();
    } else return;
  };

  let listComment = props.listComment;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          color: "#9ab",
          borderBottom: "1px solid #9ab",
          marginBottom: "24px",
        }}
      >
        <Grid container spacing={4} columns={13}>
          <Grid item xs={5} md={4}>
            {listComment.total} Comments
          </Grid>
          <Grid item xs={8} md={9}>
            Newest 20 - Show preious
          </Grid>
        </Grid>
      </Box>
      <Box>
        {listComment.list.map((comment, idx) => (
          <Comment comment={comment} key={comment.id}></Comment>
        ))}
      </Box>
      <Box sx={{ marginBottom: "80px" }}>
        <Grid container spacing={4} columns={13}>
          <Grid item xs={13} md={4}></Grid>
          <Grid item xs={13} md={9}>
            <Box
              component="textarea"
              placeholder={"Reply as " + props.reviewDetail.userName + "..."}
              sx={{
                height: "100px",
                maxHeight: "100px",
                width: "100%",
                backgroundColor: "#2c3440",
                border: "none",
                padding: "5px",
                color: "#9ab",
                ":focus": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
                marginBottom: "12px",
              }}
              value={newCommentContent}
              onKeyUp={HandleEnterInput}
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
    <Box
      sx={{
        flexGrow: 1,
        color: "#9ab",
        marginBottom: "16px",
        borderBottom: "1px solid #9ab",
        paddingBottom: "16px",
        fontSize: "14px",
      }}
    >
      <Grid container spacing={4} columns={13}>
        {/* User-time */}
        <Grid item xs={13} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              justifyContent: { xs: "space-between", md: "flex-start" },
              " a:hover": { " img": { border: "1px solid #fff" },
            "span": {color: "#fff"} },
            }}
          >
            <Link
              to={"/profile/" + props.comment.userName.toLowerCase()}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#9ab",
                marginBottom: { md: "8px" },
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 24,
                  width: 24,
                  borderRadius: "50%",
                  marginRight: "8px",
                  border: "1px solid #9ab",
                  transition: "0.2s",
                }}
                alt="User Avatar test"
                src={props.comment.userAvatar}
              />
              <Box
                sx={{
                  transition: "0.2s",
                }}
                component="span"
              >
                {props.comment.userName}
              </Box>
            </Link>
            <Box>{FormatDateToNow(props.comment.time)}</Box>
          </Box>
        </Grid>
        {/* Comment-content */}
        <Grid item xs={13} md={9}>
          {props.comment.content}
        </Grid>
      </Grid>
    </Box>
  );
}

// Format Date to string (from date to now)
function FormatDateToNow(date = new Date()) {
  let dateNow = new Date();
  if (date > dateNow) date = dateNow;

  let years = Math.floor((dateNow - date) / (365 * 24 * 60 * 60 * 1000));
  if (years > 0) return years + "y";
  let days = Math.floor((dateNow - date) / (24 * 60 * 60 * 1000));
  if (days > 0) return days + "d";
  let hours = Math.floor((dateNow - date) / (60 * 60 * 1000));
  if (hours > 0) return hours + "h";
  let minutes = Math.floor((dateNow - date) / (60 * 1000));
  if (minutes > 0) return minutes + "m";
  else return "just now";
}
