import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-lg bg-emerald-100/50 dark:bg-emerald-900/50 
        backdrop-blur-sm border border-emerald-500/20 shadow-lg
        hover:bg-emerald-200/50 dark:hover:bg-emerald-800/50 
        transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
      ) : (
        <Sun className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
      )}
    </button>
  );
};

export default ThemeToggle;