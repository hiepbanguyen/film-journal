import { Box, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const listPopularReviewers = [
  {
    userName: "mjcristiano",
    fullName: "MJ Cristiano",
    userAvatar: "https://picsum.photos/200/200",
    filmCount: 127,
    reviewCount: 342,
    listTopFilmReview: [
      { name: "La la land", thumbnail: "https://picsum.photos/200/310", id: 1 },
      { name: "Avenger End Game", thumbnail: "https://picsum.photos/200/320", id: 2 },
      { name: "Titanic", thumbnail: "https://picsum.photos/200/330", id: 3 },
    ],
  },
  {
    userName: "selenagomez",
    fullName: "Selena Gomez",
    userAvatar: "https://picsum.photos/250/250",
    filmCount: 127,
    reviewCount: 342,
    listTopFilmReview: [
      { name: "La la land", thumbnail: "https://picsum.photos/200/340", id: 4 },
      { name: "Avenger End Game", thumbnail: "https://picsum.photos/200/350", id: 5 },
      { name: "Titanic", thumbnail: "https://picsum.photos/200/360", id: 6 },
    ],
  },
  {
    userName: "jutinbb",
    fullName: "Justin Bieber",
    userAvatar: "https://picsum.photos/230/230",
    filmCount: 127,
    reviewCount: 342,
    listTopFilmReview: [
      { name: "La la land", thumbnail: "https://picsum.photos/200/370", id: 7 },
      { name: "Avenger End Game", thumbnail: "https://picsum.photos/200/380", id: 8 },
      { name: "Titanic", thumbnail: "https://picsum.photos/200/390", id: 9 },
    ],
  },
  {
    userName: "mjapple",
    fullName: "MJ Apple",
    userAvatar: "https://picsum.photos/210/210",
    filmCount: 127,
    reviewCount: 342,
    listTopFilmReview: [
      { name: "La la land", thumbnail: "https://picsum.photos/200/301", id: 10 },
      { name: "Avenger End Game", thumbnail: "https://picsum.photos/200/302", id: 11 },
      { name: "Titanic", thumbnail: "https://picsum.photos/200/303", id: 12 },
    ],
  },
  {
    userName: "mjm10",
    fullName: "MJ Messi",
    userAvatar: "https://picsum.photos/220/220",
    filmCount: 127,
    reviewCount: 342,
    listTopFilmReview: [
      { name: "La la land", thumbnail: "https://picsum.photos/200/304", id: 13 },
      { name: "Avenger End Game", thumbnail: "https://picsum.photos/200/305", id: 14 },
      { name: "Titanic", thumbnail: "https://picsum.photos/200/306", id: 15 },
    ],
  },
];

function FeaturedPerson(props) {
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
          <Link
            to={"/u/" + props.user.userName}
            style={{
              width: "100%",
              height: "100%",
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
          </Link>
          <Button
            component="span"
            sx={{
              position: "absolute",
              bottom: "4px",
              right: "0",
              backgroundColor: "#567",
              height: "36px",
              width: "36px",
              minWidth: "unset",
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
          </Button>
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <Link
            to={"/u/" + props.user.userName}
            style={{
              fontWeight: "600",
              color: "#fff",
              fontSize: "16px",
              textAlign: "center",
              textDecoration: "none",
              display: "block",
            }}
          >
            {props.user.fullName}
          </Link>
          <Box
            sx={{
              fontSize: "14px",
              " a:hover": {
                color: "#fff",
              },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to={"/u/" + props.user.userName + "/reviews"}>{props.user.reviewCount} films reviewed</Link>
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
            {props.user.listTopFilmReview.map((film, idx) => (
              <Grid
                key={idx}
                item
                xs={4}
                sx={{
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Link to={"/films/" + film.id} style={{ width: "100%", height: "100%" }}>
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
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default function PopularReviewers() {
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
          {listPopularReviewers.map((user, idx) => (
            <FeaturedPerson key={idx} user={user}></FeaturedPerson>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
