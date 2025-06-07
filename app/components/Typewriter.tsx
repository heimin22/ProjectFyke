import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, className = "" }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    let current = "";
    let timer: ReturnType<typeof setTimeout>;
    const type = () => {
      if (index < text.length) {
        current += text[index];
        setDisplayed(current);
        index++;
        timer = setTimeout(type, speed);
      }
    };
    type();
    return () => clearTimeout(timer);
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
};

export default Typewriter; 