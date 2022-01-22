import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

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
        py:6
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
              <Typography color="textPrimary" variant="h1">
                {data.heading}
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                {data.paragraph1}
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                {data.paragraph2}
              </Typography>
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutOne;
