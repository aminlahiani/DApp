import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DarkThemeOptions } from "./DarkThemeOptions";
import { LightThemeOptions } from "./LightThemeOptions";
import { BaseThemeOptions } from "./BaseThemeOptions";
import { ColorModeContext } from "contexts/ColorModeContext";

const themeMode = localStorage.getItem("theme") || "light";

export default function AppThemeProvider(props) {
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
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
