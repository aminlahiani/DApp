// @mui material components
import { Box, Container, Grid, Typography } from "@mui/material";

import ServiceCardTwo from "components/Cards/ServiceCardTwo";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function HomeServiceList(props) {
  const { data } = props;
  return (
    <Box
      minHeight="584px"
      sx={{
        backgroundColor: "background.paper",
        display: "flex",
        alignItems: "center",
        py: 6,
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
          {data.subHeading}
        </Typography>

        <Grid container spacing={3}>
          {data.services.map((item) => (
            <Grid key={item.id} item xs={12} md={6} lg={4}>
              <ServiceCardTwo data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
HomeServiceList.propTypes = {
  //  data: PropTypes.objectOf(PropTypes.string, PropTypes.array).isRequired,
  data: PropTypes.shape({
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    // serviceslist: PropTypes.arrayOf(PropTypes.string),
    // serviceslist: PropTypes.array.isRequired,
    services: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }).isRequired,
};

export default HomeServiceList;
