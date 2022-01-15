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

const applicants = [
  {
    id: "5e887a62195cc5aef7e8ca5d",
    avatar: "/static/mock-images/avatars/avatar-marcus_finn.png",
    commonConnections: "Ux Designer",
    cover: "/static/mock-images/covers/cover_2.jpg",
    name: "Marcus Finn",
    skills: ["User Experience", "FrontEnd development", "HTML5", "VueJS", "ReactJS"],
  },
  {
    id: "5e887ac47eed253091be10cb",
    avatar: "/static/mock-images/avatars/avatar-carson_darrin.png",
    commonConnections: "JS Developer",
    cover: "/static/mock-images/covers/cover_3.jpg",
    name: "Carson Darrin",
    skills: ["User Interface", "FullStack development", "Angular", "ExpressJS"],
  },
  {
    id: "5e86809283e28b96d2d38537",
    avatar: "/static/mock-images/avatars/avatar-anika_visser.png",
    commonConnections: "UI Designer",
    cover: "/static/mock-images/covers/cover_1.jpg",
    name: "Anika Visser",
    skills: ["BackEnd development", "Firebase", "MongoDB", "ExpressJS"],
  },
];

export const Team = () => (
  <Box
    sx={{
      backgroundColor: "background.default",
      minHeight: "100%",
      py: 10,
    }}
  >
    <Container maxWidth="lg">
      <Typography color="textPrimary" variant="h3">
        The Executive Team
      </Typography>
      <Typography color="textSecondary" sx={{ my: 3 }} variant="subtitle1">
        There's nothing I really wanted to do in life that I wasn't able to get good at. That's my
        skill.
      </Typography>

      <Grid container spacing={3}>
        {applicants.map((applicant) => (
          <Grid item key={applicant.id} md={4} xs={12}>
            <TeamCard
              cover={applicant.cover}
              avatar={applicant.avatar}
              name={applicant.name}
              commonConnections={applicant.commonConnections}
              skills={applicant.skills}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
