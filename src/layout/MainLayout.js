import { Outlet } from "react-router-dom";
import MainFooter from "components/Footers/MainFooter";
import MainNavbar from "components/Navbars/MainNavbar";
import { Box } from "@mui/material";

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
