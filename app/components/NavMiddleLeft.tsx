import React from "react";

const NavMiddleLeft: React.FC = () => {
  return (
    <nav className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-50 text-white">
      <a href="#about" className="hover:text-green-400 transition-colors">About</a>
      <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
      <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
    </nav>
  );
};

export default NavMiddleLeft;

 