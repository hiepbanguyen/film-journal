import { Box } from "@mui/material";
import CustomTabs from "../common/tabs.jsx";

const Cast = [
  "Sam Worthington",
  "Zoe Saldaña",
  "Sigourney Weaver",
  "Britain Dalton",
  "Stephen Lang",
  "Jack Champion",
  "Cliff Curtis",
  "Kate Winslet",
  "Joel David Moore",
  "CCH Pounder",
  "Edie Falco",
  "Brendan Cowell",
  "Jemaine Clement",
  "Jamie Flatters",
  "Matt Gerald",
  "Robert Okumu",
  "Alicia Vela-Bailey",
  "Andrew Arrabito",
  "Johnny Alexander",
];

const labels = ["CAST", "CREW", "DETAILS", "GENRES"];

export default function TabDetail() {
  return (
    <Box>
      <CustomTabs labels={labels} bottom_border_only={true}>
        <Box className="cast_list">
          {Cast.map((cast_item, idx) => (
            <a key={idx}>
              {cast_item}
              {` (Character ${idx})`}
            </a>
          ))}
          <a>Show All...</a>
        </Box>
      </CustomTabs>
    </Box>
  );
}
