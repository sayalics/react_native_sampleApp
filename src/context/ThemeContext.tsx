import {createContext, useState} from 'react';
import {darkTheme, lightTheme} from '../utils/colors';

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
