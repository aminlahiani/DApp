import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

function HomeHero(props) {
  const { nomobileimg, data } = props;

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isXs);
  return (
    <Box
      sx={{
        background: theme.palette.primary.mainGradient,
        height: { xs: nomobileimg ? "84vh" : "100vh", md: "584px" },

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
              <Typography
                color="textPrimary"
                variant="h1"
                textAlign={{ xs: "center", md: "start" }}
              >
                {data.heading}
              </Typography>
              <Typography
                color="textSecondary"
                textAlign={{ xs: "center", md: "start" }}
                sx={{ my: 3 }}
                variant="subtitle1"
              >
                {data.shortDescription}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",

                  mx: -1,
                  mt: 4,
                  mb: 6,
                  "& > a": {
                    m: 1,
                  },
                }}
              >
                {data.buttons.map((item, index) => (
                  <Button
                    key={index}
                    to={item.url}
                    component={RouterLink}
                    size="large"
                    variant={item.variant}
                    fullWidth={isXs}
                  >
                    {item.text}
                  </Button>
                ))}
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

export default HomeHero;
