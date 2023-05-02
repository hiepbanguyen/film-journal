import * as React from "react";
import { FileStackAPIKey } from "../../../../apis/resources/filestack-api.jsx";
import { Box, Container, Typography } from "@mui/material";
import { PickerInline } from "filestack-react";

export const AvatarAndBanner = (props) => {
  return (
    <Container maxWidth={"md"}>
      <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={5} color={"#9ab"}>
        <Box>
          <Typography textAlign={"center"} mb={2}>
            Change avatar
          </Typography>
          <PickerInline
            apikey={FileStackAPIKey}
            pickerOptions={{ accept: "image/*", maxSize: 5 * 1024 * 1024, modalSize: [400, 500] }}
            onSuccess={(res) => console.log(res)}
            onUploadDone={(res) => console.log(res)}
          />
        </Box>
        <Box>
          <Typography textAlign={"center"} mb={2}>
            Change banner
          </Typography>
          <PickerInline
            apikey={FileStackAPIKey}
            pickerOptions={{ accept: "image/*", maxSize: 5 * 1024 * 1024, modalSize: [400, 500] }}
            onSuccess={(res) => console.log(res)}
            onUploadDone={(res) => console.log(res)}
          />
        </Box>
      </Box>
    </Container>
  );
};
