import React, { useRef, useEffect } from "react";

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement as HTMLElement;
    let width = parent.scrollWidth || window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
    }));
    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#fff";
      stars.forEach((star) => {
        star.x -= star.speed;
        if (star.x < 0) {
          star.x = width;
          star.y = Math.random() * height;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      width = (canvas.parentElement as HTMLElement).scrollWidth || window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default Starfield; 