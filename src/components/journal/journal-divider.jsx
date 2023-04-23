import { Box, Divider, Typography } from "@mui/material";

export default function JournalDivider(props) {
  const { topic, topicDesc } = props;
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
      </Box>
    </>
  );
}
