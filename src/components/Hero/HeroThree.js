import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function HeroThree (props) {
    const { shortDescription , heading } = props ;
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.primary.mainGradient,
        py: 2,
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "baseline", md: "center" },
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
        {heading}
        </Typography>
        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ pt: 3 }}>
         {shortDescription}
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroThree