// @mui material components
import { Container, Grid } from "@mui/material";

// react-router-dom components
import { useParams } from "react-router-dom";

// BlogDetails page components
import BlogDetailsHero from "components/BlogDetails/BlogDetailsHero";
import BlogDetailsContent from "components/BlogDetails/BlogDetailsContent";
import RecentPostsList from "components/BlogDetails/RecentPostsList";

// BlogDetails page data
import BlogsData from "data/Blogs/blogs-data.json";

function BlogDetails() {
  const parameter = useParams();
  const { postId } = parameter;
  const data = BlogsData.filter((blog) => blog.id === postId);

  return (
    <div>
      <BlogDetailsHero />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <BlogDetailsContent data={data[0]} />
          </Grid>
          <Grid item md={4} xs={12}>
            <RecentPostsList data={BlogsData} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default BlogDetails;
