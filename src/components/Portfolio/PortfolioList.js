// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Portfolio Card
import PortfolioCard from "../Cards/PortfolioCard";

function PortfolioList(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "50vh",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item key={item.id} md={4} xs={12}>
              <PortfolioCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PortfolioList;
