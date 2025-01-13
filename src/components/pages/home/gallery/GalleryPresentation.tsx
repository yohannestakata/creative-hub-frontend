"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { twJoin } from "tailwind-merge";
import SectionTitle from "@/components/ui/SectionTitle";

type Image = {
  id: string;
  url: string;
  alt: string;
};

interface GalleryPresentationProps {
  images: Image[][];
}

const GalleryPresentation = ({ images }: GalleryPresentationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cols = [col1Ref.current, col2Ref.current, col3Ref.current];
    if (!containerRef.current || cols.some((col) => !col)) return;

    const heights = cols.map((col) => col!.offsetHeight);
    const maxHeight = Math.max(...heights);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${maxHeight}px`,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
      },
    });

    cols.forEach((col, index) => {
      if (!col) return;

      timeline.to(
        col,
        {
          y: window.innerHeight - heights[index],
          ease: "none",
          duration: 1,
        },
        0,
      );
    });
  });

  return (
    <section className="py-16">
      <SectionTitle
        sectionName="Gallery"
        sectionTitle="Celebrating Notable Guests"
      />

      <div
        className="mt-10 grid h-screen grid-cols-12 gap-4 overflow-hidden px-8 will-change-transform"
        ref={containerRef}
      >
        {[col1Ref, col2Ref, col3Ref].map((colRef, colIndex) => (
          <div
            key={colIndex}
            className="col-span-4 flex h-fit flex-col gap-4 will-change-transform"
            ref={colRef}
          >
            {images[colIndex]?.slice(0, 5).map((image, index) => (
              <div
                className={twJoin(
                  "w-full overflow-hidden rounded-2xl bg-muted",
                  colIndex === 1
                    ? index % 2 !== 0
                      ? "aspect-square"
                      : "aspect-video"
                    : index % 2 !== 0
                      ? "aspect-video"
                      : "aspect-square",
                )}
                key={image.url}
              >
                <Image
                  width={300}
                  height={300}
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  loading="eager"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPresentation;
