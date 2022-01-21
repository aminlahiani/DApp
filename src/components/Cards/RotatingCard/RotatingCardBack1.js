/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import MuiLink from "@mui/material/Link";

import { Typography as MKTypography, Button as MKButton } from "@mui/material";

// Material Kit 2 PRO React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
function RotatingCard({ color, image, title, description, action }) {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      coloredShadow={color}
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(/static/mock-images/covers/cover_2.jpg)`,

        backgroundSize: "cover",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <MKBox pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
        <MKTypography variant="h3" color="white" gutterBottom>
          {"Discover"}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
          {
            "You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
          }
        </MKTypography>
        {action && (
          <MKBox width="50%" mt={4} mb={2} mx="auto">
            {action.type === "external" ? (
              <MKButton
                component={MuiLink}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color="white"
                size="small"
                fullWidth
              >
                {action.label}
              </MKButton>
            ) : (
              <MKButton component={Link} to={action.route} color="white" size="small" fullWidth>
                {action.label}
              </MKButton>
            )}
          </MKBox>
        )}
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the RotatingCard
RotatingCard.defaultProps = {
  color: "info",
};

// Typechecking props for the RotatingCard
RotatingCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]),
      route: PropTypes.string,
      label: PropTypes.string,
    }),
  ]),
};

export default RotatingCard;
