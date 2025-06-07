import { useEffect } from "react";

export default function GlobalEffects() {
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
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    document.body.appendChild(cursor);
    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    document.addEventListener('mousemove', moveCursor);

    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', moveCursor);
      cursor.remove();
    };
  }, []);

  return null;
} 