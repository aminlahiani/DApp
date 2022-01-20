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

function RotatingCardFront(props) {
  const { data } = props;
  return (
    <>
      <Box
        //
        display="flex"
        justifyContent="center"
        alignContent="center"
        borderRadius="lg"
        position="relative"
        zIndex={2}
        backfaceVisibility="hidden"
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(/static/mock-images/covers/cover_2.jpg)`,

          backfaceVisibility: "hidden",
          backgroundSize: "cover",
        }}
      >
        <Box>
          <Typography align="center" variant="body2" color="textSecondary">
            Anika Visser1
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default RotatingCardFront;
