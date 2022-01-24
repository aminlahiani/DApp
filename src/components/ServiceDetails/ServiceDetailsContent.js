import { Chip, Container, Typography, Box, Card, CardMedia } from "@mui/material";

const ServiceDetailsContent = (props) => {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
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
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraph1}
        </Typography>
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

export default ServiceDetailsContent;
