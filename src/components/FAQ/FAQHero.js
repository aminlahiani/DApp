import { useEffect, useRef } from "react";

// @mui material components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";

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
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
