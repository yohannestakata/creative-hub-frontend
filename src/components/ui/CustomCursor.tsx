"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const links = document.querySelectorAll("a, button");

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    const followMouse = (e) => {
      gsap.to(cursor, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      });
    };

    const expandCursor = () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 2.5,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: "0.5px solid white",
        ease: "power2.out",
      });
    };

    const shrinkCursor = () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 1,
        backgroundColor: "white",
        border: "0.5px solid rgba(255, 255, 255, 0.1)",
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", followMouse);
    links.forEach((link) => {
      link.addEventListener("mouseenter", expandCursor);
      link.addEventListener("mouseleave", shrinkCursor);
    });
  });

  return (
    <>
      <style>
        {`
          body { cursor: none; }
          a, button { cursor: pointer; }
        `}
      </style>
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-white mix-blend-difference"
        ref={cursorRef}
      />
    </>
  );
};

export default CustomCursor;
