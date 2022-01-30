// @mui material components
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function PortfolioHero(props) {
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
          {data.heading}
        </Typography>
        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ pt: 3 }}>
          {data.shortDescription}
        </Typography>
      </Container>
    </Box>
  );
}

PortfolioHero.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
};
export default PortfolioHero;
