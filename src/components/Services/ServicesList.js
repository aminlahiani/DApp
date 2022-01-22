import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

import { InfoCard } from "components/Cards/InfoCard";
import ServiceCardOne from "components/Cards/ServiceCardOne";

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
          {data.serviceslist.map((item, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <ServiceCardOne data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesList;