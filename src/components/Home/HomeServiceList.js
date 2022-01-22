import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

import { InfoCard } from "components/Cards/InfoCard";

function ServiceList(props) {
  const { data } = props;
  return (
    <Box
      minHeight="584px"
      sx={{
        backgroundColor: "background.paper",
        display: "flex",
        alignItems: "center",
        py:6
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
          {data.services.map((info) => (
            <Grid key={info.id} item xs={12} md={6} lg={4}>
              <InfoCard title={info.title} icon={info.icon} description={info.description} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServiceList;
