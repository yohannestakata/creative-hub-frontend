"use client";

import { SectionTitle } from "@/components/ui/";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

interface Services {
  id: string;
  title: string;
  copy: string;
  imageUrl: string;
}

interface ServicesPresentationProps {
  services: Services[];
}

const ServicesPresentation = ({ services }: ServicesPresentationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Handle image preloading
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = services.map((service) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = service.imageUrl;
          img.onload = resolve;
          img.onerror = resolve; // Handle errors gracefully
        });
      });

      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true);
        ScrollTrigger.refresh();
      });
    };

    preloadImages();
  }, [services]);

  useGSAP(() => {
    if (!imagesLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    if (!cardsRef.current || !containerRef.current) return;

    // Calculate dimensions after images are loaded
    const calculateDimensions = () => {
      if (!cardsRef.current) return 0;
      return -(cardsRef.current.scrollWidth - cardsRef.current.offsetWidth);
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      scrub: true,
      start: "top top",
      end: () => `+=${Math.abs(calculateDimensions())}`,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    const scrollTween = gsap.to(cardsRef.current, {
      ease: "none",
      x: calculateDimensions,
    });

    // Handle resize events
    const handleResize = () => {
      ScrollTrigger.refresh(true);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      scrollTween.kill();
      scrollTrigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded]); // Run after images are loaded

  return (
    <section className="py-8 md:py-16">
      <SectionTitle
        sectionName="Our Services"
        sectionTitle="Your Working Day at the Hub"
      />

      <div className="pt-4">
        <div
          className="h-screen w-full overflow-hidden py-6"
          ref={containerRef}
        >
          <div className="relative h-full w-full px-4 md:px-8">
            <div
              ref={cardsRef}
              className="absolute inset-x-8 flex h-full gap-4"
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="service-card-item flex h-full w-full flex-shrink-0 items-end rounded-2xl bg-foreground bg-cover bg-center p-6 md:p-12"
                  style={{
                    backgroundImage: `linear-gradient(rgba(39, 21, 3, 0.40), rgba(39, 21, 3, 0.40)), url('${service.imageUrl}')`,
                  }}
                >
                  <div className="flex flex-col gap-3 text-background md:w-1/2">
                    <span className="text-display text-2xl font-medium leading-none">
                      {service.title}
                    </span>
                    <span className="opacity-60 2xl:leading-tight">
                      {service.copy}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPresentation;
