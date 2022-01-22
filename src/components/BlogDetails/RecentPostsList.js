import React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import RecentPostCard from "components/Cards/RecentPostCard";

function RecentPostsList(props) {
  const { data } = props;
  const data1 = [1, 2, 3, 4, 5, 6];
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
