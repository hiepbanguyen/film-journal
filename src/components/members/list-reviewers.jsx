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
import { Link, useNavigate } from "react-router-dom";

function crData(user, watched, lists, likes, action) {
  return { user, watched, lists, likes, action };
}

const rows = [
  crData(
    { name: "Frozen yoghurt", userName: "a", reviews: 124, avatar: "https://picsum.photos/100/100" },
    396,
    24,
    257,
    false,
  ),
  crData(
    { name: "Ice cream sandwich", userName: "s", reviews: 2364, avatar: "https://picsum.photos/150/150" },
    542,
    47,
    358,
    false,
  ),
  crData(
    { name: "Eclair", userName: "d", reviews: 1257, avatar: "https://picsum.photos/120/120" },
    448,
    866,
    563,
    true,
  ),
  crData(
    { name: "Cupcake", userName: "f", reviews: 551, avatar: "https://picsum.photos/130/130" },
    637,
    235,
    457,
    false,
  ),
  crData(
    { name: "Gingerbread", userName: "g", reviews: 946, avatar: "https://picsum.photos/110/110" },
    648,
    876,
    965,
    true,
  ),
  crData(
    { name: "Frozen yoghurt", userName: "h", reviews: 124, avatar: "https://picsum.photos/105/105" },
    396,
    24,
    257,
    false,
  ),
  crData(
    { name: "Ice cream sandwich", userName: "e", reviews: 2364, avatar: "https://picsum.photos/121/121" },
    542,
    47,
    358,
    false,
  ),
  crData(
    { name: "Eclair", userName: "q", reviews: 1257, avatar: "https://picsum.photos/111/111" },
    448,
    866,
    563,
    true,
  ),
  crData(
    { name: "Cupcake", userName: "b", reviews: 551, avatar: "https://picsum.photos/114/114" },
    637,
    235,
    457,
    false,
  ),
  crData(
    { name: "Gingerbread", userName: "c", reviews: 946, avatar: "https://picsum.photos/127/127" },
    648,
    876,
    965,
    true,
  ),
];
export default function ListReviewers() {
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
          {rows.map((row, idx) => (
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
                    to={"/" + row.user.userName}
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
                      src={row.user.avatar}
                    ></Box>
                  </Link>
                  <Box>
                    <Link to={"/" + row.user.userName} style={{ color: "#fff", fontWeight: "600" }}>
                      {row.user.name}
                    </Link>
                    <Link to={"/" + row.user.userName + "/reviews"} style={{ display: "block", transition: "0.2s" }}>
                      {row.user.reviews} Reviews
                    </Link>
                  </Box>
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Link
                  to={"/" + row.user.userName + "/films"}
                  style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                >
                  <RemoveRedEyeIcon sx={{ marginRight: "4px", color: "#00b020" }}></RemoveRedEyeIcon> {row.watched}
                </Link>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Link
                  to={"/" + row.user.userName + "/lists"}
                  style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                >
                  <GridViewIcon sx={{ marginRight: "4px", color: "#40bcf4" }}></GridViewIcon> {row.lists}
                </Link>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Link
                  to={"/" + row.user.userName + "/likes"}
                  style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                >
                  <FavoriteIcon sx={{ marginRight: "4px", color: "#ff9010" }}></FavoriteIcon> {row.likes}
                </Link>
              </TableCell>
              <TableCell align="right" sx={{ color: "#9ab" }}>
                {row.action ? (
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
                    ></AddIcon>
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
