import { Chip, Container, Typography, Box, Card, CardMedia } from "@mui/material";

const BlogDetailsContent = (props) => {
  const { data } = props;
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="md">
      <Box
              sx={{ pt: 3 ,  borderRadius: 3 }}
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
        <Typography color="textPrimary" sx={{ mt: 3 }} variant="h3">
          {data.subtitle1}
        </Typography>

        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.shortDescription}
        </Typography>

        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraph1}
        </Typography>
        <Typography color="textPrimary" sx={{ mt: 3 }} variant="h3">
          {data.subtitle2}
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraph2}
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraph3}
        </Typography>
      </Container>
    </Box>
  );
};

export default BlogDetailsContent;
