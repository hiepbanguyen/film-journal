import { Box } from "@mui/material";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay.js";

export default function WhereToWatch() {
  return (
    <Box className="watch_panel">
      <Box className="watch_header">
        <h3 className="watch_header_title">Where to watch</h3>
        <a href="">
          <SmartDisplayIcon style={{ marginRight: 3 }}></SmartDisplayIcon>Trailer
        </a>
      </Box>
      <Box className="services">
        <img src="https://s.ltrbxd.com/static/img/brands/amazon.92a626e2.png" alt="" />
        <a
          className="services_title"
          href="https://www.amazon.com/dp/B002VPE1B6?tag=letterboxd-20&linkCode=osi&th=1&psc=1&language=en_US"
        >
          Amazon US
        </a>
        <a
          className="services_option"
          href="https://www.amazon.com/dp/B002VPE1B6?tag=letterboxd-20&linkCode=osi&th=1&psc=1&language=en_US"
        >
          DISC
        </a>
      </Box>
      <Box className="other_message">
        <a href="https://letterboxd.com/pro/">
          Go <span className="pro">PRO</span> to customize this list
        </a>
      </Box>
      <Box className="all_services">
        <a className="all" href="https://letterboxd.com/film/avatar-the-way-of-water/watch/">
          All services...
        </a>
        <a className="justwatch" href="https://www.justwatch.com/">
          JustWatch
        </a>
      </Box>
    </Box>
  );
}
