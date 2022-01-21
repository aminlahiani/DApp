import RotatingCard from "components/Cards/RotatingCard";

import RotatingCardFront from "components/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "components/Cards/RotatingCard/RotatingCardBack";
import { Grid, Container } from "@mui/material";

function Card1() {
  const card3 = [1, 2, 3, 4];
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {card3.map((item, index) => (
            <Grid item key={index} md={3} sm={3} xs={12}>
              <RotatingCard>
                <RotatingCardFront />
                <RotatingCardBack />
              </RotatingCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Card1;
