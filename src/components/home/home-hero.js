import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const HomeHero1 = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
         background: theme.palette.primary.mainGradient ,
        py: 8
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
              <Typography  color="textPrimary"  
          variant="h1" >
               Digital Agency UI React template with MUI
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ my: 3 }}
                variant="subtitle1"
              >
                Not just a set of tools, the package includes ready-to-deploy conceptual
                applications written in JavaScript & TypeScript.
              </Typography>
              <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            
            mx: -1,
            mt: 2,
            mb: 6,
            '& > a': {
              m: 1
            }
          }}
        >
              <Button
            href="/#about"
              component="a"
              size="large"
              variant="outlined"
            >
              About Us
            </Button>
       
                <Button
                  size="large"
                  component="a"
                  variant="contained"
                >
                  Contact Us
                </Button>
              </Box>
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
                display: { xs: "none" , md:"block" },
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
                src={`/static/contact/undraw_contact_us.svg`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
