import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import bgImage from "../../../assets/images/bg5.jpg";
export const Hero = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4),  rgba(0,0,0,0.9)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "50vh",
        alignItems: "center",
        display: "flex",
      }}
      {...props}
    >
      <Container maxWidth="md">
        <Typography align="center " variant="h2" color="white">
          Service Details
        </Typography>
      </Container>
    </Box>
  );
};
