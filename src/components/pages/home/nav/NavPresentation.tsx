"use client";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/Creative-Hub.svg";
import { useJoinDialog } from "@/components/ui";

export default function NavPresentation() {
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const { Dialog, showDialog } = useJoinDialog();

  useGSAP(() => {
    const showAnim = gsap.from(toolbarRef.current, {
      yPercent: -100,
      opacity: 0,
    });

    ScrollTrigger.create({
      start: "top+=100 top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });
  });

  return (
    <>
      <nav
        ref={toolbarRef}
        className="fixed top-0 z-50 flex h-fit w-full items-center justify-between px-4 py-6 leading-none md:px-8"
      >
        <div className="flex w-full flex-1 justify-between">
          <Link href="/">
            <div className="z-50 flex h-14 items-center gap-2">
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
          className="rounded-full bg-primary px-4 py-2 text-base leading-none md:px-6 md:py-3 md:text-base"
          onClick={showDialog}
        >
          Join now
        </button>
      </nav>
      <Dialog />
    </>
  );
}
