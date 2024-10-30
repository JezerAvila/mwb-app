import React, { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. Crear el proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] =  useState(
    () => JSON.parse(localStorage.getItem('isDarkMode')) || false
  );

  // Función para alternar entre modos
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Crear un hook para acceder fácilmente al contexto
export const useTheme = () => useContext(ThemeContext);
