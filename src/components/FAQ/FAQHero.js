
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// typed-js
import * as Typed from "typed.js";

function FAQHero(props) {
  const { data } = props;
  const theme = useTheme();
  const typedJSRef = useRef(null);
  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: data.headingtypedJS,
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
    return () => typedJS.destroy();
  }, []);
  return (
    <Box
      sx={{
        background: theme.palette.primary.mainGradient,
        py: 2,
        height: { xs: "25vh", md: "50vh" },

        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "baseline", md: "center" },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography align="center" variant="h1" color="textPrimary">
          {data.heading}
        </Typography>
        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ pt: 3 }}>
          {data.shortDescription}
          <span ref={typedJSRef} />
        </Typography>
      </Container>
    </Box>
  );
}

export default FAQHero;
