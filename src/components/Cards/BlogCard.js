// @mui material components
import { Box, Button, Card, CardMedia, Chip, Link, Stack, Typography } from "@mui/material";

// @mui icons
import { ArrowForward } from "@mui/icons-material";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

const BlogCard = (props) => {
  const { data } = props;

  return (
    <Card
      sx={{
        height: "100%",
        p: 2,
        overflow: "visible",
        borderRadius: 2,
        transition: ".3s all",
        "&:hover": {
          boxShadow: 20,
          transform: "translateY(-12px)",
        },
      }}
    >
      <Box sx={{ paddingTop: "calc(100% * 4 / 4)", position: "relative" }}>
        <CardMedia
          image={data.image}
          sx={{
            height: "100%",
            position: "absolute",
            top: -30,
            zIndex: 1,
            width: "100%",
            borderRadius: 2,
            boxShadow: 15,
          }}
        />
        <CardMedia
          image={data.image}
          sx={{
            height: "100%",
            position: "absolute",
            top: -25,
            zIndex: 0,
            width: "100%",
            borderRadius: 2,
            boxShadow: 15,
            filter: "blur(12px)",
          }}
        />
      </Box>
      <Stack justifyContent={"space-between"} spacing={2}>
        <Box>
          <Box mb={1}>
            <Chip label={data.category} variant="outlined" />
            <Box sx={{ mt: 2, ml: 2 }}>
              <Typography variant="subtitle2" color="textSecondary">
                By {data.authorname} • {data.publishedAt}
              </Typography>
            </Box>
          </Box>

          <Link
            component={RouterLink}
            to={`/blog-details/${data.id}`}
            variant="h5"
            sx={{ cursor: "pointer" }}
          >
            {data.title}
          </Link>
          <Typography
            color="textSecondary"
            sx={{
              height: 72,
              mt: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
            variant="body1"
          >
            {data.shortDescription}
          </Typography>
        </Box>
        <Button
          component={RouterLink}
          to={`/blog-details/${data.id}`}
          size="small"
          endIcon={<ArrowForward />}
        >
          Learn more
        </Button>
      </Stack>
    </Card>
  );
};

export default BlogCard;
