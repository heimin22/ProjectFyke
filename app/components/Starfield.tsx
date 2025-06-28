import React, { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
}

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

    // Enhanced star colors for variety
    const starColors = ["#FFFFFF", "#F0F8FF", "#E6E6FA", "#FFF8DC", "#F5F5DC"];
    
    // Create regular stars with twinkling effect
    const stars: Star[] = Array.from({ length: 400 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.8 + 0.1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      color: starColors[Math.floor(Math.random() * starColors.length)]
    }));

    // Create shooting stars
    const shootingStars: ShootingStar[] = [];
    
    const createShootingStar = () => {
      if (Math.random() < 0.003) { // Low chance each frame
        shootingStars.push({
          x: width + 50,
          y: Math.random() * height * 0.7,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 8 + 5,
          angle: Math.random() * 0.5 + 0.2,
          opacity: 1,
          life: 1
        });
      }
    };

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      if (!ctx) return;
      time += 0.016; // Roughly 60fps
      
      // Clear canvas with slight trail effect for shooting stars
      ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
      ctx.fillRect(0, 0, width, height);

      // Draw and update regular stars with twinkling
      stars.forEach((star) => {
        star.x -= star.speed;
        if (star.x < -5) {
          star.x = width + 5;
          star.y = Math.random() * height;
        }
        
        // Twinkling effect
        star.opacity += Math.sin(time * star.twinkleSpeed) * 0.01;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        
        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add subtle glow for larger stars
        if (star.radius > 1.5) {
          ctx.shadowColor = star.color;
          ctx.shadowBlur = 4;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      // Create new shooting stars
      createShootingStar();

      // Draw and update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const shootingStar = shootingStars[i];
        
        shootingStar.x -= shootingStar.speed;
        shootingStar.y += shootingStar.speed * shootingStar.angle;
        shootingStar.life -= 0.02;
        shootingStar.opacity = shootingStar.life;
        
        if (shootingStar.life <= 0 || shootingStar.x < -100) {
          shootingStars.splice(i, 1);
          continue;
        }
        
        // Draw shooting star with gradient trail
        ctx.save();
        ctx.globalAlpha = shootingStar.opacity;
        
        const gradient = ctx.createLinearGradient(
          shootingStar.x, shootingStar.y,
          shootingStar.x + shootingStar.length, shootingStar.y + shootingStar.length * shootingStar.angle
        );
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0.5, "#87CEEB");
        gradient.addColorStop(1, "transparent");
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x + shootingStar.length,
          shootingStar.y + shootingStar.length * shootingStar.angle
        );
        ctx.stroke();
        ctx.restore();
      }

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