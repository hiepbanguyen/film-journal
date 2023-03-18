import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import "./profile.css";
import CustomTabs from "../common/tabs.jsx";
import { TabProfile } from "./profile-tab-user.jsx";

const Root = styled("div")({
  flexGrow: 1,
  padding: 10,
});

const profileLabels = ["Profile", "Activity"];

const ProfileUser = () => {
  const [username, setUsername] = React.useState("viethoan2k1");

  return (
    <Root>
      <Container>
        <Grid container spacing={2} marginTop>
          <Grid item xs={8} container>
            <Grid item xs={2}>
              <Avatar
                sx={{ width: 100, height: 100 }}
                alt="Remy Sharp"
                src="https://s.ltrbxd.com/static/img/avatar220.1dea069d.png"
              />
            </Grid>
            <Grid item xs={2} marginTop={2}>
              <Typography variant="h5" color="#fff">
                {username}
              </Typography>
              <Button
                variant="contained"
                sx={{ width: 120, height: 30, color: "#9ab", fontSize: "12px", bgcolor: "#556677" }}
              >
                EDIT PROFILE
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <div className="profile-stats js-profile-stats">
              <h4 className="profile-statistic statistic">
                <a href="">
                  <span className="value">1</span>
                  <span className="definition">Film</span>
                </a>
              </h4>
              <h4 className="profile-statistic statistic">
                <a href="">
                  <span className="value">0</span>
                  <span className="definition">This year</span>
                </a>
              </h4>
              <h4 className="profile-statistic statistic">
                <a href="">
                  <span className="value">0</span>
                  <span className="definition">Lists</span>
                </a>
              </h4>
              <h4 className="profile-statistic statistic">
                <a href="">
                  <span className="value">0</span>
                  <span className="definition">Following</span>
                </a>
              </h4>
              <h4 className="profile-statistic statistic">
                <a href="">
                  <span className="value">0</span>
                  <span className="definition">Followers</span>
                </a>
              </h4>
            </div>
          </Grid>
        </Grid>
        <CustomTabs labels={profileLabels}>
          <TabProfile />
        </CustomTabs>
      </Container>
    </Root>
  );
};
export default ProfileUser;
