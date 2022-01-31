// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Service Card components
import ServiceCardTwo from "../Cards/ServiceCardTwo";

function HomeServiceList(props) {
  const { data } = props;
  return (
    <Box
      minHeight="584px"
      sx={{
        backgroundColor: "background.paper",
        display: "flex",
        alignItems: "center",
        py: 6,
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
          {data.subHeading}
        </Typography>

        <Grid container spacing={3}>
          {data.services.map((item) => (
            <Grid key={item.id} item xs={12} md={6} lg={4}>
              {/* ServiceCard Two : src > components > Cards > ServiceCardTwo */}
              <ServiceCardTwo data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeServiceList;
