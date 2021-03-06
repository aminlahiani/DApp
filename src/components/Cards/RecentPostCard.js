// @mui material components
import { Box, Link, Typography } from "@mui/material";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function RecentPostCard(props) {
  const { data } = props;

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        pt: 3,
      }}
    >
      <Box
        sx={{ borderRadius: 1, height: 80 }}
        component="img"
        src={data.image}
        alt="macbook"
        width="80"
      />

      {/* <Card>
          <CardMedia image="/static/blogs/blog_dark.png" sx={{ height: 80, width: 80 }} />
        </Card> */}
      <Box sx={{ ml: 2 }}>
        <Link component={RouterLink} to={`/blog-details/${data.id}`} underline="hover">
          <Typography color="textPrimary">{data.title}</Typography>
        </Link>
        <Typography variant="subtitle1" color="textSecondary">
          By {data.authorname} • {data.publishedAt}
        </Typography>
      </Box>
    </Box>
  );
}
RecentPostCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default RecentPostCard;
