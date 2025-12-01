import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Verifica se há preferência salva no localStorage
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : true; // Dark mode como padrão
  });
  
  const toggleTheme = () => {
    setDarkMode(prev => {
      const newTheme = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  useEffect(() => {
    // Aplica o tema no body quando o estado muda
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 