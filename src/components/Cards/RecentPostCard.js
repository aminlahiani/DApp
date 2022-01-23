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
          <Box
              sx={{ borderRadius: 1 , height: 80 }}
              component="img"
              src="/static/blogs/blog_dark1.png" 
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
    </>
  );
}
export default RecentPostCard;
