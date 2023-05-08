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
import Button from "@mui/material/Button";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserStore from "../../../store/user.store.js";
import { observer } from "mobx-react-lite";
import ConfirmDeleteDialog from "../../common/confirm-delete.jsx";
import useAxios from "axios-hooks";
import { PageNotExist } from "../../common/page-not-exist.jsx";
import { Loading } from "../../common/loading";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline.js";

export const EditReview = observer(() => {
  const { username, reviewId } = useParams();
  const [{ data: detail, loading: detailLoading }, refetchDetail] = useAxios(`Reviews/${reviewId}/detail`);
  const navigate = useNavigate();
  const [ratingScore, setRatingScore] = React.useState(detail?.Score);
  const [error, setError] = React.useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [{}, updateReview] = useAxios({ url: "Reviews/Edit", method: "POST" }, { manual: true });
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    if (UserStore.isLoadedFromLocal) {
      if (!UserStore.isLoggedIn) {
        navigate("/sign-in");
      } else if (UserStore.user.UserName !== username) {
        navigate("/");
      }
    }
  }, [UserStore.isLoggedIn, UserStore.isLoadedFromLocal]);

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
    values.ReviewID = reviewId;
    values.Score = ratingScore;
    // values.Liked = likedFilm;
    values.WatchedDate = moment(`${values.WatchedDate} 23:59`, "YYYY / MM / DD HH:mm").toDate();
    console.log(values);
    updateReview({ data: values })
      .then((res) => {
        if (res?.data) {
          enqueueSnackbar(`Your review has been updated`, {
            variant: "success",
          });
        }
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.userMsg, { variant: "error" });
      });
  };

  if (!detailLoading && !detail) return <PageNotExist />;
  if (detailLoading) return <Loading paddingY={10} />;
  return (
    <Container sx={{ mt: 10, color: "#9ab", px: { sm: 10, md: 20 } }}>
      <Typography variant={"h5"}>Edit Review</Typography>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2} py={2}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateField
              variant={"standard"}
              name={"WatchedDate"}
              label="Watched On"
              defaultValue={moment(new Date(detail?.WatchedDate))}
              format={"YYYY/MM/DD"}
              sx={{
                maxWidth: 300,
                "& .MuiFormLabel-root, .MuiInputBase-root": { color: "inherit" },
                "& .MuiInputBase-input": {
                  borderBottom: "1px solid #9ab",
                },
              }}
              {...register("WatchedDate")}
            />
          </LocalizationProvider>
          <TextField
            margin="dense"
            id="content"
            defaultValue={detail?.Content}
            fullWidth
            multiline
            rows={8}
            variant="outlined"
            placeholder={"Add a review..."}
            sx={{ "& .MuiInputBase-root": { color: "inherit" } }}
            {...register("Content")}
          />
          <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={{ sm: 15 }} alignItems={"flex-start"}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked={detail?.HaveSpoiler} sx={{ color: "inherit" }} />}
                label="Contain spoilers"
                {...register("HaveSpoiler")}
              />
            </FormGroup>
            <Box display={"flex"} gap={5} alignItems={"flex-start"}>
              <Box>
                <Typography>Rating</Typography>
                <Rating defaultValue={detail?.Score} size={"large"} onChange={onRatingChanged} />
              </Box>
              {/*<Box>*/}
              {/*  <Typography>Like</Typography>*/}
              {/*  <FavoriteIcon*/}
              {/*    sx={{*/}
              {/*      fontSize: 30,*/}
              {/*      color: "#bcd",*/}
              {/*      "& :hover": {*/}
              {/*        cursor: "pointer",*/}
              {/*        color: "rgba(255, 89, 89, 1)",*/}
              {/*      },*/}
              {/*    }}*/}
              {/*  />*/}
              {/*</Box>*/}
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
          <Box display={"flex"} gap={1} justifyContent={"flex-end"}>
            <Button
              sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <ConfirmDeleteDialog type={"review"} url={`Reviews/Delete/${reviewId}`} />
            <Button type={"submit"} variant={"contained"}>
              Save
            </Button>
          </Box>
        </Stack>
      </form>
    </Container>
  );
});
