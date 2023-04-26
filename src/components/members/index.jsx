import Container from "@mui/system/Container";
import { Box, Typography } from "@mui/material";
import PopularReviewers from "./popular-reviewers";
import { ListReviewers } from "./list-reviewers";
import MembersAside from "./aside";
import { observer } from "mobx-react-lite";
import UserStore from "../../store/user.store.js";

export default function Members() {
  return (
    <Container
      sx={{
        marginTop: 10,
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

      <Box display={"flex"} flexWrap={"wrap"} flexDirection={{ xs: "column", md: "row" }} gap={{ xs: 5, md: 5 }}>
        <Box flex={3}>
          <Typography textTransform={"uppercase"} textAlign={"center"} fontWeight={"bold"} color={"#fff"} mb={2}>
            Biggest contributers
          </Typography>
          <ListReviewers />
        </Box>
        <Aside />
      </Box>
    </Container>
  );
}

const Aside = observer(() => {
  return (
    <>
      {UserStore.isLoggedIn && (
        <Box flex={1}>
          <MembersAside />
        </Box>
      )}
    </>
  );
});
