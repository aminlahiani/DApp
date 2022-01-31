// @mui material components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// react-router-dom components
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

export default PortfolioCard;
