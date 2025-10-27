import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { THEMES } from "../constants/colors";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.forest); // default theme
  const [themeName, setThemeName] = useState("forest");

  useEffect(() => {
    // Load saved theme on app start
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("selectedTheme");
        if (savedTheme) {
          setThemeName(savedTheme);
          setTheme(THEMES[savedTheme]);
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    };

    loadTheme();
  }, []);

  const changeTheme = async (newThemeName) => {
    try {
      await AsyncStorage.setItem("selectedTheme", newThemeName);
      setThemeName(newThemeName);
      setTheme(THEMES[newThemeName]);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
