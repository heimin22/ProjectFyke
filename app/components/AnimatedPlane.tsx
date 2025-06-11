import React from "react";

interface AnimatedPlaneProps {
  width?: number;
  height?: number;
  color?: string;
  duration?: number;
}

const AnimatedPlane: React.FC<AnimatedPlaneProps> = ({
  width = 100,
  height = 100,
  color = "#3490dc",
  duration = 5,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        from={`${width * -1} 0`}
        to={`${width * 2} 0`}
        dur={`${duration}s`}
        repeatCount="indefinite"
      />
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        values="0 50 50;10 50 50;0 50 50;-10 50 50;0 50 50"
        dur={`${duration / 2}s`}
        repeatCount="indefinite"
        additive="sum"
      />
      <polygon points="0,0 100,50 0,100" fill={color} />
    </g>
  </svg>
);

export default AnimatedPlane; 