import { Box } from "@mui/material";
import * as React from "react";
import baseAPI from "../../apis/baseApi";
import Enum from "../../apis/enums/Enum";
import { Link } from "react-router-dom";
import UserStore from "../../store/user.store.js";

function ListUser(props) {
  const [list, setList] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    let param = {
      pageSize: 20,
      pageIndex: 1,
      filter: "",
      sort: "UserName",
      typeUser: props.isFollowing ? Enum.TypeUser.Following : Enum.TypeUser.Follower,
      userName: UserStore.user.UserName,
    };
    baseAPI
      .postAsync(`Users/Paging`, param)
      .then((res) => {
        if (res) {
          setList(res.data.Data);
          setTotal(res.data.Total);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ marginBottom: "24px" }}>
      <Box
        sx={{
          fontSize: { xs: "12px", md: "14px" },
          textTransform: "uppercase",
          borderBottom: "1px solid #9ab",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
          color: "#9ab",
          "a:hover": { color: "#40bcf4" },
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={props.isFollowing ? "/u/userName/following/" : "/u/userName/followers/"}
        >
          {props.isFollowing ? "You Follow" : "Following you"}
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={props.isFollowing ? "/u/userName/following/" : "/u/userName/followers/"}
        >
          {total}
        </Link>
      </Box>
      <Box>
        {list.map((user, idx) => (
          <Box key={idx} sx={{ aspectRatio: "1/1", width: "16.66666%", display: "inline-block" }}>
            <Link to={"/u/" + user.UserName} style={{ width: "100%", height: "100%" }}>
              <Box
                component="img"
                src={user.avatar}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  "&:hover": {
                    border: "2px solid #9ab",
                  },
                }}
              ></Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function MembersAside() {
  return (
    <Box>
      <ListUser isFollowing={true}></ListUser>
      <ListUser isFollowing={false}></ListUser>
    </Box>
  );
}
