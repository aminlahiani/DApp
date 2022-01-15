import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ExternalLink as ExternalLinkIcon } from "../../../icons/external-link";
import { DetailList8 } from "../components/detail-list-8";

export const Info = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: 10,
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container justifyContent="center" spacing={3}>
          <Grid item md={6} sm={8} xs={12}>
            <Box
              sx={{
                position: "relative",
                pt: "calc(960 / 1225 * 50%)",
                "& img": {
                  height: "auto",
                  position: "absolute",
                  top: 0,
                  width: "100%",
                },
              }}
            >
              <img alt="For designers" src={`/static/contact/undraw_contact_us.svg`} />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <DetailList8 />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
