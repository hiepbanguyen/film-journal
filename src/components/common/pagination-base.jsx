import React from "react";
import { Pagination } from "@mui/material";

export default function PaginationBase({ totalPage, pageIndex, onChange }) {
  const handleChangePage = (event, newPage) => {
    if (pageIndex === newPage) return;
    onChange(newPage);
  };

  return (
    <Pagination
      count={totalPage}
      page={pageIndex}
      onChange={handleChangePage}
      sx={{
        float: "right",
        "& .MuiButtonBase-root": {
          color: "#9ab",
          borderRadius: "50%",
          padding: "8px",
          margin: "0 4px",
          "&:hover": {
            color: "#fff",
            bgcolor: "rgba(255,255,255,0.2) !important",
          },
        },
        "& .Mui-selected": {
          color: "#000",
          bgcolor: "#9ab !important",
          "&:hover": {
            bgcolor: "#6f7d8b !important",
          },
        },
        "& .MuiPaginationItem-ellipsis": {
          color: "#9ab",
        },
      }}
    />
  );
}
