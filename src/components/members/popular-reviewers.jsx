import Container from "@mui/system/Container";
import { Box, Button, Grid, CardMedia } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const listPopularReviewers = [
  {
    userName: "MJ Cristiano",
    userAvatar: "https://picsum.photos/200/200",
    filmCount: 127,
    reviewCount: 342,
    listTopFilmReview: [
      { name: "La la land", thumbnail: "https://picsum.photos/200/310" },
      { name: "Avenger End Game", thumbnail: "https://picsum.photos/200/320" },
      { name: "Titanic", thumbnail: "https://picsum.photos/200/330" },
    ],
  },
  {
    userName: "MJ Cristiano",
    userAvatar: "https://picsum.photos/250/250",
    filmCount: 127,
    reviewCount: 342,
    listTopFilmReview: [
      { name: "La la land", thumbnail: "https://picsum.photos/200/340" },
      { name: "Avenger End Game", thumbnail: "https://picsum.photos/200/350" },
      { name: "Titanic", thumbnail: "https://picsum.photos/200/360" },
    ],
  },
  {
    userName: "MJ Cristiano",
    userAvatar: "https://picsum.photos/230/230",
    filmCount: 127,
    reviewCount: 342,
    listTopFilmReview: [
      { name: "La la land", thumbnail: "https://picsum.photos/200/370" },
      { name: "Avenger End Game", thumbnail: "https://picsum.photos/200/380" },
      { name: "Titanic", thumbnail: "https://picsum.photos/200/390" },
    ],
  },
  {
    userName: "MJ Cristiano",
    userAvatar: "https://picsum.photos/210/210",
    filmCount: 127,
    reviewCount: 342,
    listTopFilmReview: [
      { name: "La la land", thumbnail: "https://picsum.photos/200/301" },
      { name: "Avenger End Game", thumbnail: "https://picsum.photos/200/302" },
      { name: "Titanic", thumbnail: "https://picsum.photos/200/303" },
    ],
  },
  {
    userName: "MJ Cristiano",
    userAvatar: "https://picsum.photos/220/220",
    filmCount: 127,
    reviewCount: 342,
    listTopFilmReview: [
      { name: "La la land", thumbnail: "https://picsum.photos/200/304" },
      { name: "Avenger End Game", thumbnail: "https://picsum.photos/200/305" },
      { name: "Titanic", thumbnail: "https://picsum.photos/200/306" },
    ],
  },
];

function FeaturedPerson(props) {
  const listFilm = props.user.listTopFilmReview.map((film, idx) => (
    <Grid
      key={idx}
      item
      xs={4}
      sx={{
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        sx={{
          height: "100%",
          width: "90%",
          transition: "0.2s",
          borderRadius: "4px",
          ":hover": {
            border: "1px solid #9ab",
          },
        }}
        src={film.thumbnail}
      ></Box>
    </Grid>
  ));
  return (
    <Grid
      item
      xs={15}
      sm={10}
      md={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "30px",
      }}
    >
      <Box
        sx={{
          color: "#9ab",
          width: "160px",
          minWidth: "160px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "160px",
            marginBottom: "16px",
            position: "relative",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "50%",
              transition: "0.2s",
              ":hover": {
                border: "1px solid #9ab",
              },
            }}
            src={props.user.userAvatar}
          ></Box>
          <Box
            component="span"
            sx={{
              position: "absolute",
              bottom: "4px",
              right: "0",
              backgroundColor: "#567",
              height: "36px",
              width: "36px",
              borderRadius: "50%",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.2s",
              ":hover": {
                backgroundColor: "#9ab",
              },
            }}
          >
            <AddIcon></AddIcon>
          </Box>
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <Box
            sx={{
              fontWeight: "600",
              color: "#fff",
              fontSize: "16px",
            }}
          >
            {props.user.userName}
          </Box>
          <Box
            sx={{
              fontSize: "14px",
            }}
          >
            <Box
              component="span"
              sx={{
                marginRight: "8px",
              }}
            >
              {props.user.filmCount} films
            </Box>
            <Box component="span">{props.user.reviewCount} reviews</Box>
          </Box>
        </Box>

        <Box>
          <Grid
            container
            columns={12}
            sx={{
              height: "70px",
            }}
          >
            {listFilm}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default function PopularReviewers() {
  const listReviewers = listPopularReviewers.map((user, idx) => (
    <FeaturedPerson key={idx} user={user}></FeaturedPerson>
  ));
  return (
    <Box
      sx={{
        marginBottom: { xs: "24px", md: "32px" },
      }}
    >
      <Box
        className="popular-reviewers-title"
        sx={{
          marginBottom: { xs: "16px", md: "20px" },
          borderBottom: "1px #9ab solid",
        }}
      >
        <Box
          component="h1"
          sx={{
            color: "#9ab",
            fontWeight: "400",
            fontSize: { xs: "14px", md: "16px" },
            margin: "0",
            textTransform: "uppercase",
          }}
        >
          Popular this week
        </Box>
      </Box>
      <Box className="featured-people">
        <Grid container spacing={0} columns={30}>
          {listReviewers}
        </Grid>
      </Box>
    </Box>
  );
}
