import { ArrowForward } from "@mui/icons-material";
import {
  Avatar,
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
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function BlogCard(props) {
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
          image={data.cover}
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
          image={data.cover}
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
}

BlogCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default BlogCard;
