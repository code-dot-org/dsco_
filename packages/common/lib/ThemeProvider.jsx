import React from "react";

const ThemeContext = React.createContext("day");

export function ThemeProvider(props) {
  return <ThemeContext.Provider>
    {props.children}
  </ThemeContext.Provider>
}

export function useTheme() {
  return React.useContext(ThemeContext);
}