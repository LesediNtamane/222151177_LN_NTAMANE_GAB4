// import React, { createContext, useState, useContext } from 'react';
// import { DarkTheme, DefaultTheme } from '@react-navigation/native';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };

//   const theme = isDarkTheme ? DarkTheme : DefaultTheme;

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useThemeContext = () => useContext(ThemeContext);
