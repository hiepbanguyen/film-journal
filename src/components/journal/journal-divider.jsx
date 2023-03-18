import { Box, Button, Divider, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext.js";

export default function JournalDivider(props) {
  const { topic, topicDesc, link } = props;
  return (
    <>
      <Divider variant={"fullWidth"} color={"#456"} />
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Box display={"flex"} alignItems={"baseline"}>
          <Typography mr={1.5} fontWeight={600} color={"#456"}>
            {topic}
          </Typography>
          <Typography fontFamily={"roboto, serif"} fontSize={13}>
            {topicDesc}
          </Typography>
        </Box>
        <Button sx={{ color: "#456", fontSize: 12, fontWeight: 800 }} href={link}>
          More <NavigateNextIcon sx={{ fontSize: 20 }} />
        </Button>
      </Box>
    </>
  );
}
