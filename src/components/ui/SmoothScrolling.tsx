"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollingProps {
  children: React.ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  const ReactLenisComponent = ReactLenis as React.ComponentType<{
    root?: boolean;
    options?: {
      duration?: number;
      smoothWheel?: boolean;
      wheelMultiplier?: number;
    };
    children?: React.ReactNode;
  }>;

  return (
    <ReactLenisComponent
      root
      options={{
        duration: 2,
        smoothWheel: true,
        wheelMultiplier: 0.2,
      }}
    >
      {children}
    </ReactLenisComponent>
  );
};

export default SmoothScrolling;
