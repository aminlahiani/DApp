// @mui material components
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function ContactHero(props) {
  const { nomobileimg, data } = props;

  const theme = useTheme();
  // const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: theme.palette.primary.mainGradient,
        minHeight: "584px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
              <Typography
                textAlign={{ xs: "center", md: "start" }}
                color="textPrimary"
                variant="h1"
              >
                {data.heading}
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                {data.shortDescription}
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
                  to={data.btnUrl}
                  component={RouterLink}
                  size="large"
                  variant={data.btnVariant}
                  fullWidth
                >
                  {data.btnText}
                </Button>
              </Box>
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
                display: nomobileimg ? { xs: "none", md: "block" } : "block",
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
              <img
                alt="For developers"
                src={theme.palette.mode === "dark" ? data.imgdark : data.imagesrc}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
ContactHero.defaultProps = {
  nomobileimg: false,
};
ContactHero.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    btnUrl: PropTypes.string.isRequired,
    btnVariant: PropTypes.string.isRequired,
    imagesrc: PropTypes.string.isRequired,
    imgdark: PropTypes.string.isRequired,
  }).isRequired,
  nomobileimg: PropTypes.bool,
};
export default ContactHero;
