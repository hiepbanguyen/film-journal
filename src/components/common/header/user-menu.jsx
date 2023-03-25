import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { ListItemIcon, MenuItem } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import UserStore from "../../../store/user.store.js";

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
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: "45px",
          "& .MuiPaper-root": {
            // background: "rgba(0,0,0,0.6)",
            color: "#bcd",
          },
        }}
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
        <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem sx={{ color: "inherit" }}>
            <ListItemIcon sx={{ color: "inherit" }}>
              <PersonOutlineIcon fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
        </Link>
        <MenuItem onClick={() => UserStore.logout()} sx={{ color: "inherit" }}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <LogoutIcon fontSize="small" sx={{ color: "inherit" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
