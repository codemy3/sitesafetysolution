"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";

const priorityServices = [
  {
    number: "01",
    title: "Fire Risk Assessments",
    href: "/fire-risk-assessments",
    image:
      "/images/service1.png",
    // Card 01: High Crest (Mobile left col: mt-0 | Laptop: mt-0)
    offsetClass: "mt-0 md:mt-0",
    mobileDesc: "PAS 79 compliant assessments & clear fire safety action plans.",
    description: (
      <>
        Site Safety Solutions delivers{" "}
        <strong className="font-bold text-secondary">
          PAS 79 compliant fire risk assessments
        </strong>{" "}
        and clear fire safety action plans—helping commercial, residential, and
        industrial premises meet{" "}
        <strong className="font-bold text-secondary">
          statutory UK legal requirements
        </strong>
        .
      </>
    ),
  },
  {
    number: "02",
    title: "RAMS & Method Statements",
    href: "/services",
    image:
      "/images/service2.png",
    // Card 02: Low Dip (Mobile right col: mt-6 | Laptop: mt-16 / lg:mt-20)
    offsetClass: "mt-6 sm:mt-8 md:mt-16 lg:mt-20",
    mobileDesc: "Task-specific RAMS documentation tailored for site compliance.",
    description: (
      <>
        Preparing{" "}
        <strong className="font-bold text-secondary">
          task-specific Risk Assessments and Method Statements
        </strong>{" "}
        engineered around your actual site operations to satisfy{" "}
        <strong className="font-bold text-secondary">
          Principal Contractors and CDM checks
        </strong>
        .
      </>
    ),
  },
  {
    number: "03",
    title: "H&S Policies & Procedures",
    href: "/services",
    image:
      "/images/service3.png",
    // Card 03: Rises Back Up (Mobile left col: -mt-2 | Laptop: md:mt-4 / lg:mt-6)
    offsetClass: "-mt-2 sm:mt-0 md:mt-4 lg:mt-6",
    mobileDesc: "Bespoke H&S policies & manuals required for 5+ employees.",
    description: (
      <>
        Developing{" "}
        <strong className="font-bold text-secondary">
          bespoke Health &amp; Safety Policies and company manuals
        </strong>{" "}
        required by law for 5+ employees—setting clear responsibilities and{" "}
        <strong className="font-bold text-secondary">
          practical workplace arrangements
        </strong>
        .
      </>
    ),
  },
  {
    number: "04",
    title: "Site Inspections & Audits",
    href: "/services",
    image:
      "/images/service4.png",
    // Card 04: Deepest Wave Dip (Mobile right col: mt-4 | Laptop: md:mt-20 / lg:mt-24)
    offsetClass: "mt-4 sm:mt-8 md:mt-20 lg:mt-24",
    mobileDesc: "Independent workplace & construction site compliance audits.",
    description: (
      <>
        Independent{" "}
        <strong className="font-bold text-secondary">
          workplace and construction site safety audits
        </strong>{" "}
        —identifying compliance gaps early and delivering{" "}
        <strong className="font-bold text-secondary">
          proportionate, cost-effective solutions
        </strong>{" "}
        across all UK sectors.
      </>
    ),
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative bg-white pt-10 sm:pt-14 pb-14 lg:pb-24 overflow-hidden">
      {/* 1. Flowing Multi-Strand Topographic Wave Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <svg
          className="w-full h-full min-w-[1440px] opacity-35"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 22 }).map((_, i) => {
            const offset = i * 14;
            return (
              <path
                key={`wave-a-${i}`}
                d={`M-100 ${650 + offset} C 280 ${250 + offset}, 520 ${
                  -120 + offset
                }, 900 ${280 + offset} C 1180 ${580 + offset}, 1350 ${
                  420 + offset
                }, 1600 ${120 + offset}`}
                stroke="#10B981"
                strokeWidth="1.1"
                strokeOpacity={0.65 - i * 0.02}
              />
            );
          })}

          {Array.from({ length: 18 }).map((_, i) => {
            const offset = i * 16;
            return (
              <path
                key={`wave-b-${i}`}
                d={`M-100 ${220 + offset} C 360 ${640 + offset}, 760 ${
                  720 - offset
                }, 1120 ${260 + offset} C 1320 ${40 + offset}, 1460 ${
                  520 + offset
                }, 1600 ${680 + offset}`}
                stroke="#059669"
                strokeWidth="1"
                strokeOpacity={0.4 - i * 0.015}
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        {/* 2. Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight">
            Our Core <span className="text-primary">Services</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
            <span className="w-8 h-[2px] bg-gray-200 rounded-full" />
            <span className="w-10 h-1 bg-primary rounded-full" />
            <span className="w-8 h-[2px] bg-gray-200 rounded-full" />
          </div>

          <p className="text-xs sm:text-base text-textLight leading-relaxed px-2">
            Practical, proportionate health and safety support focused on the
            four essential compliance areas UK businesses need most.
          </p>
        </div>

        {/* 3. Staggered Wave Cards (2x2 Staggered on Mobile, 4-Col Wave on Laptop/Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-7 items-start">
          {priorityServices.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className={`group flex flex-col items-center ${service.offsetClass}`}
            >
              {/* Outer Animated Border Wrapper */}
              <Link
                href={service.href}
                className="relative w-full p-[1.5px] sm:p-[2px] rounded-2xl bg-gray-200/80 overflow-hidden shadow-[0_14px_35px_rgba(15,23,42,0.07)] hover:shadow-[0_25px_60px_rgba(34,197,94,0.22)] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Continuous Rotating Emerald Laser Border Beam */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg 250deg, #22C55E 290deg, #059669 330deg, transparent 360deg)",
                  }}
                  className="pointer-events-none absolute -inset-[120%] opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Top-Left & Bottom-Right Architectural Corner Brackets */}
                <span className="pointer-events-none absolute top-0 left-0 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-2 border-l-2 border-primary rounded-tl-2xl z-20" />
                <span className="pointer-events-none absolute bottom-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-2 border-r-2 border-primary rounded-br-2xl z-20" />

                {/* Inner White Card Surface */}
                <div className="relative z-10 w-full h-full bg-white rounded-[14px] flex flex-col overflow-hidden">
                  {/* Top Image Frame */}
                  <div className="relative w-full h-28 sm:h-48 lg:h-56 overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/45 via-transparent to-transparent" />

                    {/* Corner Action Badge */}
                    <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/95 text-secondary group-hover:bg-primary group-hover:text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
                    </span>
                  </div>

                  {/* Text Block — Clean & Concise on Mobile, Full Editorial on Desktop */}
                  <div className="p-3 sm:px-5 sm:pt-5 sm:pb-6 text-center flex-1 flex flex-col justify-between relative">
                    <div>
                      <h3 className="text-[13px] sm:text-base lg:text-[17px] font-extrabold text-secondary group-hover:text-primary transition-colors mb-1.5 sm:mb-2.5 leading-snug">
                        {service.title}
                      </h3>

                      {/* Mobile Concise Copy (Prevents tiny cramped wall of text) */}
                      <p className="sm:hidden text-[11px] text-gray-600 leading-relaxed">
                        {service.mobileDesc}
                      </p>

                      {/* Tablet & Laptop Full Highlighted Copy */}
                      <p className="hidden sm:block text-xs lg:text-[13.5px] text-gray-600 leading-[1.7]">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Animated Accent Line Inside Card */}
                    <span className="mx-auto mt-2.5 sm:mt-5 block w-8 sm:w-10 group-hover:w-14 sm:group-hover:w-20 h-[2px] sm:h-[3px] rounded-full bg-primary/35 group-hover:bg-primary transition-all duration-300" />
                  </div>
                </div>
              </Link>

              {/* Hanging Stem with Glowing Connector Node + Number (Scaled for Mobile & Desktop) */}
              <div className="flex flex-col items-center">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary -mt-1 sm:-mt-1.5 z-20 ring-2 sm:ring-4 ring-white transition-transform duration-300 group-hover:scale-125" />
                <span className="w-[1.5px] sm:w-[2px] h-3.5 sm:h-6 bg-gradient-to-b from-primary to-secondary transition-all duration-300 group-hover:h-5 sm:group-hover:h-8" />
                <span className="mt-0.5 sm:mt-1.5 text-xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight select-none transition-transform duration-300 group-hover:scale-110">
                  {service.number}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. Strong Architectural Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 sm:mt-14 lg:mt-16 flex items-center justify-center gap-4 sm:gap-6"
        >
          <div className="hidden sm:block h-[1.5px] flex-1 max-w-[180px] bg-gradient-to-r from-transparent via-gray-300 to-primary/50" />

          <Link
            href="/services"
            className="group relative inline-flex items-center p-1 sm:p-1.5 rounded-full bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 shadow-[0_12px_35px_-8px_rgba(34,197,94,0.35)] hover:shadow-[0_18px_45px_-8px_rgba(34,197,94,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="relative overflow-hidden inline-flex items-center gap-2.5 sm:gap-3.5 bg-secondary text-white pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full border border-white/10">
              <motion.div
                animate={{ x: ["-150%", "250%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 3.5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"
              />

              <span className="relative z-10 hidden sm:inline-flex items-center gap-1.5 bg-primary/20 border border-primary/40 text-primary text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                <Layers size={12} />
                +5 More
              </span>

              <span className="relative z-10 text-xs sm:text-sm font-extrabold tracking-wide text-white group-hover:text-primary transition-colors">
                Explore All 9 Health &amp; Safety Services
              </span>

              <span className="relative z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-primary text-gray-950 flex items-center justify-center overflow-hidden shrink-0">
                <ArrowUpRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-5"
                />
                <ArrowUpRight
                  size={15}
                  strokeWidth={2.5}
                  className="absolute -translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </span>
            </div>
          </Link>

          <div className="hidden sm:block h-[1.5px] flex-1 max-w-[180px] bg-gradient-to-l from-transparent via-gray-300 to-primary/50" />
        </motion.div>
      </div>
    </section>
  );
}