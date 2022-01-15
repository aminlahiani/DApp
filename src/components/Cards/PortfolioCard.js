import { Box, Card, CardMedia, Chip, Link, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
function PortfolioCard(props) {
  const { cover, category, title, shortDescription, url } = props;
  return (
    <Card
      sx={{
        height: "100%",
        p: 2,
      }}
    >
      <Box sx={{ paddingTop: "calc(100% * 4 / 4)", position: "relative" }}>
        <CardMedia
          image={cover}
          sx={{
            height: "100%",
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <div>
          <Chip label={category} variant="outlined" />
        </div>

        <Link component={RouterLink} to={url} variant="h5">
          {title}
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
          {shortDescription}
        </Typography>
      </Box>
    </Card>
  );
}
PortfolioCard.propTypes = {
  cover: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PortfolioCard;
