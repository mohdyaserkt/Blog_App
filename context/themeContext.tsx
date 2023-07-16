import React, { createContext, useState, useContext } from "react";

interface ThemeContextProps {
  toggle: () => void;
  mode: string;
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggle: () => {},
  mode: "dark",
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
