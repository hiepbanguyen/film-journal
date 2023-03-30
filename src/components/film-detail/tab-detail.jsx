import { Avatar, Box, Button, Typography } from "@mui/material";
import CustomTabs from "../common/tabs.jsx";
import React from "react";
import { formatCompactNumber } from "../../utils/number.js";

const actors = [
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Sam Worthington",
    character: "Merlin",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Jamie Flatters",
    character: "Jemaine Clement",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Brendan Cowell",
    character: "Edie Falco",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "CCH Pounder",
    character: "Joel David Moore",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Kate Winslet",
    character: "Cliff Curtis",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Sam Worthington",
    character: "Stephen Lang",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Sigourney Weaver",
    character: "Jack Champion",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Zoe Saldaña",
    character: "Britain Dalton",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Johnny Alexander",
    character: "Andrew Arrabito",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Zoe Saldaña",
    character: "Britain Dalton",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Sigourney Weaver",
    character: "Jack Champion",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Robert Okumu",
    character: "Alicia Vela-Bailey",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Johnny Alexander",
    character: "Andrew Arrabito",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Zoe Saldaña",
    character: "Britain Dalton",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Sigourney Weaver",
    character: "Jack Champion",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Robert Okumu",
    character: "Alicia Vela-Bailey",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Johnny Alexander",
    character: "Andrew Arrabito",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Zoe Saldaña",
    character: "Britain Dalton",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Sigourney Weaver",
    character: "Jack Champion",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Robert Okumu",
    character: "Alicia Vela-Bailey",
  },
  {
    img: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    name: "Johnny Alexander",
    character: "Andrew Arrabito",
  },
];
const crews = [
  {
    department: "directing",
    people: ["Jamie Lee", "Ang Lee"],
  },
  {
    department: "writing",
    people: ["Jamie Lee", "Ang Lee"],
  },
  {
    department: "producing",
    people: [
      "Hong Chau",
      "Stephanie Hsu",
      "Michelle Yeoh",
      "Stephanie Hsu",
      "Michelle Yeoh",
      "Stephanie Hsu",
      "Michelle Yeoh",
    ],
  },
  {
    department: "costume and makeup",
    people: ["Hong Chau", "Stephanie Hsu", "Michelle Yeoh"],
  },
  {
    department: "stunts",
    people: ["Hong Chau", "Stephanie Hsu", "Michelle Yeoh"],
  },
];

const initialShowCast = 8;
const initialShowCrew = 3;

const Cast = (props) => {
  return (
    <Box
      component={Button}
      display={"flex"}
      gap={1}
      sx={{
        background: "#283038",
        borderRadius: 1,
        px: 1,
        "&:hover": {
          background: "#456",
        },
      }}
    >
      <Avatar src={props.img} sx={{ height: 35, width: 35 }} />
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

const CastTab = () => {
  const [showAll, setShowAll] = React.useState(false);
  return (
    <>
      <Box display={"flex"} flexWrap={"wrap"} gap={1} mb={1}>
        {actors.slice(0, showAll ? actors.length : initialShowCast).map((i, idx) => (
          <Cast key={idx} {...i} />
        ))}
      </Box>
      {actors.length > initialShowCast && (
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

const Crew = (props) => {
  return (
    <Box>
      <Typography textTransform={"uppercase"} color={"#789"} fontSize={13}>
        {props.department}
      </Typography>
      <Box className={"crew_people"} display={"flex"} flexWrap={"wrap"} mb={0.5}>
        {props.people.map((i, idx) => (
          <a key={idx}>{i}</a>
        ))}
      </Box>
    </Box>
  );
};

const CrewTab = () => {
  const [showAll, setShowAll] = React.useState(false);
  return (
    <>
      <Box>
        {crews.slice(0, showAll ? crews.length : initialShowCrew).map((i, idx) => (
          <Crew key={idx} {...i} />
        ))}
      </Box>
      {crews.length > initialShowCrew && (
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
const DetailsTab = () => {
  return (
    <>
      <Crew department={"languagues"} people={["English", "Vietnamese"]} />
      <Crew department={"production countries"} people={["Vietnam"]} />
      <Crew department={"production companies"} people={["Marvel Studios"]} />
      <Crew department={"budget"} people={[formatCompactNumber(25000000)]} />
    </>
  );
};
const tabs = [{ label: "CAST" }, { label: "CREW" }, { label: "MORE DETAILS" }];

export default function TabDetail() {
  return (
    <Box>
      <CustomTabs tabs={tabs} bottom_border_only={true}>
        <CastTab />
        <CrewTab />
        <DetailsTab />
      </CustomTabs>
    </Box>
  );
}
