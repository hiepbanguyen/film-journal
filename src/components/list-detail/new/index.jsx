import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SearchFilms } from "./search-films.jsx";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import UserStore from "../../../store/user.store.js";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import useAxios from "axios-hooks";

export const SelectedFilm = ({ film, children }) => {
  return (
    <Card
      sx={{
        py: 1,
        background: "transparent",
        minHeight: 70,
        width: "100%",
        ":hover": { bgcolor: "rgba(255,255,255,0.1)" },
      }}
      elevation={0}
    >
      <CardContent sx={{ pl: 1, py: 0, ":last-child": { pb: 0 } }}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={"flex"} alignItems={"center"}>
            <img
              src={film?.Poster_path}
              alt={film?.Title}
              height={52}
              width={35}
              style={{ borderRadius: "2px", border: "1px solid #9ab" }}
            />
            <Typography color={"#9ab"} ml={1}>
              <strong style={{ color: "#fff" }}>{film?.Title}</strong>{" "}
              {film?.Release_date && new Date(film.Release_date).getFullYear()}
            </Typography>
          </Box>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export const NewList = observer(() => {
  const { register, handleSubmit, reset } = useForm();
  const [addedFilms, setAddFilms] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [, addList] = useAxios({ url: "Lists/Add", method: "POST" }, { manual: true });

  React.useEffect(() => {
    if (UserStore.isLoadedFromLocal && !UserStore.isLoggedIn) {
      navigate("/sign-in");
    }
  }, [UserStore.isLoggedIn, UserStore.isLoadedFromLocal]);

  const handleAddFilm = (newFilm) => {
    if (addedFilms.length === 200) {
      enqueueSnackbar("You've reached the limit number of films (200)", { variant: "error" });
      return;
    }
    if (addedFilms.find((i) => newFilm.FilmID === i.FilmID)) {
      enqueueSnackbar("You already added this film to your list", { variant: "error" });
      return;
    }
    setAddFilms([...addedFilms, newFilm]);
  };

  const handleRemoveFilm = (filmId) => {
    setAddFilms(addedFilms.filter((i) => i.FilmID !== filmId));
  };

  const handleCancel = () => {
    reset();
    navigate(-1);
  };

  const onSubmit = async (values) => {
    if (addedFilms.length === 0) {
      enqueueSnackbar("You haven't added any films to your list", { variant: "error" });
      return;
    }
    try {
      await addList({
        data: {
          ...values,
          FilmIDs: addedFilms.map((i) => i?.FilmID ?? "").join(","),
        },
      }).then((res) => {
        if (res?.data) {
          enqueueSnackbar("Create list successfully", { variant: "success" });
        }
      });
    } catch (e) {
      enqueueSnackbar(e.response.data.userMsg, { variant: "error" });
    }
  };

  return (
    <Container sx={{ color: "#9ab", mt: 10 }}>
      <Typography variant={"h5"}>New List</Typography>
      <Divider sx={{ mb: 3 }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          gap={5}
          sx={{ "& .MuiInputBase-root": { color: "#9ab" } }}
        >
          <Stack flex={1} gap={1}>
            <TextField
              required
              label={"Name of list"}
              size={"small"}
              sx={{
                " input,label,fieldset": {
                  borderColor: "#9ab",
                  color: "#9ab",
                },
              }}
              {...register("ListName")}
            />
            {/*<FormControlLabel control={<Checkbox sx={{ color: "#9ab" }} />} label="Public" />*/}
            <TextField
              margin="dense"
              fullWidth
              multiline
              rows={10}
              placeholder={"Description"}
              {...register("Description")}
            />
          </Stack>
          <Stack flex={1} gap={2}>
            <SearchFilms handleAddFilm={handleAddFilm} />
            <Box borderRadius={1} border={"1px solid #9ab"} p={1} height={263.5}>
              {addedFilms.length > 0 ? (
                <Stack sx={{ height: "100%", overflowY: "auto" }}>
                  {addedFilms.map((i, idx) => (
                    <SelectedFilm key={idx} film={i}>
                      <IconButton
                        sx={{
                          color: "#9ab",
                          ":hover": {
                            bgcolor: "rgba(255,255,255,0.2)",
                            color: "#fd435f",
                          },
                        }}
                        onClick={() => handleRemoveFilm(i.FilmID)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </SelectedFilm>
                  ))}
                </Stack>
              ) : (
                <Box
                  height={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography>Films you added to your list appear here</Typography>
                  <ListIcon sx={{ fontSize: 60 }} />
                </Box>
              )}
            </Box>
          </Stack>
        </Box>
        <Box my={1} gap={1} display={"flex"} justifyContent={"flex-end"}>
          <Button sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }} onClick={handleCancel}>
            Cancel
          </Button>
          <Button type={"submit"} variant={"contained"}>
            Save
          </Button>
        </Box>
      </form>
    </Container>
  );
});
