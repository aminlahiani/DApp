import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Divider,
  Link,
  Typography,
  Container,
} from "@mui/material";
import TeamCard from "components/Cards/TeamCard";

function AboutTeamList(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Typography color="textPrimary" variant="h3">
          {data.heading}
        </Typography>
        <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
          {data.shortDescription}
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
