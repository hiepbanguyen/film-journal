import { Box, Container, Grid, Typography } from "@mui/material";
import { NavLink, Outlet, useParams } from "react-router-dom";
import styles from "../profile-user/profile.module.scss";
import React from "react";

const searchCategories = [
  { label: "Films", href: "/films" },
  { label: "Reviews", href: "/reviews" },
  { label: "Lists", href: "/lists" },
  { label: "Members", href: "/members" },
  // { label: "Tags", href: "/tags" },
];

export default function SearchPage() {
  const { searchParams } = useParams();

  return (
    <Container sx={{ mt: 10, color: "#9ab" }}>
      <Grid container spacing={{ xs: 2, sm: 5 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant={"h6"} mb={1}>
            Show results for:
          </Typography>
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
            {searchCategories.map((i, idx) => (
              <NavLink
                className={styles.tabs}
                to={`/search${i.href}/${searchParams}`}
                key={idx}
                style={({ isActive }) => {
                  return {
                    padding: 10,
                    background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                  };
                }}
                end
              >
                {i.label}
              </NavLink>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
