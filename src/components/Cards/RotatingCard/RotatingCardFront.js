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
import TeamCardTest from "../TeamCardTest";
import { useTheme } from "@emotion/react";

function RotatingCardFront(props) {
  const theme = useTheme();
  const { data } = props;
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          zIndex: 2,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          //  borderRadius: 2,
          position: "relative",
          backfaceVisibility: "hidden",
        }}
      >
        <TeamCardTest
          avatar="/static/mock-images/avatars/avatar-anika_visser.png"
          commonConnections="UI Designer"
          cover="/static/mock-images/covers/cover_1.jpg"
          name="Anika Visser"
        />
      </Box>
    </>
  );
}

export default RotatingCardFront;
