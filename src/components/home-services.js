import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Icon from '@mui/material/Icon';
const services = [
  { id: 1, title : "Business Stratagy" ,  icon: "public" },
  { id: 2, title : "Website Development" ,icon: "public" },
  { id: 3,title : "Marketing & Reporting" , icon: "public" },
  { id: 4, title : "Mobile App Development" ,icon: "public" },
  { id: 5,title : "Application Development" , icon: "public" },
  { id: 6,title : "Seo Services" , icon: "public" },
];
import FacebookIcon from "@mui/icons-material/Facebook";
export const HomeServices = () => {
     
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        py: 15
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

        <Typography
          align="center"
          color="textSecondary"
          variant="subtitle1"
          sx={{ py: 3 }}
        >
          Build a beautiful, modern website with flexible, fully customizable,
          atomic MUI Components
        </Typography>

        <Grid sx={{ mt : 3 }} container spacing={3}>
          {services.map((service) => (
            <Grid key={service.id} item md={4} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                    height: 48,
                    width: 48,
                  }}
                >
               <Icon>
{service.icon}
</Icon>
                </Avatar>{" "}
              </Box>

              <Typography
              sx={{ mt : 2}}
                align="center"
                variant="h6"
                align="center"
                color="textPrimary"
              >
               {service.title}
              </Typography>
              <Typography  sx={{ mt : 2}} align="center" variant="body1" color="textSecondary">
                theFront is built to make your life easier. Variables, build
                tooling, documentation, and reusable components.
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
