import moment from "moment";

export default function Timestamp({ noSeparator, date }) {
  return (
    <>
      {!noSeparator ? <span style={{ marginInline: 10 }}>|</span> : <></>}
      <span
        style={{
          fontFamily: "Segoe UI, Courier, Times New Roman",
          textTransform: "uppercase",
          fontWeight: 350,
        }}
      >
        {moment(date).format("DD MMM YYYY")}
      </span>
    </>
  );
}
