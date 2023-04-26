import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { Divider, ListItemIcon, MenuItem } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import UserStore from "../../../../store/user.store.js";
import NotiBox from "./noti-box.jsx";

export default function UserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <NotiBox />
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src={UserStore.user?.Avatar} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={(theme) => ({
          mt: "48px",
          "& .MuiPopover-paper": {
            background: "rgba(0,0,0,0.8)",
            color: "#fff",
          },
          "& .MuiMenuItem-root": {
            "&:hover": {
              background: "rgba(255,255,255,0.2)",
              color: "#fff",
            },
          },
        })}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Link to={`/u/${UserStore.user?.UserName}`}>
          <MenuItem>
            <ListItemIcon sx={{ color: "inherit" }}>
              <PersonOutlineIcon fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
        </Link>
        <Divider variant={"fullWidth"} sx={{ borderColor: "#ddd" }} />
        <MenuItem onClick={() => UserStore.logout()}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
