// @mui material components
import { Box, Container, Grid, Typography } from "@mui/material";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function AboutTwo(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container justifyContent="center" spacing={3}>
          {data.map((item) => (
            <Grid key={item.id} item md={6} xs={12}>
              <Typography color="textPrimary" variant="h2">
                {item.heading}
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                {item.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

AboutTwo.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default AboutTwo;
