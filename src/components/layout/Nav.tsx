"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/Creative-Hub.svg";

export default function Nav() {
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    const showAnim = gsap
      .from(toolbarRef.current, {
        yPercent: -200,
        opacity: 0,
        paused: true,
        duration: 0.3,
        scrollTrigger: {
          start: "top top",
          end: "max",
          onUpdate: (self) => {
            return self.direction === -1 ? showAnim.play() : showAnim.reverse();
          },
        },
      })
      .progress(1);
  });

  return (
    <nav
      ref={toolbarRef}
      className={`main-tool-bar sticky top-0 z-50 col-span-12 flex h-fit w-full items-center justify-between border-b border-border bg-background px-4 py-6 leading-none md:px-8`}
    >
      <div className={`flex w-full flex-1 justify-between`}>
        <Link href="/">
          <div className="z-50 flex h-14 items-center gap-2">
            <Image
              src={logo}
              alt="Ras Tech Logo"
              width={120}
              height={120}
              className="block h-full w-full object-cover"
            />
          </div>
        </Link>
      </div>

      <button className="flex rounded-full bg-primary px-6 py-3 leading-none">
        Join the community
      </button>
    </nav>
  );
}
