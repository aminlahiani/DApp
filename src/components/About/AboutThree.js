// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

// @mui icons
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

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
                {data.subHeading}
              </Typography>

              <Grid container>
                {data.featuring.map((item) => (
                  <Grid item key={item}>
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

AboutThree.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default AboutThree;
