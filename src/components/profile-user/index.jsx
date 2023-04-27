import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import styles from "./profile.module.scss";
import GroupAvatars from "./avatar-group.jsx";
import { ProfileStats } from "./profile-stats.jsx";
import { NavLink, Outlet, useParams } from "react-router-dom";
import UserStore from "../../store/user.store";
import { observer } from "mobx-react-lite";
import useAxios from "axios-hooks";
import { PageNotExist } from "../common/page-not-exist.jsx";
import { Loading } from "../common/loading.jsx";
import defaultUserBanner from "../../assets/img/default-user-banner.png";

const Root = styled("div")({
  flexGrow: 1,
  padding: 10,
  marginTop: 50,
});

const profileTabs = [
  { label: "Profile", href: "" },
  { label: "Reviews", href: "reviews" },
  { label: "Watchlist", href: "watchlist" },
  { label: "Lists", href: "lists" },
  { label: "Likes", href: "likes" },
  // { label: "Tags", href: "tags" },
  // { label: "Activity", href: "activity" },
  { label: "Following", href: "following" },
  { label: "Followers", href: "followers" },
  { label: "Info and Security", href: "edit-profile" },
];

const ProfileNavigation = observer(() => {
  return (
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
      {(UserStore.isLoggedIn ? profileTabs : profileTabs.filter((i) => i.href !== "edit-profile")).map((i, idx) => (
        <NavLink
          className={styles.tabs}
          to={`${i.href}`}
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
  );
});

const bannerPositionTop = { xs: -30, sm: -50, md: -80, lg: -100 };
const avatarSize = 80;

const ProfileUser = () => {
  const { username } = useParams();

  const [{ data, loading, error }, refetch] = useAxios(`Users/${username}/Profile-info`);
  // console.log(data);

  if (!loading && !data) return <PageNotExist />;

  return (
    <Root className={styles.profilePage}>
      <Box position={"relative"}>
        <Box
          width={{ xs: "95vw", md: "80vw" }}
          component="img"
          sx={{
            position: "absolute",
            top: bannerPositionTop,
            left: 0,
            right: 0,
            marginX: "auto",
            aspectRatio: "1920/1080",
            alignSelf: "center",
            zIndex: -2,
          }}
          alt="The house from the offer."
          src={loading ? "" : data.Banner ?? defaultUserBanner}
        />
        <Box
          width={{ xs: "95vw", md: "80vw" }}
          sx={{
            position: "absolute",
            top: bannerPositionTop,
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
      <Container sx={{ mt: { xs: 18, sm: 30 }, color: "#fff" }}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }}>
              <Box flex={8}>
                <Box sx={{ display: "flex" }}>
                  <Avatar sx={{ width: avatarSize, height: avatarSize }} alt="Remy Sharp" src={data.Avatar} />
                  <Box ml={1}>
                    <Typography variant="h5" color="#fff" pt={1}>
                      {data.FullName ?? data.UserName}
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: "#456", p: 0, py: 0.5, mt: 0.5 }}>
                      Follow
                    </Button>
                  </Box>
                </Box>
                <Typography variant={"body2"} color={"#9ab"} pt={1} pr={{ sm: 5, md: 10 }}>
                  {data.Bio}
                </Typography>
              </Box>
              <Box flex={4}>
                <ProfileStats {...data} />
              </Box>
            </Box>
            <GroupAvatars followers={data?.Followers} />
          </>
        )}
        <ProfileNavigation />
        <Outlet />
      </Container>
    </Root>
  );
};
export default ProfileUser;
