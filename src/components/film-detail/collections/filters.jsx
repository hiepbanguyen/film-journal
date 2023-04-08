import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const fromValues = ["Everyone", "Friends", "You"];

export default function ReviewFilters(props) {
  const { filterValues, showFrom } = props;
  const [sortBy, setSortBy] = useState(filterValues[0]);
  const [from, setFrom] = useState(fromValues[0]);
  const onSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  const onFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleSubmitFormSearch = (event) => {
    event.preventDefault();

    console.log("url", url);
  };

  return (
    <form onSubmit={handleSubmitFormSearch}>
      <Box sx={{ display: "flex", justifyContent: { xs: "flex-end", sm: "flex-start" }, flexWrap: "wrap", gap: 2 }}>
        <FormControl size="small" sx={{ minWidth: { sm: 170 } }}>
          <InputLabel sx={{ color: "#9ab", backgroundColor: "#14181c", padding: "0 8px" }} id="sort-by">
            Sort by
          </InputLabel>
          <Select labelId="sort-by" id="sort-by" value={sortBy} onChange={onSortByChange} sx={{ color: "#9ab" }}>
            {filterValues.map((i, idx) => (
              <MenuItem key={idx} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {showFrom ? (
          <FormControl size="small" sx={{ minWidth: { sm: 170 } }}>
            <InputLabel sx={{ color: "#9ab", backgroundColor: "#14181c", padding: "0 8px" }} id="sort-by">
              From
            </InputLabel>
            <Select labelId="sort-by" id="sort-by" value={from} onChange={onFromChange} sx={{ color: "#9ab" }}>
              {fromValues.map((i, idx) => (
                <MenuItem key={idx} value={i} selected={from === i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <></>
        )}
        <Button
          variant={"contained"}
          type={"submit"}
          sx={{
            bgcolor: "#667583",
            ":hover": {
              bgcolor: "#54697e",
            },
          }}
        >
          Apply
        </Button>
      </Box>
    </form>
  );
}
