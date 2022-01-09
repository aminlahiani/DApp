import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';

export const Form7 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          lg={6}
        >
         
          <TextField
         
            fullWidth
            label="Name"
            name="name"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
        >
          
          <TextField
            fullWidth
          
            label="Company"
            name="company"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
        >
         
          <TextField
            fullWidth
            name="email"
            type="email"
            label="Email"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
        >
        
          <TextField
            fullWidth
            name="phone"
            label="Phone"
            required
            type="tel"
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
         
          <TextField
            fullWidth
            name="message"
            label="Message"
            required
            multiline
            rows={6}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3
        }}
      >
        <Button
          color="primary"
          fullWidth
          size="large"
          variant="contained"
        >
          Let&apos;s Talk
        </Button>
      </Box>
      <Typography
        align="center"
        color="textSecondary"
        sx={{ mt: 2 }}
        variant="body2"
      >
        By submitting this, you agree to the
        {' '}
        <Link
          color="textPrimary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Privacy Policy
        </Link>
        {' '}
        and
        {' '}
        <Link
          color="textPrimary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Cookie Policy
        </Link>
        .
      </Typography>
    </form>
  </Box>
);
