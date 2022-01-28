// @mui material components
import { Box, Grid, Typography, Container } from "@mui/material";

import TeamCard from "components/Cards/TeamCard";

const AboutTeamList = (props) => {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography color="textPrimary" variant="h3">
          {data.heading}
        </Typography>
        <Typography color="textSecondary" sx={{ pt: 0, pb: 6 }} variant="subtitle1">
          {data.subHeding}
        </Typography>

        <Grid container spacing={3}>
          {data.teamlist.map((item, index) => (
            <Grid item key={index} md={3} sm={3} xs={12}>
              <TeamCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default AboutTeamList;
