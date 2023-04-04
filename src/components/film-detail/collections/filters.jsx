import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

export default function ReviewFilters(props) {
  const { filterValues } = props;
  const [sortBy, setSortBy] = useState("");

  const onFilterChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSubmitFormSearch = (event) => {
    event.preventDefault();

    console.log("url", url);
  };

  return (
    <form onSubmit={handleSubmitFormSearch} style={{ display: "flex" }}>
      <FormControl
        sx={{
          minWidth: 170,
        }}
        size="small"
      >
        <InputLabel sx={{ color: "#9ab", backgroundColor: "#14181c", padding: "0 8px" }} id="sort-by">
          Sort by
        </InputLabel>
        <Select labelId="sort-by" id="sort-by" value={sortBy} onChange={onFilterChange} sx={{ color: "#9ab" }}>
          {filterValues.map((i, idx) => (
            <MenuItem key={idx} value={i}>
              {i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}
