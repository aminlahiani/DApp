// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function AboutTestimonial(props) {
  const { data } = props;

  return (
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
          &quot;{data.testimonial}&quot;
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
              {data.designation}
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
}

AboutTestimonial.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
  }).isRequired,
};
export default AboutTestimonial;
