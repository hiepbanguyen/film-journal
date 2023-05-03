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

export const SelectedFilm = ({ film, children }) => {
  return (
    <Card
      sx={{ py: 1, background: "transparent", width: "100%", ":hover": { bgcolor: "rgba(255,255,255,0.1)" } }}
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
  const [addedFilms, setAddFilms] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (UserStore.isLoadedFromLocal && !UserStore.isLoggedIn) {
      navigate("/sign-in");
    }
  }, [UserStore.isLoggedIn, UserStore.isLoadedFromLocal]);

  const handleAddFilm = (newFilm) => {
    if (addedFilms.find((i) => newFilm.id === i.id)) {
      enqueueSnackbar("You already added this film to your list", { variant: "error" });
      return;
    }
    setAddFilms([...addedFilms, newFilm]);
  };

  const handleRemoveFilm = (filmId) => {
    setAddFilms(addedFilms.filter((i) => i.id !== filmId));
  };

  return (
    <Container sx={{ color: "#9ab", mt: 10 }}>
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
            {/*<FormControlLabel control={<Checkbox sx={{ color: "#9ab" }} />} label="Public" />*/}
            <TextField
              autoFocus
              margin="dense"
              id="list-desc"
              fullWidth
              multiline
              rows={10}
              placeholder={"Description"}
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
                        onClick={() => handleRemoveFilm(i.id)}
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
          <Button sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }} onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant={"contained"}>Save</Button>
        </Box>
      </form>
    </Container>
  );
});
