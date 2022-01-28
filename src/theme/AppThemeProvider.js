import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ColorModeContext from "contexts/ColorModeContext";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import DarkThemeOptions from "./DarkThemeOptions";
import LightThemeOptions from "./LightThemeOptions";
import BaseThemeOptions from "./BaseThemeOptions";

const themeMode = localStorage.getItem("theme") || "light";

function AppThemeProvider(props) {
  const { children } = props;
  const [mode, setMode] = React.useState(themeMode);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        const themeStorage = localStorage.getItem("theme");
        setMode(() => (themeStorage === "light" ? "dark" : "light"));
        localStorage.setItem("theme", themeStorage === "light" ? "dark" : "light");
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => createTheme(BaseThemeOptions, mode === "light" ? LightThemeOptions : DarkThemeOptions),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppThemeProvider;
