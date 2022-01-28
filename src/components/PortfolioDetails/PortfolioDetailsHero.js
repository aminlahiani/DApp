// @mui material components
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function PortfolioDetailsHero(props) {
  const { data } = props;
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
          Portfolio Details
        </Typography>
      </Container>
    </Box>
  );
}

export default PortfolioDetailsHero;
