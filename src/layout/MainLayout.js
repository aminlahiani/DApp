// @mui material components
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// react-router-dom components
import { Outlet } from "react-router-dom";

// Main Navbar
import MainNavbar from "../components/Navbars/MainNavbar";

// Main Footer
import MainFooter from "../components/Footers/MainFooter";
import ScrollTop from "../components/ScrollTop";

function MainLayout() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
        }}
      >
        <MainNavbar  />
        <Outlet />
        <MainFooter />
      </Box>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default MainLayout;
