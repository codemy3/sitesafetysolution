"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers, FileCheck2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] sm:min-h-[90vh] w-full flex items-end sm:items-center pt-28 pb-10 sm:pt-32 sm:pb-16 overflow-hidden bg-secondary">
      {/* 1. Background Image — Focal point shifted on mobile so the worker stays visible */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[72%_center] sm:bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/hero.png")',
        }}
      >
        {/* Mobile Overlay: Top-to-Bottom Editorial Gradient so top image is clear & bottom text is crisp */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-[#0B111E] via-[#0B111E]/88 via-65% to-[#0B111E]/25" />

        {/* Desktop Overlay: Original Left-to-Right Gradient */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#0B111E]/95 via-[#0B111E]/80 via-50% to-transparent" />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px]"
        >


          {/* Strict 2-Line Headline */}
          <h1 className="text-[1.9rem] leading-[1.08] sm:text-5xl lg:text-[3.25rem] font-extrabold text-white uppercase tracking-tight sm:leading-[1.1] mb-4 sm:mb-5">
            <span className="block sm:whitespace-nowrap">
              Practical &amp; Compliant
            </span>
            <span className="block sm:whitespace-nowrap">
              Site Safety <span className="text-primary">Solutions.</span>
            </span>
          </h1>

          {/* Lead Paragraph */}
          <div className="relative pl-3.5 sm:pl-4 border-l-2 border-primary mb-6 sm:mb-8 max-w-lg">
            <p className="text-xs sm:text-[15px] text-gray-200/95 leading-relaxed">
              OSHCR Registered Consultant providing practical, reliable and
              cost-effective health and safety consultancy, RAMS documentation,
              and site support across all UK sectors.
            </p>
          </div>

          {/* Action Row — Side-by-side on mobile (grid-cols-2), original flex on desktop */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-9">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between sm:justify-start gap-2 sm:gap-4 bg-white text-gray-950 font-bold text-xs sm:text-sm pl-4 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 rounded-full overflow-hidden transition-colors duration-300 shadow-xl"
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-gray-950 transition-colors">
                Book Consultation
              </span>
              <span className="relative z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gray-950 text-white flex items-center justify-center shrink-0 overflow-hidden">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-5"
                />
                <ArrowUpRight
                  size={14}
                  className="absolute -translate-x-5 translate-y-5 text-primary transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </span>
            </Link>

            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5 px-3.5 py-2.5 sm:px-6 sm:py-3.5 rounded-full border border-white/25 bg-white/[0.04] sm:bg-transparent text-white text-xs sm:text-sm font-semibold overflow-hidden backdrop-blur-sm"
            >
              <span className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <Layers
                size={15}
                className="relative z-10 text-primary shrink-0 transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="relative z-10">Explore 9 Services</span>
            </Link>
          </div>

          {/* High-Contrast Split Offer Board — Stays Horizontal on Mobile & Desktop */}
          <Link
            href="/contact"
            className="group relative inline-block w-full max-w-[490px] p-1 sm:p-1.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60"
          >
            {/* 5-Second Periodic Light Sweep */}
            <motion.div
              animate={{ x: ["-150%", "250%"] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatDelay: 3.9,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent z-30"
            />

            <div className="relative z-10 rounded-xl bg-[#0F172A] border border-white/10 flex flex-row items-stretch overflow-hidden">
              {/* Left Dark Details Area */}
              <div className="flex-1 p-3 sm:px-5 sm:py-4 flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 text-primary">
                  <FileCheck2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-primary truncate">
                    Fixed-Fee Turnaround
                  </span>
                  <h2 className="text-xs sm:text-base font-bold text-white leading-tight mt-0.5 truncate">
                    H&amp;S Documentation
                  </h2>
                  <p className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 truncate">
                    RAMS, Policies &amp; Fire Risk
                  </p>
                </div>
              </div>

              {/* Right Solid Green Price Block — Docked on the Right in Both Mobile & Desktop */}
              <div className="bg-primary group-hover:bg-accent transition-colors px-4 py-2.5 sm:px-5 sm:py-3.5 flex flex-col items-center justify-center text-gray-950 shrink-0">
                <span className="text-xs sm:text-sm font-black tracking-tight uppercase leading-none text-center">
                  Request<br/>Quote
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}