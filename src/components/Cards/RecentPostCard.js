import { Box, Card, CardMedia, Chip, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
function RecentPostCard(props) {
  const { data } = props;
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          pt: 3,
        }}
      >
        <Card>
          <CardMedia image={data.cover} sx={{ height: 80, width: 80 }} />
        </Card>
        <Box sx={{ ml: 2 }}>
          <Link component={RouterLink} to={`/blog-details/${data.id}`} underline="hover">
            <Typography color="textPrimary">{data.title}</Typography>
          </Link>
          <Typography variant="subtitle1" color="textSecondary">
            By {data.authorname} • {data.publishedAt}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default RecentPostCard;
