// @mui material components
import Box from "@mui/material/Box";

// react-router-dom components
import { Outlet } from "react-router-dom";

// Main Navbar
import MainNavbar from "../components/Navbars/MainNavbar";

// Main Footer
import MainFooter from "../components/Footers/MainFooter";

function MainLayout() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <MainNavbar />
      <Outlet />
      <MainFooter />
    </Box>
  );
}

export default MainLayout;
