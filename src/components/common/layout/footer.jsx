import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

export function Copyright() {
  return (
    <Typography variant="body2" color="#678">
      {"Copyright © "}
      <Link to="">FilmJournal</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#2c3440",
          color: "#b0c2d5",
        }}
      >
        <Container maxWidth="md">
          <Box display={"flex"} gap={1} flexWrap={"wrap"} justifyContent={"space-between"} mb={1}>
            <Typography variant="body1">Made by Hiệp, Hoàn, Long, Đức, Giang, Quang.</Typography>
            <Box display={"flex"} gap={1}>
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <TelegramIcon />
            </Box>
          </Box>
          <Copyright />
          <Typography variant="body2" color="#678">
            {"This site is protected by reCAPTCHA and the Google privacy policy and terms of service apply."}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
