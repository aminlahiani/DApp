import { Chip, Container, Typography, Box } from "@mui/material";

export const Details = (props) => {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            pt: 3,
          }}
        >
          <Chip label={data.category} variant="outlined" />

          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" color="textSecondary">
              By {data.authorname} • {data.publishedAt}
            </Typography>
          </Box>
        </Box>

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
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.shortDescription}
        </Typography>
      </Container>
    </Box>
  );
};
