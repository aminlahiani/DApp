import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { SettingsConsumer, SettingsProvider } from "./contexts/settings-context";
import { createTheme } from "./theme";
import AppThemeProvider from "theme1/AppThemeProvider";

ReactDOM.render(
  <AppThemeProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <App />
          </AppThemeProvider>,
  document.querySelector("#root")
);
