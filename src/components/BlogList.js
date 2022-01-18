import { Box, Container, Grid } from "@mui/material";
import BlogsData from "data/blog/blogs-data.json";
import BlogCard from "components/Cards/BlogCard";
import deAT from "date-fns/esm/locale/de-AT/index.js";

function BlogList(props) {
  const { data } = props;
  console.log(BlogsData.map((item) => item.cover));
  return (
    <Box
      minHeight="100%"
      sx={{
        backgroundColor: "background.default",
        py: 4,
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
