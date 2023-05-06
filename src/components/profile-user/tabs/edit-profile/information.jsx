import { Box, Button, Divider, IconButton, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import UserStore from "../../../../store/user.store.js";
import { Loading } from "../../../common/loading";
import { DateField } from "@mui/x-date-pickers/DateField";
import moment from "moment";
import { useForm } from "react-hook-form";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Typography from "@mui/material/Typography";
import FilmCard from "../../../common/film-card.jsx";
import CancelIcon from "@mui/icons-material/Cancel.js";
import { useSnackbar } from "notistack";
import { SearchFilms } from "../../../list-detail/new/search-films.jsx";
import useAxios from "axios-hooks";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline.js";

const FavoriteFilms = ({ films, handleAddFilm, handleDeleteFilms }) => {
  // console.log(films);
  return (
    <>
      <Typography variant={"body1"} textTransform={"uppercase"} color="#fff">
        favorite films
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <SearchFilms handleAddFilm={handleAddFilm} />
      <Box
        my={8}
        gap={1}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {films.map((i, idx) => (
          <Box key={idx} position={"relative"}>
            <FilmCard key={idx} size={80} src={i?.Poster_path} link={`/films/${i?.FilmID}`} />
            <IconButton
              onClick={() => handleDeleteFilms(i?.FilmID)}
              color={"error"}
              sx={{
                position: "absolute",
                width: 40,
                left: 8,
                right: 0,
                m: "0 auto",
                top: -20,
                bgcolor: "rgba(0,0,0,0.4)",
                ":hover": {
                  bgcolor: "rgba(255,255,255,0.8)",
                },
              }}
            >
              <CancelIcon fontSize={"medium"} />
            </IconButton>
          </Box>
        ))}
      </Box>
    </>
  );
};

export const Information = observer(() => {
  const { register, handleSubmit, setValue } = useForm();
  const [favoriteFilms, setFavoriteFilms] = React.useState([]);
  const [error, setError] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const [, getFavoriteFilms] = useAxios({ url: "Users/FavouriteFilm" }, { manual: true });
  const [, updateInfo] = useAxios({}, { manual: true });

  useEffect(() => {
    getFavoriteFilms().then((res) => {
      if (res?.data) {
        setFavoriteFilms(res.data);
      }
    });
  }, []);

  const handleDeleteFilms = (filmId) => {
    setFavoriteFilms(favoriteFilms.filter((i) => i.FilmID !== filmId));
  };

  const handleAddFilm = (newFilm) => {
    if (favoriteFilms.length === 4) {
      enqueueSnackbar("You can only have up to 4 favorite films", { variant: "error" });
      return;
    }
    if (favoriteFilms.find((i) => newFilm.FilmID === i.FilmID)) {
      enqueueSnackbar("You already added this film to your favorites", { variant: "error" });
      return;
    }
    setFavoriteFilms([...favoriteFilms, newFilm]);
  };

  const onSubmit = (values) => {
    if (!validateUsername(values.UserName)) {
      setError("Invalid username, should contain only letters, numbers, underscores and dots");
      return;
    }
    values.DateOfBirth = moment(`${values.DateOfBirth} 23:59`, "YYYY / MM / DD HH:mm").toDate();
    if (!validateDateOfBirth(values.DateOfBirth)) {
      setError("Invalid date of birth");
    }
  };

  const validateUsername = (username) => {
    return new RegExp(/^[a-zA-Z0-9._]+$/).test(username);
  };

  const validateDateOfBirth = (date) => {
    return new Date() > date;
  };
  //   Validate input

  if (!UserStore.isLoadedFromLocal) return <Loading paddingY={10} />;
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={10}
          sx={{
            justifyContent: "center",
            "textarea, input, label, fieldset": {
              borderColor: "#9ab !important",
              color: "#9ab !important",
            },
          }}
        >
          <Box
            maxWidth={345}
            sx={{
              ".MuiFormControl-root": {
                height: "70px",
              },
            }}
          >
            <Typography variant={"body1"} textTransform={"uppercase"} color="#fff">
              personal info
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TextField
              label="Email"
              name="email"
              defaultValue={UserStore?.user?.Email}
              disabled
              size="small"
              fullWidth
              sx={{
                " fieldset": { bgcolor: "rgba(255,255,255,0.1)" },
                ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                  "-webkit-text-fill-color": "#9ab",
                },
              }}
            />
            <TextField
              label="Username"
              name="userName"
              defaultValue={UserStore?.user?.UserName}
              InputLabelProps={{ shrink: true, required: true }}
              size="small"
              fullWidth
              {...register("UserName")}
            />
            <TextField
              label="Full name"
              name="fullName"
              defaultValue={UserStore?.user?.FullName}
              InputLabelProps={{ shrink: true }}
              size="small"
              fullWidth
              {...register("FullName")}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateField
                fullWidth
                name={"DateOfBirth"}
                size={"small"}
                label="Date of birth"
                defaultValue={moment(new Date(UserStore?.user?.DateOfBirth))}
                format={"YYYY/MM/DD"}
                sx={{
                  "& .MuiFormLabel-root, .MuiInputBase-root": { color: "inherit" },
                }}
                {...register("DateOfBirth")}
              />
            </LocalizationProvider>
            <TextField label="Bio" name="bio" value={UserStore.user?.Bio} multiline fullWidth rows={4} />
          </Box>
          <Box>
            <FavoriteFilms films={favoriteFilms} handleAddFilm={handleAddFilm} handleDeleteFilms={handleDeleteFilms} />
          </Box>
        </Box>
        <Box mt={10} gap={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
          {error && (
            <Box sx={{ color: "#fc0707", display: "flex", gap: 0.5, alignItems: "center" }}>
              <ErrorOutlineIcon sx={{ fontSize: 20 }} />
              <Typography fontSize={13} pt={0.25}>
                {error}
              </Typography>
            </Box>
          )}
          <Button type="submit" variant={"contained"}>
            Update info
          </Button>
        </Box>
      </form>
    </Box>
  );
});
