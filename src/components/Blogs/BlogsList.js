// @mui material components
import { Box, Container, Grid } from "@mui/material";

import BlogCard from "components/Cards/BlogCard";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function BlogsList(props) {
  const { data } = props;

  return (
    <Box
      minHeight="100%"
      sx={{
        backgroundColor: "background.default",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item key={item.id} md={4} mt={2} xs={12}>
              <BlogCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

BlogsList.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default BlogsList;
