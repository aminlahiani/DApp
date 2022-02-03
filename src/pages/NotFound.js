import { useTheme } from "@emotion/react";
import { Button, Typography, Box, Container, useMediaQuery } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

// images
import error404 from "../assets/images/error404.png";

function NotFound() {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: "background.paper",
        display: "flex",
        minHeight: "100%",
        px: 3,
        py: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Typography align="center" color="textPrimary" variant={mobileDevice ? "h4" : "h1"}>
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align="center" color="textSecondary" sx={{ mt: 0.5 }} variant="subtitle2">
          You either tried some shady route or you came here by mistake. Whichever it is, try using
          the navigation.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
          }}
        >
          <Box
            alt="not-found"
            component="img"
            src={error404}
            sx={{
              height: "auto",
              maxWidth: "100%",
              width: 400,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
          }}
        >
          <Button color="primary" component={Link} to="/" variant="outlined">
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default NotFound;
