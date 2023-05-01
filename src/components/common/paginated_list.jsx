import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { Divider, Stack, useTheme } from "@mui/material";
import { Box, styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import LastPageIcon from "@mui/icons-material/LastPage.js";
import FirstPageIcon from "@mui/icons-material/FirstPage.js";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight.js";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft.js";

const PaginationDisabledColor = "rgba(255,255,255,0.5)";
export const PaginationColor = "#fff";
const CustomIconButton = styled(IconButton)({
  color: PaginationColor,
  "&:disabled": { color: PaginationDisabledColor },
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
});

export function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <CustomIconButton
        color={"inherit"}
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </CustomIconButton>
      <CustomIconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </CustomIconButton>
      <CustomIconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </CustomIconButton>
      <CustomIconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </CustomIconButton>
    </Box>
  );
}

export default function PaginatedList(props) {
  const { rowsPerPage, children } = props;
  const [page, setPage] = React.useState(0);

  // Avoid a layout jump when reaching the last page with empty rows.

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Stack divider={<Divider />}>
        {(rowsPerPage > 0 ? children?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : children).map(
          (row, idx) => (
            <Box key={idx}>{row}</Box>
          ),
        )}
      </Stack>
      <TablePagination
        component={"div"}
        rowsPerPageOptions={[rowsPerPage]}
        count={children.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
        sx={{
          color: PaginationColor,
          "& .MuiTablePagination-spacer": {
            display: "none",
          },
          "& .MuiTablePagination-toolbar": {
            justifyContent: "center",
          },
        }}
      />
    </>
  );
}
