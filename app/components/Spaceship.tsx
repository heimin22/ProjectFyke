import React from "react";

const Spaceship: React.FC = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
      <svg
        className="w-12 h-12 text-white animate-float"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 4L38 24H26L32 4Z" fill="currentColor" />
        <path d="M26 24L22 44H42L38 24H26Z" fill="currentColor" />
        <path d="M22 44L32 60L42 44H22Z" fill="currentColor" />
      </svg>
    </div>
  );
};

export default Spaceship; 