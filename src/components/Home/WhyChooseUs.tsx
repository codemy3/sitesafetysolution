"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Compass,
  HardHat,
  Repeat,
  FileSpreadsheet,
  Scale,
  Factory,
  Warehouse,
  Building2,
  HeartPulse,
  Utensils,
  GraduationCap,
  Home,
  Plus,
} from "lucide-react";

const reasons = [
  {
    num: "01",
    title: "OSHCR Registered Consultant",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Practical and professional advice",
    icon: Compass,
  },
  {
    num: "03",
    title: "Support for businesses and construction sites",
    icon: HardHat,
  },
  {
    num: "04",
    title: "One-off or ongoing consultancy available",
    icon: Repeat,
  },
  {
    num: "05",
    title: "Bespoke health & safety documentation",
    icon: FileSpreadsheet,
  },
  {
    num: "06",
    title: "Helping you meet your legal responsibilities",
    icon: Scale,
  },
];

const sectors = [
  { name: "Construction", icon: HardHat },
  { name: "Manufacturing & Engineering", icon: Factory },
  { name: "Warehousing & Logistics", icon: Warehouse },
  { name: "Offices & Retail", icon: Building2 },
  { name: "Care & Healthcare", icon: HeartPulse },
  { name: "Hospitality & Leisure", icon: Utensils },
  { name: "Education", icon: GraduationCap },
  { name: "Property Management", icon: Home },
  { name: "And More...", icon: Plus },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111827] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Exposed 1px Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-white/10">
          
          {/* 1. LEFT COLUMN (5 Cols on Desktop): Heading (Top) + Sectors (Bottom on Desktop) */}
          <div className="order-1 lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-3">
                <span className="w-6 h-[2px] bg-primary" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
                Why Choose <br />
                <span className="text-primary">
                  Site Safety Solutions Ltd?
                </span>
              </h2>
            </div>

            {/* Desktop Sectors Block (Hidden on Mobile so it doesn't push the 6 reasons down) */}
            <div className="hidden lg:block mt-12 pt-8 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50 mb-4">
                All Sectors Covered
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {sectors.map((sector, index) => {
                  const SectorIcon = sector.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-white transition-colors"
                    >
                      <SectorIcon size={14} className="text-primary shrink-0" />
                      <span className="truncate">{sector.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. RIGHT COLUMN (7 Cols on Desktop): Sharp 2x3 Hairline Matrix */}
          <div className="order-2 lg:col-span-7 grid grid-cols-2 bg-white/10 gap-px">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-[#111827] hover:bg-[#162033] p-4 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[118px] sm:min-h-[175px] transition-colors duration-300"
                >
                  {/* Top Row: Minimal Icon + Number */}
                  <div className="flex items-center justify-between mb-3 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-gray-950 transition-colors duration-300">
                      <Icon
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-white/30 group-hover:text-primary transition-colors">
                      {item.num}
                    </span>
                  </div>

                  {/* Bottom Row: Statement */}
                  <h3 className="text-[13px] sm:text-[17px] font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* Subtle Bottom Hover Line */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>

          {/* 3. MOBILE-ONLY SECTORS BLOCK (Appears cleanly AFTER the 6 reasons on phones) */}
          <div className="order-3 lg:hidden p-6 sm:p-8 border-t border-white/10 bg-[#0D131F]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-3.5">
              All Sectors Covered
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
              {sectors.map((sector, index) => {
                const SectorIcon = sector.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-xs text-gray-300"
                  >
                    <SectorIcon size={13} className="text-primary shrink-0" />
                    <span className="truncate">{sector.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}