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
    authorname: " Siegbert Gottfried",
    category: "Programming",
    cover: "/static/mock-images/covers/cover_4.jpeg",

    readTime: "5 min",
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.",
    title: "Scrum Has Hit the Glass Ceiling",
    url: "blog-details",
  },
  {
    id: "2",
    authorname: " Siegbert Gottfried",

    category: "Productivity",
    cover: "/static/mock-images/covers/cover_5.jpeg",

    readTime: "6 min",
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.",
    title: "Scrum Has Hit the Glass Ceiling",
    url: "blog-details",
  },
  {
    id: "3",
    authorname: " Siegbert Gottfried",
    category: "Entrepreneurs",
    cover: "/static/mock-images/covers/cover_6.jpeg",

    readTime: "3 min",
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.",
    title: "Scrum Has Hit the Glass Ceiling",
    url: "blog-details",
  },
];

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
            {posts.map((post, index) => (
              <Grid item key={index} md={4} mt={2} xs={12}>
                <BlogCard data={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
