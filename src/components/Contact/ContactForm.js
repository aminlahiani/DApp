// @mui material components
import { Box, Button, Grid, Link, TextField, Typography, Container } from "@mui/material";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function ContactForm(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Typography color="textPrimary" variant="h3" align="center">
          {data.heading}
        </Typography>
        <Typography sx={{ py: 3, pb: 6 }} variant="body1" color="textSecondary" align="center">
          {data.shortDescription}
        </Typography>
        <form onSubmit={(event) => event.preventDefault()}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth label="Name" name="name" required />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth label="Company" name="company" required />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth name="email" type="email" label="Email" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth name="phone" label="Phone" required type="tel" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth name="message" label="Message" required multiline rows={6} />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button color="primary" fullWidth size="large" variant="contained">
              Let&apos;s Talk
            </Button>
          </Box>
          <Typography align="center" color="textSecondary" sx={{ mt: 2 }} variant="body2">
            {data.msg}
          </Typography>
        </form>
      </Container>
    </Box>
  );
}

export default ContactForm;
