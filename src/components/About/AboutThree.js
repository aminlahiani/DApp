import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
function AboutThree(props) {
  const { data } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container justifyContent="center" spacing={5}>
          <Grid item md={6} sm={8} xs={12}>
            <Box
              sx={{ borderRadius: 3 }}
              component="img"
              src={theme.palette.mode === "light" ? data.image : data.imageDark}
              alt="macbook"
              width="100%"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <div>
              <Typography color="textPrimary" variant="h3">
                {data.heading}
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                {data.subHeding}
              </Typography>

              <Grid container>
                {data.featuring.map((item, index) => (
                  <Grid item key={index}>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        m: 2,
                      }}
                    >
                      <PlaylistAddCheckCircleIcon color="info" sx={{ mr: 1 }} />
                      <Typography color="textSecondary" variant="body1">
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutThree;
