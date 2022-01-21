import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ExternalLink as ExternalLinkIcon } from "icons/external-link";
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from "icons/check-circle-outlined";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
function AboutThree(props) {
  const { data } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container justifyContent="center" spacing={3}>
          <Grid item md={6} sm={8} xs={12}>
            <Box
              sx={{
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
                alt="For designers"
                src={theme.palette.mode === "dark" ? data.imgdark : data.imglight}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <div>
              <Typography color="textPrimary" variant="h3">
                {data.heading}
              </Typography>
              <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
                {data.shortDescription}
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
