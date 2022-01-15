import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Chip,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";


function PortfolioCard() {
  return (
    <Card
      sx={{
        height: "100%",
        p: 2,
      }}
    >
      <Box sx={{ paddingTop: "calc(100% * 4 / 4)", position: "relative" }}>
        <CardMedia
          image={post.cover}
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
          <Chip label={post.category} variant="outlined" />
        </div>

        <Link href="portfolio-deatils" variant="h5">
          {post.title}
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
          {post.shortDescription}
        </Typography>
      </Box>
    </Card>
  );
}

export default PortfolioCard;
