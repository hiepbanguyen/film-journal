import * as React from "react";
import { Avatar, Badge, Box, Button, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { estimatedTimeElapsed } from "../../../../utils/time.js";
import useAxios from "axios-hooks";
import { Loading } from "../../loading.jsx";
import UserStore from "../../../../store/user.store.js";

const Notification = (props) => {
  const { avatar, fullname, username, content, date, seen } = props;

  return (
    <Box
      borderRadius={1}
      my={1}
      p={1}
      sx={{
        background: !seen ? "rgba(255,255,255,0.2)" : "transparent",
        ":hover": {
          background: "rgba(255,255,255,0.1)",
          cursor: "pointer",
        },
        color: !seen ? "#fff" : "#ccc",
      }}
    >
      <Box display={"flex"} gap={1}>
        <Box>
          <Avatar src={avatar} alt={"user-avatar"} sx={{ width: 30, height: 30 }} />
          <Typography fontSize={12} textAlign={"center"}>
            {estimatedTimeElapsed(new Date(date))}
          </Typography>
        </Box>
        <Typography fontSize={15}>
          <strong>{fullname ? fullname : username}</strong> {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default function NotiBox() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [dataPerPage, setDataPerPage] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [{ data, loading, error }, refetch] = useAxios({
    url: "Notification/GetAll",
    method: "POST",
    data: {
      pageSize: 9999,
      pageIndex: 1,
    },
  });
  const [, markAllNotiSeen] = useAxios({ url: `Notification/-1/MarkAsSeen`, method: "PUT" }, { manual: true });
  const [, markNotiSeen] = useAxios({ method: "PUT" }, { manual: true });

  React.useEffect(() => {
    // if (data?.Data) {
    //   setDataPerPage([...dataPerPage, ...data.Data]);
    // }
    //fetch notifications every 60 seconds
    if (UserStore.isLoadedFromLocal && UserStore.isLoggedIn) {
      refetch();
      const interval = setInterval(() => {
        refetch();
      }, 60000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [UserStore.isLoadedFromLocal, UserStore.isLoggedIn]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const markAllNotiButton = () => {
    markAllNotiSeen().then((res) => {
      if (res?.data) {
        refetch();
      }
    });
  };

  const handleNotiClick = (notiId) => {
    handleClose();
    markNotiSeen({ url: `Notification/${notiId}/MarkAsSeen` }).then((res) => {
      if (res?.data) {
        refetch();
      }
    });
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
        <Badge badgeContent={data?.TotalUnseen} color="error">
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
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"}>
          <h3 style={{ margin: 2 }}>Notification</h3>
          <Button onClick={markAllNotiButton} sx={{ ":hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>
            Mark all as read
          </Button>
        </Box>
        {loading ? (
          <Loading paddingY={10} />
        ) : (
          <>
            {data?.Data?.map((i, idx) => (
              <Box key={idx} component={Link} to={i?.Link ?? ""} onClick={() => handleNotiClick(i?.NotificationID)}>
                <Notification
                  key={idx}
                  avatar={i?.Sender?.Avatar}
                  username={i?.Sender?.UserName}
                  fullname={i?.Sender?.FullName}
                  notiId={i?.NotificationID}
                  content={i?.Content}
                  date={i?.Date}
                  seen={i?.Seen}
                />
              </Box>
            ))}
            {pageIndex < data?.TotalPage && <Button onClick={() => setPageIndex(pageIndex + 1)}>Load more...</Button>}
          </>
        )}
      </Popover>
    </>
  );
}
