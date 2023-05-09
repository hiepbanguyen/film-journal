import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Checkbox, FormControlLabel, FormGroup, Rating, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateField } from "@mui/x-date-pickers/DateField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline.js";
import useAxios from "axios-hooks";
import { useSnackbar } from "notistack";

export default function ReviewDialog({ filmTitle, releasedYear, children }) {
  const [open, setOpen] = React.useState(false);
  // const [likedFilm, setLikedFilm] = React.useState(false);
  const [ratingScore, setRatingScore] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { filmId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [{}, addReview] = useAxios({ url: "Reviews/Add", method: "POST" }, { manual: true });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onRatingChanged = (e) => {
    setRatingScore(e.target.value);
  };
  const onSubmit = (values) => {
    if (!values.Content) {
      setError("Content is required!");
      return;
    }
    if (ratingScore === null) {
      setError("Rating is required!");
      return;
    }
    values.FilmID = filmId;
    values.Score = ratingScore;
    // values.Liked = likedFilm;
    values.WatchedDate = moment(`${values.WatchedDate} 23:59`, "YYYY / MM / DD HH:mm").toDate();
    addReview({ data: values })
      .then((res) => {
        if (res?.data) {
          setOpen(false);
          enqueueSnackbar(`Your review of ${filmTitle} (${releasedYear}) has been added`, {
            variant: "success",
          });
          // navigate()
          reset();
          // setLikedFilm(false);
          setError(null);
          setRatingScore(null);
        }
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.userMsg, { variant: "error" });
      });
  };

  return (
    <>
      <Box onClick={() => setOpen(true)}>{children}</Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={(theme) => ({
          "& .MuiDialog-paper ": {
            m: 0,
            width: 600,
            maxHeight: "90vh",
            [theme.breakpoints.down("sm")]: {
              width: "100vw",
              minHeight: "100vh",
            },
          },
        })}
      >
        <DialogTitle sx={{ color: "#9ab", fontSize: 20 }}>
          <strong style={{ color: "#678" }}>{filmTitle}</strong> <span style={{ fontSize: 17 }}>{releasedYear}</span>
        </DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateField
                variant={"standard"}
                label="Watched On"
                defaultValue={moment(new Date())}
                format={"YYYY/MM/DD"}
                {...register("WatchedDate")}
              />
            </LocalizationProvider>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              fullWidth
              multiline
              rows={8}
              variant="outlined"
              placeholder={"Add a review..."}
              {...register("Content")}
            />
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}
              gap={{ sm: 15 }}
              alignItems={"flex-start"}
            >
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Contain spoilers" {...register("HaveSpoiler")} />
              </FormGroup>
              <Box display={"flex"} gap={5} alignItems={"flex-start"}>
                <Box>
                  <Typography>Rating</Typography>
                  <Rating size={"large"} onChange={onRatingChanged} />
                </Box>
              </Box>
            </Box>
            {error && (
              <Box sx={{ color: "#fc0707", display: "flex", gap: 0.5, alignItems: "center" }}>
                <ErrorOutlineIcon sx={{ fontSize: 20 }} />
                <Typography fontSize={13} pt={0.25}>
                  {error}
                </Typography>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} sx={{ color: "#000", "&:hover": { bgcolor: "rgba(0,0,0,0.1)" } }}>
              Cancel
            </Button>
            <Button type={"submit"} variant={"contained"}>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
