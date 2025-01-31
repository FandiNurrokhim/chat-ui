import { Sun, Moon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex w-full h-16 items-center justify-between dark:bg-gray-900">
      <div className="flex h-full w-[275px] items-center justify-start py-5 px-4 gap-3 border border-gray-300 bg-white">
        <img
          src="/img/logo-doktergpt-new.png"
          alt="ChatAI Logo"
          className="h-5 w-5"
        />
        <span className="font-semibold text-gray-800 dark:text-white">
          ChatAI
        </span>
      </div>

      <div className="flex h-full w-[82.4%] items-center justify-between  border-gray-300 border-t border-r border-b bg-white px-5 font-medium text-gray-700 dark:text-gray-300">
        <span>Chat</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
