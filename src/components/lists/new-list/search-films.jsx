import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Box } from "@mui/system";
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
  const { film } = props;

  return (
    <Card
      sx={{
        background: "transparent",
        width: "100%",
        py: 0.5,
        ":hover": { bgcolor: "rgba(255,255,255,0.2)", cursor: "pointer" },
      }}
      elevation={0}
    >
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
  const [inputValue, setInputValue] = React.useState("");
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [openPopper, setOpenPopper] = React.useState(false);
  // const fetch = React.useCallback(
  //   debounce((inputValue) => {
  //     searchProject({ search: inputValue }).then((res) => setOptions(res.data?.getProjects ?? []));
  //     setSearchLoading(false);
  //   }, 500),
  //   [],
  // );
  const fetch = (inputValue) => {
    setOptions(exampleOptions);
    setOpenPopper(true);
    // console.log(options);
    // setSearchLoading(false);
  };
  React.useEffect(() => {
    setSearchLoading(true);
    if (!inputValue) {
      setSearchLoading(false);
      setOpenPopper(false);
      return;
    }
    fetch(inputValue);
  }, [inputValue]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <Box width={"100%"} position={"relative"}>
      <TextField
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 1 }} />,
          style: {
            padding: 0,
            paddingLeft: 10,
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
      <Box
        position={"absolute"}
        display={openPopper ? "block" : "none"}
        sx={{ bgcolor: "#456", borderRadius: 1, color: "#9ab", mt: 1, width: "100%", p: 1 }}
      >
        <Box
          sx={{ borderRadius: 1, height: 250, overflowY: "scroll" }}
          onClick={() => {
            setInputValue("");
            setOpenPopper(false);
          }}
        >
          {options.map((i, idx) => (
            <SearchOption key={idx} film={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
