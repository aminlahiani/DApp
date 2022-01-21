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
        height: { xs: nomobileimg ? "80vh" : "100vh", md: "584px" },
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "baseline", md: "center" },
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
              <Typography color="textPrimary" variant="h1">
                {data.heading} <span ref={typedJSRef} />
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                {data.shortDescription}
              </Typography>

              {data.buttons.map((item, index) => (
                <Button
                  key={index}
                  to={item.url}
                  component={RouterLink}
                  size="large"
                  variant={item.variant}
                >
                  {item.text}
                </Button>
              ))}
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
              sx={{
                display: nomobileimg ? { xs: "none", md: "block" } : "block",
                position: "relative",
                pt: "calc(960 / 1225 * 100%)",
                "& img": {
                  height: "auto",
                  position: "absolute",
                  top: 0,
                  width: "100%",
                },
              }}
            >
              <img
                alt="For developers"
                src={theme.palette.mode === "dark" ? data.imgdark : data.imagesrc}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ServisesHero;
