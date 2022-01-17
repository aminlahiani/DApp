import { Box, Container, Grid, Typography } from "@mui/material";
import BlogsData from "data/blog/blogs-data.json";
import BlogCard from "components/Cards/BlogCard";



export const BlogList = () => {
  console.log(BlogsData.map(item => ( item.cover)));
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 6,
      }}
    >
      <Container>
        <Typography align="center" color="textPrimary" variant="h4">
          Build accessible React apps with speed
        </Typography>

        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ py: 3 }}>
          Build a beautiful, modern website with flexible, fully customizable, atomic MUI Components
        </Typography>

         <Grid container spacing={3}>
          {BlogsData.map((item, index) => (
            <Grid item key={index} md={4} mt={2} xs={12}>
              <BlogCard data={item} />
            </Grid>
          ))}
        </Grid> 
      </Container>
    </Box>
  );
};
