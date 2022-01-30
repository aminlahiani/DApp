// @mui material components
import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function HomeHero(props) {
  const { nomobileimg, data } = props;
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: theme.palette.primary.mainGradient,
        minHeight: "584px",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "center", md: "center" },
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container justifyContent="center" spacing={5}>
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
              <Typography
                variant="h1"
                color="textPrimary"
                textAlign={{ xs: "center", md: "start" }}
              >
                {data.headingPartOne}
                <Box component="span" sx={{ color: "primary.main", display: "block" }}>
                  {data.hedingPartTwo}
                </Box>
                {data.hedinPartThree}
              </Typography>

              <Typography
                color="textSecondary"
                textAlign={{ xs: "center", md: "start" }}
                variant="subtitle1"
              >
                {data.subHeading}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",

                  mx: -1,
                  mt: 2,
                  mb: 6,
                  "& > a": {
                    m: 1,
                  },
                }}
              >
                <Button
                  to={data.btnOneUrl}
                  component={RouterLink}
                  size="large"
                  variant={data.btnOneVariant}
                  fullWidth={isXs}
                  color={data.btnOneColor}
                >
                  {data.btnOneText}
                </Button>
                <Button
                  to={data.btnTwoUrl}
                  component={RouterLink}
                  size="large"
                  variant={data.btnTwoVariant}
                  fullWidth={isXs}
                  color={data.btnTwoColor}
                >
                  {data.btnTwoText}
                </Button>
              </Box>
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
              sx={{ display: nomobileimg ? { xs: "none", md: "block" } : "block" }}
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
HomeHero.defaultProps = {
  nomobileimg: false,
};

HomeHero.propTypes = {
  data: PropTypes.PropTypes.shape({
    btnOneColor: PropTypes.string.isRequired,
    btnOneText: PropTypes.string.isRequired,
    btnOneUrl: PropTypes.string.isRequired,
    btnOneVariant: PropTypes.string.isRequired,
    btnTwoColor: PropTypes.string.isRequired,
    btnTwoText: PropTypes.string.isRequired,
    btnTwoUrl: PropTypes.string.isRequired,
    btnTwoVariant: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    headingPartOne: PropTypes.string.isRequired,
    hedinPartThree: PropTypes.string.isRequired,
    hedingPartTwo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageDark: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
  }).isRequired,
  nomobileimg: PropTypes.bool,
};

export default HomeHero;
