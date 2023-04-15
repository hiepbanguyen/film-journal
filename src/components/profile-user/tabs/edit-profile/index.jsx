import * as React from "react";
import { Box, Divider, Typography, Grid, Tabs, Tab } from "@mui/material";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import { Link, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PaginationBase from "../../../common/pagination-base";
import { Information } from "./information";
import { ChangeAvatar } from "./change-avatar";
import { ChangePassword } from "./change-password";

export const UserEditProfile = () => {
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Information" />
          <Tab label="Avatar" />
          <Tab label="Password" />
        </Tabs>
      </Box>
      <Box>
        <Box sx={{
            display: `${tab == 0 ? 'block' : 'none'}`
        }}>
            <Information></Information>
        </Box>
        <Box sx={{
            display: `${tab == 1 ? 'block' : 'none'}`
        }}>
            <ChangeAvatar></ChangeAvatar>
        </Box>
        <Box sx={{
            display: `${tab == 2 ? 'block' : 'none'}`
        }}>
            <ChangePassword></ChangePassword>
        </Box>
      </Box>
    </Box>
  );
};
