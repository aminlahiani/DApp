import { useEffect } from 'react';

import { Avatar, Box, Button, Container, Link, Typography } from '@mui/material';
import { ContactForm } from './contact-form';
import { ArrowLeft as ArrowLeftIcon } from '../icons/arrow-left';
import { Mail as MailIcon } from '../icons/mail';


export const Contact = () => {
  return (
    <>
     
      <Box
        component="main"
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: 'repeat(2, 1fr)',
            xs: 'repeat(1, 1fr)'
          },
          flexGrow: 1
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.default',
            py: 8
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              pl: {
                lg: 15
              }
            }}
          >
           
            
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                mb: 6,
                mt: 8
              }}
            >
             
           
            </Box>
            <Typography color="textPrimary" variant="h1">
              Talk to our account expert
            </Typography>
            <Typography
              sx={{ py: 3 }}
              variant="body1"
              color="textSecondary"
         
            >
              Have questions about integrating our APIs? Fill out the form
              and a senior web expert will be in touch shortly.
            </Typography>
            <Typography
              sx={{ color: 'primary.main' }}
              variant="h6"
            >
              Join 3,000+ forward-thinking companies:
            </Typography>
            <Box sx={{ pt: 2 }}>
              <img
                alt="logoipsum1"
                src="/static/contact/contact_logos.svg"
                style={{ maxWidth: '100%' }}
              />
            </Box>
          </Container>
        </Box>
     
      </Box>
    </>
  );
};


