import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import { Pagination } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import styles from "../../assets/scss/common.module.scss";

export default function PaginationBase({ totalPage, pageIndex, onChange }) {
  const handleChangePage = (event, newPage) => {
    onChange(newPage);
  };

  return (
    <Pagination
      count={totalPage}
      page={pageIndex}
      onChange={handleChangePage}
      sx={{
        float: 'right',
        "& .MuiButtonBase-root": {
          color: "#9ab",
          borderRadius: "50%",
          padding: "8px",
          margin: "0 4px",
          "&:hover": {
            bgcolor: "#eaeaea17",
          },
        },
        "& .Mui-selected": {
          color: "#000",
          bgcolor: "#9ab",
          "&:hover": {
            bgcolor: "#808d9b",
          },
        },
      }}
    />
  );
}
