import { Container, Box, Grid, Typography, Card, CardMedia } from "@mui/material";

export const Details = (props) => {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: 3,
      }}
    >
      <Container maxWidth="md">
        <Card sx={{ width: "100%", height: "100%", pt: 3 }}>
          <CardMedia image={data.cover} sx={{ height: 500 }} />
        </Card>
        <Typography variant="h3" mt={3} color="textPrimary" mb={3}>
          {data.title}
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraph1}
        </Typography>

        <Grid container spacing={3} xs={12} lg={12} mt={3}>
          {data.images.map((item, index) => (
            <Grid key={index} xs={12} lg={6} item>
              <Card sx={{ width: "100%", height: "100%", pt: 3 }}>
                <CardMedia image={item} sx={{ height: 300 }} />
              </Card>
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
