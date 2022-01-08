import { useTheme } from "@emotion/react";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AboutDevelopers } from "../components/about/about-developers";
import { AboutHero } from "../components/about/about-hero";

function About() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  return (
      <>
      <AboutHero/>
      <AboutDevelopers/>
   
    </>
  );
}

export default About;
