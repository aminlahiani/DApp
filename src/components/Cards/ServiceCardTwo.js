// @mui material components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// @fortawesome react-fontawesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceCardTwo(props) {
  const { data } = props;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: 48,
            width: 48,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1.5,
            boxShadow:
              "inset 0px 5px 8px rgba(256, 256, 256, 0.3), 0px 5px 8px rgba(21, 101, 192, 0.3)",
          }}
        >
          <FontAwesomeIcon icon={[`${data.baseicon}`, `${data.icon}`]} color="white" size="lg" />
        </Box>
      </Box>
      <Typography align="center" variant="h6" color="textPrimary" sx={{ mt: 2.5, mb: 1.5 }}>
        {data.title}
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary">
        {data.shortDescription}
      </Typography>
    </>
  );
}

export default ServiceCardTwo;
