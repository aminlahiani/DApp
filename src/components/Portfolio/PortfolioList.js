import { Box, Container, Grid } from "@mui/material";

import PortfolioCard from "components/Cards/PortfolioCard";

function PortfolioList(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid item key={index} md={4} xs={12}>
              <PortfolioCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PortfolioList;
