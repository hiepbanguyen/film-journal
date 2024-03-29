import { Box, Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import CancelIcon from "@mui/icons-material/Cancel";
import { observer } from "mobx-react-lite";
import SearchForm from "../../../common/search-form.jsx";
import UserStore from "../../../../store/user.store.js";
import { Loading } from "../../../common/loading.jsx";
import PaginationBase from "../../../common/pagination-base.jsx";
import FilmCard from "../../../common/film-card.jsx";
import { useSnackbar } from "notistack";

const DefaultPageSize = 48;
export const WatchlistFilmsGrid = observer(({ username }) => {
  const [filters, setFilters] = useState(null);
  const [pageIdx, setPageIdx] = React.useState(1);
  const [editing, setEditing] = useState(false);
  const [films, setFilms] = useState([]);
  const [deletedFilms, setDeletedFilms] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  // console.log("rerender");

  const [{ data, loading, error }, fetchFilms] = useAxios(
    {
      url: `Users/${username}/Profile/Watchlist`,
      method: "POST",
      data: {
        pageSize: DefaultPageSize,
        pageIndex: pageIdx,
        ...filters,
      },
    },
    { useCache: false },
  );
  const [, deleteFromWatchlist] = useAxios(
    {
      url: `WatchList/Delete`,
      method: "DELETE",
    },
    { manual: true },
  );

  useEffect(() => {
    if (data?.Data) {
      setFilms(data.Data);
    }
  }, [loading]);

  const handleEditClicked = () => {
    setEditing(true);
    fetchFilms({
      data: {
        pageSize: 999999,
        pageIndex: 1,
      },
    });
  };
  // only for watchlist
  const handleDelete = (id) => {
    if (!id) return;
    setFilms(films.filter((i) => i.FilmID !== id));
    setDeletedFilms([...deletedFilms, films.find((i) => i.FilmID === id)]);
  };

  const handleCancel = () => {
    setEditing(false);
    fetchFilms();
  };

  const handleSave = () => {
    deleteFromWatchlist({
      data: {
        filmIDs: deletedFilms.map((i) => i.FilmID).join(","),
      },
    })
      .then((res) => {
        if (res?.data) {
          enqueueSnackbar("Update watchlist successfully", { variant: "success" });
          setEditing(false);
          fetchFilms();
        }
      })
      .catch((e) => {
        enqueueSnackbar(e.response.data.userMsg, { variant: "error" });
      });
  };

  const onSubmit = (values) => {
    setPageIdx(1);
    // console.log("values", values);
    setFilters(values);
    // fetchFilms();
  };

  const handleChangePage = (newPage) => {
    setPageIdx(newPage);
    // fetchFilms();
  };

  return (
    <Box>
      <Box mb={{ xs: 2, lg: 0 }}>
        <SearchForm onSubmit={onSubmit} />
      </Box>
      <Box display={"flex"} sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Typography textTransform={"uppercase"} mt={3}>
          Watch List
        </Typography>
        {UserStore.isLoggedIn && UserStore.user?.UserName === username && (
          <>
            {editing ? (
              <Box>
                <Button
                  onClick={handleCancel}
                  sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" }, mr: 1 }}
                >
                  Cancel
                </Button>
                <Button onClick={handleSave} variant={"contained"} color={"success"}>
                  Save
                </Button>
              </Box>
            ) : (
              <Button variant={"contained"} sx={{ py: 0.5, px: 1 }} onClick={handleEditClicked}>
                Edit
              </Button>
            )}
          </>
        )}
      </Box>
      <Divider />
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          {films.length > 0 && (
            <Box mb={10}>
              <Grid container spacing={1} columns={24} my={3}>
                {films.map((i, idx) => (
                  <Grid item key={idx} xs={6} sm={4} md={3} position={"relative"}>
                    {editing && (
                      <IconButton
                        onClick={() => handleDelete(i?.FilmID)}
                        color={"error"}
                        sx={{
                          position: "absolute",
                          width: 40,
                          left: 8,
                          right: 0,
                          m: "0 auto",
                          top: -10,
                          bgcolor: "rgba(0,0,0,0.4)",
                          ":hover": {
                            bgcolor: "rgba(255,255,255,0.8)",
                          },
                        }}
                      >
                        <CancelIcon fontSize={"medium"} />
                      </IconButton>
                    )}
                    <FilmCard size={"100%"} link={`/films/${i?.FilmID}`} src={i?.Poster_path} />
                  </Grid>
                ))}
              </Grid>
              {!editing && (
                <PaginationBase totalPage={data?.TotalPage ?? 1} pageIndex={pageIdx} onChange={handleChangePage} />
              )}
            </Box>
          )}
        </>
      )}
    </Box>
  );
});
