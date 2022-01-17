import React from "react";
// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import bgImage from "assets/images/bg5.jpg";
// Styles must use direct files imports
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module

import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

const header = [{
    heading: "Material Design - News1",
    shortDescription:
      "Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder",
    keyword: " Connect with us on",
    socialIcons: [
      {
        icon: <FacebookIcon fontSize="small" color="primary" />,
  
        label: "Github",
        href: "https://github.com/dunky11/react-saas-template",
      },
      {
        icon: <InstagramIcon fontSize="small" color="primary" />,
  
        label: "Facebook",
        href: "https://facebook.com",
      },
      {
        icon: <TwitterIcon fontSize="small" color="primary" />,
  
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
      },
      {
        icon: <LinkedInIcon fontSize="small" color="primary" />,
  
        label: "Twitter",
        href: "https://www.twitter.com/",
      },
    ],
  }, {
    heading: "Material Design - News2",
    shortDescription:
      "Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder",
    keyword: " Connect with us on",
    socialIcons: [
      {
        icon: <FacebookIcon fontSize="small" color="primary" />,
  
        label: "Github",
        href: "https://github.com/dunky11/react-saas-template",
      },
      {
        icon: <InstagramIcon fontSize="small" color="primary" />,
  
        label: "Facebook",
        href: "https://facebook.com",
      },
      {
        icon: <TwitterIcon fontSize="small" color="primary" />,
  
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
      },
      {
        icon: <LinkedInIcon fontSize="small" color="primary" />,
  
        label: "Twitter",
        href: "https://www.twitter.com/",
      },
    ],
  }, 
  {
    heading: "Material Design - News3",
    shortDescription:
      "Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder",
    keyword: " Connect with us on",
    socialIcons: [
      {
        icon: <FacebookIcon fontSize="small" color="primary" />,
  
        label: "Github",
        href: "https://github.com/dunky11/react-saas-template",
      },
      {
        icon: <InstagramIcon fontSize="small" color="primary" />,
  
        label: "Facebook",
        href: "https://facebook.com",
      },
      {
        icon: <TwitterIcon fontSize="small" color="primary" />,
  
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
      },
      {
        icon: <LinkedInIcon fontSize="small" color="primary" />,
  
        label: "Twitter",
        href: "https://www.twitter.com/",
      },
    ],
  }];

function HeroFour(props) {
  const theme = useTheme();
  //const { heading } = props;
  SwiperCore.use([Autoplay, Navigation]);
  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      speed={800}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop
    >
      {header.map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            minHeight="85vh"
            width="100%"
            sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(${bgImage})`,

              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              // justifyContent: "center",
              alignItems: { xs: "center", md: "center" },
            }}
          >
            <Container>
              <Grid container item xs={12} lg={7} justifyContent="center" flexDirection="column">
                <Typography variant="h1" color="white">
                  {item.heading}
                </Typography>
                <Typography color="white" sx={{ my: 3 }} variant="subtitle1">
                  {item.shortDescription}
                </Typography>
                <Typography variant="h5" color="white" mt={2} mb={1}>
                  {item.keyword}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.socialIcons.map((socialIcon, index) => (
                    <Box key={index} mr={index !== item.socialIcons.length - 1 ? 1 : 0}>
                      <IconButton
                        aria-label={socialIcon.label}
                        sx={{
                          backgroundColor: theme.palette.background.default,

                          "&:hover": {
                            backgroundColor: theme.palette.background.paper,
                          },
                        }}
                        href={socialIcon.href}
                      >
                        {socialIcon.icon}
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Container>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroFour;
