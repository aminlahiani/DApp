import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppThemeProvider from "theme/AppThemeProvider";
import App from "./App";

ReactDOM.render(
  <AppThemeProvider>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </AppThemeProvider>,
  document.querySelector("#root")
);
