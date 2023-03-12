import Container from "@mui/system/Container";
import { Box, Button, Grid, CardMedia } from "@mui/material";
import ReviewDetailMainSection from "./review-detail-main-section";
import ReviewDetailAside from "./review-detail-aside";
import { reviewDetailStyle } from "./review-detail-style";

export default function ReviewDetail() {
  const classes = reviewDetailStyle();
  return (
    <Container className={classes.container}>
      <Box xs={{ flexGrow: 1 }}>
        <Grid container spacing={8} columns={12}>
          {/* Main */}
          <Grid item xs={12} md={9}>
            <ReviewDetailMainSection></ReviewDetailMainSection>
          </Grid>
          {/* Aside */}
          <Grid item xs={12} md={3}>
            <ReviewDetailAside></ReviewDetailAside>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
