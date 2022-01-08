
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const AboutDevelopers = (props) => {
  const theme = useTheme();

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
          
          >
            <div>
              <Typography color="textPrimary" variant="h3">
                For Developers
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ my: 3 }}
                variant="subtitle1"
              >
               
              
                We are a team of creative consultants who help bridge the 
                digital gap between companies and their clients with websites
                 that not only serve as marketing platforms but also provide
                  solutions to online business problems and digital marketing strategies that connect 
                you with the ideal client and help create a loyal customer.
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ my: 3 }}
                variant="subtitle1"
              >
               
              
                We are a team of creative consultants who help bridge the 
                digital gap between companies and their clients with websites
                 that not only serve as marketing platforms but also provide
                  solutions to online business problems and digital marketing strategies that connect 
                you with the ideal client and help create a loyal customer.
              </Typography>
              
            </div>
          </Grid>
          <Grid
            item
            md={6}
            sm={8}

           
          >
            <Box
              sx={{
                position: 'relative',
                pt: 'calc(960 / 1225 * 100%)',
                '& img': {
                  height: 'auto',
                  position: 'absolute',
                  top: 0,
                  width: '80%'
                }
              }}
            >
              <img
                alt="For developers"
                src="/static/about/drawkit-illustration1.svg"
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}>
                 <Typography color="textPrimary" variant="h3">
                For Developers
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ my: 3 }}
                variant="subtitle1"
              >
               
              
                We are a team of creative consultants who help bridge the 
                digital gap between companies and their clients with websites
                 that not only serve as marketing platforms but also provide
                  solutions to online business problems and digital marketing strategies that connect 
                you with the ideal client and help create a loyal customer.
              </Typography>
            </Grid>
            <Grid
            item
            md={6}
            xs={12}>
                 <Typography color="textPrimary" variant="h3">
                For Developers
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ my: 3 }}
                variant="subtitle1"
              >
               
              
                We are a team of creative consultants who help bridge the 
                digital gap between companies and their clients with websites
                 that not only serve as marketing platforms but also provide
                  solutions to online business problems and digital marketing strategies that connect 
                you with the ideal client and help create a loyal customer.
              </Typography>
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
