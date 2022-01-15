import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const AboutUs = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        py: 4
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
              <Typography color="textPrimary" variant="h3">
              About Us
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ my: 3 }}
                variant="subtitle1"
              >
                Not just a set of tools, the package includes ready-to-deploy conceptual
                applications written in JavaScript & TypeScript.
              </Typography>
             
                
                <Grid container spacing={3}>
                  <Grid item   md={6}
            xs={12} >
 <Typography  color="textPrimary"variant="h3">
 Who are we?
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ my: 3 }}
                variant="subtitle1"
              >
                Not just a set of tools, the package includes ready-to-deploy conceptual
                applications written in JavaScript & TypeScript.
              </Typography>
                  </Grid>
                  <Grid item   md={6}
            xs={12}>
                   <Typography color="textPrimary" variant="h3">
                   Our story
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ my: 3 }}
                variant="subtitle1"
              >
                Not just a set of tools, the package includes ready-to-deploy conceptual
                applications written in JavaScript & TypeScript.
              </Typography>
                    </Grid>
                </Grid>
             
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
