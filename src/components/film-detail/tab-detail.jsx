import { Box } from "@mui/material";

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

export default function TabDetail() {
  return (
    <Box className="tabbed-content">
      <Box>
        <ul className="cast_list_title">
          <li className="cast_chose">CAST</li>
          <li>CREW</li>
          <li>DETAILS</li>
          <li>GENRES</li>
        </ul>
        <Box className="cast_list">
          {Cast.map((cast_item, idx) => (
            <a key={idx}>
              {cast_item}
              {` (Character ${idx})`}
            </a>
          ))}
          <a>Show All...</a>
        </Box>
      </Box>
    </Box>
  );
}
