import { Box, Button, Grid, CardMedia } from "@mui/material";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import amazonImg from "../../assets/img/amazon-us.png";
import userAvaTest from "../../assets/img/ava_user_test.jpg";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotesIcon from "@mui/icons-material/Notes";

const data = {
  userFirstName: "Pepe",
  userName: "Pepe Luizbola",
  filmName: "Ant-Man and the Wash: Quantumania",
  yearRelease: "2023",
  watchedTime: "Watched Feb 14, 2023",
  reviewContent: "It took me 31 films but I finally started to empathize with Scorsese.",
  rate: 4,
  likesCount: 16532,
  poster:
    "https://a.ltrbxd.com/resized/film-poster/5/6/6/2/3/7/566237-ant-man-and-the-wasp-quantumania-0-300-0-450-crop.jpg?v=27ced3fac4",
};

function Comment() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        color: "#9ab",
        marginBottom: "16px",
        borderBottom: "1px solid #9ab",
        paddingBottom: "16px",
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
              sx={{
                display: "flex",
                alignItems: "center",
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
        <Grid item xs={13} md={9}>
          Yeu hay khong yeu, thuong em anh hay noi. Trao nhau doi moi roi se tro thanh doi. Em dang choi voi lieu anh co
          buoc toi
        </Grid>
      </Grid>
    </Box>
  );
}

function ReviewDetailThumnailLink() {
  return (
    <Grid
      item
      xs={13}
      md={4}
      className="thumail-link"
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      <Box sx={{ mb: "20px" }}>
        <Box
          component="img"
          src={data.poster}
          sx={{
            width: { xs: "100%" },
            height: { xs: "auto" },
          }}
        ></Box>
      </Box>
      <Box sx={{ border: "1px solid #303840", backgroundColor: "#14181c" }}>
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
    </Grid>
  );
}

