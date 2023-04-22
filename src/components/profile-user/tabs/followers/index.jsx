import { Box, Button, Grid, CardMedia } from "@mui/material";
import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GridViewIcon from "@mui/icons-material/GridView";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import PaginationBase from "../../../common/pagination-base";

export default function ProfileFollowers() {
  let data = {
    total: 20,
    totalPage: 2,
    pageIndex: 1,
    pageSize: 20,
    listMember: [
      {
        UserId: 1,
        Avatar: "https://picsum.photos/50/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 15,
        Likes: 172,
        Followed: true,
      },
      {
        UserId: 2,
        Avatar: "https://picsum.photos/51/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 788,
        Likes: 42,
        Followed: false,
      },
      {
        UserId: 3,
        Avatar: "https://picsum.photos/50/51",
        UserName: "Banana",
        Reviews: 20,
        Lists: 15,
        Likes: 45,
        Followed: true,
      },
      {
        UserId: 4,
        Avatar: "https://picsum.photos/52/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 55,
        Likes: 172,
        Followed: false,
      },
      {
        UserId: 5,
        Avatar: "https://picsum.photos/50/52",
        UserName: "Banana",
        Reviews: 20,
        Lists: 15,
        Likes: 18,
        Followed: false,
      },
      {
        UserId: 6,
        Avatar: "https://picsum.photos/53/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 2215,
        Likes: 453,
        Followed: true,
      },
      {
        UserId: 7,
        Avatar: "https://picsum.photos/50/53",
        UserName: "Banana",
        Reviews: 20,
        Lists: 152,
        Likes: 172,
        Followed: false,
      },
      {
        UserId: 8,
        Avatar: "https://picsum.photos/54/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 152,
        Likes: 45,
        Followed: true,
      },
      {
        UserId: 9,
        Avatar: "https://picsum.photos/50/54",
        UserName: "Banana",
        Reviews: 20,
        Lists: 15,
        Likes: 172,
        Followed: false,
      },
      {
        UserId: 10,
        Avatar: "https://picsum.photos/55/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 215,
        Likes: 43,
        Followed: false,
      },
      {
        UserId: 11,
        Avatar: "https://picsum.photos/50/55",
        UserName: "Banana",
        Reviews: 20,
        Lists: 125,
        Likes: 12,
        Followed: true,
      },
      {
        UserId: 12,
        Avatar: "https://picsum.photos/56/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 125,
        Likes: 172,
        Followed: false,
      },
      {
        UserId: 13,
        Avatar: "https://picsum.photos/50/56",
        UserName: "Banana",
        Reviews: 20,
        Lists: 15,
        Likes: 35,
        Followed: false,
      },
      {
        UserId: 14,
        Avatar: "https://picsum.photos/57/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 125,
        Likes: 232,
        Followed: false,
      },
      {
        UserId: 15,
        Avatar: "https://picsum.photos/50/57",
        UserName: "Banana",
        Reviews: 20,
        Lists: 2,
        Likes: 172,
        Followed: false,
      },
      {
        UserId: 16,
        Avatar: "https://picsum.photos/58/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 215,
        Likes: 223,
        Followed: true,
      },
      {
        UserId: 17,
        Avatar: "https://picsum.photos/50/58",
        UserName: "Banana",
        Reviews: 20,
        Lists: 8478,
        Likes: 48,
        Followed: false,
      },
      {
        UserId: 18,
        Avatar: "https://picsum.photos/59/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 125,
        Likes: 453,
        Followed: false,
      },
      {
        UserId: 19,
        Avatar: "https://picsum.photos/50/59",
        UserName: "Banana",
        Reviews: 20,
        Lists: 15,
        Likes: 453,
        Followed: false,
      },
      {
        UserId: 20,
        Avatar: "https://picsum.photos/60/50",
        UserName: "Banana",
        Reviews: 20,
        Lists: 15,
        Likes: 453,
        Followed: false,
      },
    ],
  };

  const [pageIndex, setPageIndex] = React.useState(data.pageIndex)
  const [totalPage, setTotalPage] = React.useState(data.totalPage)
  
  const handleChangePage = (newPage) => {
    console.log("newPage: ", newPage);
    setPageIndex(newPage)
};
  return (
    <Box sx={{ marginTop: '24px', paddingBottom: '24px'}}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid #99aabb73" }}>
              <TableCell sx={{ color: "#fff" }}>Name</TableCell>
              <TableCell sx={{ color: "#fff", display: { xs: "none", sm: "table-cell" } }}>Lists</TableCell>
              <TableCell sx={{ color: "#fff", display: { xs: "none", sm: "table-cell" } }}>Likes</TableCell>
              <TableCell align="right" sx={{ color: "#fff" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.listMember.map((member, idx) => (
              <TableRow
                key={member.UserId}
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
                      to={"/" + (member.UserName ?? "userName")}
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
                        src={member.Avatar ?? "/"}
                      ></Box>
                    </Link>
                    <Box>
                      <Link to={"/" + (member.UserName ?? "userName")} style={{ color: "#fff", fontWeight: "600" }}>
                        {member.UserName}
                      </Link>
                      <Link
                        to={"/" + (member.UserName ?? "userName") + "/reviews"}
                        style={{ display: "block", transition: "0.2s" }}
                      >
                        {member.Reviews} Reviews
                      </Link>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "#9ab", display: { xs: "none", sm: "table-cell" } }}>
                  <Link
                    to={"/u/" + (member.UserName ?? "userName") + "/lists"}
                    style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                  >
                    <GridViewIcon sx={{ marginRight: "4px", color: "#40bcf4" }}></GridViewIcon> {member.Lists ?? 0}
                  </Link>
                </TableCell>
                <TableCell sx={{ color: "#9ab", display: { xs: "none", sm: "table-cell" } }}>
                  <Link
                    to={"/u/" + (member.UserName ?? "userName") + "/likes"}
                    style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                  >
                    <FavoriteIcon sx={{ marginRight: "4px", color: "#ff9010" }}></FavoriteIcon> {member.Likes ?? 0}
                  </Link>
                </TableCell>
                <TableCell align="right" sx={{ color: "#9ab" }}>
                  {member.Followed ?? false ? (
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "end", marginTop: '24px' }}>
        <PaginationBase totalPage={totalPage} pageIndex={pageIndex} onChange={handleChangePage}></PaginationBase>
      </Box>
    </Box>
  );
}
