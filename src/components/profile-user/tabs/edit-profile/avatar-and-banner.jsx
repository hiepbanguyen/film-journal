import * as React from "react";
import { FileStackAPIKey } from "../../../../apis/resources/filestack-api.jsx";
import { Box, Container, Typography } from "@mui/material";
import { PickerInline } from "filestack-react";
import useAxios from "axios-hooks";
import { useSnackbar } from "notistack";
import UserStore from "../../../../store/user.store.js";
import { useNavigate } from "react-router-dom";

export const AvatarAndBanner = () => {
  const [, update] = useAxios({ method: "POST" }, { manual: true });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const updateAvatar = (url) => {
    update(`Users/ChangeAvatar?url=${url}`)
      .then((res) => {
        if (res?.data) {
          UserStore.updateAvatar(url);
          navigate(0);
        }
      })
      .catch((e) => {
        enqueueSnackbar(e.response.data.userMsg, { variant: "error" });
      });
  };
  const updateBanner = (url) => {
    update(`Users/ChangeBanner?url=${url}`)
      .then((res) => {
        if (res?.data) {
          navigate(0);
        }
      })
      .catch((e) => {
        enqueueSnackbar(e.response.data.userMsg, { variant: "error" });
      });
  };

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
            onUploadDone={(res) => updateAvatar(res?.filesUploaded?.[0]?.url)}
          />
        </Box>
        <Box>
          <Typography textAlign={"center"} mb={2}>
            Change banner
          </Typography>
          <PickerInline
            apikey={FileStackAPIKey}
            pickerOptions={{ accept: "image/*", maxSize: 5 * 1024 * 1024, modalSize: [400, 500] }}
            onUploadDone={(res) => updateBanner(res?.filesUploaded?.[0]?.url)}
          />
        </Box>
      </Box>
    </Container>
  );
};
