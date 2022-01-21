import React from "react";
import { useEffect, useState } from "react";

import { Box, ThemeProvider } from "@mui/material";
import { useSettings } from "../hooks/use-settings";

import { createTheme } from "../theme";
import { Outlet } from "react-router-dom";
import { MainFooter } from "../components/Footers/MainFooter";
import MainNavbar from "components/Navbars/MainNavbar";
function MainLayout() {
  const { settings } = useSettings();
  const [selectedTheme, setSelectedTheme] = useState(settings.theme);

  useEffect(() => {
    setSelectedTheme(settings.theme);
  }, [settings.theme]);

  const theme = createTheme({
    ...settings,
    mode: selectedTheme,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <ButtonAppBar/> */}
        <Box
          sx={{
            backgroundColor: "background.default",
            // paddingTop: '59px'
          }}
        >
          <MainNavbar selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />

          <Outlet />
          <MainFooter />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default MainLayout;
