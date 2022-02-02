// @mui material components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// @mui icons
import { ArrowForward } from "@mui/icons-material";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

// Blog Card components
import BlogCard from "../Cards/BlogCard";

function HomeLatestPosts(props) {
  const { data } = props;
  return (
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
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography align="center" color="textPrimary" variant="h2">
            Latest Posts
          </Typography>
          <Button
            size="large"
            component={RouterLink}
            to="/blogs"
            variant="outlined"
            color="primary"
            endIcon={<ArrowForward />}
          >
            View All
          </Button>
        </Box>
        <Grid sx={{ mt: 2 }} container spacing={3}>
          {data.slice(0, 3).map((item) => (
            <Grid item key={item.id} md={4} mt={2} xs={12}>
              {/* BlogCard : src > components > Cards > BlogCard */}
              <BlogCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeLatestPosts;
