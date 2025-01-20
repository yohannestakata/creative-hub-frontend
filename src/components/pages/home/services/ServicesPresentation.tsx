"use client";

import { SectionTitle } from "@/components/ui/";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!cardsRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        start: "top top",
        end: `+=${cardsRef.current.scrollWidth - cardsRef.current.offsetWidth}`,
        pin: true,
        immediateRender: false,
      },
    });

    timeline.to(cardsRef.current, {
      ease: "none",
      x: () => {
        if (cardsRef.current) {
          const totalWidth =
            cardsRef.current.scrollWidth - cardsRef.current.offsetWidth;
          return -totalWidth;
        }
        return 0;
      },
    });
  });

  return (
    <section className="py-8 md:py-16">
      <SectionTitle
        sectionName="Our Services"
        sectionTitle="Your Working Day at the Hub"
      />

      {/* Services */}
      <div className="mt-4">
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
                  className="flex h-full w-full flex-shrink-0 items-end rounded-2xl bg-foreground bg-cover bg-center p-6 md:p-12"
                  style={{
                    backgroundImage: `linear-gradient(rgba(39, 21, 3, 0.40), rgba(39, 21, 3, 0.40)), url('${service.imageUrl}')`,
                  }}
                >
                  <div className="flex flex-col gap-3 text-background md:w-1/2">
                    <span className="text-display text-xl font-medium leading-none 2xl:text-2xl">
                      {service.title}
                    </span>
                    <span className="opacity-60 2xl:text-lg 2xl:leading-tight">
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
