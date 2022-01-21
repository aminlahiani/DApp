import { Chip, Container, Typography, Box, Card, CardMedia } from "@mui/material";

export const ServiceDetails = (props) => {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="md">
        <Card sx={{ width: "100%", height: "100%", pt: 3 }}>
          <CardMedia image={data.image} sx={{ height: 500 }} />
        </Card>
        <Typography
          color="textPrimary"
          sx={{
            fontWeight: "fontWeightBold",
            mt: 3,
          }}
          variant="h2"
        >
          {data.title}
        </Typography>

        <Typography color="textPrimary" sx={{ mt: 3 }} variant="subtitle1">
          {data.descriptionfront}
        </Typography>

        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.descriptionback}
        </Typography>
      </Container>
    </Box>
  );
};
