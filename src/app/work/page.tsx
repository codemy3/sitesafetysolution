"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Search,
  Lightbulb,
  Users,
  ArrowUpRight,
  Building2,
  MapPin,
  Layers,
  ShieldCheck,
} from "lucide-react";

const projectMetrics = [
  {
    label: "Client",
    value: "Private Client",
    icon: Building2,
  },
  {
    label: "Location",
    value: "London, UK",
    icon: MapPin,
  },
  {
    label: "Scope",
    value: "Multi-Project Support",
    icon: Layers,
  },
  {
    label: "Focus",
    value: "CDM 2015 & Site Safety",
    icon: ShieldCheck,
  },
];

const deliverables = [
  "Regular site inspections",
  "RAMS reviews & updates",
  "Construction Phase Plans",
  "Design-risk checks",
  "Safety documentation reviews",
  "Project team advisory",
];

const outcomes = [
  "Closed identified compliance gaps",
  "Strengthened CDM arrangements",
  "Improved site safety standards",
  "Avoided unnecessary costs",
];

const approaches = [
  {
    step: "01",
    icon: Search,
    title: "Thorough Audit",
    desc: "Comprehensive baseline assessment to identify gaps in existing site and documentation arrangements.",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Practical Solutions",
    desc: "Clear, actionable recommendations prioritised by actual on-site risk and legal compliance.",
  },
  {
    step: "03",
    icon: Users,
    title: "Ongoing Support",
    desc: "Continued hands-on guidance for project management teams through implementation and beyond.",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. DARK HERO */}
      <section className="relative min-h-[360px] sm:min-h-[420px] flex items-center justify-center pt-28 pb-14 sm:pt-32 sm:pb-20 bg-[#0B111E] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1541888086925-920eb1870462?q=80&w=2000&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-[#0B111E]/85" />
        </div>

        {/* Mobile-Only Decorative Inner Frame */}
        <div className="sm:hidden pointer-events-none absolute inset-x-3.5 top-24 bottom-4 border border-white/10 rounded-2xl z-[1]" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-3">
              <span className="w-6 sm:w-8 h-[1.5px] bg-primary" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Case Study
              </span>
              <span className="w-6 sm:w-8 h-[1.5px] bg-primary" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3 sm:mb-4">
              Our <span className="text-primary">Work</span>
            </h1>

            <p className="text-xs sm:text-lg text-gray-300 max-w-md sm:max-w-xl mx-auto leading-relaxed">
              Practical, proportionate health and safety support delivering
              measurable compliance improvements for UK clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED CASE STUDY DOSSIER */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Case Study Title & Top 2x2 / 4-Col Metadata Strip */}
          <div className="mb-8 sm:mb-14">
            <div className="inline-flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span className="w-7 h-[2px] bg-primary" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Featured Project • Construction
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-secondary tracking-tight leading-tight mb-6 sm:mb-8">
              Principal Contractor{" "}
              <span className="text-primary">CDM &amp; Site Safety Support</span>
            </h2>

            {/* 2-per-line on Mobile, 4-per-line on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 bg-gray-200 gap-px border border-gray-200 rounded-2xl overflow-hidden shadow-2xs">
              {projectMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="bg-[#F8FAFC] p-3.5 sm:p-6 flex items-start gap-2.5 sm:gap-3.5"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-textLight">
                        {metric.label}
                      </span>
                      <p className="text-xs sm:text-base font-extrabold text-secondary mt-0.5 leading-snug">
                        {metric.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Case Study Split: Image + Challenge / Delivered / Result */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (5 Cols on Desktop): Project Photography + Desktop Key Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop"
                  alt="London Construction Site Safety Support"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                <span className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-xs text-secondary text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full">
                  Ongoing Retained Support
                </span>
              </div>

              {/* Desktop Key Outcomes Block (Hidden on Mobile so it appears AFTER 03 The Result on phones) */}
              <div className="hidden lg:block rounded-2xl bg-[#0B111E] text-white p-6 sm:p-7">
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  Key Project Outcomes
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="bg-white/[0.05] border border-white/10 rounded-xl p-3 sm:p-3.5 flex items-start gap-2.5"
                    >
                      <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-100 leading-snug">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column (7 Cols on Desktop): 01 Challenge, 02 What We Delivered, 03 The Result */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-10">
              
              {/* 01 / The Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="bg-[#F8FAFC] sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none border border-gray-200/80 sm:border-0 sm:border-b sm:border-gray-200 sm:pb-8"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                  <span className="text-xs font-mono font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                    01
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-secondary tracking-tight">
                    The Challenge
                  </h3>
                </div>
                <p className="text-xs sm:text-base text-textLight leading-relaxed">
                  An initial health and safety audit identified gaps in the
                  Principal Contractor&apos;s existing arrangements, including
                  areas requiring improvement in CDM 2015 compliance, site safety
                  management and documentation.
                </p>
              </motion.div>

              {/* 02 / What We Delivered */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="border-b border-gray-200 pb-6 sm:pb-8"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                  <span className="text-xs font-mono font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                    02
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-secondary tracking-tight">
                    What We Delivered
                  </h3>
                </div>
                <p className="text-xs sm:text-base text-textLight leading-relaxed mb-4 sm:mb-5">
                  Following the audit, we provided practical and cost-effective
                  recommendations, prioritising actions according to risk and
                  compliance requirements. Ongoing support included:
                </p>

                {/* 2-per-line on Mobile & Desktop */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 sm:gap-2.5 bg-[#F8FAFC] border border-gray-200/80 border-l-2 border-l-primary sm:border-l-gray-200/80 rounded-xl px-2.5 py-2.5 sm:px-4 sm:py-3"
                    >
                      <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className="text-[11px] sm:text-sm font-bold text-secondary leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 03 / The Result */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="bg-[#F8FAFC] sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none border border-gray-200/80 sm:border-0"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                  <span className="text-xs font-mono font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                    03
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-secondary tracking-tight">
                    The Result
                  </h3>
                </div>
                <p className="text-xs sm:text-base text-textLight leading-relaxed">
                  Our support helped the Principal Contractor close identified
                  compliance gaps, strengthen CDM arrangements, and improve site
                  safety standards across multiple projects. By focusing on
                  practical and proportionate solutions, the client improved
                  compliance while avoiding unnecessary costs and implementing
                  controls appropriate to the actual risks on site.
                </p>
              </motion.div>

              {/* Mobile-Only Key Outcomes Block (Appears right after 03 The Result on phones) */}
              <div className="lg:hidden rounded-2xl bg-[#0B111E] text-white p-5">
                <div className="flex items-center gap-2 mb-3.5">
                  <span className="w-5 h-[2px] bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    Key Project Outcomes
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="bg-white/[0.05] border border-white/10 rounded-xl p-3 flex items-start gap-2"
                    >
                      <span className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span className="text-[11px] font-semibold text-gray-100 leading-snug">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. OPEN EDITORIAL CLIENT TESTIMONIAL */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-start">
            
            <div className="lg:col-span-3 flex items-center gap-2.5 sm:gap-3 lg:pt-3">
              <span className="w-6 sm:w-8 h-[2px] bg-primary shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary lg:text-secondary">
                Client Feedback
              </span>
            </div>

            <div className="lg:col-span-9">
              <blockquote className="relative pl-3.5 sm:pl-0 border-l-2 border-primary/40 sm:border-l-0">
                <span
                  aria-hidden="true"
                  className="hidden sm:block font-serif text-6xl leading-none text-primary select-none -mb-3"
                >
                  &ldquo;
                </span>
                <p className="text-lg sm:text-3xl lg:text-[2.1rem] font-bold text-secondary tracking-tight leading-[1.35] sm:leading-[1.3]">
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
              </blockquote>

              <div className="mt-5 pt-5 sm:mt-6 sm:pt-6 border-t border-gray-200 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm sm:text-lg font-extrabold text-secondary">
                    Manoj Shahi
                  </p>
                  <p className="text-xs sm:text-sm text-textLight font-medium">
                    Project Manager, London
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full shrink-0">
                  <Check size={12} strokeWidth={3} />
                  Verified Client
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HOW WE WORKED (2+1 Bento Grid on Mobile, 3-Col on Desktop) */}
      <section className="py-12 sm:py-20 bg-white border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-7 h-[2px] bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Our Methodology
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight">
                Why This Approach <span className="text-primary">Works</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-textLight max-w-sm">
              We don&apos;t just deliver reports—we help clients understand
              findings and support them through implementation.
            </p>
          </div>

          {/* Mobile: 01 & 02 sit side-by-side (grid-cols-2), 03 spans full width below. Desktop: 3 equal columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {approaches.map((app, idx) => {
              const Icon = app.icon;
              const isThird = idx === 2;
              return (
                <motion.div
                  key={app.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className={`group bg-[#F8FAFC] hover:bg-white rounded-2xl p-4 sm:p-8 border border-gray-200/90 hover:border-primary/50 transition-all duration-300 hover:shadow-md flex flex-col justify-between ${
                    isThird ? "col-span-2 md:col-span-1" : "col-span-1"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-secondary flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.2} />
                    </div>
                    <span className="text-xs font-mono font-bold text-primary/40 sm:text-gray-300 group-hover:text-primary transition-colors">
                      {app.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-xl font-extrabold text-secondary mb-1.5 sm:mb-2 leading-snug">
                      {app.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-textLight leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. GREEN CTA BANNER */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl sm:rounded-3xl bg-primary p-6 sm:px-14 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 overflow-hidden shadow-[0_20px_50px_rgba(34,197,94,0.18)] sm:shadow-none"
          >
            <div className="pointer-events-none absolute -right-16 -bottom-16 sm:-right-20 sm:-bottom-20 w-48 h-48 sm:w-80 sm:h-80 rounded-full border-[20px] sm:border-[32px] border-white/15" />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-xl sm:text-4xl font-extrabold text-secondary tracking-tight leading-tight">
                Facing Similar Compliance Challenges?
              </h2>
              <p className="text-secondary/85 text-xs sm:text-lg font-medium mt-2 leading-relaxed">
                Let&apos;s discuss how we can support your business with
                practical, cost-effective safety solutions.
              </p>
            </div>

            <Link
              href="/contact"
              className="group relative z-10 inline-flex items-center justify-between sm:justify-start gap-3 sm:gap-4 bg-secondary hover:bg-gray-950 text-white font-bold text-xs sm:text-base pl-5 pr-1.5 py-1.5 sm:pl-7 sm:pr-2.5 sm:py-2.5 rounded-full transition-all duration-300 shadow-lg shrink-0"
            >
              <span>Discuss Your Needs</span>
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