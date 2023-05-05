import { Avatar, Box, Button, Typography } from "@mui/material";
import CustomTabs from "../common/tabs.jsx";
import React from "react";

const initialShowCast = 15;
const initialShowCrew = 3;

const Cast = (props) => {
  return (
    <Box
      component={Button}
      display={"flex"}
      gap={0.5}
      sx={{
        background: "#283038",
        borderRadius: 1,
        p: 0.5,
        "&:hover": {
          background: "#456",
        },
      }}
    >
      <Avatar src={props.avatar} sx={{ height: 35, width: 35 }} />
      <Box>
        <Typography color={"#fff"} fontSize={12} textAlign={"left"}>
          {props.name}
        </Typography>
        <Typography color={"#9ab"} fontSize={12} textAlign={"left"}>
          {props.character}
        </Typography>
      </Box>
    </Box>
  );
};

const CastTab = ({ data }) => {
  const [showAll, setShowAll] = React.useState(false);
  // console.log(data);
  if (data.length === 0) return <>N/A</>;
  return (
    <>
      <Box display={"flex"} flexWrap={"wrap"} gap={1} mb={1}>
        {data?.slice(0, showAll ? data.length : initialShowCast).map((i, idx) => (
          <Cast key={idx} {...i} />
        ))}
      </Box>
      {data?.length > initialShowCast && (
        <Button
          variant={"contained"}
          sx={{
            fontSize: 13,
            background: "#283038",
            "&:hover": {
              background: "#456",
            },
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "Show all"}
        </Button>
      )}
    </>
  );
};

const Crew = ({ data }) => {
  return (
    <Box>
      <Typography textTransform={"uppercase"} color={"#789"} fontSize={13}>
        {data[0]}
      </Typography>
      <Box className={"crew_people"} display={"flex"} flexWrap={"wrap"} mb={0.5}>
        {data[1].map((i, idx) => (
          <a key={idx}>{i}</a>
        ))}
      </Box>
    </Box>
  );
};

const CrewTab = ({ data }) => {
  const [showAll, setShowAll] = React.useState(false);
  // console.log(data?.[0]?.[0]);
  if (!data?.[0]?.[0]) return <>N/A</>;
  return (
    <>
      <Box>
        {data
          .slice(0, showAll ? data.length : initialShowCrew)
          .reverse()
          .map((i, idx) => (
            <Crew key={idx} data={i} />
          ))}
      </Box>
      {data.length > initialShowCrew && (
        <Button
          variant={"contained"}
          sx={{
            fontSize: 13,
            background: "#283038",
            "&:hover": {
              background: "#456",
            },
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "Show all"}
        </Button>
      )}
    </>
  );
};
const DetailsTab = ({ data }) => {
  return (
    <>
      {data.map((i, idx) => (
        <Crew key={idx} data={i} />
      ))}
    </>
  );
};
const tabLabels = ["CAST", "CREW", "MORE DETAILS"];

export default function TabsCastNCrew({ cast, crew, detail }) {
  return (
    <Box>
      <CustomTabs labels={tabLabels} bottom_border_only={true}>
        <CastTab data={cast} />
        <CrewTab data={crew} />
        <DetailsTab data={detail} />
      </CustomTabs>
    </Box>
  );
}
