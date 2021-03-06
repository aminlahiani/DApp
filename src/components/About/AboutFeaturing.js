// @mui material components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function AboutFeaturing(props) {
  const { data } = props;
  return (
    <Box sx={{ py: 3, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6} sm={6} xs={12}>
            <Typography color="textPrimary" variant="h3">
              {data.heading}
            </Typography>
          </Grid>
          {data.featuring.map((item) => (
            <Grid key={item.id} item md={2} xs={4}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: `${item.iconbgColor}`,
                    height: 40,

                    width: 40,
                  }}
                  variant="rounded"
                >
                  <Icon
                    baseClassName={item.baseicon}
                    className={item.icon}
                    color="white"
                    fontSize="small"
                  />
                </Avatar>
                <Typography color="textPrimary" textAlign="center" variant="h4">
                  {item.title}
                </Typography>
                <Typography color="textPrimary" variant="overline">
                  {item.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
AboutFeaturing.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    featuring: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        baseicon: PropTypes.string.isRequired,
        iconbgColor: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

// AboutFeaturing.propTypes = {
//   data: PropTypes.objectOf(PropTypes.string).isRequired,
// };
export default AboutFeaturing;
