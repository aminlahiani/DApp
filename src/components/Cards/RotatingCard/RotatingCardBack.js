import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Link,
  Typography,
} from "@mui/material";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function RotatingCardBack(props) {
  const { data } = props;
  return (
    <>
      <Box
       zIndex={5}
        // position="absolute"
        //backfaceVisibility ="hidden"
        sx={{
          // position: "absolute",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(/static/mock-images/covers/cover_2.jpg)`,

          backgroundSize: "cover",
          // backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <Box>
          <Typography align="center" variant="body2" color="textSecondary">
            Anika Visser
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default RotatingCardBack;
