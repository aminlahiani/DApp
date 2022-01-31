// @mui material components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Images
import bgImage from "../../assets/images/bg_blogdetails.jpg";

function BlogDetailsHero() {
  return (
    <Box
      minHeight="50vh"
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
