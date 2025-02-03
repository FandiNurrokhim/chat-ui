import React from 'react';

export default function Logo() {
  return (
    <a href="#" className="flex ms-2 md:me-24">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 me-3"
        alt="Logo"
      />
      <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-black">
        Chat-AI
      </span>
    </a>
  );
}