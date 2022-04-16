import React, { useState } from "react";

export const ThemeContext = React.createContext(true);

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => setDarkTheme(prevState => !prevState);
  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
