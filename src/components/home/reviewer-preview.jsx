import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const PopularReviewers = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          popular reviewers
        </Typography>
        <Typography variant={"caption"} mt={5}>
          MORE
        </Typography>
      </Box>
      <Divider variant="fullWidth" />
      <Grid container>
        {Array.from({ length: 5 }).map((i, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={12}>
            <ReviewerPreview
              fullname={"Bá Hiệp Nguyễn"}
              username={"bahiepnguyen"}
              filmCount={400}
              reviewCount={50}
              avatar={""}
            />
            {idx < 4 && <Divider variant={"fullWidth"} />}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

function ReviewerPreview(props) {
  const { username, fullname, filmCount, reviewCount, avatar } = props;
  return (
    <Link to={`u/${username}`}>
      <Box display={"flex"} alignItems={"center"} my={1}>
        <Avatar src={avatar} sx={{ width: 40, height: 40 }} />
        <Box>
          <Typography variant={"body1"} ml={1} fontWeight={"bold"} sx={{ ":hover": { color: "#fff" } }}>
            {fullname ?? username}
          </Typography>
          <Typography variant={"caption"} ml={1}>
            {filmCount}
            {" films, "}
            {reviewCount}
            {" reviews."}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
