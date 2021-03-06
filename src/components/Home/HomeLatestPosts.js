// @mui material components
import { Box, Button, Container, Grid, Typography } from "@mui/material";

// @mui icons
import { ArrowForward } from "@mui/icons-material";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

import BlogCard from "components/Cards/BlogCard";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function HomeLatestPosts(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",
          }}
        >
          <Typography align="center" color="textPrimary" variant="h2">
            {data.heading}
          </Typography>
          <Button
            size="large"
            component={RouterLink}
            to={data.btnUrl}
            variant={data.btnVariant}
            color={data.btnColor}
            endIcon={<ArrowForward />}
          >
            {data.btnText}
          </Button>
        </Box>

        <Grid sx={{ mt: 2 }} container spacing={3}>
          {data.posts.map((item) => (
            <Grid item key={item.id} md={4} mt={2} xs={12}>
              <BlogCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
HomeLatestPosts.propTypes = {
  data: PropTypes.shape({
    btnColor: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    btnUrl: PropTypes.string.isRequired,
    btnVariant: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    // serviceslist: PropTypes.arrayOf(PropTypes.string),
    // serviceslist: PropTypes.array.isRequired,
    posts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  }).isRequired,
};

export default HomeLatestPosts;
