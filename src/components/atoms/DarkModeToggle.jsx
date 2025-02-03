import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  console.log('dark mode:',darkMode);
  return (
    <button
      onClick={toggleDarkMode}
      className="rounded-full p-2 cursor-pointer hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700 dark:hover:text-orange-500"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}