import { Box, Button, Grid, CardMedia } from "@mui/material";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import amazonImg from "../../../public/img/amazon-us.png";
import userAvaTest from "../../../public/img/ava_user_test.jpg";

function Comment() {
  return (
    <Box sx={{ flexGrow: 1, color: "white" }}>
      <Grid container spacing={8} columns={13}>
        {/* User-time */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
            md={{ flexDirection: "column", justifyContent: "flex-start" }}
          >
            <Box>
              <Box
                component="img"
                sx={{
                  height: 24,
                  width: 24,
                }}
                alt="User Avatar test"
                src={userAvaTest}
              />
              <Box component="span">Cristiano</Box>
            </Box>
            <Box>1d</Box>
          </Box>
        </Grid>
        {/* Comment-content */}
        <Grid item xs={12} md={9}>
          Yeu hay khong yeu, thuong em anh hay noi. Trao nhau doi moi roi se tro thanh doi. Em dang choi voi lieu anh co
          buoc toi
        </Grid>
      </Grid>
    </Box>
  );
}

function ReviewDetailThumnailLink() {
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Box sx={{ mb: "20px" }}>
          <Box
            component="img"
            src={userAvaTest}
            sx={{
              width: { xs: "100%" },
              height: { xs: "230px" },
            }}
          ></Box>
        </Box>
        <Box sx={{ border: "1px solid #303840", backgroundColor: "#303840" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "#9ab",
              py: "8px",
              px: "10px",
              backgroundColor: "#242c34",
              cursor: "pointer",
            }}
          >
            <SmartDisplayIcon sx={{ fontSize: "25px", mr: "12px" }}></SmartDisplayIcon>
            <Box sx={{ fontSize: "12px" }} component="span">
              Trailer
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "#9ab",
              py: "8px",
              pr: "10px",
              ml: "10px",
              borderBottom: "1px solid #242c34",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={amazonImg}
              sx={{
                width: "28px",
                heigth: "28px",
                mr: "12px",
              }}
            ></Box>
            <Box sx={{ fontSize: "12px" }} component="span">
              Amazon US
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "#9ab",
              py: "13px",
              pr: "10px",
              ml: "10px",
              borderBottom: "1px solid #242c34",
              cursor: "pointer",
            }}
          >
            <Box sx={{ fontSize: "12px" }} component="span">
              Go Pro tos customize
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#9ab",
              py: "13px",
              pr: "10px",
              ml: "10px",
              borderBottom: "1px solid #242c34",
            }}
          >
            <Box
              sx={{
                fontSize: "12px",
                cursor: "pointer",
                color: "#039be5",
              }}
              component="span"
            >
              More...
            </Box>
            <Box
              sx={{
                fontSize: "12px",
                cursor: "pointer",
              }}
              component="span"
            >
              Just watch
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default function ReviewDetailMainSection() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* Review */}
        <Grid container spacing={8} columns={13}>
          {/* Thumbail - link */}
          <ReviewDetailThumnailLink></ReviewDetailThumnailLink>
          <Grid item xs={12} md={9}></Grid>
        </Grid>
      </Box>

      {/* List Comments */}
      <Box sx={{ flexGrow: 1 }}>
        <Box>Title List Comment</Box>
        <Box>
          {/* <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment> */}
        </Box>
      </Box>
    </>
  );
}
