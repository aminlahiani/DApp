import React from "react";
import { useEffect, useState } from "react";

import { Box, ThemeProvider } from "@mui/material";
import { useSettings } from "../hooks/use-settings";

import { createTheme } from "../theme";
import { Outlet } from "react-router-dom";
import { MainFooter } from "../components/Footers/MainFooter";
import MainNavbar from "components/Navbars/MainNavbar";
function MainLayout() {



  return (
    <>
    
        {/* <ButtonAppBar/> */}
        <Box
          sx={{
            backgroundColor: "background.default",
            // paddingTop: '59px'
          }}
        >
          <MainNavbar />

          <Outlet />
          <MainFooter />
        </Box>
      
    </>
  );
}

export default MainLayout;
