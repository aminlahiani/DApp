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
import { useTheme } from "@emotion/react";

function RotatingCardBack(props) {
  const theme = useTheme();
  const { data } = props;
  return (
    <>
      <Box
        // zIndex={5}
        //  position="absolute"
        //backfaceVisibility ="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          //  borderRadius :1 ,
          top: 0,
          left: 0,
          zIndex: 5,
          width: "100%",
          height: "100%",
          // position: "absolute",
          background: theme.palette.primary.mainGradient,
          // backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(/static/mock-images/covers/cover_2.jpg)`,

          position: "absolute",

          // backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7),  rgba(0,0,0,0.9)), url(/static/mock-images/covers/cover_2.jpg)`,

          backgroundSize: "cover",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <Box>
          <Typography align="center" variant="h5" color="textSecondary">
            JS Developer
          </Typography>
          <Typography align="center" variant="subtitle1" color="textSecondary">
            Artist is a term applied to a Artist is a term applied to a Artist is a term applied to
            a Artist is a term applied to a
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default RotatingCardBack;
