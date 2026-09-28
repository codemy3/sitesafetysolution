"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl sm:rounded-3xl bg-primary p-6 sm:px-12 sm:py-14 lg:px-14 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 overflow-hidden shadow-[0_20px_50px_rgba(34,197,94,0.18)]"
        >
          {/* Subtle Architectural Circle Accent */}
          <div className="pointer-events-none absolute -right-16 -bottom-16 sm:-right-20 sm:-bottom-20 w-48 h-48 sm:w-80 sm:h-80 rounded-full border-[20px] sm:border-[32px] border-white/15" />

          {/* Left: Minimal Text Only */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-secondary tracking-tight leading-[1.15]">
              Practical Safety Solutions for Safer Businesses.
            </h2>
            <p className="text-secondary/85 text-xs sm:text-base lg:text-lg font-medium mt-2 leading-relaxed">
              Have a question or need support? Contact us today for a
              no-obligation discussion.
            </p>
          </div>

          {/* Right: Single High-Contrast Button */}
          <Link
            href="/contact"
            className="group relative z-10 inline-flex items-center justify-between sm:justify-start gap-3 sm:gap-4 bg-secondary hover:bg-gray-950 text-white font-bold text-xs sm:text-base pl-5 pr-1.5 py-1.5 sm:pl-7 sm:pr-2.5 sm:py-2.5 rounded-full transition-all duration-300 shadow-lg shrink-0"
          >
            <span>Get in Touch</span>
            <span className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-secondary flex items-center justify-center overflow-hidden shrink-0">
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-5"
              />
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="absolute -translate-x-5 translate-y-5 text-primary transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}