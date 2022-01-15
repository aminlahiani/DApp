import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { Form10 } from "../components/form-7";
export const ContactForm = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        py: 15,
      }}
    >
      <Container maxWidth="md">
        <Typography color="textPrimary" variant="h3" align="center">
          Talk to our account expert
        </Typography>
        <Typography sx={{ py: 3 }} variant="body1" color="textSecondary" align="center">
          Have questions about integrating our APIs? Fill out the form and a senior web expert will
          be in touch shortly.
        </Typography>
        <Form10 />
      </Container>
    </Box>
  );
};
