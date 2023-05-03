import { Card, CardContent, CircularProgress, ClickAwayListener, debounce, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import useAxios from "axios-hooks";

const SearchOption = (props) => {
  const { film, handleFilmClick } = props;

  const handleClick = () => {
    handleFilmClick(film);
  };

  return (
    <Card
      sx={{
        background: "transparent",
        width: "100%",
        py: 0.5,
        ":hover": { bgcolor: "rgba(255,255,255,0.2)", cursor: "pointer" },
      }}
      elevation={0}
      onClick={handleClick}
    >
      <CardContent sx={{ pl: 1, py: 0, ":last-child": { pb: 0 } }}>
        <Box display={"flex"} alignItems={"center"}>
          <img src={film?.Poster_path} alt={film?.Title} height={45} width={30} style={{ borderRadius: "2px" }} />
          <Box ml={1}>
            <Typography color={"#9ab"}>
              <strong style={{ color: "#fff" }}>{film?.Title}</strong>{" "}
              {film?.Release_date && new Date(film.Release_date).getFullYear()}
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
  const [, fetchFilms] = useAxios(
    {
      url: "Films/Paging",
      method: "POST",
    },
    { manual: true },
  );
  const fetch = React.useCallback(
    debounce((inputValue) => {
      fetchFilms({
        data: {
          pageSize: 10,
          pageIndex: 1,
          filmName: inputValue,
        },
      }).then((res) => {
        setOptions(res?.data?.Data ?? []);
        setOpenPopper(true);
      });
      setSearchLoading(false);
    }, 500),
    [],
  );

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

  const handleFilmClicked = (film) => {
    props.handleAddFilm(film);
    setInputValue("");
    setOpenPopper(false);
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
      <ClickAwayListener onClickAway={() => setOpenPopper(false)}>
        <Box
          position={"absolute"}
          display={openPopper ? "block" : "none"}
          sx={{ zIndex: 10, bgcolor: "#456", borderRadius: 1, color: "#9ab", mt: 1, width: "100%", p: 1 }}
        >
          <Box
            sx={{ borderRadius: 1, maxHeight: 250, overflowY: "auto" }}
            // onClick={() => {
            //   setInputValue("");
            //   setOpenPopper(false);
            // }}
          >
            {options.length > 0 ? (
              <>
                {options.map((i, idx) => (
                  <SearchOption key={idx} film={i} handleFilmClick={handleFilmClicked} />
                ))}
              </>
            ) : (
              <Typography color={"#fff"}>No titles matching {inputValue}</Typography>
            )}
          </Box>
        </Box>
      </ClickAwayListener>
    </Box>
  );
};
