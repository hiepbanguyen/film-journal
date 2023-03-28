import Container from "@mui/system/Container";
import { Box, Grid } from "@mui/material";
import PopularReviewers from "./popular-reviewers";
import ListReviewers from "./list-reviewers";
import MembersAside from "./aside";

export default function Members() {
  return (
    <Container
      sx={{
        marginTop: 10,
      }}
    >
      <Box
        className="members-title"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: { xs: "12px", md: "16px" },
        }}
      >
        <Box
          component="h1"
          sx={{
            fontSize: { xs: "20px", md: "26px" },
            color: "#9ab",
            fontWeight: "400",
          }}
        >
          Film lovers, critics and friends — find popular members.
        </Box>
      </Box>
      <PopularReviewers></PopularReviewers>

      <Box>
        <Grid container spacing={8} columns={13}>
          <Grid item xs={13} md={9}>
            <ListReviewers></ListReviewers>
          </Grid>
          <Grid item xs={13} md={4}>
            <MembersAside></MembersAside>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
