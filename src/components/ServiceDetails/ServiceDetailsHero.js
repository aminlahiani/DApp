// @mui material components
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// image
import bgImage from "assets/images/bg_servicedetails.jpg";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function ServiceDetailsHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4),  rgba(0,0,0,0.9)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "50vh",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Container maxWidth="md">
        <Typography align="center" variant="h2" color="white">
          Service Details
        </Typography>
      </Container>
    </Box>
  );
}
export default ServiceDetailsHero;
