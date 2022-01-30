// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function BlogDetailsContent(props) {
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
          {data.subtitleOne}
        </Typography>

        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraphOne}
        </Typography>

        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraphTwo}
        </Typography>
        <Typography color="textPrimary" sx={{ mt: 3 }} variant="h3">
          {data.subtitleTwo}
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraphThree}
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
          {data.paragraphFour}
        </Typography>
      </Container>
    </Box>
  );
}

BlogDetailsContent.propTypes = {
  data: PropTypes.shape({
    authorname: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    paragraphFour: PropTypes.string.isRequired,
    paragraphOne: PropTypes.string.isRequired,
    paragraphThree: PropTypes.string.isRequired,
    paragraphTwo: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    subtitleOne: PropTypes.string.isRequired,
    subtitleTwo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

// BlogDetailsContent.propTypes = {
//   data: PropTypes.objectOf(PropTypes.string).isRequired,
// };
export default BlogDetailsContent;
