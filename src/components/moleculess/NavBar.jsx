import React from 'react';
import HamburgerButton from '../atoms/HamburgerButton';
import Logo from '../atoms/Logo';
import DarkModeToggle from '../atoms/DarkModeToggle';

export default function NavBar({ isOpen, setIsOpen, darkMode, toggleDarkMode }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex w-[350px] items-center justify-start rtl:justify-end">
            <HamburgerButton onClick={() => setIsOpen(!isOpen)} />
            <Logo />
          </div>
          <div className="flex w-full items-center lg:justify-between md:justify-between justify-end">
            <div className="text-black font-semibold lg:block md:block sm:hidden hidden">
              Chat
            </div>
            <div className="flex items-center ms-3">
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}