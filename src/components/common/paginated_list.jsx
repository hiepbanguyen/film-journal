import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { PaginationColor, TablePaginationActions } from "./paginated_grid.jsx";

export default function PaginatedList(props) {
  const { rowsPerPage, children } = props;
  const [page, setPage] = React.useState(0);

  // Avoid a layout jump when reaching the last page with empty rows.

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Stack divider={<Divider variant="fullWidth" />}>
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
