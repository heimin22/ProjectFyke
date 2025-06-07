import { useEffect, useRef } from "react";

export default function GlobalEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered reveal animations
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach(el => observer.observe(el));

    // Cursor-following element
    const cursor = cursorRef.current;
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    document.addEventListener('mousemove', moveCursor);

    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="cursor-follower"
      style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999 }}
    />
  );
}