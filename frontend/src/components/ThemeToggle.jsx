import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <span className="theme-label">Light</span>
      <label className="theme-toggle-switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        />
        <span className="theme-slider">
          <span className="theme-slider-icon">
            {theme === 'light' ? '☀️' : '🌙'}
          </span>
        </span>
      </label>
      <span className="theme-label">Dark</span>
    </div>
  );
};

export default ThemeToggle;
