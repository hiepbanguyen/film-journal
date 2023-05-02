import { Avatar, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import * as React from "react";
import { Link, useParams } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PaginationBase from "../../../common/pagination-base";
import useAxios from "axios-hooks";
import Enum from "../../../../apis/enums/Enum.js";
import { Loading } from "../../../common/loading.jsx";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye.js";
import { FollowButton } from "../../../common/follow-button.jsx";

export default function ProfileFollowing() {
  const { username } = useParams();
  const [pageIndex, setPageIndex] = React.useState(1);

  const [{ data, loading, error }] = useAxios({
    url: `Users/Paging`,
    method: "POST",
    data: {
      pageSize: 10,
      pageIndex: pageIndex,
      sort: "reviews desc",
      typeUser: Enum.TypeUser.Following,
      userName: username,
    },
  });

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
  };
  return (
    <Box sx={{ marginTop: "24px", paddingBottom: "24px", mx: { md: 20 } }}>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ borderBottom: "2px solid #99aabb73" }}>
                <TableCell sx={{ color: "#fff" }}>Name</TableCell>
                <TableCell sx={{ color: "#fff", display: { xs: "none", sm: "table-cell" } }}>Reviews</TableCell>
                <TableCell sx={{ color: "#fff", display: { xs: "none", sm: "table-cell" } }}>Lists</TableCell>
                <TableCell sx={{ color: "#fff", display: { xs: "none", sm: "table-cell" } }}>Likes</TableCell>
                <TableCell sx={{ color: "#fff", display: "table-cell" }}>Follow</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.Data?.map((member, idx) => (
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
                        to={"/u/" + member?.UserName}
                        style={{ width: "40px", height: "40px", overflow: "hidden", marginRight: "8px" }}
                      >
                        <Avatar src={member?.Avatar} alt={"avatar"} />
                      </Link>
                      <Box>
                        <Link to={"/u/" + member?.UserName} style={{ color: "#fff", fontWeight: "600" }}>
                          {member?.FullName ?? member?.UserName}
                        </Link>
                        <Box style={{ display: "block", transition: "0.2s" }}>15 followers, following 200</Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "#9ab", display: { xs: "none", sm: "table-cell" } }}>
                    <Link
                      to={"/u/" + member?.UserName + "/reviews"}
                      style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                    >
                      <RemoveRedEyeIcon sx={{ marginRight: "4px", color: "#00b020" }}></RemoveRedEyeIcon>{" "}
                      {member?.Reviews ?? 0}
                    </Link>
                  </TableCell>
                  <TableCell sx={{ color: "#9ab", display: { xs: "none", sm: "table-cell" } }}>
                    <Link
                      to={"/u/" + member?.UserName + "/lists"}
                      style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                    >
                      <GridViewIcon sx={{ marginRight: "4px", color: "#40bcf4" }}></GridViewIcon> {member?.Lists ?? 0}
                    </Link>
                  </TableCell>
                  <TableCell sx={{ color: "#9ab", display: { xs: "none", sm: "table-cell" } }}>
                    <Link
                      to={"/u/" + member?.UserName + "/likes"}
                      style={{ display: "flex", alignItems: "center", lineHeight: "40px" }}
                    >
                      <FavoriteIcon sx={{ marginRight: "4px", color: "#ff9010" }}></FavoriteIcon> {member?.Likes ?? 0}
                    </Link>
                  </TableCell>
                  <TableCell sx={{ color: "#9ab" }}>
                    <FollowButton followed={member?.Followed ?? 0} targetUsername={member?.UserName} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Box sx={{ display: "flex", justifyContent: "end", marginTop: "24px" }}>
        <PaginationBase totalPage={data?.TotalPage ?? 0} pageIndex={pageIndex} onChange={handleChangePage} />
      </Box>
    </Box>
  );
}
