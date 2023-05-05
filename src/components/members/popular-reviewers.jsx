import { Avatar, Box, Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { FollowButton } from "../common/follow-button.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading";
import FilmCard from "../common/film-card";

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
            to={"/u/" + props?.UserName}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Avatar
              sx={{
                width: { xs: 150, sm: 160 },
                height: { xs: 150, sm: 160 },
              }}
              src={props?.Avatar}
            />
          </Link>
          <Box
            component="span"
            sx={{
              position: "absolute",
              bottom: { xs: 15, sm: 6 },
              right: { xs: 15, sm: 6 },
            }}
          >
            <FollowButton followed={!!props?.Followed} targetUsername={props?.UserName} targetUserId={props?.UserID} />
          </Box>
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <Link
            to={"/u/" + props?.UserName}
            style={{
              fontWeight: "600",
              color: "#fff",
              fontSize: "16px",
              textAlign: "center",
              textDecoration: "none",
              display: "block",
            }}
          >
            {props?.FullName ?? props?.UserName}
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
            <Link to={"/u/" + props?.UserName + "/reviews"}>{props?.Reviews ?? 0} films reviewed</Link>
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
            {(props?.FavouriteFilmList?.slice(0, 3) ?? Array.from({ length: 3 })).map((i, idx) => (
              <Grid
                key={idx}
                item
                xs={4}
                sx={{
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <FilmCard size={46.5} link={i?.FilmID && "/films/" + i?.FilmID} src={i?.Poster_path} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default function PopularReviewers() {
  const [{ data, loading, error }] = useAxios({
    url: `Users/Popular`,
    method: "POST",
    data: {
      pageSize: 5,
      pageIndex: 1,
      sort: "Week",
    },
  });

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
        }}
      >
        <Box
          component="h1"
          sx={{
            color: "#fff",
            fontWeight: "400",
            fontSize: { xs: "14px", md: "16px" },
            margin: "0",
            textTransform: "uppercase",
          }}
        >
          Popular this week
        </Box>
        <Divider />
      </Box>
      {loading ? (
        <Loading paddingY={15} />
      ) : (
        <Box className="featured-people">
          <Grid container spacing={0} columns={30}>
            {data?.Data?.map((i, idx) => (
              <FeaturedPerson key={idx} {...i} />
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
