import Container from "@mui/system/Container";
import { Box, Button, Grid, CardMedia } from "@mui/material";
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
import Enum from "../../apis/enums/Enum"

export default function ListReviewers() {
  const [listMember, setListMember] = React.useState([]);

  React.useEffect(()=>{
    let param = {
        pageSize: 20,
        pageIndex: 1,
        filter: "",
        sort: "UserName",
        typeUser: Enum.TypeUser.All,
        userName: ""
    }
    baseAPI.postAsync(`Users/Paging`, param)
    .then((res) => {
      if (res) {
        setListMember(res.data.Data)
      }
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);

  const followingMember = (member) => {
    let param = {
      UserID: JSON.parse(localStorage.getItem("user")).UserID,
      FollowedUserID: member.UserID
    }
    baseAPI.postAsync(`Follows`, param)
    .then((res) => {
      if (res) {
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ borderBottom: "2px solid #99aabb73" }}>
            <TableCell sx={{ color: "#fff" }}>Name</TableCell>
            <TableCell sx={{ color: "#fff", display: { xs: "none", md: "table-cell" } }}>Watched</TableCell>
            <TableCell sx={{ color: "#fff", display: { xs: "none", md: "table-cell" } }}>Lists</TableCell>
            <TableCell sx={{ color: "#fff", display: { xs: "none", md: "table-cell" } }}>Likes</TableCell>
            <TableCell align="right" sx={{ color: "#fff" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listMember.map((member, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 }, borderBottom: "2px solid #99aabb73" }}
            >
              <TableCell component="th" scope="row" sx={{ color: "#9ab" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                  <Box sx={{ width: "40px", height: "40px", overflow: "hidden", marginRight: "8px" }}>
                    <Box
                      component="img"
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "50%",
                      }}
                      src={member.Avatar}
                    ></Box>
                  </Box>
                  <Box>
                    <Box sx={{ color: "#fff", fontWeight: "600" }}>{member.UserName}</Box>
                    <Box>{member.Reviews} Reviews</Box>
                  </Box>
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Box sx={{ display: "flex", alignItems: "center", lineHeight: "40px" }}>
                  <RemoveRedEyeIcon sx={{ marginRight: "4px", color: "#00b020" }}></RemoveRedEyeIcon> {member.watched}
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Box sx={{ display: "flex", alignItems: "center", lineHeight: "40px" }}>
                  <GridViewIcon sx={{ marginRight: "4px", color: "#40bcf4" }}></GridViewIcon> {member.Lists}
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Box sx={{ display: "flex", alignItems: "center", lineHeight: "40px" }}>
                  <FavoriteIcon sx={{ marginRight: "4px", color: "#ff9010" }}></FavoriteIcon> {member.Likes}
                </Box>
              </TableCell>
              <TableCell align="right" sx={{ color: "#9ab" }}>
                {member.Followed ? (
                  <Box
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
                  </Box>
                ) : (
                  <Box>
                    <AddIcon
                      className="add-icon"
                      sx={{
                        color: "#fff",
                        backgroundColor: "#556677",
                        fontSize: "30px",
                        padding: "4px",
                        borderRadius: "50%",
                        transition: "0.3s",
                        "&:hover": {
                          backgroundColor: "#8e99a4",
                        },
                      }}
                      onClick={() => followingMember(member)}
                    ></AddIcon>
                  </Box>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
