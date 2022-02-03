// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

function AboutOne(props) {
  const { data } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
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

export default AboutOne;
