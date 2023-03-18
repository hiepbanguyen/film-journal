import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import CustomTabs from "../common/tabs.jsx";
import Profile from "./profile-tab.jsx";
import AvatarTab from "./avatar-tab.jsx";

const Root = styled("div")({
  flexGrow: 1,
  padding: 2,
});

const settingsLabels = ["Profile", "Avatar"];

const Settings = () => {
  return (
    <Root>
      <Container>
        <Typography variant="h5" color="#AABBCC" marginTop="20px" marginBottom="20px" marginLeft="0.9rem">
          {"Account Settings"}
        </Typography>
        <CustomTabs labels={settingsLabels}>
          <Profile />
          <AvatarTab />
        </CustomTabs>
      </Container>
    </Root>
  );
};
export default Settings;
