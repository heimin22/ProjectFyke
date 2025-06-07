import React from "react";

const NavMiddleLeft: React.FC = () => {
  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
      <a href="#about" className="hover:underline">About</a>
      <a href="#projects" className="hover:underline">Projects</a>
      <a href="#contact" className="hover:underline">Contact</a>
    </nav>
  );
};

export default NavMiddleLeft;

 