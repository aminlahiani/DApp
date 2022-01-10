import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export const Testimonial = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        py: 15  
      }}
      {...props}>
      <Container
        maxWidth="md"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
       
        <Typography
          align="center"
          variant="h1"
          color="primary.contrastText"
        >
          Material Kit Pro v5.0
        </Typography>
        <Typography
          align="center"
          color="primary.contrastText"
          variant="subtitle1"
          sx={{ py: 3 }}
        >
          A professional kit that comes with ready-to-use MUI© components developed with one
          common goal in mind, help you build faster &amp; beautiful applications.
        </Typography>
      
      </Container>
    
     
    </Box>
  );
};
