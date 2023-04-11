import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SearchFilms } from "./search-films.jsx";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";

const FilmCard = (props) => {
  const { thumbnail, title, releasedYear, id } = props;

  return (
    <Card sx={{ background: "transparent", width: "100%" }} elevation={0}>
      <CardContent sx={{ pl: 1, py: 0, ":last-child": { pb: 0 } }}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={"flex"} alignItems={"center"}>
            <img src={thumbnail} alt={title} height={45} width={30} style={{ borderRadius: "2px" }} />
            <Typography color={"#9ab"} ml={1}>
              <strong style={{ color: "#fff" }}>{title}</strong> {releasedYear ?? "2022"}
            </Typography>
          </Box>
          <IconButton
            sx={{
              ":hover": {
                bgcolor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <CloseIcon
              sx={{
                color: "#9ab",
                ":hover": {
                  color: "#fd435f",
                },
              }}
            />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export const NewList = () => {
  const [addedFilms, setAddFilms] = React.useState([]);

  return (
    <Container sx={{ color: "#9ab" }}>
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
            <FormControlLabel control={<Checkbox sx={{ color: "#9ab" }} />} label="Public" />
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
            <SearchFilms />
            <Box borderRadius={1} border={"1px solid #9ab"} p={1} height={314}>
              {addedFilms.length > 0 ? (
                <Stack gap={1}>
                  {addedFilms.map((i, idx) => (
                    <FilmCard key={idx} {...i} />
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
      </form>
    </Container>
  );
};
