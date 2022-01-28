// @mui material components
import { Box, Container, Grid } from "@mui/material";

import PortfolioCard from "components/Cards/PortfolioCard";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

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

PortfolioList.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default PortfolioList;
