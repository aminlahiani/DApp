import { Box, Container, Grid } from "@mui/material";

import BlogCard from "components/Cards/BlogCard";


function BlogList(props) {
  const { data } = props;

  return (
    <Box
      minHeight="100%"
      sx={{
        backgroundColor: "background.default",
        py: 6
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid item key={index} md={4} mt={2} xs={12}>
              <BlogCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default BlogList;
