import React from "react";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Container, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";
import { SearchFilms } from "../new/search-films.jsx";
import ListIcon from "@mui/icons-material/List.js";
import { SelectedFilm } from "../new/index.jsx";
import CloseIcon from "@mui/icons-material/Close.js";
import UserStore from "../../../store/user.store.js";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import useAxios from "axios-hooks";
import { Loading } from "../../common/loading";
import ConfirmDeleteDialog from "../../common/confirm-delete.jsx";
import { PageNotExist } from "../../common/page-not-exist";

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

export const EditList = observer(() => {
  const [addedFilms, setAddFilms] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const { username, listId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [{ data: detail }, listDetail] = useAxios(`Lists/${listId}/Detail`);
  const [{ data: films, loading: loadFilms }, listFilms] = useAxios({
    url: `Lists/${listId}/Films`,
    method: "POST",
    data: {
      pageSize: 200,
      pageIndex: 1,
    },
  });
  const [, editList] = useAxios({ url: "Lists/Edit", method: "POST" }, { manual: true });

  React.useEffect(() => {
    if (!loadFilms) {
      setAddFilms(films?.Data ?? []);
    }
  }, [loadFilms]);

  React.useEffect(() => {
    if (UserStore.isLoadedFromLocal) {
      if (!UserStore.isLoggedIn) {
        navigate("/sign-in");
      } else if (UserStore.user.UserName !== username) {
        navigate("/lists");
      }
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
      await editList({
        data: {
          ...values,
          FilmIDs: addedFilms.map((i) => i?.FilmID ?? "").join(","),
          ListID: listId,
        },
      }).then((res) => {
        if (res?.data) {
          enqueueSnackbar("Update list successfully", { variant: "success" });
        }
      });
    } catch (e) {
      enqueueSnackbar(e.response.data.userMsg, { variant: "error" });
    }
  };

  if (loadFilms) return <Loading paddingY={10}/>;
  if (!detail || !films) return <PageNotExist/>

  return (
    <Container sx={{ color: "#9ab", mt: 10 }}>
      <Typography variant={"h5"}>Edit List</Typography>
      <Divider sx={{ mb: 3 }}/>
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
              defaultValue={detail?.ListName}
              sx={{
                " input,label,fieldset": {
                  borderColor: "#9ab",
                  color: "#9ab",
                },
              }}
              {...register("ListName")}
            />
            <TextField
              margin="dense"
              fullWidth
              multiline
              rows={10}
              defaultValue={detail?.Description ?? ""}
              placeholder={"Description"}
              {...register("Description")}
            />
          </Stack>
          <Stack flex={1} gap={2}>
            <SearchFilms handleAddFilm={handleAddFilm}/>
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
                        <CloseIcon/>
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
                  <ListIcon sx={{ fontSize: 60 }}/>
                </Box>
              )}
            </Box>
          </Stack>
        </Box>
        <Box my={1} gap={1} display={"flex"} justifyContent={"flex-end"}>
          <Button sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }} onClick={handleCancel}>
            Cancel
          </Button>
          <ConfirmDeleteDialog type={"list"} url={`Lists/Delete/${listId}`}/>
          <Button type={"submit"} variant={"contained"}>
            Save
          </Button>
        </Box>
      </form>
    </Container>
  );
});
