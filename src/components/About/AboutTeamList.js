// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import TeamCard from "components/Cards/TeamCard";

function AboutTeamList(props) {
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
          {data.teamlist.map((item) => (
            <Grid item key={item.id} md={3} sm={3} xs={12}>
              <TeamCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

AboutTeamList.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subHeding: PropTypes.string.isRequired,
    teamlist: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }).isRequired,
};
export default AboutTeamList;
