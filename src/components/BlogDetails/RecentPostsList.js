// @mui material components
import { Box, Typography } from "@mui/material";

import RecentPostCard from "components/Cards/RecentPostCard";

function RecentPostsList(props) {
  const { data } = props;

  return (
    <Box pt={3}>
      <Typography variant="h6" color="textPrimary">
        Recent Posts
      </Typography>

      {data.map((item, index) => (
        <RecentPostCard key={index} data={item} />
      ))}
    </Box>
  );
}

export default RecentPostsList;