export default function ReviewDetailMainSection() {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: "32px" }}>
        {/* Review */}
        <Grid container spacing={4} columns={13}>
          {/* Thumbail - link */}
          <ReviewDetailThumnailLink></ReviewDetailThumnailLink>
          <Grid item xs={13} md={9}>
            {/* Info Review */}
            <Grid container spacing={2} columns={13}>
              <Grid item xs={8} md={13}>
                {/* User */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingBottom: { xs: "8px" },
                    borderBottom: { xs: "none", md: "1px solid #647b92" },
                  }}
                >
                  <Box
                    component="img"
                    src={userAvaTest}
                    sx={{
                      width: "28px",
                      heigth: "28px",
                      mr: "12px",
                      borderRadius: "50px",
                    }}
                  ></Box>
                  <Box
                    component="span"
                    sx={{
                      color: "#9ab",
                      display: { xs: "none", md: "block" },
                      marginRight: "4px",
                      fontSize: "12px",
                    }}
                  >
                    Review by
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: "#9ab",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    {data.userName}
                  </Box>
                </Box>
                {/* Info Post */}
                <Box>
                  {/* Name Film */}
                  <Box
                    component="p"
                    sx={{
                      fontSize: { xs: "20px" },
                      fontWeight: "600",
                      color: "#adbfd2",
                      margin: { xs: "8px 0 !important" },
                    }}
                  >
                    {data.filmName}
                  </Box>
                  {/* Release Year - Star Rate */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: { xs: "start", md: "center" },
                      justifyContent: "start",
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: { xs: "20px" },
                        fontWeight: "400",
                        color: "#adbfd2",
                        margin: { xs: "4px 8px 4px 0" },
                      }}
                    >
                      {data.yearRelease}
                    </Box>
                    <Box>
                      <StarIcon sx={{ color: "#00c030" }}></StarIcon>
                      <StarIcon sx={{ color: "#00c030" }}></StarIcon>
                      <StarIcon sx={{ color: "#00c030" }}></StarIcon>
                      <StarIcon sx={{ color: "#00c030" }}></StarIcon>
                      <StarHalfIcon sx={{ color: "#00c030" }}></StarHalfIcon>
                    </Box>
                  </Box>
                  {/* Watched Time */}
                  <Box
                    component="p"
                    sx={{
                      fontSize: { xs: "12px" },
                      fontWeight: "400",
                      color: "#adbfd2",
                      margin: { xs: "0 0 8px 0", md: "0 0 8px 0" },
                    }}
                  >
                    {data.watchedTime}
                  </Box>
                </Box>
              </Grid>

              {/* Thumbnail Mobile Screen */}
              <Grid
                item
                xs={5}
                md={0}
                sx={{
                  display: { xs: "block", md: "none" },
                  width: "100%",
                }}
              >
                <Box
                  component="img"
                  src={data.poster}
                  sx={{
                    width: "100%",
                    height: "auto",
                  }}
                ></Box>
              </Grid>
            </Grid>
            {/* Review Content */}
            <Box
              component="p"
              sx={{
                color: "#9ab",
                fontSize: "18px",
              }}
            >
              {data.reviewContent}
            </Box>
            {/* Likes */}
            <Box
              component="p"
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
                color: "#9ab",
                cursor: "pointer",
                transition: "0.2s",
                ":hover": {
                  color: "#75d4ff",
                },
                marginBottom: "24px",
              }}
            >
              <FavoriteIcon sx={{ marginRight: "4px" }}></FavoriteIcon> {data.likesCount} likes
            </Box>
            {/* User like related review */}
            <Box>
              <Box
                sx={{
                  textTransform: "uppercase",
                  fontSize: { xs: "12px", md: "13px" },
                  color: "#9ab",
                  borderBottom: "1px solid #9ab",
                  marginBottom: "16px",
                }}
              >
                {data.userFirstName} liked these review
              </Box>
              <Box>
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    marginRight: "12px",
                  }}
                >
                  <Box
                    component="img"
                    src={userAvaTest}
                    sx={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      marginBottom: "0",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                  >
                    <NotesIcon
                      sx={{
                        fontSize: "16px",
                        color: "#9ab",
                        bgcolor: "#14181c",
                        borderRadius: "50%",
                        border: "1px solid #9ab",
                      }}
                    ></NotesIcon>
                  </Box>
                  <Box sx={{
                    lineHeight: '1px'
                  }}>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    marginRight: "12px",
                  }}
                >
                  <Box
                    component="img"
                    src={userAvaTest}
                    sx={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      marginBottom: "0",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                  >
                    <NotesIcon
                      sx={{
                        fontSize: "16px",
                        color: "#9ab",
                        bgcolor: "#14181c",
                        borderRadius: "50%",
                        border: "1px solid #9ab",
                      }}
                    ></NotesIcon>
                  </Box>
                  <Box sx={{
                    lineHeight: '1px'
                  }}>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    marginRight: "12px",
                  }}
                >
                  <Box
                    component="img"
                    src={userAvaTest}
                    sx={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      marginBottom: "0",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                  >
                    <NotesIcon
                      sx={{
                        fontSize: "16px",
                        color: "#9ab",
                        bgcolor: "#14181c",
                        borderRadius: "50%",
                        border: "1px solid #9ab",
                      }}
                    ></NotesIcon>
                  </Box>
                  <Box sx={{
                    lineHeight: '1px'
                  }}>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    marginRight: "12px",
                  }}
                >
                  <Box
                    component="img"
                    src={userAvaTest}
                    sx={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      marginBottom: "0",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                  >
                    <NotesIcon
                      sx={{
                        fontSize: "16px",
                        color: "#9ab",
                        bgcolor: "#14181c",
                        borderRadius: "50%",
                        border: "1px solid #9ab",
                      }}
                    ></NotesIcon>
                  </Box>
                  <Box sx={{
                    lineHeight: '1px'
                  }}>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    marginRight: "12px",
                  }}
                >
                  <Box
                    component="img"
                    src={userAvaTest}
                    sx={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      marginBottom: "0",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                  >
                    <NotesIcon
                      sx={{
                        fontSize: "16px",
                        color: "#9ab",
                        bgcolor: "#14181c",
                        borderRadius: "50%",
                        border: "1px solid #9ab",
                      }}
                    ></NotesIcon>
                  </Box>
                  <Box sx={{
                    lineHeight: '1px'
                  }}>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                    <StarIcon
                      sx={{
                        fontSize: "12px",
                        color: '#9ab'
                      }}
                    ></StarIcon>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* List Comments */}
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
              156 Comments
            </Grid>
            <Grid item xs={8} md={9}>
              Newest 20 - Show preious
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
        </Box>
      </Box>
    </>
  );
}
