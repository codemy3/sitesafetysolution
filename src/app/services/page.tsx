"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "service-01",
    num: "01",
    shortNav: "FIRE RISK",
    eyebrow: "FIRE RISK ASSESSMENTS",
    subEyebrow: "STATUTORY UK COMPLIANCE",
    titleWhite: "FIRE RISK",
    titleAccent: "ASSESSMENTS",
    description:
      "Comprehensive assessment of your building's fire safety risks and compliance with the Regulatory Reform (Fire Safety) Order and Building Safety Act.",
    bullets: [
      "Commercial premises, offices, warehouses & HMOs",
      "Clear hazard identification & risk evaluation",
      "Prioritised action plan delivered in 5–7 days",
    ],
    tags: ["PAS 79 Aligned", "Statutory Duty"],
    image: "/images/service1.webp",
    link: "/fire-risk-assessments",
    cta: "Explore Fire Risk Page",
  },
  {
    id: "service-02",
    num: "02",
    shortNav: "RAMS",
    eyebrow: "RISK ASSESSMENTS & METHOD STATEMENTS",
    subEyebrow: "PRACTICAL & SITE-SPECIFIC",
    titleWhite: "RISK ASSESSMENTS",
    titleAccent: "& RAMS",
    description:
      "Task-specific Risk Assessments and Method Statements built around your actual site operations to satisfy Principal Contractors and pass pre-start checks.",
    bullets: [
      "Bespoke RAMS documentation tailored to your specific operations",
      "Tailored to construction & high-risk activities",
      "Fast turnaround for urgent site mobilisation",
    ],
    tags: ["Bespoke RAMS", "Contractor Approved"],
    image: "/images/service2.webp",
    link: "/contact",
    cta: "Request RAMS Support",
  },
  {
    id: "service-03",
    num: "03",
    shortNav: "POLICIES",
    eyebrow: "HEALTH & SAFETY POLICIES",
    subEyebrow: "FOUNDATIONAL DOCUMENTATION",
    titleWhite: "H&S POLICIES &",
    titleAccent: "PROCEDURES",
    description:
      "Professionally drafted Health & Safety policies, company manuals, and everyday workplace procedures required by law for businesses employing 5 or more people.",
    bullets: [
      "Statement of intent, roles & responsibilities",
      "Practical arrangements tailored to your workflow",
      "Annual policy reviews & legislative updates",
    ],
    tags: ["5+ Employees Legal Duty", "Bespoke Manuals"],
    image: "/images/service3.webp",
    link: "/contact",
    cta: "Enquire About Policies",
  },
  {
    id: "service-04",
    num: "04",
    shortNav: "AUDITS",
    eyebrow: "SITE INSPECTIONS & AUDITS",
    subEyebrow: "PROACTIVE GAP ANALYSIS",
    titleWhite: "SITE INSPECTIONS",
    titleAccent: "& SAFETY AUDITS",
    description:
      "Independent on-site inspections and workplace audits that evaluate your current arrangements, spot compliance gaps early, and provide clear corrective actions.",
    bullets: [
      "Construction sites, factories, warehouses & offices",
      "Detailed photographic inspection reports",
      "Proportionate, cost-effective recommendations",
    ],
    tags: ["On-Site Visits", "Actionable Reports"],
    image: "/images/service4.webp",
    link: "/contact",
    cta: "Book a Site Inspection",
  },
  {
    id: "service-05",
    num: "05",
    shortNav: "CDM 2015",
    eyebrow: "CDM 2015 REGULATIONS",
    subEyebrow: "CONSTRUCTION COMPLIANCE",
    titleWhite: "CDM HEALTH &",
    titleAccent: "SAFETY SUPPORT",
    description:
      "Specialized support for the Construction (Design and Management) Regulations 2015—helping clients, Principal Contractors, and designers discharge their legal duties.",
    bullets: [
      "Construction Phase Plans (CPP) & updates",
      "Pre-construction information & risk checks",
      "Ongoing site safety compliance monitoring",
    ],
    tags: ["CDM 2015", "Principal Contractors"],
    image: "/images/service5.webp",
    link: "/contact",
    cta: "Get CDM Support",
  },
  {
    id: "service-06",
    num: "06",
    shortNav: "COSHH",
    eyebrow: "HAZARDOUS SUBSTANCES",
    subEyebrow: "WORKPLACE EXPOSURE CONTROL",
    titleWhite: "COSHH",
    titleAccent: "ASSESSMENTS",
    description:
      "Control of Substances Hazardous to Health assessments that identify chemical, dust, and fume hazards in your workplace and establish safe control measures.",
    bullets: [
      "Safety Data Sheet (SDS) review & task analysis",
      "Practical PPE & ventilation control guidance",
      "Clear operative-friendly COSHH assessment sheets",
    ],
    tags: ["UK COSHH Regs", "Hazard Control"],
    image: "/images/service6.webp",
    link: "/contact",
    cta: "Request COSHH Support",
  },
  {
    id: "service-07",
    num: "07",
    shortNav: "INCIDENTS",
    eyebrow: "INCIDENT RESPONSE",
    subEyebrow: "ROOT CAUSE & RIDDOR",
    titleWhite: "ACCIDENT",
    titleAccent: "INVESTIGATIONS",
    description:
      "Independent, objective investigation of workplace accidents, near misses, and incidents to establish root causes and prevent future occurrences.",
    bullets: [
      "Thorough root-cause analysis & evidence gathering",
      "RIDDOR reporting guidance & HSE liaison support",
      "Practical corrective action plans",
    ],
    tags: ["RIDDOR Guidance", "Root Cause Analysis"],
    image: "/images/service7.webp",
    link: "/contact",
    cta: "Speak to a Consultant",
  },
  {
    id: "service-08",
    num: "08",
    shortNav: "TRAINING",
    eyebrow: "WORKFORCE COMPETENCE",
    subEyebrow: "ENGAGING SITE BRIEFINGS",
    titleWhite: "TRAINING &",
    titleAccent: "TOOLBOX TALKS",
    description:
      "Practical health and safety training and targeted toolbox talks tailored to your actual site risks—helping operatives understand and follow safe systems of work.",
    bullets: [
      "Site inductions & task-specific toolbox talks",
      "Virtual site specific training",
      "Plain-English delivery with zero jargon",
      "Attendance records to evidence workforce training",
    ],
    tags: ["On-Site Briefings", "Operative Focused"],
    image: "/images/service8.webp",
    link: "/contact",
    cta: "Arrange Site Training",
  },
  {
    id: "service-09",
    num: "09",
    shortNav: "RETAINED",
    eyebrow: "RETAINED SUPPORT",
    subEyebrow: "COMPETENT PERSON SERVICE",
    titleWhite: "ONGOING H&S",
    titleAccent: "CONSULTANCY",
    description:
      "Continuous professional support for your health and safety arrangements—giving you direct access to an OSHCR Registered Consultant whenever you need advice.",
    bullets: [
      "Scheduled quarterly or monthly compliance visits",
      "Direct telephone & email support when needed",
      "Cost-effective alternative to an in-house H&S manager",
    ],
    tags: ["Retained Support", "OSHCR Registered"],
    image: "/images/service9.webp",
    link: "/contact",
    cta: "Discuss Ongoing Support",
  },
  {
    id: "service-10",
    num: "10",
    shortNav: "RISK ASSESS.",
    eyebrow: "RISK ASSESSMENTS",
    subEyebrow: "MHSWR 1999 COMPLIANT",
    titleWhite: "RISK",
    titleAccent: "ASSESSMENTS",
    description:
      "Comprehensive Risk Assessments under the Management of Health and Safety at Work Regulations 1999 UK, identifying hazards and ensuring your business is fully compliant.",
    bullets: [
      "Full site hazard identification",
      "Compliance with MHSWR 1999 UK",
      "Actionable risk reduction strategies",
    ],
    tags: ["MHSWR 1999", "Risk Control"],
    image: "/images/service4.webp", // reusing an image
    link: "/contact",
    cta: "Request Risk Assessment",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string>("service-01");

  // Scroll-spy to highlight the active service in the sticky top filter bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 260;

      for (const service of services) {
        const el = document.getElementById(service.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveService(service.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToService = (id: string) => {
    setActiveService(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 185;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#F4F6F8]">
      
      {/* 1. CENTERED HERO WITH BACKGROUND IMAGE & DECORATIVE FRAME */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center pt-28 pb-14 sm:pt-32 sm:pb-16 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/service-hero.webp")',
          }}
        >
          <div className="absolute inset-0 bg-[#0B111E]/85" />
        </div>

        {/* Decorative Inner Frame */}
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
                What We Do
              </span>
              <span className="w-6 sm:w-8 h-[1.5px] bg-primary" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3 sm:mb-4">
              Our <span className="text-primary">Services</span>
            </h1>

            <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Practical, proportionate health and safety documentation, site
              audits, and consultancy tailored to UK businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STICKY TOP FILTER BAR — All 9 Services Visible on Mobile (5+4 Grid) & Desktop (9-Col Row) */}
      <div className="sticky top-[74px] sm:top-[86px] z-40 bg-white/95 backdrop-blur-md border-y border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-5 sm:grid-cols-10 bg-gray-200/80 gap-px border-x border-gray-200/80">
            {services.map((item, idx) => {
              const isActive = activeService === item.id;
              const isLastMobileItem = idx === 9;
              return (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => scrollToService(item.id)}
                  className={`group relative py-2 sm:py-3.5 px-1 sm:px-2 flex flex-col items-center justify-center text-center transition-colors cursor-pointer ${
                    isLastMobileItem ? "col-span-2 sm:col-span-1" : "col-span-1"
                  } ${
                    isActive
                      ? "bg-[#EAFBF0]"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {/* Active Bottom Indicator Bar */}
                  <span
                    className={`absolute bottom-0 inset-x-0 h-[2.5px] sm:h-[3px] bg-primary transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                    }`}
                  />

                  <span
                    className={`text-[10px] sm:text-xs font-extrabold leading-none transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-primary/70 group-hover:text-primary"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span
                    className={`text-[8.5px] sm:text-[10px] lg:text-[11px] font-extrabold uppercase tracking-tight sm:tracking-wider mt-1 truncate max-w-full transition-colors ${
                      isActive
                        ? "text-secondary"
                        : "text-secondary/75 group-hover:text-secondary"
                    }`}
                  >
                    {item.shortNav}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. ALTERNATING SPLIT SHOWCASE CARDS (Alternates on BOTH Mobile & Desktop) */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 lg:space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                id={service.id}
                key={service.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className="group rounded-2xl sm:rounded-[2rem] overflow-hidden border border-gray-300/90 shadow-[0_20px_50px_rgba(15,23,42,0.1)] bg-[#0E131B] grid grid-cols-1 lg:grid-cols-12 lg:min-h-[480px] scroll-mt-44"
              >
                {/* DARK CONTENT HALF:
                    Odd Cards (01, 03, 05...): 1st on Mobile & Left on Desktop (order-1)
                    Even Cards (02, 04, 06...): 2nd on Mobile & Right on Desktop (order-2) */}
                <div
                  className={`lg:col-span-6 bg-[#0E131B] text-white p-6 sm:p-10 lg:p-14 flex flex-col justify-between ${
                    isEven ? "order-2" : "order-1"
                  }`}
                >
                  <div>
                    {/* Two-Line Uppercase Eyebrow */}
                    <div className="mb-3.5 sm:mb-5">
                      <span className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.25em] text-primary">
                        {service.eyebrow}
                      </span>
                      <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500 mt-0.5 sm:mt-1">
                        {service.subEyebrow}
                      </span>
                    </div>

                    {/* Heavy Stacked Two-Tone Heading */}
                    <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-black uppercase tracking-tight leading-[1.04] mb-4 sm:mb-5">
                      <span className="block text-white">
                        {service.titleWhite}
                      </span>
                      <span className="block text-primary">
                        {service.titleAccent}
                      </span>
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-[15px] text-gray-400 leading-relaxed mb-5 sm:mb-7 max-w-lg">
                      {service.description}
                    </p>

                    {/* 3 Checkmark Bullet Points */}
                    <ul className="space-y-2.5 sm:space-y-3.5 mb-6 sm:mb-8">
                      {service.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-xs sm:text-sm text-gray-200 font-medium"
                        >
                          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 border border-primary/40 text-primary flex items-center justify-center shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white hover:text-primary transition-colors"
                    >
                      <span>{service.cta}</span>
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-gray-950 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={15} strokeWidth={2.5} />
                      </span>
                    </Link>

                    <span className="text-xs font-mono font-bold text-white/30">
                      {service.num} / 10
                    </span>
                  </div>
                </div>

                {/* FULL-BLEED IMAGE HALF:
                    Odd Cards (01, 03, 05...): 2nd on Mobile & Right on Desktop (order-2)
                    Even Cards (02, 04, 06...): 1st on Mobile & Left on Desktop (order-1) */}
                <div
                  className={`lg:col-span-6 relative min-h-[230px] sm:min-h-[320px] lg:min-h-full overflow-hidden ${
                    isEven ? "order-1" : "order-2"
                  }`}
                >
                  {/* Full-Box Cover Image */}
                  <img
                    src={service.image}
                    alt={`${service.titleWhite} ${service.titleAccent}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Dark Gradient Overlay for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131B]/80 via-[#0E131B]/15 to-transparent" />

                  {/* Giant Translucent Number Overlay in Bottom Corner */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none select-none absolute -bottom-4 sm:-bottom-6 ${
                      isEven ? "left-4 sm:left-6" : "right-4 sm:right-6"
                    } text-[6.5rem] sm:text-[11rem] font-black leading-none text-white/20 tracking-tighter z-10`}
                  >
                    {service.num}
                  </span>

                  {/* Floating Capability Pills at Top Corner of Full Image */}
                  <div
                    className={`absolute top-4 sm:top-6 ${
                      isEven ? "left-4 sm:left-6" : "right-4 sm:right-6"
                    } flex flex-wrap items-center gap-1.5 sm:gap-2 z-10`}
                  >
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-secondary/85 backdrop-blur-md text-white border border-white/15 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. MINIMAL GREEN CTA BANNER */}
      <section className="pb-14 sm:pb-20">
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
                Practical Safety Solutions for Safer Businesses.
              </h2>
              <p className="text-secondary/85 text-xs sm:text-base lg:text-lg font-medium mt-2 leading-relaxed">
                Have a question or need a quote? Contact us today for a
                no-obligation discussion.
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