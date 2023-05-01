import { Box, Divider, Tooltip, Typography } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star.js";
import { useMemo } from "react";

const compiledRatings = {
  each: {
    1: 10,
    2: 0,
    3: 15,
    4: 342,
    5: 100,
    6: 203,
    7: 121,
    8: 500,
    9: 22,
    10: 11,
  },
  total: 1000,
  avg: 3.9,
};

const RatingColumnMaxHeight = 100;

const RatingColumn = (props) => {
  const { count, rating, percent } = props;

  return (
    <Tooltip title={`${count} ratings of ${rating} stars (${percent}%)`}>
      <Box
        flexGrow={1}
        height={RatingColumnMaxHeight}
        maxWidth={40}
        display={"flex"}
        alignItems={"flex-end"}
        mr={"1px"}
        sx={{
          "&:hover": {
            cursor: "pointer",
            background: "rgba(255,255,255,0.1)",
            "& .rating-column": {
              background: "#6C839B",
            },
          },
        }}
      >
        <Box
          className={"rating-column"}
          width={"100%"}
          height={`${percent}%`}
          sx={{ background: "#456", borderRadius: "3px 3px 0 0" }}
        />
      </Box>
    </Tooltip>
  );
};

export default function CompiledRatings({ stats }) {
  const sortedRatings = useMemo(() => {
    if (stats?.List) {
      return stats.List.sort((a, b) => a.Value - b.Value);
    }
    return Array.from({ length: 10 });
  }, [stats?.Total]);
  // console.log(sortedRatings);
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
        <Typography fontSize={15}>RATINGS</Typography>
        <Typography variant={"body2"}>{stats?.Total ?? 0}</Typography>
      </Box>
      <Divider variant={"fullWidth"} />
      <Box display={"flex"} justifyContent={"center"} alignItems={"flex-end"} mt={3}>
        <Box display={"flex"} alignItems={"baseline"}>
          <StarHalfIcon sx={{ fontSize: 12, mr: 0.5, color: "#00c030" }} />
        </Box>
        {sortedRatings.map((i, idx) => (
          <RatingColumn key={idx} count={i?.Total ?? 0} rating={i?.Value ?? 0} percent={i?.Percent ?? 0} />
        ))}
        <Box width={"3px"} />
        <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} gap={1}>
          <Typography
            variant={"h5"}
            textAlign={"center"}
            color={"#dbecff"}
            fontWeight={600}
            sx={{ textShadow: "0px 0px 20px #fff,0px 0px 20px #614ad3" }}
          >
            {stats?.RateAverage ? stats.RateAverage.toFixed(1) : 0}
          </Typography>
          <Box display={"flex"} alignItems={"baseline"}>
            {Array.from({ length: 5 }).map((i, idx) => (
              <StarIcon key={idx} sx={{ fontSize: 12, color: "#00c030" }} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
