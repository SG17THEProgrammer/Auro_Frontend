import React, {createContext, useState, useContext, useEffect} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({children}) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
<<<<<<< HEAD
=======
=======
  
  const selectedTheme = localStorage.getItem("theme") === "dark"

  const [isDarkMode, setIsDarkMode] = useState(selectedTheme);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
  };

  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};