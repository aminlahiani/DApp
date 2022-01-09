import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const AboutHero1 = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
         background: theme.palette.primary.mainGradient ,
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
            <Typography color="textPrimary" variant="h1">
              Talk to our account expert
            </Typography>
            <Typography
              sx={{ py: 3 }}
              variant="body1"
              color="textSecondary"
         
            >
              Have questions about integrating our APIs? Fill out the form
              and a senior web expert will be in touch shortly.
            </Typography>
            <Typography
              sx={{ color: 'primary.main' }}
              variant="h6"
            >
              Join 3,000+ forward-thinking companies:
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
