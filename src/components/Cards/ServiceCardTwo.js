// @mui material components
import { Box, Icon, Typography } from "@mui/material";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const ServiceCardTwo = (props) => {
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
          <Icon
            baseClassName={data.baseicon}
            className={data.icon}
            color="white"
            fontSize="small"
          />
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
};

ServiceCardTwo.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default ServiceCardTwo;
