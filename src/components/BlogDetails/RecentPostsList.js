// @mui material components
import { Box, Typography } from "@mui/material";

import RecentPostCard from "components/Cards/RecentPostCard";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

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

RecentPostsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
export default RecentPostsList;
