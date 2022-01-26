// @mui material components
import { useTheme } from "@mui/material/styles";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// Styles must use direct files imports
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module

import { Box, Container, Grid, Icon, IconButton, Typography } from "@mui/material";

function AboutHero(props) {
  const { data } = props;
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
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            minHeight="584px"
            width="100%"
            sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(${item.img})`,

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
                        <Icon
                          baseClassName={socialIcon.baseicon}
                          className={socialIcon.icon}
                          color="primary"
                          fontSize="small"
                        />
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

export default AboutHero;
