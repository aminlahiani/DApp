// @mui material components
import { Container, Typography, Box } from "@mui/material";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function ServiceDetailsContent(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{ pt: 3, borderRadius: 3 }}
          component="img"
          src={data.image}
          alt="macbook"
          width="100%"
        />

        <Typography
          color="textPrimary"
          sx={{
            fontWeight: "fontWeightBold",
            mt: 3,
          }}
          variant="h2"
        >
          {data.title}
        </Typography>

        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.shortDescriptionFront}
        </Typography>

        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.shortDescriptionBack}
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraphOne}
        </Typography>
        <Typography color="textPrimary" sx={{ mt: 3 }} variant="h4">
          {data.subtitle}
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraphTwo}
        </Typography>
      </Container>
    </Box>
  );
}

ServiceDetailsContent.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default ServiceDetailsContent;
