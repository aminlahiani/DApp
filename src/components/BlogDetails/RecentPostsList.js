// @mui material components
import { Box, Typography } from "@mui/material";

import RecentPostCard from "../Cards/RecentPostCard";

function RecentPostsList(props) {
  const { data } = props;

  return (
    <Box pt={3}>
      <Typography variant="h6" color="textPrimary">
        Recent Posts
      </Typography>

      {data.map((item) => (
        <RecentPostCard key={item.id} data={item} />
      ))}
    </Box>
  );
}

export default RecentPostsList;
