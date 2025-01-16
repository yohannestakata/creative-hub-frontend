"use client";
import { SectionTitle } from "@/components/ui";
import Image from "next/image";
import { useRef, RefCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type Service = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
};

interface AboutServicesPresentation {
  services: Service[];
}

const AboutServicesPresentation = ({ services }: AboutServicesPresentation) => {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const setImageRef: RefCallback<HTMLDivElement> = (
    element: HTMLDivElement | null,
  ) => {
    const index = services.findIndex((service) =>
      element?.closest(`[data-service-id="${service.id}"]`),
    );
    if (index !== -1) {
      imagesRef.current[index] = element;
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    imagesRef.current.forEach((imageContainer) => {
      if (!imageContainer) return;

      const image = imageContainer.querySelector("img");
      if (!image) return;

      gsap.to(image, {
        y: "25%",
        ease: "none",
        scrollTrigger: {
          trigger: imageContainer,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      });
    });
  });

  return (
    <section className="py-16">
      <SectionTitle
        sectionTitle="Your Working Day at The Hub"
        sectionName="Services"
      />
      <div className="mt-8 flex flex-col md:px-8 px-4">
        {services.map((service) => (
          <div
            key={service.id}
            data-service-id={service.id}
            className="grid grid-cols-12 gap-4 border-b border-border py-10"
          >
            <div
              ref={setImageRef}
              className="relative col-span-12  overflow-hidden rounded-2xl bg-black md:aspect-banner lg:col-span-6 aspect-square lg:aspect-square"
            >
              <Image
                src={service.imageUrl}
                width={500}
                height={500}
                alt=""
                className="h-full w-full -translate-y-1/4 transform object-cover"
              />
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <h2 className="font-display text-xl font-medium leading-none tracking-tight lg:text-2xl">
                {service.title}
              </h2>
              <p className="mt-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutServicesPresentation;
