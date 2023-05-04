import {
  Box,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateField } from "@mui/x-date-pickers/DateField";
import moment from "moment";
import TextField from "@mui/material/TextField";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import Button from "@mui/material/Button";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserStore from "../../../store/user.store.js";
import { observer } from "mobx-react-lite";
import ConfirmDeleteDialog from "../../common/confirm-delete.jsx";

export const EditReview = observer(() => {
  const { username, reviewId } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (UserStore.isLoadedFromLocal) {
      if (!UserStore.isLoggedIn) {
        navigate("/sign-in");
      } else if (UserStore.user.UserName !== username) {
        navigate("/");
      }
    }
  }, [UserStore.isLoggedIn, UserStore.isLoadedFromLocal]);

  return (
    <Container sx={{ mt: 10, color: "#9ab", px: { sm: 10, md: 20 } }}>
      <Typography variant={"h5"}>Edit Review</Typography>
      <Divider />
      <Stack gap={2} py={2}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateField
            variant={"standard"}
            label="Watched On"
            value={moment(new Date())}
            format={"YYYY/MM/DD"}
            sx={{
              maxWidth: 300,
              "& .MuiFormLabel-root, .MuiInputBase-root": { color: "inherit" },
              "& .MuiInputBase-input": {
                borderBottom: "1px solid #9ab",
              },
            }}
          />
        </LocalizationProvider>
        <TextField
          margin="dense"
          id="name"
          defaultValue={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
          fullWidth
          multiline
          rows={8}
          variant="outlined"
          placeholder={"Add a review..."}
          sx={{ "& .MuiInputBase-root": { color: "inherit" } }}
        />
        <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={{ sm: 15 }} alignItems={"flex-start"}>
          <FormGroup>
            <FormControlLabel control={<Checkbox sx={{ color: "inherit" }} />} label="Contain spoilers" />
          </FormGroup>
          <Box display={"flex"} gap={5} alignItems={"flex-start"}>
            <Box>
              <Typography>Rating</Typography>
              <Rating defaultValue={2.5} size={"large"} />
            </Box>
            <Box>
              <Typography>Like</Typography>
              <FavoriteIcon
                sx={{
                  fontSize: 30,
                  color: "#bcd",
                  "& :hover": {
                    cursor: "pointer",
                    color: "rgba(255, 89, 89, 1)",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} gap={1} justifyContent={"flex-end"}>
          <Button sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }} onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <ConfirmDeleteDialog type={"review"} url={`Lists/Delete/${reviewId}`} />
          <Button type={"submit"} variant={"contained"}>
            Save
          </Button>
        </Box>
      </Stack>
    </Container>
  );
});
