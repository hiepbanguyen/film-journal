import { Box, Button } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GridViewIcon from "@mui/icons-material/GridView";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import baseAPI from "../../apis/baseApi";
import Enum from "../../apis/enums/Enum";
import { Link } from "react-router-dom";
import UserStore from "../../store/user.store.js";

export default function ListReviewers() {
  const [listMember, setListMember] = React.useState([]);

  React.useEffect(() => {
    let param = {
      pageSize: 20,
      pageIndex: 1,
      filter: "",
      sort: "UserName",
      typeUser: Enum.TypeUser.All,
      userName: "",
    };
    baseAPI
      .postAsync(`Users/Paging`, param)
      .then((res) => {
        if (res) {
          setListMember(res.data.Data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const followingMember = (member) => {
    let param = {
      UserID: JSON.parse(localStorage.getItem("user")).UserID,
      FollowedUserID: member.UserID,
    };
    baseAPI
      .postAsync(`Follows`, param)
      .then((res) => {
        if (res) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ borderBottom: "2px solid #99aabb73" }}>
            <TableCell sx={{ color: "#fff" }}>Name</TableCell>
            <TableCell sx={{ color: "#fff", display: { xs: "none", md: "table-cell" } }}>Reviews</TableCell>
            <TableCell sx={{ color: "#fff", display: { xs: "none", md: "table-cell" } }}>Lists</TableCell>
            <TableCell sx={{ color: "#fff", display: { xs: "none", md: "table-cell" } }}>Likes</TableCell>
            {UserStore.isLoggedIn && (
              <TableCell align="right" sx={{ color: "#fff" }}>
                Follow
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {listMember.map((member, idx) => (
            <TableRow
              key={idx}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                borderBottom: "2px solid #99aabb73",
                " a:hover": {
                  color: "#fff",
                },
              }}
            >
              <TableCell scope="row" sx={{ color: "#9ab" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                  <Link
                    to={"/" + member.UserName}
                    style={{ width: "40px", height: "40px", overflow: "hidden", marginRight: "8px" }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "50%",
                        ":hover": {
                          border: "1px solid #9ab",
                        },
                      }}
                      src={member.Avatar}
                    ></Box>
                  </Link>
                  <Box>
                    <Link to={"/" + member.UserName} style={{ color: "#fff", fontWeight: "600" }}>
                      {member.UserName}
                    </Link>
                    <Box style={{ display: "block", transition: "0.2s" }}>15 followers, following 200</Box>
                  </Box>
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Link
                  to={"/u/" + member.UserName + "/reviews"}
                  style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                >
                  <RemoveRedEyeIcon sx={{ marginRight: "4px", color: "#00b020" }}></RemoveRedEyeIcon> {member.Reviews}
                </Link>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Link
                  to={"/u/" + member.UserName + "/lists"}
                  style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                >
                  <GridViewIcon sx={{ marginRight: "4px", color: "#40bcf4" }}></GridViewIcon> {member.Lists}
                </Link>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Link
                  to={"/u/" + member.UserName + "/likes"}
                  style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                >
                  <FavoriteIcon sx={{ marginRight: "4px", color: "#ff9010" }}></FavoriteIcon> {member.Likes}
                </Link>
              </TableCell>
              {UserStore.isLoggedIn && (
                <TableCell align="right" sx={{ color: "#9ab" }}>
                  {member.Followed ? (
                    <Button
                      className="btn-remove-follow"
                      sx={{
                        "&:hover .done-icon": {
                          backgroundColor: "#000",
                          display: "none",
                        },
                        "&:hover .clear-icon": {
                          display: "inline",
                        },
                        display: "inline-block",
                        borderRadius: "50%",
                        minWidth: "unset",
                        padding: "0",
                        height: "30px",
                      }}
                    >
                      <DoneIcon
                        className="done-icon"
                        sx={{
                          color: "#fff",
                          backgroundColor: "#00b020",
                          fontSize: "30px",
                          padding: "4px",
                          borderRadius: "50%",
                        }}
                      ></DoneIcon>
                      <ClearIcon
                        className="clear-icon"
                        sx={{
                          color: "#fff",
                          backgroundColor: "#ff9010",
                          fontSize: "30px",
                          padding: "4px",
                          borderRadius: "50%",
                          display: "none",
                        }}
                      ></ClearIcon>
                    </Button>
                  ) : (
                    <Button
                      sx={{
                        display: "inline-block",
                        borderRadius: "50%",
                        minWidth: "unset",
                        padding: "0",
                        height: "30px",
                      }}
                    >
                      <AddIcon
                        className="add-icon"
                        sx={{
                          color: "#fff",
                          backgroundColor: "#556677",
                          fontSize: "30px",
                          padding: "4px",
                          borderRadius: "50%",
                          transition: "0.2s",
                          "&:hover": {
                            backgroundColor: "#8e99a4",
                          },
                        }}
                        onClick={() => followingMember(member)}
                      ></AddIcon>
                    </Button>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
