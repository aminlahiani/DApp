import React from 'react'
import ResponsiveAppBar from './Appbar'
import { useEffect, useState } from 'react';

import { ThemeProvider } from '@mui/material';
import { useSettings } from '../hooks/use-settings';
import { styled } from '@mui/material/styles';
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
    
    const MainLayoutRoot = styled('div')(() => ({
      height: '100%',
      paddingTop: 59
    }));
    return (
        <>
              <ThemeProvider theme={theme}>
         {/* <ButtonAppBar/> */}
         <MainLayoutRoot>
            <ResponsiveAppBar selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme}/>
         
            <Outlet/>
            <Footer1/>
            </MainLayoutRoot>
            </ThemeProvider>
        </>
    )
}

export default MainLayout
