"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070A0E] pt-14 sm:pt-20 pb-8 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. TOP FOOTER: Brand (Left) + 3 Consolidated Columns (Right) */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:pb-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column (4 Cols on Desktop): Logo & Tagline */}
          <div className="flex flex-col items-start justify-start lg:col-span-4">
            <Link href="/" className="mb-4 sm:mb-5 inline-block">
              <Image
                src="/logo-bg-black.webp"
                alt="Site Safety Solutions Ltd"
                width={220}
                height={80}
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>

            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-gray-400">
              Practical, reliable and cost-effective health &amp; safety
              consultancy, documentation and site support for businesses across
              the UK.
            </p>
          </div>

          {/* Right Columns (8 Cols on Desktop): 2-per-row on Mobile, 3-per-row on Tablet/Desktop */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-8">
            
            {/* Column 1: Company & Service Area */}
            <div>
              <h3 className="mb-4 sm:mb-5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white">
                Company
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <p className="font-semibold text-white">
                    Site Safety Solutions Ltd
                  </p>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-gray-400">
                    Company No. 17410537
                  </p>
                </div>

                <div>
                  <p className="mb-0.5 text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500">
                    Registered Office
                  </p>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-gray-400">
                    71–75 Shelton Street, London
                    <br />
                    WC2H 9JQ, United Kingdom
                  </p>
                </div>

                <div>
                  <p className="mb-0.5 text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500">
                    Business Address
                  </p>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-gray-400">
                    188 Moorcroft Road,
                    <br />
                    Manchester, M23 0AJ
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-primary text-xs">
                    OSHCR Registered Consultant • UK-Wide
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div>
              <h3 className="mb-4 sm:mb-5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white">
                Contact
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="mb-0.5 block text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500">
                    Phone
                  </span>
                  <a
                    href="tel:07468010989"
                    className="font-semibold text-gray-200 transition-colors hover:text-primary"
                  >
                    07468 010989
                  </a>
                </div>

                <div>
                  <span className="mb-0.5 block text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500">
                    Email
                  </span>
                  <a
                    href="mailto:symon@sitesafety-solutions.co.uk"
                    className="break-all text-[11px] sm:text-xs text-gray-300 transition-colors hover:text-primary leading-snug block"
                  >
                    symon@sitesafety-solutions.co.uk
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 pt-1 text-xs sm:text-sm font-bold text-primary transition-colors hover:text-white"
                >
                  <span>Get in touch</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Column 3: Quick Links (Spans 2 cols on mobile for a neat 2x3 grid, 1 col on desktop) */}
            <div className="col-span-2 sm:col-span-1 pt-4 sm:pt-0 border-t border-white/10 sm:border-t-0">
              <h3 className="mb-4 sm:mb-5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white">
                Quick Links
              </h3>

              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="transition-colors hover:text-primary"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fire-risk-assessments"
                    className="transition-colors hover:text-primary"
                  >
                    Fire Risk Assessments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="transition-colors hover:text-primary"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 2. GIANT FADED BRAND NAME */}
        <div className="select-none overflow-hidden pb-4 sm:pb-6 pt-2">
          <h2 className="whitespace-nowrap bg-gradient-to-b from-primary/65 via-primary/25 to-transparent bg-clip-text text-center text-[14.5vw] font-black uppercase leading-[0.88] tracking-tight text-transparent lg:text-[9.8rem]">
            SITE SAFETY
          </h2>
        </div>

        {/* 3. BOTTOM COPYRIGHT BAR */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 sm:pt-6 text-[11px] sm:text-xs text-gray-500 sm:flex-row">
          <p className="text-center sm:text-left">
            © {currentYear} Site Safety Solutions Ltd – All rights reserved
          </p>

          <div className="flex items-center justify-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}