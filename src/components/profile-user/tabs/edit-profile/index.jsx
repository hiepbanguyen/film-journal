import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import { Information } from "./information";
import { AvatarAndBanner } from "./avatar-and-banner.jsx";
import { ChangePassword } from "./change-password";
import UserStore from "../../../../store/user.store.js";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

export const UserEditProfile = observer(() => {
  const [tab, setTab] = React.useState(0);
  const navigate = useNavigate();
  const { username } = useParams();

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  React.useEffect(() => {
    if (!UserStore.isLoggedIn) {
      navigate("/u/" + username);
    }
  }, [UserStore.isLoggedIn]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column ", alignItems: "center" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          fontSize: "12px",
          marginTop: "12px",
          "span.css-1aquho2-MuiTabs-indicator": {
            backgroundColor: "#9ab",
          },
        }}
      >
        <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{ fontSize: "12px", color: "#9ab" }} label="Information" />
          <Tab style={{ fontSize: "12px", color: "#9ab" }} label="Avatar & Banner" />
          <Tab style={{ fontSize: "12px", color: "#9ab" }} label="Password" />
        </Tabs>
      </Box>
      <Box sx={{ marginTop: "32px" }}>
        <Box
          sx={{
            display: `${tab === 0 ? "block" : "none"}`,
          }}
        >
          <Information />
        </Box>
        <Box
          sx={{
            display: `${tab === 1 ? "block" : "none"}`,
          }}
        >
          <AvatarAndBanner />
        </Box>
        <Box
          sx={{
            display: `${tab === 2 ? "block" : "none"}`,
          }}
        >
          <ChangePassword />
        </Box>
      </Box>
    </Box>
  );
});
