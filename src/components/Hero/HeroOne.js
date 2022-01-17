import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";



function HeroOne() {
  const hero = {
    heading: "Digital Agency UI React template with MUI",
    shortDescription : "  Not just a set of tools, the package includes ready-to-deploy conceptualapplications written in JavaScript & TypeScript.",
    buttons: [
      {
        variant: "contained",
        buttonColor: "btn-warning",
        url: "/about",
        text: "About Us",
      },
      {
        buttonColor: "btn-light",
        url: "/contact",
        text: "Contact Us",
        variant: "outlined",
      },
    ],
  };

  const theme = useTheme();

 
  return (
    <Box
      sx={{
        background: theme.palette.primary.mainGradient,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "baseline", md: "center" },
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
                {hero.heading}
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
               {hero.shortDescription}
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
                {hero.buttons.map((item, index) => (
                  <Button
                    key={index}
                    to={item.url}
                    component={RouterLink}
                    size="large"
                    variant={item.variant}
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
                display: { xs: "none", md: "block" },
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
                src={`/static/contact/undraw_contact_us_${theme.palette.mode}.svg`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroOne;
