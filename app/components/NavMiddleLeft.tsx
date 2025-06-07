import React, { useState, useEffect } from "react";

const NavMiddleLeft: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("about");

  useEffect(() => {
    const sections = ["about", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const items = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 flex flex-row space-x-4 md:top-1/2 md:left-4 md:transform-none md:-translate-y-1/2 md:flex-col md:space-y-4 md:space-x-0 z-50 relative">
      {/* Horizontal line for mobile */}
      <div className="absolute top-1/2 left-0 right-0 border-t border-gray-500 transform -translate-y-1/2 md:hidden" />
      {/* Vertical line for desktop */}
      <div className="absolute top-0 bottom-0 left-1/2 border-l border-gray-500 transform -translate-x-1/2 hidden md:block" />

      {items.map(({ id, label }) => (
        <div key={id} className="relative">
          <a href={`#${id}`} className="px-2 py-1 hover:underline">
            {label}
          </a>
          {activeId === id && (
            <span className="absolute block w-2 h-2 bg-white rounded-full bottom-[-4px] left-1/2 transform -translate-x-1/2 md:top-1/2 md:left-[-6px] md:bottom-auto md:transform md:-translate-y-1/2" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavMiddleLeft;

 