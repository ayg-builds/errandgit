import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('errand-theme') || 'light';
    console.log('Loading saved theme:', savedTheme);
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme) => {
    console.log('Applying theme:', newTheme);
    
    // Apply to document element
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Apply to body
    document.body.setAttribute('data-theme', newTheme);
    document.body.className = newTheme === 'dark' ? 'dark-theme' : 'light-theme';
    
    // Force immediate style update
    if (newTheme === 'dark') {
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#232f3e';
    }
    
    console.log('Theme applied. Document data-theme:', document.documentElement.getAttribute('data-theme'));
    console.log('Body data-theme:', document.body.getAttribute('data-theme'));
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Toggling theme from', theme, 'to', newTheme);
    setTheme(newTheme);
    localStorage.setItem('errand-theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
