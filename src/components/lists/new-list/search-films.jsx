import { Card, CardContent, CircularProgress, Popper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Box } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";

const exampleOptions = [
  {
    id: 1,
    thumbnail:
      "https://a.ltrbxd.com/resized/film-poster/6/8/3/1/9/4/683194-do-revenge-0-70-0-105-crop.jpg?v=19da99b72f",
    title: "Do Revenge",
  },
  {
    id: 2,
    thumbnail: "https://a.ltrbxd.com/resized/film-poster/9/9/4/3/1/4/994314-swarm-0-70-0-105-crop.jpg?v=256fc1c484",
    title: "Swarm",
  },
  {
    id: 3,
    thumbnail: "https://a.ltrbxd.com/resized/film-poster/9/9/6/9/2/5/996925-beef-0-70-0-105-crop.jpg?v=c7399e5bdb",
    title: "Beef",
  },
  {
    id: 4,
    thumbnail: "https://a.ltrbxd.com/resized/sm/upload/91/48/x5/do/sea_beast_xxlg-0-70-0-105-crop.jpg?v=52209df52e",
    title: "The Sea Beast",
  },
  {
    id: 5,
    thumbnail:
      "https://a.ltrbxd.com/resized/film-poster/6/2/9/3/2/0/629320-decision-to-leave-0-70-0-105-crop.jpg?v=30eaeaf481",
    title: "Decision To Leave",
  },
  {
    id: 6,
    thumbnail:
      "https://a.ltrbxd.com/resized/film-poster/4/4/9/4/4/2/449442-bodies-bodies-bodies-0-70-0-105-crop.jpg?v=1dfddd92ac",
    title: "Bodies Bodies Bodies",
  },
];

const SearchOption = (props) => {
  const { film, handleAddFilm } = props;

  return (
    <Card sx={{ background: "transparent", width: "100%" }} elevation={0} onClick={() => handleAddFilm(film)}>
      <CardContent sx={{ pl: 1, py: 0, ":last-child": { pb: 0 } }}>
        <Box display={"flex"} alignItems={"center"}>
          <img src={film.thumbnail} alt={film.title} height={45} width={30} style={{ borderRadius: "2px" }} />
          <Box ml={1}>
            <Typography color={"#9ab"}>
              <strong style={{ color: "#fff" }}>{film.title}</strong> {film.releasedYear ?? "2022"}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export const SearchFilms = (props) => {
  const { handleAddFilm } = props;
  const [inputValue, setInputValue] = React.useState("");
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  // const fetch = React.useCallback(
  //   debounce((inputValue) => {
  //     searchProject({ search: inputValue }).then((res) => setOptions(res.data?.getProjects ?? []));
  //     setSearchLoading(false);
  //   }, 500),
  //   [],
  // );
  const fetch = (inputValue) => {
    setOptions(exampleOptions);
    // console.log(options);
    // setSearchLoading(false);
  };
  React.useEffect(() => {
    setSearchLoading(true);
    if (!inputValue) {
      setSearchLoading(false);
      return;
    }
    fetch(inputValue);
  }, [inputValue]);
  return (
    <Autocomplete
      fullWidth
      autoComplete={false}
      // disablePortal
      freeSolo
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      PopperComponent={(prop) => (
        <Popper {...prop} sx={{ width: { xs: "auto", sm: "500px !important" } }} placement={"bottom-start"} />
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: <SearchIcon />,
            style: {
              padding: 0,
              paddingLeft: 12,
              height: 40,
            },
            endAdornment: (
              <React.Fragment>
                {searchLoading ? <CircularProgress color="inherit" size={12} sx={{ mr: 2 }} /> : null}
                {/*{params.InputProps.endAdornment}*/}
              </React.Fragment>
            ),
          }}
          placeholder={"Enter a film's name..."}
        />
      )}
      options={options}
      getOptionLabel={() => ""}
      renderOption={(props, option) => (
        <Box p={1} {...props}>
          <SearchOption film={option} handleAddFilm={handleAddFilm} />
        </Box>
      )}
    />
  );
};
