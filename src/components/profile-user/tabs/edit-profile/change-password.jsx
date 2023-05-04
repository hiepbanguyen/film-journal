import * as React from "react";
import { Box, Button, Container, Stack, TextField } from "@mui/material";

export const ChangePassword = () => {
  return (
    <Container maxWidth={"sm"}>
      <form>
        <Stack
          width={320}
          gap={2}
          sx={{
            "& .MuiFormHelperText-root ": {
              color: "#9ab",
            },
          }}
        >
          <TextField
            fullWidth
            label="Current password"
            type={"password"}
            size="small"
            sx={{
              width: "100%",
              fontSize: { xs: "14px", md: "16px" },
              " input,label,fieldset": {
                borderColor: "#9ab !important",
                color: "#9ab !important",
              },
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
          />
          <TextField
            label="New password"
            type={"password"}
            size="small"
            helperText={"Minimum 8 charaters"}
            sx={{
              width: "100%",
              fontSize: { xs: "14px", md: "16px" },
              " input,label,fieldset": {
                borderColor: "#9ab !important",
                color: "#9ab !important",
              },
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
          />
          <TextField
            label="Confirm new password"
            type={"password"}
            size="small"
            sx={{
              width: "100%",
              fontSize: { xs: "14px", md: "16px" },
              " input,label,fieldset": {
                borderColor: "#9ab !important",
                color: "#9ab !important",
              },
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
          />
          <Box my={1} gap={1} display={"flex"} justifyContent={"flex-end"}>
            <Button sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>Cancel</Button>
            <Button type="submit" variant={"contained"}>
              Save
            </Button>
          </Box>
        </Stack>
      </form>
    </Container>
  );
};
