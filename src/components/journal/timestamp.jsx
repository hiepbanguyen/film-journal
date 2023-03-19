import { Box, Typography } from "@mui/material";
import moment from "moment";

export default function Timestamp(props) {
  return (
    <>
      {!props.noSeparator ? <span style={{ marginInline: 10 }}>|</span> : <></>}
      <span
        style={{
          fontFamily: "Segoe UI, Courier, Times New Roman",
          textTransform: "uppercase",
          fontWeight: 350,
        }}
      >
        {moment(props.date).format("DD MMM YYYY")}
      </span>
    </>
  );
}
