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
        my={3}
        gap={1}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {films.map((i, idx) => (
          <Box key={idx} position={"relative"}>
            <FilmCard key={idx} size={100} src={i?.Poster_path} link={`/films/${i?.FilmID}`} />
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
  const { register } = useForm();
  const [, getFavoriteFilms] = useAxios({ url: "Users/FavouriteFilm" }, { manual: true });
  const [favoriteFilms, setFavoriteFilms] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);

    if (validateInput()) {
      console.log(userInput);
    }
  };

  //   Validate input
  const validateInput = () => {
    let errors = {};
    let isValid = true;

    if (userInput.userName.trim() === "") {
      errors.userName = "Username is required";
      isValid = false;
    }

    if (userInput.fullName.trim() === "") {
      errors.fullName = "Full name is required";
      isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(userInput.fullName)) {
      errors.fullName = "Full name should contain only alphabets and spaces";
      isValid = false;
    } else if (/\d/.test(userInput.fullName)) {
      errors.fullName = "Full name should not contain numbers";
      isValid = false;
    }

    setUserInput((prevState) => ({
      ...prevState,
      errors: errors,
    }));

    return isValid;
  };

  if (!UserStore.isLoadedFromLocal) return <Loading paddingY={10} />;
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          gap={5}
          sx={{
            "textarea, input, label, fieldset": {
              borderColor: "#9ab !important",
              color: "#9ab !important",
            },
          }}
        >
          <Box
            maxWidth={500}
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
              defaultValue={UserStore?.user?.UserName}
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
            <TextField label="Bio" name="bio" value={UserStore.user?.Bio} multiline fullWidth rows={3} />
          </Box>
          <Box>
            <FavoriteFilms films={favoriteFilms} handleAddFilm={handleAddFilm} handleDeleteFilms={handleDeleteFilms} />
          </Box>
        </Box>
        <Box mt={8} gap={1} display={"flex"} justifyContent={"center"}>
          <Button type="submit" variant={"contained"}>
            Update info
          </Button>
        </Box>
      </form>
    </Box>
  );
});
