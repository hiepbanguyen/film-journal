import { Box, Button, Grid } from "@mui/material";

export default function ReviewDetailListComment(props) {
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
            {props.listComment.total} Comments
          </Grid>
          <Grid item xs={8} md={9}>
            Newest 20 - Show preious
          </Grid>
        </Grid>
      </Box>
      <Box>
        {props.listComment.list.map((comment, idx) => (
          <Comment comment={comment} key={comment.id}></Comment>
        ))}
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
            }}
          >
            <Box
              component="a"
              href={"/profile/" + props.comment.userName.toLowerCase()}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#9ab",
                marginBottom: { md: "8px" },
                ":hover img": { border: "1px solid #fff" },
                ":hover span": { color: "#fff" },
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
                  transition: "0.3s",
                }}
                alt="User Avatar test"
                src={props.comment.userAvatar}
              />
              <Box
                sx={{
                  transition: "0.3s",
                }}
                component="span"
              >
                {props.comment.userName}
              </Box>
            </Box>
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
