// @mui material components
import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// typed-js
import * as Typed from "typed.js";

function ServisesHero(props) {
  const { data, nomobileimg } = props;
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
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        background: theme.palette.primary.mainGradient,
        minHeight: "584px",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "baseline", md: "center" },
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container justifyContent="center" spacing={3}>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              order: {
                xs: 2,
                md: 1,
              },
            }}
          >
            <div>
              <Typography
                textAlign={{ xs: "center", md: "start" }}
                color="textPrimary"
                variant="h1"
              >
                {data.heading}{" "}
                <Box ref={typedJSRef} component="span" sx={{ color: "primary.main" }} />
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                {data.subHeding}
              </Typography>
              <Button
                to={data.btnUrl}
                component={RouterLink}
                size="large"
                variant={data.btnVariant}
                fullWidth
              >
                {data.btnText}
              </Button>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            sm={8}
            xs={12}
            sx={{
              order: {
                xs: 1,
                md: 2,
              },
            }}
          >
            <Box
              sx={{ display: nomobileimg ? { xs: "none", md: "block" } : "block" }}
              component="img"
              src={theme.palette.mode === "light" ? data.image : data.imageDark}
              alt="macbook"
              height="100%"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ServisesHero;
