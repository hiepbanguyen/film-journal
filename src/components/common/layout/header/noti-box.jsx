import * as React from "react";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import moment from "moment";

const exampleData = [
  {
    avatar: "https://a.ltrbxd.com/resized/avatar/upload/1/1/9/8/0/4/8/shard/avtr-0-48-0-48-crop.jpg?v=1e09b678c6",
    username: "bahiep",
    content: "liked your review of Avatar: The Way Of Water",
    date: new Date(),
    link: "/u/bahiepng/reviews/sca32",
    seen: true,
  },
  {
    avatar: "https://a.ltrbxd.com/resized/avatar/upload/1/1/9/8/0/4/8/shard/avtr-0-48-0-48-crop.jpg?v=1e09b678c6",
    username: "bahiep",
    content: "liked your review of Avatar: The Way Of Water",
    date: new Date(),
    link: "/u/bahiepng/reviews/sca32",
    seen: true,
  },
  {
    avatar: "https://a.ltrbxd.com/resized/avatar/upload/1/1/9/8/0/4/8/shard/avtr-0-48-0-48-crop.jpg?v=1e09b678c6",
    username: "bahiep",
    content: "liked your review of Avatar: The Way Of Water",
    date: new Date(),
    link: "/u/bahiepng/reviews/sca32",
    seen: false,
  },
  {
    avatar: "https://a.ltrbxd.com/resized/avatar/upload/1/1/9/8/0/4/8/shard/avtr-0-48-0-48-crop.jpg?v=1e09b678c6",
    username: "bahiep",
    content: "commented on your review of Avatar: The Way Of Water",
    date: new Date(),
    link: "/u/bahiepng/reviews/sca32",
    seen: false,
  },
  {
    avatar: "https://a.ltrbxd.com/resized/avatar/upload/1/1/9/8/0/4/8/shard/avtr-0-48-0-48-crop.jpg?v=1e09b678c6",
    username: "bahiep",
    content: "commented on your review of Avatar: The Way Of Water",
    date: new Date(),
    link: "/u/bahiepng/reviews/sca32",
    seen: false,
  },
  {
    avatar: "https://a.ltrbxd.com/resized/avatar/upload/1/1/9/8/0/4/8/shard/avtr-0-48-0-48-crop.jpg?v=1e09b678c6",
    username: "bahiep",
    content: "commented on your review of Avatar: The Way Of Water",
    date: new Date(),
    link: "/u/bahiepng/reviews/sca32",
    seen: true,
  },
];
const Notification = (props) => {
  const { avatar, username, content, date, link, seen } = props;
  return (
    <Link to={link}>
      <Box
        borderRadius={1}
        my={1}
        p={1}
        sx={{
          background: seen ? "rgba(255,255,255,0.15)" : "transparent",
          ":hover": {
            background: "rgba(255,255,255,0.2)",
          },
        }}
      >
        <Box display={"flex"} gap={1}>
          <Avatar src={avatar} alt={"user-avatar"} sx={{ width: 24, height: 24 }} />
          <Typography fontSize={15}>
            <strong>{username}</strong> {content}
          </Typography>
        </Box>
        <Typography fontSize={13} textAlign={"right"}>
          <i>{moment(date).format("HH:MM MMM DD, YYYY")}</i>
        </Typography>
      </Box>
    </Link>
  );
};

export default function NotiBox() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        sx={{
          color: "#fff",
          ":hover": {
            bgcolor: "#333",
          },
        }}
        onClick={handleClick}
      >
        <Badge badgeContent={0} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={(theme) => ({
          mt: 1.5,
          mr: 5,
          "& .MuiPopover-paper": {
            p: 2,
            pt: 1,
            background: "rgba(0,0,0,0.8)",
            color: "#fff",
            width: { xs: "90vw", sm: 400 },
            maxWidth: "none",
            maxHeight: 300,
            borderRadius: 1,
            backdropFilter: "blur(5px)",
            "&::-webkit-scrollbar": {
              width: 15,
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255,255,255,0.7)",
              borderRadius: 10,
              border: "4px solid transparent",
              backgroundClip: "padding-box",
            },
          },
        })}
      >
        <h3 style={{ margin: 2 }}>Notification</h3>
        {exampleData.map((i, idx) => (
          <Notification key={idx} {...i} />
        ))}
      </Popover>
    </>
  );
}
