"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Search,
  FileText,
  CheckCircle2,
  Users,
  Plus,
  Minus,
  ArrowUpRight,
  ArrowRight,
  Phone,
} from "lucide-react";

const suitableFor = [
  "Offices & retail",
  "Warehouses & industrial",
  "Hospitality & care",
  "Residential premises",
];

const includedComponents = [
  {
    num: "01",
    icon: Search,
    title: "Site Inspection",
    desc: "On-site inspection of escape routes, fire doors, alarms, lighting, signage, and hazards.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Written Report",
    desc: "Clear, structured documentation of findings, identified risks, and existing fire controls.",
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "Action Plan",
    desc: "Practical, proportionate recommendations ordered by priority so you know what to fix first.",
  },
  {
    num: "04",
    icon: Users,
    title: "Clear Walkthrough",
    desc: "Plain-English explanation of findings and next steps—without complex technical jargon.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "Understand your premises, occupancy, and specific requirements.",
  },
  {
    step: "02",
    title: "Site Assessment",
    desc: "Inspect the premises, review existing measures, and identify hazards.",
  },
  {
    step: "03",
    title: "Report & Action Plan",
    desc: "Receive your structured assessment and prioritised recommendations.",
  },
  {
    step: "04",
    title: "Follow-Up Support",
    desc: "Discuss findings, clarify actions, and plan practical next steps.",
  },
];

