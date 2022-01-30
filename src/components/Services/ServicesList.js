// @mui material components
import { Box, Container, Grid, Typography } from "@mui/material";

import ServiceCardOne from "components/Cards/ServiceCardOne";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function ServicesList(props) {
  const { data } = props;
  return (
    <Box
      minHeight="584px"
      sx={{
        backgroundColor: "background.paper",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography align="center" color="textPrimary" variant="h4">
          {data.heading}
        </Typography>

        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ pt: 0, pb: 6 }}>
          {data.shortDescription}
        </Typography>

        <Grid container spacing={3}>
          {data.serviceslist.map((item) => (
            <Grid key={item.id} item xs={12} md={6} lg={4}>
              <ServiceCardOne data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ServicesList.propTypes = {
//   data: PropTypes.objectOf(PropTypes.string, PropTypes.array).isRequired,
// };
ServicesList.propTypes = {
  //  data: PropTypes.objectOf(PropTypes.string, PropTypes.array).isRequired,
  data: PropTypes.shape({
    heading: PropTypes.string,
    shortDescription: PropTypes.string,
    // serviceslist: PropTypes.arrayOf(PropTypes.string),
    // serviceslist: PropTypes.array.isRequired,

    serviceslist: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }).isRequired,
};
export default ServicesList;
