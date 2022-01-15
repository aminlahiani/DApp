import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from '../../../icons/check-circle-outlined';
export const Information = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: 4,
      }}
      {...props}
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
              <Typography color="textPrimary" variant="h3">
              The powerful and flexible theme for all kinds of businesses
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ my: 3 }}
                variant="subtitle1"
              >
                Send one-off and automated email, push, and in-app messages to people.
Create better stories.
              </Typography>
              {['JavaScript', 'TypeScript', 'Figma', 'Sketch'].map((item) => (
            <Box
              key={item}
              sx={{
                alignItems: 'center',
                display: 'flex',
                m: 2
              }}
            >
              <CheckCircleOutlinedIcon
                color="info"
                sx={{ mr: 1 }}
              />
              <Typography  color="textSecondary" variant="body1">
                {item}
              </Typography>
            </Box>
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
                alt="For developers"
                src={`/static/home/developers_${theme.palette.mode}.png`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