const faqs = [
  {
    q: "What is a Fire Risk Assessment?",
    a: "A Fire Risk Assessment is a structured review of your premises to identify potential fire hazards, determine who may be at risk, evaluate existing fire safety measures, and set out practical actions to reduce or manage risk.",
  },
  {
    q: "Who needs a Fire Risk Assessment?",
    a: "Under UK fire safety legislation, the designated 'Responsible Person' for workplaces, commercial premises, and the shared areas of residential buildings must ensure a suitable and sufficient Fire Risk Assessment is completed and kept under review.",
  },
  {
    q: "What types of premises do you assess?",
    a: "We assess a wide range of UK premises including offices, retail units, warehouses, manufacturing sites, hospitality venues, care settings, construction sites, and residential common areas.",
  },
  {
    q: "How long does the assessment take?",
    a: "The on-site inspection duration depends on the size and layout of your building. Once the site visit is complete, your written report and action plan are prepared and issued promptly.",
  },
  {
    q: "How much does a Fire Risk Assessment cost?",
    a: "Assessment costs depend on the size, layout, and complexity of the premises. Contact us with a few details about your building for a clear, no-obligation quote.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 sm:py-6 text-left group cursor-pointer"
      >
        <h3 className="text-[13px] sm:text-lg font-bold text-secondary group-hover:text-primary transition-colors pr-4 leading-snug">
          {faq.q}
        </h3>
        <span
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            isOpen
              ? "bg-primary text-secondary"
              : "bg-white sm:bg-gray-100 border border-gray-200 sm:border-0 text-secondary group-hover:bg-primary/15 group-hover:text-primary"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-4 sm:pb-6 text-xs sm:text-base text-textLight leading-relaxed max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FireRiskAssessmentsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. DARK HERO */}
      <section className="relative min-h-[390px] sm:min-h-[440px] flex items-center justify-center pt-28 pb-14 sm:pt-32 sm:pb-20 bg-[#0B111E] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/firerisk-hero.png)",
          }}
        >
          <div className="absolute inset-0 bg-[#0B111E]/85" />
        </div>

        {/* Mobile-Only Decorative Inner Frame */}
        <div className="sm:hidden pointer-events-none absolute inset-x-3.5 top-24 bottom-4 border border-white/10 rounded-2xl z-[1]" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Mobile-Only Eyebrow Pill */}
            <div className="inline-flex sm:hidden items-center gap-2 px-3 py-1 rounded-full bg-white/[0.07] border border-white/15 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                UK Fire Compliance
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3 sm:mb-4">
              Fire Risk <span className="text-primary">Assessments</span>
            </h1>

            <p className="text-xs sm:text-lg text-gray-300 max-w-md sm:max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Professional assessments and practical fire safety action plans
              for UK businesses and premises.
            </p>

            {/* Side-by-Side 2-Col Grid on Mobile, Original Centered Flex on Desktop */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between sm:justify-start gap-2 sm:gap-3 bg-primary hover:bg-white text-secondary font-bold text-xs sm:text-sm pl-4 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 rounded-full transition-colors duration-300"
              >
                <span className="truncate">Book Assessment</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </Link>

              <a
                href="tel:07468010989"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/[0.08] hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone size={13} className="text-primary sm:hidden shrink-0" />
                <span className="truncate">07468 010989</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & SUITABLE FOR */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
            
            {/* Left Content (6 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2.5 mb-2.5">
                <span className="w-7 h-[2px] bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Overview
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight leading-tight mb-3.5 sm:mb-4">
                Clear, Proportionate{" "}
                <span className="text-primary">Fire Safety Support.</span>
              </h2>

              <p className="text-xs sm:text-lg text-textLight leading-relaxed mb-5 sm:mb-8">
                We assess your premises, identify fire hazards and people at
                risk, review existing fire safety measures, and provide a clear,
                prioritised action plan to help you meet your responsibilities.
              </p>

              <div className="pt-5 sm:pt-6 border-t border-gray-200">
                <h3 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-secondary mb-3 sm:mb-3.5">
                  Suitable For
                </h3>

                {/* 2-per-line with Emerald Left Accent on Mobile, Original on Desktop */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                  {suitableFor.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 sm:gap-3 bg-[#F8FAFC] border border-gray-200/80 border-l-2 border-l-primary sm:border-l-gray-200/80 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold text-secondary shadow-2xs sm:shadow-none"
                    >
                      <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Image (6 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 relative"
            >
              {/* Mobile-Only Offset Corner Accent */}
              <div className="sm:hidden pointer-events-none absolute -top-2 -right-2 w-24 h-24 rounded-2xl border-2 border-primary/30 z-0" />

              <div className="relative z-10 aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/images/firerisk.png"
                  alt="Premises Fire Safety Inspection"
                  className="w-full h-full object-cover"
                />
                {/* Mobile-Only Floating Badge */}
                <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                <span className="sm:hidden absolute bottom-3 left-3 bg-secondary/90 backdrop-blur-md text-white border border-white/15 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  PAS 79 Aligned Inspection
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. DELIVERABLES: STAGGERED WAVE 2x2 ON MOBILE, ORIGINAL 2x2 ON DESKTOP */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Sticky Intro (4 Cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-7 h-[2px] bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Deliverables
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight leading-tight mb-2 sm:mb-3">
                What&apos;s <span className="text-primary">Included</span>
              </h2>
              <p className="text-xs sm:text-base text-textLight leading-relaxed">
                Every assessment is delivered with clear documentation and
                practical guidance tailored to your building.
              </p>
            </div>

            {/* Right 2x2 Grid — Staggered Masonry on Mobile (even:mt-4), Level on Desktop (sm:even:mt-0) */}
            <div className="lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-5 items-start">
              {includedComponents.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group relative even:mt-4 sm:even:mt-0 bg-white rounded-2xl p-4 sm:p-7 border border-gray-200/90 hover:border-primary/50 shadow-xs transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top Accent Hairline (Always visible subtle bar on mobile, hover on desktop) */}
                    <span className="absolute top-0 inset-x-0 h-1 bg-primary scale-x-100 sm:scale-x-0 sm:group-hover:scale-x-100 origin-left transition-transform duration-300" />

                    <div className="flex items-center justify-between mb-3.5 sm:mb-6">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-secondary flex items-center justify-center transition-colors duration-300">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.2} />
                      </div>
                      <span className="text-xs font-mono font-extrabold text-primary/40 sm:text-gray-300 group-hover:text-primary transition-colors">
                        {item.num}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[13px] sm:text-lg font-extrabold text-secondary mb-1 sm:mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-textLight leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS: ARCHITECTURAL FROSTED TILES ON MOBILE, OPEN TIMELINE ON DESKTOP */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Dark Architectural Track Container */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#0B111E] text-white p-5 sm:p-10 lg:p-14 relative overflow-hidden shadow-xl">
            {/* Subtle Radial Glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-12 pb-5 sm:pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-2">
                  <span className="w-7 h-[2px] bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    How It Works
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Our 4-Step <span className="text-primary">Process</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xs">
                A straightforward process from initial enquiry to ongoing
                compliance support.
              </p>
            </div>

            {/* Connected Stepper */}
            <div className="relative">
              {/* Desktop Continuous Connecting Line (Unchanged) */}
              <div className="hidden lg:block absolute top-5 left-8 right-8 h-[2px] bg-gradient-to-r from-primary/60 via-white/15 to-primary/60 z-0" />

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 relative z-10">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                    className="group flex flex-col justify-between bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 rounded-2xl lg:rounded-none p-3.5 sm:p-5 lg:p-0"
                  >
                    {/* Step Node Row */}
                    <div className="flex items-center justify-between lg:justify-start gap-2 mb-3 sm:mb-5">
                      <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#162033] border-2 border-primary text-primary group-hover:bg-primary group-hover:text-secondary font-mono text-xs sm:text-sm font-extrabold flex items-center justify-center transition-colors duration-300 shrink-0 shadow-md">
                        {step.step}
                      </span>
                      {idx < processSteps.length - 1 && (
                        <ArrowRight
                          size={13}
                          className="text-primary/50 lg:hidden shrink-0"
                        />
                      )}
                    </div>

                    {/* Step Content */}
                    <div>
                      <h3 className="text-[13px] sm:text-lg font-bold text-white group-hover:text-primary transition-colors mb-1 sm:mb-2 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-gray-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FOCUSED FAQS */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Heading (4 Cols) */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-7 h-[2px] bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  FAQs
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight leading-tight mb-2 sm:mb-3">
                Common <span className="text-primary">Questions</span>
              </h2>
              <p className="text-xs sm:text-base text-textLight leading-relaxed">
                Have a specific question about your building? Get in touch for
                straightforward advice.
              </p>
            </div>

            {/* Right Accordion List (8 Cols — Framed Card on Mobile, Open Border-Top on Desktop) */}
            <div className="lg:col-span-8 bg-[#F8FAFC] sm:bg-transparent rounded-2xl sm:rounded-none px-4 py-1 sm:p-0 border border-gray-200/90 sm:border-0 sm:border-t sm:border-gray-200">
              {faqs.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  faq={faq}
                  isOpen={openIndex === idx}
                  onToggle={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. GREEN CTA BANNER */}
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
                Need a Fire Risk Assessment?
              </h2>
              <p className="text-secondary/85 text-xs sm:text-lg font-medium mt-2 leading-relaxed">
                Contact us today to discuss your premises and request a
                no-obligation quote.
              </p>
            </div>

            <Link
              href="/contact"
              className="group relative z-10 inline-flex items-center justify-between sm:justify-start gap-3 sm:gap-4 bg-secondary hover:bg-gray-950 text-white font-bold text-xs sm:text-base pl-5 pr-1.5 py-1.5 sm:pl-7 sm:pr-2.5 sm:py-2.5 rounded-full transition-all duration-300 shadow-lg shrink-0"
            >
              <span>Request an Assessment</span>
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