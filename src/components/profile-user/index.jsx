import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import styles from "./profile.module.scss";
import GroupAvatars from "./avatar-group.jsx";
import { ProfileStats } from "./profile-stats.jsx";
import { NavLink, Outlet, useParams } from "react-router-dom";

const Root = styled("div")({
  flexGrow: 1,
  padding: 10,
  marginTop: 50,
});

const profileTabs = [
  { label: "Profile", href: "" },
  { label: "Reviews", href: "/reviews" },
  { label: "Watchlist", href: "/watchlist" },
  { label: "Lists", href: "/lists" },
  { label: "Likes", href: "/likes" },
  { label: "Tags", href: "/tags" },
  { label: "Activity", href: "/activity" },
  { label: "Network", href: "/network" },
  { label: "Edit Profile", href: "/edit-profile" },
];

const ProfileUser = () => {
  const { username } = useParams();

  return (
    <Root className={styles.profilePage}>
      <Box position={"relative"}>
        <Box
          width={{ xs: "95vw", md: "80vw" }}
          component="img"
          sx={{
            position: "absolute",
            top: { md: -50 },
            left: 0,
            right: 0,
            marginX: "auto",
            aspectRatio: "1920/1080",
            alignSelf: "center",
            zIndex: -2,
          }}
          alt="The house from the offer."
          src={
            "https://a.ltrbxd.com/resized/sm/upload/82/hx/9r/sy/te44hmcKd8xDt6gQcSo62tZR2fC-1200-1200-675-675-crop-000000.jpg?v=8d5753ec55"
          }
        />
        <Box
          width={{ xs: "95vw", md: "80vw" }}
          sx={{
            position: "absolute",
            top: { md: -50 },
            left: 0,
            right: 0,
            marginX: "auto",
            aspectRatio: "1920/1080",
            alignSelf: "center",
            zIndex: -1,
            background:
              "linear-gradient(90deg,#14181d 0,rgba(20,24,29,.986) .97%,rgba(20,24,29,.945) 2.07833333%,rgba(20,24,29,.883) 3.29666667%,rgba(20,24,29,.803) 4.60166667%,rgba(20,24,29,.711) 5.96666667%,rgba(20,24,29,.61) 7.365%,rgba(20,24,29,.504) 8.77166667%,rgba(20,24,29,.398) 10.16%,rgba(20,24,29,.296) 11.505%,rgba(20,24,29,.203) 12.78%,rgba(20,24,29,.122) 13.95833333%,rgba(20,24,29,.059) 15.01666667%,rgba(20,24,29,.016) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.016) 84.07166667%,rgba(20,24,29,.059) 84.98333333%,rgba(20,24,29,.122) 86.04166667%,rgba(20,24,29,.203) 87.22%,rgba(20,24,29,.296) 88.495%,rgba(20,24,29,.398) 89.84%,rgba(20,24,29,.504) 91.22833333%,rgba(20,24,29,.61) 92.635%,rgba(20,24,29,.711) 94.03333333%,rgba(20,24,29,.803) 95.39833333%,rgba(20,24,29,.883) 96.70333333%,rgba(20,24,29,.945) 97.92166667%,rgba(20,24,29,.986) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.986) 23.63703704%,rgba(20,24,29,.945) 26.1%,rgba(20,24,29,.883) 28.80740741%,rgba(20,24,29,.803) 31.70740741%,rgba(20,24,29,.711) 34.74074074%,rgba(20,24,29,.61) 37.84814815%,rgba(20,24,29,.504) 40.97407407%,rgba(20,24,29,.398) 44.05925926%,rgba(20,24,29,.296) 47.04814815%,rgba(20,24,29,.203) 49.88148148%,rgba(20,24,29,.122) 52.5%,rgba(20,24,29,.059) 54.85185185%,rgba(20,24,29,.016) 56.87777778%,rgba(20,24,29,0) 58.51851852%)",
          }}
        />
      </Box>
      <Container sx={{ mt: 40, color: "#fff" }}>
        <Grid container spacing={2} marginTop mb={3}>
          <Grid item xs={8} container>
            <Grid item xs={2}>
              <Avatar
                sx={{ width: 100, height: 100 }}
                alt="Remy Sharp"
                src="https://s.ltrbxd.com/static/img/avatar220.1dea069d.png"
              />
            </Grid>
            <Grid item xs={10} marginTop={2}>
              <Typography variant="h5" color="#fff">
                {username}
              </Typography>
              <Typography variant={"body2"} color={"#9ab"}>
                {"this is the biography"}
              </Typography>
              <Button variant="contained" sx={{ bgcolor: "#456", p: 0, py: 0.5 }}>
                Follow
              </Button>
              <GroupAvatars />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <ProfileStats />
          </Grid>
        </Grid>
        <Box
          sx={{
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {profileTabs.map((i, idx) => (
            <NavLink
              className={styles.tabs}
              to={`/u/${username}${i.href}`}
              key={idx}
              style={({ isActive }) => {
                return {
                  paddingTop: 10,
                  paddingBottom: 10,
                  color: isActive ? "#fff" : "#ccc",
                  borderBottom: isActive ? "1px solid #fff" : "none",
                };
              }}
              end
            >
              {i.label}
            </NavLink>
          ))}
        </Box>
        <Outlet />
      </Container>
    </Root>
  );
};
export default ProfileUser;
