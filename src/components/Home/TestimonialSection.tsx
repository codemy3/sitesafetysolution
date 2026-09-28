"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-24 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-start">
          
          {/* Left Column (3 Cols): Minimal Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-3 flex items-center gap-2.5 sm:gap-3 lg:pt-2"
          >
            <span className="w-6 sm:w-8 h-[2px] bg-primary shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary lg:text-secondary">
              Client Feedback
            </span>
          </motion.div>

          {/* Right Column (9 Cols): Open Editorial Pull-Quote */}
          <div className="lg:col-span-9">
            <motion.blockquote
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative pl-3.5 sm:pl-0 border-l-2 border-primary/40 sm:border-l-0"
            >
              {/* Oversized Typographic Quote Mark (Desktop & Tablet) */}
              <span
                aria-hidden="true"
                className="hidden sm:block font-serif text-6xl lg:text-7xl leading-none text-primary select-none -mb-4"
              >
                &ldquo;
              </span>

              <p className="text-lg sm:text-3xl lg:text-[2.3rem] font-bold text-secondary tracking-tight leading-[1.35] sm:leading-[1.28]">
                <span className="sm:hidden text-primary font-serif text-2xl leading-none mr-1">
                  &ldquo;
                </span>
                Practical and cost-effective support that{" "}
                <span className="text-primary">
                  significantly improved our site safety and CDM compliance.
                </span>{" "}
                Clear recommendations and professional support throughout our
                projects.
                <span className="sm:hidden text-primary font-serif text-2xl leading-none ml-1">
                  &rdquo;
                </span>
              </p>
            </motion.blockquote>

            {/* Bottom Attribution Row (Compact Side-by-Side on Mobile & Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-6 pt-5 sm:mt-10 sm:pt-8 border-t border-gray-200 flex items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm sm:text-lg font-extrabold text-secondary tracking-tight truncate">
                    Manoj Shahi
                  </p>
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-primary">
                    London, UK
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-textLight font-medium mt-0.5 truncate">
                  Construction Manager, Byoot Construction Ltd
                </p>
              </div>

              <Link
                href="/work"
                className="group inline-flex items-center gap-2 sm:gap-2.5 bg-[#F8FAFC] hover:bg-secondary border border-gray-200/90 hover:border-secondary text-secondary hover:text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider pl-3.5 pr-1.5 py-1.5 sm:pl-4 sm:pr-2 sm:py-2 rounded-full transition-all duration-300 shrink-0"
              >
                <span className="hidden xs:inline sm:inline">Case Study</span>
                <span className="xs:hidden sm:hidden">View Work</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-secondary flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}