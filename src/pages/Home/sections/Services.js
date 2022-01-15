import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
const services = [
  { id: 1, title: "Business Stratagy", icon: "public" },
  { id: 2, title: "Website Development", icon: "public" },
  { id: 3, title: "Marketing & Reporting", icon: "public" },
  { id: 4, title: "Mobile App Development", icon: "public" },
  { id: 5, title: "Application Development", icon: "public" },
  { id: 6, title: "Seo Services", icon: "public" },
];
import FacebookIcon from "@mui/icons-material/Facebook";
import { InfoCard } from "./InfoCard";
const infocards = [1, 2, 3];
export const Services = () => {
  return (
    <Box
      minHeight="100vh"
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
          Build accessible React apps with speed
        </Typography>

        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ pt: 0, pb: 6 }}>
          Build a beautiful, modern website with flexible, fully customizable, atomic MUI Components
        </Typography>

        <Grid container spacing={3}>
          {services.map((info) => (
            <Grid key={info.id} item xs={12} md={6} lg={4}>
              <InfoCard title={info.title} icon={info.icon} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
