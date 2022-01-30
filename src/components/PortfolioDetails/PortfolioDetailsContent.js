// @mui material components
import { Container, Box, Grid, Typography } from "@mui/material";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function PortfolioDetailsContent(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: 3,
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

        <Typography variant="h3" mt={3} color="textPrimary" mb={3}>
          {data.title}
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraphOne}
        </Typography>

        <Grid container spacing={5} mt={3}>
          <Grid xs={12} lg={6} item>
            <Box
              sx={{ borderRadius: 3 }}
              component="img"
              src={data.imageOne}
              alt="macbook"
              width="100%"
            />
          </Grid>
          <Grid xs={12} lg={6} item>
            <Box
              sx={{ borderRadius: 3 }}
              component="img"
              src={data.imageTwo}
              alt="macbook"
              width="100%"
            />
          </Grid>
        </Grid>
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

PortfolioDetailsContent.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default PortfolioDetailsContent;
