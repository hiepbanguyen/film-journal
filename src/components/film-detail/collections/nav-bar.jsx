import { Box } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import styles from "../../profile-user/profile.module.scss";
import React from "react";

const categories = ["reviews", "lists", "likes"];

export default function NavBar() {
  const { filmId } = useParams();
  return (
    <Box
      sx={{
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: { xs: 1, sm: 0 },
        display: "flex",
        flexDirection: { xs: "row", sm: "column" },
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {categories.map((i, idx) => (
        <NavLink
          className={styles.tabs}
          to={`/films/${filmId}/${i}`}
          key={idx}
          style={({ isActive }) => {
            return {
              padding: 10,
              background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
              textTransform: "capitalize",
            };
          }}
        >
          {i}
        </NavLink>
      ))}
    </Box>
  );
}
