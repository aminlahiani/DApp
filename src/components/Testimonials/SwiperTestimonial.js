import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// Styles must use direct files imports
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module
export const SwiperTestimonial = (props) => {
  const { data } = props;
  const theme = useTheme();
  const data = [1, 2, 3];
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
                &quot;{data.testimonial}.&quot;
              </Typography>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  mt: 3,
                }}
              >
                <Avatar src={data.avatar} sx={{ mr: 2 }} variant="rounded" />
                <div>
                  <Typography color="white" variant="h6">
                    {data.name}
                  </Typography>
                  <Typography color="white" variant="body2">
                    {data.role}
                  </Typography>
                </div>
              </Box>
            </Container>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
