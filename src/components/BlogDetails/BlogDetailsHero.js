// @mui material components
import { Box, Typography } from "@mui/material";

// Images
import bgImage from "assets/images/bg_blogdetails.jpg";

function BlogDetailsHero() {
  return (
    <Box
      minHeight="50vh"
      width="100%"
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4),  rgba(0,0,0,0.9)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Typography align="center" variant="h2" color="white">
        Blog Details
      </Typography>
    </Box>
  );
}

export default BlogDetailsHero;
