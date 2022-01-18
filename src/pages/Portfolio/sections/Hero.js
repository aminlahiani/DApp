import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Hero = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.primary.mainGradient,
        py: 6,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography align="center" variant="h1" color="textPrimary">
          Our Portfolio
        </Typography>
        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ pt: 3 }}>
          A professional kit that comes with ready-to-use MUI© components developed with one common
          goal in mind, help you build faster &amp; beautiful applications.
        </Typography>
      </Container>
    </Box>
  );
};
