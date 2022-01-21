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

// @mui material components
import Icon from "@mui/material/Icon";
import {  Typography as MKTypography,  Button as MKButton } from "@mui/material"
import MKBox from "components/MKBox";

// Material Kit 2 PRO React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

function RotatingCardFront({ color, image, icon, title, description }) {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      coloredShadow={color}
      width="100%"
      position="absolute"
      zIndex={2}
      sx={{
         backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(/static/mock-images/covers/cover_2.jpg)`,

        backgroundSize: "cover",
        backfaceVisibility: "hidden",
      }}
    >
      <MKBox py={12} px={3} textAlign="center" lineHeight={1}>
        {icon && (
          <MKTypography variant="h2" color="white" my={2}>
            {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
          </MKTypography>
        )}
        <MKTypography variant="h3" color="white" gutterBottom>
        {"Discover More"}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
        {"You will save a lot of time going from prototyping to full-functional code because all elements are implemented."}

        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
  color: "info",
  icon: "",
};

// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
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
  icon: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default RotatingCardFront;
