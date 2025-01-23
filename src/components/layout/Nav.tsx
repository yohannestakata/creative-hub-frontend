"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/Creative-Hub.svg";

import { useJoinDialog } from "../ui";

export default function Nav() {
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const { Dialog, showDialog } = useJoinDialog();

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
    <>
      <nav
        ref={toolbarRef}
        className={`main-tool-bar sticky top-0 z-50 col-span-12 flex h-fit w-full items-center justify-between border-b border-border bg-background px-4 py-6 leading-none md:px-8`}
      >
        <div className={`flex w-full flex-1 justify-between`}>
          <Link href="/">
            <div className="z-50 flex items-center gap-2 md:h-14 2xl:h-20">
              <Image
                src={logo}
                alt="Ras Tech Logo"
                width={120}
                height={120}
                className="block h-full w-10/12 md:w-full md:object-cover"
              />
            </div>
          </Link>
        </div>

        <button
          className="flex rounded-full bg-primary px-4 py-2 text-[14px] leading-none md:px-6 md:py-3 md:text-base 2xl:text-lg"
          onClick={showDialog}
        >
          Join now
        </button>
      </nav>
      <Dialog />
    </>
  );
}
