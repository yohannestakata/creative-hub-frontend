"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { Play } from "lucide-react";
import Image from "next/image";
import backgroundImage from "../../../../../public/icon-background.png";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface AboutPresentationProps {
  title: string;
  copy: string;
  videoUrl: string;
  videoThumbnailUrl: string;
}

const CustomPlayButton = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40">
    <div className="rounded-full bg-foreground/75 p-4 backdrop-blur-md">
      <Play className="h-6 w-6 text-white" strokeWidth={1.5} />
    </div>
  </div>
);

const AboutPresentation = ({
  title,
  copy,
  videoUrl,
  videoThumbnailUrl,
}: AboutPresentationProps) => {
  const videoInnerContainerRef = useRef<HTMLDivElement>(null);
  const videoOuterContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const bulbImageRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
        start: "top top",
        end: () => "100%",
        pin: true,
        immediateRender: false,
        anticipatePin: 1,
      },
    });

    if (typeof window !== "undefined") {
      timeline
        .to(videoInnerContainerRef.current, {
          ease: "none",
          width: "100%",
          height: window.innerHeight - 48,
        })
        .to(
          videoOuterContainerRef.current,
          {
            ease: "none",
            top: 24,
            marginTop: 0,
            paddingLeft: 32,
            paddingRight: 32,
          },
          "<",
        )
        .to(bulbImageRef.current, { filter: "blur(20px)" }, "<")
        .to(
          textContainerRef.current,
          { ease: "none", x: -64, y: 64, scale: 0.8, opacity: 0 },
          "<",
        );
    }
  }, []);

  useGSAP(() => {
    const letters = document.querySelectorAll(".letter");

    if (letters.length) {
      gsap.fromTo(
        letters,
        { y: "100%", opacity: 0 },
        {
          ease: "expo.inOut",
          y: "0%",
          opacity: 1,
          duration: 0.2,
          stagger: 0.02,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }
  });

  return (
    <section className="relative min-h-screen pb-8 md:pb-16" ref={sectionRef}>
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="pointer-events-none absolute left-0 top-0 h-screen w-full object-cover"
        ref={bulbImageRef}
      />
      <div className="relative grid grid-cols-12 gap-4 px-4 md:px-8">
        <div
          className="col-span-full h-fit pt-8 md:col-span-8 md:col-start-3 md:pt-16"
          ref={textContainerRef}
        >
          <h2 className="font-display text-2xl font-medium uppercase leading-none tracking-tighter md:text-3xl">
            {title.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block">
                {word.split("").map((letter, letterIndex) => (
                  <span
                    key={letterIndex}
                    className="inline-block overflow-y-clip"
                  >
                    <span className="letter inline-block transition-transform">
                      {letter}
                    </span>
                  </span>
                ))}
                {wordIndex < title.split(" ").length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </h2>

          <p className="mt-6 leading-6 text-muted-foreground">{copy}</p>
        </div>
        <div
          className="absolute left-0 top-full mt-6 w-full pl-4 md:pl-[calc((100%_-_((11_*_24px)_+_64px))_/_12_*_2_+_24px_*_2_+_32px)]"
          ref={videoOuterContainerRef}
        >
          <div
            ref={videoInnerContainerRef}
            className="relative aspect-video w-1/2 overflow-hidden rounded-2xl bg-foreground md:w-1/4"
          >
            <div className="absolute inset-0">
              <Suspense
                fallback={<div className="h-full w-full bg-gray-200" />}
              >
                <ReactPlayer
                  url={videoUrl}
                  loop
                  playing
                  muted
                  width="100%"
                  height="100%"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  config={{
                    file: {
                      attributes: {
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        },
                      },
                    },
                  }}
                  light={
                    <div className="absolute inset-0">
                      <Image
                        fill
                        alt="Video thumbnail"
                        src={videoThumbnailUrl}
                        className="object-cover"
                        priority
                      />
                    </div>
                  }
                  playIcon={<CustomPlayButton />}
                  aria-label="Creative Hub opening day"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPresentation;
