// @mui material components
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import Zoom from "@mui/material/Zoom";

// react-router-dom components
import { Outlet } from "react-router-dom";

// Main Navbar
import MainNavbar from "../components/Navbars/MainNavbar";

// Main Footer
import MainFooter from "../components/Footers/MainFooter";

// Scroll Top
import ScrollTop from "../components/ScrollTop";

export default function MainLayout1(props) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
        }}
      >
        <div id="back-to-top-anchor" />
        {/* MainNavbar : src > components > Navbars > MainNavbar */}
        <MainNavbar />
        <Outlet />
        {/* MainFooter : src > components > Footers > MainFooter */}
        <MainFooter />
      </Box>
      {/* ScrollTop : src > components > ScrollTop  */}
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
