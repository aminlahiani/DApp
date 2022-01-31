// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// react-router-dom components
import { useParams } from "react-router-dom";

// BlogDetails components
import BlogDetailsHero from "../components/BlogDetails/BlogDetailsHero";
import BlogDetailsContent from "../components/BlogDetails/BlogDetailsContent";
import RecentPostsList from "../components/BlogDetails/RecentPostsList";
import Newsletter from "../components/Newsletter";
import ReactHelmet from "../components/ReactHelmet";

// BlogDetails data
import BlogsData from "../data/Blogs/blogs-data.json";

function BlogDetails() {
  const parameter = useParams();
  const { postId } = parameter;
  const data = BlogsData.filter((blog) => blog.id === postId);

  return (
    <>
      {/* React Helmet : src > components > ReactHelmet  */}
      <ReactHelmet title="Blog Details" />

      {/* Hero Section : src > components > BlogDetails > BlogDetailsHero */}
      <div data-aos="fade-up">
        <BlogDetailsHero />
      </div>

      {/* Blog Details  Section */}
      <div data-aos="fade-up">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              {/* Blog Details Content : src > components > BlogDetails > BlogDetailsContent */}
              <BlogDetailsContent data={data[0]} />
            </Grid>
            <Grid item md={4} xs={12}>
              {/* Recent Posts List : src > components > BlogDetails > RecentPostsList */}
              <RecentPostsList data={BlogsData} />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Newsletter Section : src > components > Newsletter */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default BlogDetails;
