import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import { SettingsConsumer, SettingsProvider } from './contexts/settings-context';
import { createTheme } from './theme';

ReactDOM.render(
 
       <SettingsProvider>
              <SettingsConsumer>
                {({ settings }) => (
                  <ThemeProvider
                    theme={createTheme({
                      direction: settings.direction,
                      responsiveFontSizes: settings.responsiveFontSizes,
                      mode: settings.theme
                    })}
                  >
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />  

    </ThemeProvider>    )}

    </SettingsConsumer>
    </SettingsProvider>,
  document.querySelector('#root'),
);
