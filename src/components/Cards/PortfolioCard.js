import { Box, Card, CardMedia, Chip, Link, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

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
          image={data.cover}
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

        <Link component={RouterLink} to={data.url} variant="h5">
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

export default PortfolioCard;
