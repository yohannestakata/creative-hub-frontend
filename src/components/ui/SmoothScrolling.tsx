"use client";
import { ReactLenis } from "lenis/react";

interface SmoothScrollingProps {
  children: React.ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        smoothWheel: true,
        wheelMultiplier: 0.45,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
