import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Header1 = (props) => {
 

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        mt : 7
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
                  color="textPrimary"
                variant="h1"
              >
                Analytics
              </Typography>
              <Typography
                  color="textPrimary"
                variant="h2"
              >
                Analytics
              </Typography>
              <Typography
                  color="textPrimary"
                variant="h3"
              >
                Analytics
              </Typography>
           <Typography
                color="textPrimary"
                variant="h5"
              >
                Analytics
              </Typography>
        <Typography
          color="primary"
          variant="overline"
        >
          Introducing
        </Typography>
        <Typography
                color="textPrimary"
                variant="h5"
              >
                Analytics
              </Typography>
        <Typography variant="h4">
                  Good Morning
                </Typography>
        <Typography
          align="center"
          variant="h1"
          color="textPrimary"
        >
          Material Kit Pro v5.0
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
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
