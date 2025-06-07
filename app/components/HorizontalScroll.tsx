import { useEffect } from "react";

const HorizontalScroll: React.FC = () => {
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      window.scrollBy({ left: e.deltaY, behavior: "auto" });
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return null;
};

export default HorizontalScroll; 