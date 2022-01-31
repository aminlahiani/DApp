// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";

function Newsletter() {
  const theme = useTheme();
  const imgdark = "/static/newsletter/newsletter_dark.svg";
  const imgligth = "/static/newsletter/newsletter_light.svg";
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          justifyContent="space-between"
          spacing={3}
          wrap="nowrap"
        >
          <Grid item md={8} xs={12}>
            <Box
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography color="textPrimary" variant="h4">
                Join the developer list
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                sx={{
                  mb: 3,
                  mt: 1,
                }}
              >
                Subscribe to our newsletter to make sure you don&apos;t miss anything.
              </Typography>
              <TextField
                fullWidth
                label="Email address"
                name="email"
                sx={{ flexGrow: 1 }}
                type="email"
              />
              <Button fullWidth size="large" sx={{ mt: 2 }} variant="contained">
                Subscribe
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                pt: "calc(421 / 472 * 100%)",
                "& img": {
                  height: "auto",
                  position: "absolute",
                  top: 0,
                  width: "100%",
                },
              }}
            >
              <img src={theme.palette.mode === "dark" ? imgdark : imgligth} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Newsletter;
