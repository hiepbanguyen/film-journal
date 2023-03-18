import StarIcon from "@mui/icons-material/Star";

export const FiveStarIcon = (props) => {
  const { fontSize, color } = props;
  return (
    <>
      {Array.from({ length: 5 }).map((i, idx) => (
        <StarIcon key={idx} sx={{ fontSize: fontSize, color: color }} />
      ))}
    </>
  );
};
