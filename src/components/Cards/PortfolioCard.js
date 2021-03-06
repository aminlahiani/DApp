// @mui material components
import { Box, Card, CardMedia, Chip, Link, Typography } from "@mui/material";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function PortfolioCard(props) {
  const { data } = props;

  return (
    <Card
      sx={{
        height: "100%",
        p: 2,
      }}
    >
      <Box sx={{ paddingTop: "calc(100% * 4 / 4)", position: "relative" }}>
        <CardMedia
          image={data.image}
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
          <Chip label={data.category} variant="outlined" />
        </div>

        <Link component={RouterLink} to={`/portfolio-deatils/${data.id}`} variant="h5">
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
    </Card>
  );
}
PortfolioCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default PortfolioCard;
