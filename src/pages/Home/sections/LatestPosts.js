import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import BlogCard from "components/Cards/BlogCard";

const posts = [
  {
    id: "1",
    author: {
      avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
      name: "Jie Yan Song",
    },
    category: "Programming",
    cover: "/static/mock-images/covers/cover_4.jpeg",

    readTime: "5 min",
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.",
    title: "Scrum Has Hit the Glass Ceiling",
    url : "blog-details",
  },
  {
    id: "2",
    author: {
      avatar: "/static/mock-images/avatars/avatar-omar_darboe.png",
      name: "Omar Darobe",
    },
    category: "Productivity",
    cover: "/static/mock-images/covers/cover_5.jpeg",

    readTime: "6 min",
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.",
    title: "Scrum Has Hit the Glass Ceiling",
    url : "blog-details",
  },
  {
    id: "3",
    author: {
      avatar: "/static/mock-images/avatars/avatar-siegbert_gottfried.png",
      name: "Siegbert Gottfried",
    },
    category: "Entrepreneurs",
    cover: "/static/mock-images/covers/cover_6.jpeg",

    readTime: "3 min",
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.",
    title: "Scrum Has Hit the Glass Ceiling",
    url : "blog-details",
  },
];
const BlogPostCardMediaWrapper = styled("div")({
  paddingTop: "calc(100% * 4 / 4)",
  position: "relative",
});
export const LatestPosts = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.paper",
          py: 3,
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
              Latest Posts
            </Typography>
            <Button size="small" component={RouterLink} to="/blogs" endIcon={<ArrowForward />}>
              Learn more
            </Button>
          </Box>

          <Grid sx={{ mt: 2 }} container spacing={3}>
            {posts.map((post) => (
              <Grid item key={post.id} md={4} mt={2} xs={12}>
            <BlogCard
              category={post.category}
              cover={post.cover}
              title={post.title}
              shortDescription={post.shortDescription}
              url={post.url}
            />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
