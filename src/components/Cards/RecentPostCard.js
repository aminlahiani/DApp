// @mui material components
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

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

export default RecentPostCard;
