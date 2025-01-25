"use client";

import {
  FacebookIcon,
  Instagram,
  Linkedin,
  Mail,
  Send,
  Smartphone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

import { useJoinDialog } from "../ui";

const Footer = () => {
  const { Dialog, showDialog } = useJoinDialog();

  return (
    <>
      <footer className="">
        <div className="flex flex-col gap-12 px-4 py-16 md:flex-row md:gap-4 md:px-8">
          <div className="flex-1">
            <span className="font-display text-xl font-medium uppercase leading-none tracking-tighter lg:text-3xl 2xl:text-4xl">
              Join the Creative Community
            </span>
            <p className="mt-4 text-muted-foreground 2xl:text-lg 2xl:leading-normal">
              Unlock full access to Creative Hub Ethiopia—book spaces, schedule
              events, connect with industry experts, and stay ahead with
              exclusive trainings and opportunities.
            </p>
            <button
              className="mt-5 rounded-full bg-primary px-6 py-3 leading-none 2xl:text-lg"
              onClick={showDialog}
            >
              Join the community
            </button>
          </div>
          <div className="grid flex-1 grid-cols-6 gap-4 2xl:text-lg">
            <div className="col-span-4 md:col-span-3">
              <span className="font-semibold uppercase">Contact</span>
              <ul className="mt-3 space-y-2 2xl:mt-5 2xl:space-y-4">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  >
                    <Smartphone />
                    <span>+251 965067723</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  >
                    <Mail />
                    <span>info@creativehub.et</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  >
                    <Send />
                    <span>Get in touch</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <span className="font-semibold uppercase">Sitemap</span>
              <ul className="mt-3 grid grid-cols-1 gap-2 2xl:mt-5 2xl:space-y-4">
                <li>
                  <Link
                    href="/"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:underline hover:underline-offset-4"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-full md:col-span-1">
              <ul className="flex gap-4 md:flex-col">
                <li>
                  <Link href="/">
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Twitter />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Linkedin />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Youtube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t px-4 py-6 2xl:text-lg 2xl:leading-normal">
          <div className="text-left lg:text-center">
            Copyright &copy; 2025 Creative Hub Ethiopia | All rights reserved
          </div>
          <div className="text-left lg:text-center">
            Designed and developed by{" "}
            <Link href="/" className="underline">
              Ras Tech
            </Link>
          </div>
        </div>
      </footer>
      <Dialog />
    </>
  );
};

export default Footer;
