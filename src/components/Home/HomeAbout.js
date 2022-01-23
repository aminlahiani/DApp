import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function HomeAbout(props) {
  const { data } = props;
  const theme = useTheme();

  return (
    <Box
      minHeight="584px"
      sx={{
        backgroundColor: "background.default",

        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "center", md: "center" },
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              order: {
                xs: 2,
                md: 1,
              },
            }}
          >
            <div>
              <Typography color="textPrimary" variant="h3">
                {data.heading}
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                {data.shortDescription}
              </Typography>

              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Typography color="textPrimary" variant="h3">
                    {data.heading2}
                  </Typography>
                  <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                    {data.shortDescription2}
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography color="textPrimary" variant="h3">
                    {data.heading3}
                  </Typography>
                  <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                    {data.shortDescription3}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            sx={{
              order: {
                xs: 1,
                md: 2,
              },
            }}
          >
            <Box
              sx={{ borderRadius: 3 }}
              component="img"
              src={theme.palette.mode === "light" ? data.imglight : data.imgdark}
              alt="macbook"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeAbout;
