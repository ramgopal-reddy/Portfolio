import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Default to dark mode
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document and save preference
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    transitions: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth ease-in-out
      duration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms'
      }
    },
    colors: {
      // Antigravity-inspired colors
      primary: isDark ? '#0d45ff' : '#4c00ff',
      secondary: isDark ? '#CF9EFF' : '#7C3AED',
      accent: isDark ? '#FF79C6' : '#EC4899',
      background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
      surface: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.8)',
      text: isDark ? '#FFFFFF' : '#1F2937',
      textSecondary: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(31, 41, 55, 0.7)',
      border: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      gradient: isDark 
        ? 'from-white to-cyan-400' 
        : 'from-gray-800 to-purple-600',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
