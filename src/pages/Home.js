import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { Header1 } from '../components/header';
import { HomeDesigners } from '../components/home-designers';
import MainLayout from '../layout/MainLayout';
import { HomeHero } from '../components/home-hero';
import { Contact } from '../components/contact';
import { HomeServices } from '../components/home-services';
import { HomeAbout } from '../components/home-about';
import { HomeTestimonials } from '../components/home-testimonials';
import FQS from '../components/fqs';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Home() {
  return (
    <>
 
  <div id="home">
  <HomeHero/>
  </div>
  <div id="services">
    <HomeServices/>

  </div>
    
    <div id="about">
    <HomeAbout/>
    </div>

    <div id="designers">
    <HomeDesigners/>
    </div> 
    <div id="testimonial">
    <HomeTestimonials/>
    </div>
    <div id="fqs">
    <FQS/>
    </div>
    <div id="contact">
    <Contact/>
    </div>
    <Container maxWidth="sm">
     
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example
        </Typography>
     
        <Copyright />
      </Box>
    </Container>
 
    </>
  );
}

