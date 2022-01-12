import React from "react";
import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { InfoCard } from "./InfoCard";
const infocards = [1, 2, 3];
export const Hero = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.primary.mainGradient,
        py: 10,
      }}
    >
      <Container
        maxWidth="lg"
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
          sx={{ pt: 3 , mb : 5 }}
        >
          Search our FAQ for answers to anything you might ask.
        </Typography>

<Grid  container spacing={3}>
          {infocards.map(info => (
            <Grid key={info} item xs={12} md={6} lg={4}>
<InfoCard/>
            </Grid>
          ))}
            </Grid>

   

      </Container>
    </Box>
  );
}


