// @mui material components
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

function BlogsHero(props) {
  const { nomobileimg, data } = props;
  const theme = useTheme();
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
                  color={data.btnColor}
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
              sx={{ display: nomobileimg ? { xs: "none", md: "block" } : "block" }}
              component="img"
              src={theme.palette.mode === "light" ? data.image : data.imageDark}
              alt={data.heading}
              height="100%"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default BlogsHero;
