import React from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SearchFilms } from "../new/search-films.jsx";
import ListIcon from "@mui/icons-material/List.js";
import { SelectedFilm } from "../new/index.jsx";
import CloseIcon from "@mui/icons-material/Close.js";

const existedFilms = [
  {
    id: 7,
    thumbnail: "https://a.ltrbxd.com/resized/film-poster/5/4/2/5/5/5/542555-nobody-0-70-0-105-crop.jpg?v=eab2f81e32",
    title: "Nobody",
  },
  {
    id: 8,
    thumbnail:
      "https://a.ltrbxd.com/resized/film-poster/5/0/8/9/9/0/508990-news-of-the-world-0-70-0-105-crop.jpg?v=fb9a55f756",
    title: "News of the world",
  },
  {
    id: 9,
    thumbnail:
      "https://a.ltrbxd.com/resized/film-poster/3/9/5/7/3/1/395731-wonder-woman-1984-0-70-0-105-crop.jpg?v=767573fbcd",
    title: "Wonder Women",
  },
];

export const EditList = () => {
  const [addedFilms, setAddFilms] = React.useState(existedFilms);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

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
      <Typography variant={"h5"}>Edit List</Typography>
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
              defaultValue={"Name of list"}
            />
            <FormControlLabel control={<Checkbox sx={{ color: "#9ab" }} />} label="Public" />
            <TextField
              margin="dense"
              id="list-desc"
              fullWidth
              multiline
              rows={10}
              placeholder={"Description"}
              defaultValue={"This is the description"}
            />
          </Stack>
          <Stack flex={1} gap={2}>
            <SearchFilms handleAddFilm={handleAddFilm} />
            <Box borderRadius={1} border={"1px solid #9ab"} p={1} height={314}>
              {addedFilms.length > 0 ? (
                <Stack sx={{ height: "100%", overflowY: "auto" }}>
                  {addedFilms.map((i, idx) => (
                    <SelectedFilm key={idx} {...i}>
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
};
