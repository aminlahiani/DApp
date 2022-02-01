// @mui material components
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

// @fortawesome react-fontawesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// Styles must use direct files imports
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module

function AboutHero(props) {
  const { data } = props;
  const theme = useTheme();
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
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Box
            minHeight="584px"
            width="100%"
            sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
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
                <Typography variant="h5" color="white" mt={2} mb={1.5}>
                  {item.keyword}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.socialIcons.map((socialIcon) => (
                    <Box
                      key={socialIcon.id}
                      mr={socialIcon.id !== item.socialIcons.length - 1 ? 1 : 0}
                    >
                      <IconButton
                        aria-label={socialIcon.label}
                        target="_blank"
                        sx={{
                          backgroundColor: theme.palette.background.default,

                          "&:hover": {
                            backgroundColor: theme.palette.background.paper,
                          },
                        }}
                        href={socialIcon.href}
                      >
                        <FontAwesomeIcon
                          icon={[`${socialIcon.baseicon}`, `${socialIcon.icon}`]}
                          color={theme.palette.primary.main}
                          size="sm"
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
