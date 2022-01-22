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
      }}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container justifyContent="center" spacing={3}>
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
            sm={8}
            xs={12}
            sx={{
              order: {
                xs: 1,
                md: 2,
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                pt: "calc(960 / 1225 * 100%)",
                "& img": {
                  height: "auto",
                  position: "absolute",
                  top: 0,
                  width: "100%",
                },
              }}
            >
              <img alt="For developers" src={data.imgsrc} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeAbout;