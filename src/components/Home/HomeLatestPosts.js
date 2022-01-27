import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { ArrowForward } from "@mui/icons-material";

import BlogCard from "components/Cards/BlogCard";

function HomeLatestPosts(props) {
  const { data } = props;
  return (
    <>
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
            {data.posts.map((post, index) => (
              <Grid item key={index} md={4} mt={2} xs={12}>
                <BlogCard data={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
export default HomeLatestPosts;
