import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const HomeHero = (props) => {
  const theme = useTheme();

  return (
    
    <Box
    // style={{  background : "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}
      style={{ background: theme.palette.primary.mainGradient }}
      sx={{
       // background: 'gradient.main',
       //  background : "linear-gradient(to bottom, #fff , #eee )",

     // background : "linear-gradient(to bottom, #111827 , #0B0F19 )",
     //   background : "primary.mainGradient",
        py: 15
      }}>
        <Container>
     <Grid container >
       <Grid item md={6} xs={12}>

    
       
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          A digital agency.
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          variant="subtitle1"
          sx={{ py: 3 }}
        >
            Welcome to our React Digital  Agency LAnding page   Welcome to our React Digital  Agency LAnding page
        </Typography>
       
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
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
            href="/#contact"
              component="a"
              size="large"
              variant="contained"
            >
              Contact Us
            </Button>
          
        </Box>
     
       </Grid>
       <Grid item md={6} xs={12}>
       <Box
        sx={{
          position: 'relative',
       
            display: { xs: "none" , md:"block" },
        
          mr: 4,
          width: 200,
          height: 200,
          '& img': {
            height: 350,
            width: 'auto',
            position: 'absolute',
          }
        }}
      >
        <img
          alt=""
          src="/static/banner-illustration.png"
        />
      </Box>
       </Grid>
     </Grid>
   
     </Container>
    
    </Box>
  );
};
