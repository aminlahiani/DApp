import React from "react";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Hero = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.primary.mainGradient,
        py: 15,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography align="center" color="textPrimary" variant="h1">
          Have any Question?
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          variant="subtitle1"
          sx={{ pt: 3 }}
        >
          Search our FAQ for answers to anything you might ask.
        </Typography>
      </Container>
    </Box>
  );
}


