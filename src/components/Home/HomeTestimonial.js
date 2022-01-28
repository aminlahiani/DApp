// @mui material components
import { Avatar, Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// swiper bundle styles
import "swiper/css/bundle";

// swiper core styles
import "swiper/css";

// modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function HomeTestimonial(props) {
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
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              backgroundColor: "#132F4C",
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
              <Typography align="center" color="white" variant="h3">
                &quot;{item.testimonial}.&quot;
              </Typography>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  mt: 3,
                }}
              >
                <Avatar src={item.avatar} sx={{ mr: 2 }} variant="rounded" />
                <div>
                  <Typography color="white" variant="h6">
                    {item.name}
                  </Typography>
                  <Typography color="white" variant="body2">
                    {item.designation}
                  </Typography>
                </div>
              </Box>
            </Container>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default HomeTestimonial;
