// @mui material components
import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

const HomeHero = (props) => {
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
                  color={data.btntwoColor}
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
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHero;
