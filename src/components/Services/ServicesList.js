// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Service Card
import ServiceCardOne from "../Cards/ServiceCardOne";

function ServicesList(props) {
  const { data } = props;
  return (
    <Box
      minHeight="584px"
      sx={{
        backgroundColor: "background.paper",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography align="center" color="textPrimary" variant="h4">
          {data.heading}
        </Typography>

        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ pt: 0, pb: 6 }}>
          {data.shortDescription}
        </Typography>

        <Grid container spacing={3}>
          {data.serviceslist.map((item) => (
            <Grid key={item.id} item xs={12} md={6} lg={4}>
              <ServiceCardOne data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesList;
