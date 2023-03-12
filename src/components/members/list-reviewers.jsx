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

function crData(user, watched, lists, likes, action) {
  return { user, watched, lists, likes, action };
}

const rows = [
  crData({ name: "Frozen yoghurt", reviews: 124, avatar: "https://picsum.photos/100/100" }, 396, 24, 257, false),
  crData({ name: "Ice cream sandwich", reviews: 2364, avatar: "https://picsum.photos/150/150" }, 542, 47, 358, false),
  crData({ name: "Eclair", reviews: 1257, avatar: "https://picsum.photos/120/120" }, 448, 866, 563, true),
  crData({ name: "Cupcake", reviews: 551, avatar: "https://picsum.photos/130/130" }, 637, 235, 457, false),
  crData({ name: "Gingerbread", reviews: 946, avatar: "https://picsum.photos/110/110" }, 648, 876, 965, true),
  crData({ name: "Frozen yoghurt", reviews: 124, avatar: "https://picsum.photos/105/105" }, 396, 24, 257, false),
  crData({ name: "Ice cream sandwich", reviews: 2364, avatar: "https://picsum.photos/121/121" }, 542, 47, 358, false),
  crData({ name: "Eclair", reviews: 1257, avatar: "https://picsum.photos/111/111" }, 448, 866, 563, true),
  crData({ name: "Cupcake", reviews: 551, avatar: "https://picsum.photos/114/114" }, 637, 235, 457, false),
  crData({ name: "Gingerbread", reviews: 946, avatar: "https://picsum.photos/127/127" }, 648, 876, 965, true),
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
          {rows.map((row) => (
            <TableRow
              key={row.user}
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
                      src={row.user.avatar}
                    ></Box>
                  </Box>
                  <Box>
                    <Box sx={{ color: "#fff", fontWeight: "600" }}>{row.user.name}</Box>
                    <Box>{row.user.reviews} Reviews</Box>
                  </Box>
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Box sx={{ display: "flex", alignItems: "center", lineHeight: "40px" }}>
                  <RemoveRedEyeIcon sx={{ marginRight: "4px", color: "#00b020" }}></RemoveRedEyeIcon> {row.watched}
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Box sx={{ display: "flex", alignItems: "center", lineHeight: "40px" }}>
                  <GridViewIcon sx={{ marginRight: "4px", color: "#40bcf4" }}></GridViewIcon> {row.lists}
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#9ab", display: { xs: "none", md: "table-cell" } }}>
                <Box sx={{ display: "flex", alignItems: "center", lineHeight: "40px" }}>
                  <FavoriteIcon sx={{ marginRight: "4px", color: "#ff9010" }}></FavoriteIcon> {row.likes}
                </Box>
              </TableCell>
              <TableCell align="right" sx={{ color: "#9ab" }}>
                {row.action ? (
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
