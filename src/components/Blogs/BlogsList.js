// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Blog Card
import BlogCard from "../Cards/BlogCard";

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

export default BlogsList;
