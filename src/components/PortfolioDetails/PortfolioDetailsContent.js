import { Container, Box, Grid, Typography, Card, CardMedia } from "@mui/material";

const PortfolioDetailsContent = (props) => {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: 3,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{ pt: 3, borderRadius: 3 }}
          component="img"
          src={data.image}
          alt="macbook"
          width="100%"
        />

        <Typography variant="h3" mt={3} color="textPrimary" mb={3}>
          {data.title}
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraph1}
        </Typography>

        <Grid container spacing={5} mt={3}>
          {data.images.map((item, index) => (
            <Grid key={index} xs={12} lg={6} item>
              <Box sx={{ borderRadius: 3 }} component="img" src={item} alt="macbook" width="100%" />
            </Grid>
          ))}
        </Grid>
        <Typography color="textPrimary" sx={{ mt: 3 }} variant="h4">
          {data.subtitle1}
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraph2}
        </Typography>
      </Container>
    </Box>
  );
};
export default PortfolioDetailsContent;
