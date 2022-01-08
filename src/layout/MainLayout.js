import React from 'react'
import ResponsiveAppBar from './Appbar'
import { useEffect, useState } from 'react';

import { ThemeProvider } from '@mui/material';
import { useSettings } from '../hooks/use-settings';

import { createTheme } from '../theme';
import { Outlet } from 'react-router-dom'
import { Footer1 } from './footer1';

function MainLayout() {
    const { settings } = useSettings();
    const [selectedTheme, setSelectedTheme] = useState(settings.theme);
  
    useEffect(() => {
      setSelectedTheme(settings.theme);
    }, [settings.theme]);
  

  
    const theme = createTheme({
      ...settings,
      mode: selectedTheme
    });
    return (
        <>
              <ThemeProvider theme={theme}>
         {/* <ButtonAppBar/> */}
            <ResponsiveAppBar selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme}/>
         
            <Outlet/>
            <Footer1/>
            </ThemeProvider>
        </>
    )
}

export default MainLayout
