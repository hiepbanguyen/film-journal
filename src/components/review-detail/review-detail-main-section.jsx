import { Box, Grid } from "@mui/material";
import userAvaTest from "../../assets/img/ava_user_test.jpg";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotesIcon from "@mui/icons-material/Notes";

function LikedReview(props) {
  return (
    <Box
      component="a"
      href={props.likedReview.reviewLink}
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "12px",
        ":hover img": {
          border: "1px solid #fff",
        },
      }}
    >
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Box
          component="img"
          src={props.likedReview.userAvatar}
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
            top: "-2px",
            right: "-2px",
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
      </Box>
      <Box
        sx={{
          lineHeight: "1px",
        }}
      >
        {Array.from({ length: props.likedReview.reviewRate }).map((star, index) => (
          <StarIcon
            sx={{
              fontSize: "12px",
              color: "#9ab",
            }}
            key={index}
          ></StarIcon>
        ))}
      </Box>
    </Box>
  );
}

function ReviewDetailThumnailLink(props) {
  return (
    <Grid
      item
      xs={13}
      md={4}
      className="thumail-link"
      sx={{
        display: { xs: "block", md: "block" },
        order: { xs: "2", md: "1" },
      }}
    >
      <Box sx={{ mb: "20px", display: { xs: "none", md: "block" } }}>
        <Box
          component="img"
          src={props.reviewDetail.poster}
          sx={{
            width: { xs: "100%" },
            height: { xs: "auto" },
          }}
        ></Box>
      </Box>
      {/*<Box sx={{ border: "1px solid #303840", backgroundColor: "#14181c" }}>*/}
      {/*  <Box*/}
      {/*    sx={{*/}
      {/*      display: "flex",*/}
      {/*      justifyContent: "flex-start",*/}
      {/*      alignItems: "center",*/}
      {/*      color: "#9ab",*/}
      {/*      py: "8px",*/}
      {/*      px: "10px",*/}
      {/*      backgroundColor: "#242c34",*/}
      {/*      cursor: "pointer",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <SmartDisplayIcon sx={{ fontSize: "25px", mr: "12px" }}></SmartDisplayIcon>*/}
      {/*    <Box sx={{ fontSize: "12px" }} component="span">*/}
      {/*      Trailer*/}
      {/*    </Box>*/}
      {/*  </Box>*/}
      {/*  <Box*/}
      {/*    sx={{*/}
      {/*      display: "flex",*/}
      {/*      justifyContent: "flex-start",*/}
      {/*      alignItems: "center",*/}
      {/*      color: "#9ab",*/}
      {/*      py: "8px",*/}
      {/*      pr: "10px",*/}
      {/*      ml: "10px",*/}
      {/*      borderBottom: "1px solid #242c34",*/}
      {/*      cursor: "pointer",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Box*/}
      {/*      component="img"*/}
      {/*      src={amazonImg}*/}
      {/*      sx={{*/}
      {/*        width: "28px",*/}
      {/*        heigth: "28px",*/}
      {/*        mr: "12px",*/}
      {/*      }}*/}
      {/*    ></Box>*/}
      {/*    <Box sx={{ fontSize: "12px" }} component="span">*/}
      {/*      Amazon US*/}
      {/*    </Box>*/}
      {/*  </Box>*/}
      {/*  <Box*/}
      {/*    sx={{*/}
      {/*      display: "flex",*/}
      {/*      justifyContent: "flex-start",*/}
      {/*      alignItems: "center",*/}
      {/*      color: "#9ab",*/}
      {/*      py: "13px",*/}
      {/*      pr: "10px",*/}
      {/*      ml: "10px",*/}
      {/*      borderBottom: "1px solid #242c34",*/}
      {/*      cursor: "pointer",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Box sx={{ fontSize: "12px" }} component="span">*/}
      {/*      Go Pro tos customize*/}
      {/*    </Box>*/}
      {/*  </Box>*/}
      {/*  <Box*/}
      {/*    sx={{*/}
      {/*      display: "flex",*/}
      {/*      justifyContent: "space-between",*/}
      {/*      alignItems: "center",*/}
      {/*      color: "#9ab",*/}
      {/*      py: "13px",*/}
      {/*      pr: "10px",*/}
      {/*      ml: "10px",*/}
      {/*      borderBottom: "1px solid #242c34",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Box*/}
      {/*      sx={{*/}
      {/*        fontSize: "12px",*/}
      {/*        cursor: "pointer",*/}
      {/*        color: "#039be5",*/}
      {/*      }}*/}
      {/*      component="span"*/}
      {/*    >*/}
      {/*      More...*/}
      {/*    </Box>*/}
      {/*    <Box*/}
      {/*      sx={{*/}
      {/*        fontSize: "12px",*/}
      {/*        cursor: "pointer",*/}
      {/*      }}*/}
      {/*      component="span"*/}
      {/*    >*/}
      {/*      Just watch*/}
      {/*    </Box>*/}
      {/*  </Box>*/}
      {/*</Box>*/}
    </Grid>
  );
}

export default function ReviewDetailMainSection(props) {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: "72px" }}>
        {/* Review */}
        <Grid container spacing={4} columns={13}>
          {/* Thumbail - link */}
          <ReviewDetailThumnailLink reviewDetail={props.reviewDetail} />
          <Grid item xs={13} md={9} sx={{ order: { xs: "1", md: "2" } }}>
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
                    {props.reviewDetail.userName}
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
                    {props.reviewDetail.filmName}
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
                      {props.reviewDetail.yearRelease}
                    </Box>
                    <Box>
                      {Array.from({ length: props.reviewDetail.rate }).map((i, idx) => (
                        <StarIcon key={idx} sx={{ color: "#00c030" }}></StarIcon>
                      ))}
                    </Box>
                  </Box>
                  {/* Watched Time */}
                  <Box
                    component="p"
                    sx={{
                      fontSize: { xs: "12px" },
                      fontWeight: "400",
                      color: "#adbfd2",
                      margin: { xs: "0 0 24px 0", md: "0 0 24px 0" },
                    }}
                  >
                    {props.reviewDetail.watchedTime}
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
                  src={props.reviewDetail.poster}
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
                marginBottom: "24px",
                display: "",
              }}
            >
              {props.reviewDetail.reviewContent}
            </Box>
            {/* Likes */}
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                fontWeight: "600",
                color: "#9ab",
                cursor: "pointer",
                transition: "0.2s",
                ":hover": {
                  color: "#75d4ff",
                },
                marginBottom: "40px",
              }}
            >
              <FavoriteIcon sx={{ marginRight: "4px" }}></FavoriteIcon> {props.reviewDetail.likesCount} likes
            </Box>
            {/* User like related review */}
            <Box
              sx={{
                textTransform: "uppercase",
                fontSize: { xs: "12px", md: "13px" },
                color: "#9ab",
                borderBottom: "1px solid #9ab",
                marginBottom: "16px",
              }}
            >
              {props.reviewDetail.userFirstName} liked these review
            </Box>
            <Box>
              {props.listLikedReview.map((likedReview, index) => (
                <LikedReview likedReview={likedReview} key={index}></LikedReview>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
