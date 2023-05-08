import Container from "@mui/system/Container";
import { Box, Typography } from "@mui/material";
import { PopularReviewers } from "./popular-reviewers";
import { ListReviewers } from "./list-reviewers";
import MembersAside from "./aside";

export default function Members() {
  return (
    <Container
      sx={{
        marginTop: 10,
        marginBottom: 5,
        color: "#9ab",
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
      <PopularReviewers />
      <Box display={"flex"} flexWrap={"wrap"} flexDirection={{ xs: "column", md: "row" }} gap={5} mt={5}>
        <Box flex={2}>
          <Typography textTransform={"uppercase"} textAlign={"center"} fontWeight={"bold"} color={"#fff"} mb={2}>
            Biggest contributers
          </Typography>
          <ListReviewers />
        </Box>
        <Box flex={1}>
          <Typography textTransform={"uppercase"} textAlign={"center"} fontWeight={"bold"} color={"#fff"} mb={4.5}>
            Popular this month
          </Typography>
          <Box flex={1} display={"flex"} sx={{ justifyContent: "center" }}>
            <MembersAside />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
