// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

// import Icon from "@mui/material/Icon";
// import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function AboutOne(props) {
  const { data } = props;

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isXs);

  return (
    <Box
      sx={{
        // background: theme.palette.primary.mainGradient,
        // height: { xs: nomobileimg ? "80vh" : "100vh", md: "584px" },
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "center", md: "center" },
        py: 6,
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
              <Typography color="textPrimary" variant="h1">
                {data.heading}
              </Typography>
              {data.content.map((item) => (
                <Typography key={item.id} color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                  {item.paragraph}
                </Typography>
              ))}
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
            {/* <Box
              sx={{
                display: "block",
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
                src={theme.palette.mode === "dark" ? data.imgdark : data.imglight}
              />
            </Box> */}
            <Box
              sx={{ borderRadius: 3 }}
              component="img"
              src={theme.palette.mode === "light" ? data.image : data.imageDark}
              alt="macbook"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

AboutOne.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default AboutOne;
