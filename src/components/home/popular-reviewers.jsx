import { Divider, Grid, Typography } from "@mui/material";
import MemberPreview from "../common/member-preview.jsx";

export const PopularReviewers = () => {
  return (
    <>
      <Typography variant={"body1"} textTransform={"uppercase"} color={"#fff"} mt={5}>
        popular reviewers
      </Typography>
      <Divider />
      <Grid container>
        {Array.from({ length: 5 }).map((i, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={12}>
            <MemberPreview fullname={"Ba Hiep"} username={"bahiep"} followers={15} following={20} filmsReviewed={200} />
            {idx < 4 && <Divider variant={"fullWidth"} />}
          </Grid>
        ))}
      </Grid>
    </>
  );
};
