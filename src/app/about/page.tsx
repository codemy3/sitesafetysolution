"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  ShieldCheck,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const highlights = [
  {
    icon: Building2,
    shortLabel: "Engineering & Construction",
    label: "Engineering & Construction Background",
  },
  {
    icon: GraduationCap,
    shortLabel: "H&S Qualifications",
    label: "Professional H&S Qualifications",
  },
  {
    icon: ShieldCheck,
    shortLabel: "Verified UK Consultancy",
    label: "Verified UK Consultancy",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "Tailored to Your Site",
    description:
      "Bespoke risk assessments, policies, and audits built around your actual operations.",
    image: "/images/hww1.webp",
  },
  {
    step: "02",
    title: "Clear, Jargon-Free Advice",
    description:
      "Straightforward guidance so you know exactly what is required to stay compliant.",
    image: "/images/hww2.webp",
  },
  {
    step: "03",
    title: "Practical & Cost-Effective",
    description:
      "Proportionate safety controls that protect your workforce without unnecessary expense.",
    image: "/images/hww3.webp",
  },
];

const areasWeCover = [
  {
    country: "England",
    locations: [
      "Bath",
      "Birmingham",
      "Bradford",
      "Brighton & Hove",
      "Bristol",
      "Cambridge",
      "Canterbury",
      "Carlisle",
      "Chelmsford",
      "Chester",
      "Chichester",
      "Colchester",
      "Coventry",
      "Derby",
      "Doncaster",
      "Durham",
      "Ely",
      "Exeter",
      "Gloucester",
      "Hereford",
      "Kingston upon Hull (Hull)",
      "Lancaster",
      "Leeds",
      "Leicester",
      "Lichfield",
      "Lincoln",
      "Liverpool",
      "London",
      "Manchester",
      "Milton Keynes",
      "Newcastle upon Tyne",
      "Norwich",
      "Nottingham",
      "Oxford",
      "Peterborough",
      "Plymouth",
      "Portsmouth",
      "Preston",
      "Ripon",
      "Salford",
      "Salisbury",
      "Sheffield",
      "Southampton",
      "Southend-on-Sea",
      "St Albans",
      "Stoke-on-Trent",
      "Sunderland",
      "Truro",
      "Wakefield",
      "Wells",
      "Westminster",
      "Winchester",
      "Wolverhampton",
      "Worcester",
      "York",
    ],
  },
  {
    country: "Scotland",
    locations: [
      "Aberdeen",
      "Dundee",
      "Dunfermline",
      "Edinburgh",
      "Glasgow",
      "Inverness",
      "Perth",
      "Stirling",
    ],
  },
  {
    country: "Wales",
    locations: [
      "Bangor",
      "Cardiff",
      "Newport",
      "St Asaph",
      "St Davids",
      "Swansea",
      "Wrexham",
    ],
  },
  {
    country: "Northern Ireland",
    locations: [
      "Armagh",
      "Bangor",
      "Belfast",
      "Lisburn",
      "Londonderry/Derry",
      "Newry",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      
      {/* 1. CENTERED HERO WITH BACKGROUND IMAGE & DECORATION */}
      <section className="relative min-h-[380px] sm:min-h-[480px] flex items-center justify-center pt-28 pb-14 sm:pt-32 sm:pb-16 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/about-hero.webp")',
          }}
        >
          <div className="absolute inset-0 bg-[#0B111E]/82" />
        </div>

        {/* Decorative Frame — Scaled cleanly for mobile & desktop */}
        <div className="pointer-events-none absolute inset-x-3.5 sm:inset-x-12 top-24 sm:top-28 bottom-5 sm:bottom-8 border border-white/10 rounded-2xl sm:rounded-3xl z-[1]" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1.5px] bg-primary" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-primary">
                About Us
              </span>
              <span className="w-6 sm:w-8 h-[1.5px] bg-primary" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3 sm:mb-4">
              Site Safety <span className="text-primary">Solutions Ltd</span>
            </h1>

            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-primary mb-2">
              Supporting Businesses Across the UK
            </p>

            <p className="text-xs sm:text-lg text-gray-300 max-w-md sm:max-w-xl mx-auto leading-relaxed">
              Practical Health &amp; Safety Support Built on Experience and
              Trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE (CREATIVE DUAL IMAGE COLLAGE + BENTO CREDENTIALS) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Dual Overlapping Images with Architectural Offset Frame */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6 relative pb-8 sm:pb-12 pr-4 sm:pr-10"
            >
              {/* Subtle Emerald Architectural Offset Frame */}
              <div className="pointer-events-none absolute -top-2.5 -left-2.5 sm:-top-3.5 sm:-left-3.5 w-2/3 h-2/3 rounded-2xl border-2 border-primary/30 z-0" />

              {/* Main Large Image */}
              <div className="relative z-10 aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="/images/about1.webp"
                  alt="Construction Site Management"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />

                {/* Floating Glass Pill on Top-Left of Main Image */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-secondary/85 backdrop-blur-md border border-white/15 text-white px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    UK-Wide Support
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute bottom-0 right-0 z-20 w-40 sm:w-60 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/about2.webp"
                  alt="Safety Engineering Inspection"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Concise Story & 2-Column Mobile Bento Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2.5 mb-2.5">
                <span className="w-7 h-[2px] bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Our Story
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight leading-tight mb-4 sm:mb-5">
                Engineering-Led Safety <br />
                <span className="text-primary">For Modern Workplaces.</span>
              </h2>

              <p className="text-sm sm:text-lg text-textLight leading-relaxed mb-6 sm:mb-8">
                Site Safety Solutions Ltd is led by a Health, Safety &amp; Environment
                professional with decades of experience and a strong educational
                background in engineering and construction management, supported
                by formal health and safety qualifications and OSHCR Registered Consultant status.
              </p>

              {/* 2-per-line Bento Grid on Mobile (3rd spans full width), Vertical Stack on Desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3.5">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  const isLast = idx === highlights.length - 1;
                  return (
                    <div
                      key={item.label}
                      className={`${
                        isLast ? "col-span-2 lg:col-span-1" : "col-span-1"
                      } flex items-center gap-2.5 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-[#F8FAFC] border border-gray-200/80`}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="sm:hidden text-xs font-bold text-secondary leading-snug">
                        {item.shortLabel}
                      </span>
                      <span className="hidden sm:inline text-sm sm:text-base font-bold text-secondary">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. HOW WE WORK (2+1 BENTO LAYOUT ON MOBILE, 3-COL ON DESKTOP) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#F8FAFC] border-y border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary block mb-1.5 sm:mb-2">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight">
              Our Approach to <span className="text-primary">Safety</span>
            </h2>
          </div>

          {/* Mobile: Cards 01 & 02 sit side-by-side (grid-cols-2), Card 03 spans full width below as a horizontal split card. Desktop: 3 equal columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {howWeWork.map((item, index) => {
              const isThird = index === 2;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    isThird
                      ? "col-span-2 md:col-span-1 grid grid-cols-12 md:block items-stretch"
                      : "col-span-1 flex flex-col"
                  }`}
                >
                  {/* Card Image */}
                  <div
                    className={`relative overflow-hidden ${
                      isThird
                        ? "col-span-5 md:w-full h-full min-h-[140px] md:h-56"
                        : "h-32 sm:h-48 md:h-56 w-full"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
                    <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-secondary/90 backdrop-blur-xs text-primary text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
                      {item.step}
                    </span>
                  </div>

                  {/* Short Card Text */}
                  <div
                    className={`${
                      isThird
                        ? "col-span-7 p-4 sm:p-6 md:p-7 flex flex-col justify-center"
                        : "p-3.5 sm:p-6 md:p-7 flex-1 flex flex-col justify-between"
                    }`}
                  >
                    <div>
                      <h3 className="text-[13px] sm:text-lg md:text-xl font-extrabold text-secondary mb-1.5 sm:mb-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-textLight leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. AREAS WE COVER */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary block mb-1.5 sm:mb-2">
              UK-Wide Support
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight">
              Areas We <span className="text-primary">Cover</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {areasWeCover.map((area) => {
              const headingId = `area-${area.country
                .toLowerCase()
                .replaceAll(" ", "-")}`;

              return (
                <section
                  key={area.country}
                  aria-labelledby={headingId}
                  className={`rounded-2xl bg-[#F8FAFC] border border-gray-200/90 p-5 sm:p-7 ${
                    area.country === "England" ? "md:row-span-3" : ""
                  }`}
                >
                  <h3
                    id={headingId}
                    className="flex items-center gap-2.5 text-lg sm:text-xl font-extrabold text-secondary mb-4"
                  >
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    {area.country}
                  </h3>
                  <ul
                    className={`grid gap-x-3 gap-y-2 sm:gap-x-5 ${
                      area.country === "England"
                        ? "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        : "grid-cols-2"
                    }`}
                  >
                    {area.locations.map((location) => (
                      <li
                        key={location}
                        className="text-xs sm:text-sm text-textLight leading-relaxed"
                      >
                        {location}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MINIMAL CTA BANNER */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl sm:rounded-3xl bg-primary p-6 sm:px-12 sm:py-14 lg:px-14 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 overflow-hidden shadow-[0_20px_50px_rgba(34,197,94,0.18)]"
          >
            <div className="pointer-events-none absolute -right-16 -bottom-16 sm:-right-20 sm:-bottom-20 w-48 h-48 sm:w-80 sm:h-80 rounded-full border-[20px] sm:border-[32px] border-white/15" />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-secondary tracking-tight leading-[1.15]">
                Ready to Improve Your Health &amp; Safety?
              </h2>
              <p className="text-secondary/85 text-xs sm:text-base lg:text-lg font-medium mt-2 leading-relaxed">
                Let&apos;s discuss how we can support your business today.
              </p>
            </div>

            <Link
              href="/contact"
              className="group relative z-10 inline-flex items-center justify-between sm:justify-start gap-3 sm:gap-4 bg-secondary hover:bg-gray-950 text-white font-bold text-xs sm:text-base pl-5 pr-1.5 py-1.5 sm:pl-7 sm:pr-2.5 sm:py-2.5 rounded-full transition-all duration-300 shadow-lg shrink-0"
            >
              <span>Get in Touch</span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-secondary flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}