
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useRef } from "react";
// typed-js
import * as Typed from "typed.js";

export const Hero = (props) => {
  const theme = useTheme();
  const typedJSRef = useRef(null);
   // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: ["team", "design", "tool"],
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
        backgroundColor: 'background.default',
        py: 15
      }}
      {...props}>
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              order: {
                xs: 2,
                md: 1
              }
            }}
          >
            <div>
              <Typography variant="h3">
              Organic company growth with targeted leads <span ref={typedJSRef} />
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ my: 3 }}
                variant="subtitle1"
              >
                Not just a set of tools, the package includes ready-to-deploy conceptual
                applications written in JavaScript & TypeScript.
              </Typography>
            
                <Button
                  size="large"
                  component="a"
                  variant="contained"
                >
                  Browse Components
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
                md: 2
              }
            }}
          >
            <Box
              sx={{
                position: 'relative',
                pt: 'calc(960 / 1225 * 100%)',
                '& img': {
                  height: 'auto',
                  position: 'absolute',
                  top: 0,
                  width: '100%'
                }
              }}
            >
              <img
                alt="For developers"
                src={`/static/home/developers_${theme.palette.mode}.png`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
