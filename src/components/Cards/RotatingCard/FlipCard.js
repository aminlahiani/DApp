import { Box } from "@mui/material";
import React from "react";

function FlipCard() {
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        height: 300,
        width: 300,
        perspective: "1000px",
        "&:hover .flip-card-inner": {
          transform: "rotateY(180deg)",
        },
      }}
    >
      <Box
        className={"flip-card-inner"}
        sx={{
          position: "relative",
          height: 1,
          width: 1,
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: 1,
            width: 1,
            backfaceVisibility: "hidden",
            backgroundColor: "#bbb",
            color: "black",
          }}
        >
          aaaaa
        </Box>
        <Box
          sx={{
            position: "absolute",
            height: 1,
            width: 1,
            backfaceVisibility: "hidden",
            backgroundColor: "#2980b9",
            color: "white",
            transform: "rotateY(180deg)",
          }}
        >
          bbbb
        </Box>
      </Box>
    </Box>
  );
}

export default FlipCard;
