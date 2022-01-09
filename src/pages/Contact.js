import React from "react";
import { ContactHero } from "../components/contact/contact-hero";
import { Contact } from "../components/contact";
import { Form7 } from "../components/contact/form-7";
import { DetailList8 } from "../components/contact/detail-list-8";
import { Container, Box, Typography } from "@mui/material";
import { ConatctInfo } from "../components/contact/contact-info";
import { ContactNewsletter } from "../components/contact/contact-newsletter";

function ContactPage() {
  return (
    <div>
      <ContactHero />
   
      <Box
        sx={{
          backgroundColor: "background.paper",
          py: 15
        }}
      >
           
        <Container maxWidth="md">
        <Typography color="textPrimary" variant="h3"  align="center">
              Talk to our account expert
            </Typography>
            <Typography
              sx={{ py: 3 }}
              variant="body1"
              color="textSecondary"
              align="center"
         
            >
              Have questions about integrating our APIs? Fill out the form
              and a senior web expert will be in touch shortly.
            </Typography>
          <Form7 />
        </Container>
      </Box>
      
      <ConatctInfo/>
      <ContactNewsletter/>
    </div>
  );
}

export default ContactPage;
