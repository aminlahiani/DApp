import RotatingCard from "components/Cards/RotatingCard";
import RotatingCardFront from "components/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "components/Cards/RotatingCard/RotatingCardBack";
import { Grid, Container } from "@mui/material";

function Card1() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* {grid1.map((item, index) => ( */}
          <Grid item md={4} sm={4} xs={12}>
            <RotatingCard>
              <RotatingCardFront />
              <RotatingCardBack />
            </RotatingCard>
          </Grid>
          {/* ))} */}
        </Grid>
      </Container>
    </>
  );
}

export default Card1;
