"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import creativeHubLogo from "@/../public/icon-background.png";

interface SplashScreenProps {
  children: React.ReactNode;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkResourcesLoaded = () => {
      const images = Array.from(document.images);
      const videos = Array.from(document.querySelectorAll("video"));
      const audio = Array.from(document.querySelectorAll("audio"));

      const allImagesLoaded = images.every((img) => img.complete);
      const allVideosLoaded = videos.every((video) => video.readyState >= 2);
      const allAudioLoaded = audio.every((audio) => audio.readyState >= 2);

      if (allImagesLoaded && allVideosLoaded && allAudioLoaded) {
        setIsLoading(false);
      } else {
        setTimeout(checkResourcesLoaded, 100);
      }
    };

    checkResourcesLoaded();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary">
          <Image
            priority
            src={creativeHubLogo}
            alt="Creative Hub"
            width={1000}
            height={1000}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="mt-4 flex animate-pulse overflow-clip font-display text-5xl font-medium uppercase leading-none tracking-tighter">
            {"Selam...".split("").map((char, index) => (
              <span
                key={index}
                className={`translate-y-full animate-[stagger_0.2s_ease-in-out_forwards]`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default SplashScreen;
