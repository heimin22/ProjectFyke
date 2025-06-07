import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let x = mouseX;
    let y = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.display = "block";
    };

    document.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      x += (mouseX - x) * 0.15;
      y += (mouseY - y) * 0.15;
      if (cursor) {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-4 h-4 bg-[#F5F5F5] rounded-full pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default CustomCursor; 