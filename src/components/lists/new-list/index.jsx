import { Box, Checkbox, Container, Divider, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { SearchFilms } from "./search-films.jsx";

export const NewList = () => {
  return (
    <Container sx={{ color: "#9ab" }}>
      <Typography variant={"h5"}>New List</Typography>
      <Divider sx={{ mb: 3 }} />
      <form>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          gap={5}
          sx={{ "& .MuiInputBase-root": { color: "#9ab" } }}
        >
          <Stack flex={1} gap={1}>
            <TextField
              label={"Name of list"}
              size={"small"}
              sx={{
                " input,label,fieldset": {
                  borderColor: "#9ab",
                  color: "#9ab",
                },
              }}
            />
            <FormControlLabel control={<Checkbox sx={{ color: "#9ab" }} />} label="Public" />
            <TextField
              autoFocus
              margin="dense"
              id="list-desc"
              fullWidth
              multiline
              rows={8}
              placeholder={"Description"}
            />
          </Stack>
          <Box flex={1}>
            <SearchFilms />
          </Box>
        </Box>
      </form>
    </Container>
  );
};
