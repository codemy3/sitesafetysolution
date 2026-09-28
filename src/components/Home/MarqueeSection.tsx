"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const accreditations = [
  {
    acronym: "OSHCR",
    logo: "/images/OSHCR.webp",
    sizeClass: "w-36 sm:w-44 lg:w-48 h-10 sm:h-12 lg:h-14",
  },
  {
    acronym: "IOSH",
    logo: "/images/IOSH.png",
    sizeClass: "w-44 sm:w-52 lg:w-60 h-12 sm:h-14 lg:h-16",
  },
  {
    acronym: "IIRSM",
    logo: "/images/iism.png",
    sizeClass: "w-40 sm:w-48 lg:w-56 h-11 sm:h-14 lg:h-15",
  },
];

// Repeated 8x so wide screens have a seamless loop with zero gaps
const marqueeTrack = [
  ...accreditations,
  ...accreditations,
  ...accreditations,
  ...accreditations,
  ...accreditations,
  ...accreditations,
  ...accreditations,
  ...accreditations,
];

export default function MarqueeSection() {
  return (
    <section className="relative z-20 w-full bg-white border-b border-gray-200/80 py-5 sm:py-6 lg:py-7 overflow-hidden">
      {/* Full-Width Container (No max-w-7xl cap, so zero blank space on edges) */}
      <div className="w-full px-0 md:pl-6 lg:pl-10">
        <div className="flex flex-col md:flex-row items-center gap-3.5 md:gap-0">
          
          {/* Mobile Label: Compact single-line centered badge */}
          <div className="flex md:hidden items-center justify-center gap-2 px-4">
            <span className="w-5 h-[2px] bg-primary rounded-full" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-secondary">
              Registered &amp; Accredited By
            </span>
            <span className="w-5 h-[2px] bg-primary rounded-full" />
          </div>

          {/* Laptop/Desktop Left Label: Original Left Placement Restored */}
          <div className="hidden md:flex shrink-0 pr-8 border-r border-gray-200 items-center gap-3.5 bg-white relative z-20 py-1">
            <span className="w-1 h-9 bg-primary rounded-full shrink-0" />
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-primary leading-none">
                Official Credentials
              </span>
              <p className="text-sm lg:text-base font-extrabold text-secondary tracking-tight mt-1.5 whitespace-nowrap">
                Registered &amp; Accredited By
              </p>
            </div>
          </div>

          {/* Right Borderless Logo Marquee — No White Fade Masks, Runs All the Way to the Corner */}
          <div className="relative flex-1 w-full overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max items-center py-1"
            >
              {marqueeTrack.map((item, index) => (
                <div key={index} className="flex items-center shrink-0">
                  <div
                    className={`relative mx-6 sm:mx-10 lg:mx-12 ${item.sizeClass} flex items-center justify-center opacity-95 hover:opacity-100 transition-opacity duration-300`}
                  >
                    <Image
                      src={item.logo}
                      alt={item.acronym}
                      fill
                      sizes="(max-width: 640px) 180px, 240px"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>

                  {/* Subtle Dot Divider */}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}