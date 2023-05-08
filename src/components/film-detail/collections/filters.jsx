import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const fromValues = ["Everyone", "Friends", "You"];

export default function ReviewFilters(props) {
  const { filterValues, showFrom, onSubmit } = props;
  const { setValue, handleSubmit } = useForm({
    defaultValues: {
      sort: filterValues[0],
      from: fromValues[0],
    },
  });
  const [sortBy, setSortBy] = useState(filterValues[0]);
  const [from, setFrom] = useState(fromValues[0]);
  const onSortByChange = (event) => {
    setValue("sort", event.target.value);
    setSortBy(event.target.value);
  };
  const onFromChange = (event) => {
    setValue("from", event.target.value);
    setFrom(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
