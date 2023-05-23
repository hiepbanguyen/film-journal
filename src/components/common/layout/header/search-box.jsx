import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search.js";
import { useNavigate, useParams } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(1),
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBox() {
  const navigate = useNavigate();
  const { searchParams } = useParams();
  const [searchValue, setSearchValue] = React.useState("");

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onKeyPress = (e) => {
    const searchPrms = e.target.value.replaceAll(/\s+/g, " ").trim();
    if (e.key === "Enter" && !!searchPrms) {
      e.preventDefault();
      // e.target.value = "";
      navigate(`/search/films/${searchPrms}`);
    }
  };

  React.useEffect(() => {
    if (!searchParams) {
      setSearchValue("");
    }
  }, [searchParams]);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon/>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={searchValue}
          inputProps={{ "aria-label": "search" }}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </Search>
    </>
  );
}
