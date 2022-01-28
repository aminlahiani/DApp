// @mui material components
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

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
                {data.headingOne}
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                {data.shortDescriptionOne}
              </Typography>

              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Typography color="textPrimary" variant="h3">
                    {data.headingTow}
                  </Typography>
                  <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                    {data.shortDescriptionTwo}
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography color="textPrimary" variant="h3">
                    {data.headingThree}
                  </Typography>
                  <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                    {data.shortDescriptionThree}
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
              src={theme.palette.mode === "light" ? data.image : data.imageDark}
              alt="macbook"
              height="100%"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
HomeAbout.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default HomeAbout;
