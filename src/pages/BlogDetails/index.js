import BlogDetailsHero from "components/BlogDetails/BlogDetailsHero";
import BlogDetails from "components/BlogDetails/BlogDetails";
import RecentPostsList from "components/BlogDetails/RecentPostsList";

import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
//import RecentPostCard from "components/Cards/RecentPostCard";

import BlogsData from "data/Blogs/blogs-data.json";

function index() {
  const parameter = useParams();
  const postId = parameter.postId;
  const data = BlogsData.filter((blog) => blog.id === postId);

  return (
    <div>
      <BlogDetailsHero />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <BlogDetails data={data[0]} />
          </Grid>
          <Grid item md={4} xs={12}>
            <RecentPostsList data={BlogsData} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default index;
