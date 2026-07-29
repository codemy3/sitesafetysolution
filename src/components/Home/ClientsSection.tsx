"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MoveRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "The camera installation at our apartment was seamless and professional. The Securus system has given our residents a real sense of security. Thank you, TechFin!",
    role: "President",
    entity: "Coastal View Residences",
    theme: "bg-[#0f3b43] text-white", // Brand Blue
    iconColor: "text-white/40",
    roleColor: "text-[#B8AD76]",
    colSpan: "md:col-span-2" // Removed row-span-2 to fix the blank space issue
  },
  {
    quote: "We had over 150 cameras installed at Mariner Heights and the entire process was handled with great coordination. The clarity, coverage, and support have exceeded our expectations.",
    role: "Facility Manager",
    entity: "Mariner Heights",
    theme: "bg-slate-100 text-slate-900 border border-slate-200/60", // Light
    iconColor: "text-[#0f3b43]/30",
    roleColor: "text-[#0f3b43]",
    colSpan: "md:col-span-1"
  },
  {
    quote: "TechFin helped us secure our school campus with top-notch surveillance. Their team guided us with the best camera placements and ensured zero blind spots.",
    role: "Principal",
    entity: "Lakeview Academy",
    theme: "bg-slate-900 text-white", // Dark Slate
    iconColor: "text-white/20",
    roleColor: "text-[#B8AD76]",
    colSpan: "md:col-span-1"
  },
  {
    quote: "The PTZ and ANPR cameras installed at the city depot have greatly improved our monitoring and security. We're very happy with the service provided.",
    role: "Project Coordinator",
    entity: "City Central Depot",
    theme: "bg-white text-slate-900 border border-slate-200", // White Outline
    iconColor: "text-slate-200",
    roleColor: "text-slate-500",
    colSpan: "md:col-span-1"
  },
  {
    quote: "From consultation to installation, everything was smooth. The wireless Securus cameras are perfect for our commercial store. After-sales support has also been excellent.",
    role: "Operations Head",
    entity: "Harborpoint Hardware",
    theme: "bg-[#B8AD76] text-slate-900", // Accent Gold/Khaki
    iconColor: "text-slate-900/20",
    roleColor: "text-slate-800",
    colSpan: "md:col-span-1"
  }
];

const clientList = [
  "Seaside Auditorium", "Mariner Heights", "Harborview Arena", 
  "Harborpoint Hardware", "Pearl Ridge Apartments", "Beacon Heights", 
  "Coastal View Residences", "Whitecliff Residences", "Samudra Trust", 
  "Lakeview Academy", "City Central Depot", "Mangalore Transit Security"
];

// Split the list in half for the dual-direction marquees
const marqueeRow1 = [...clientList.slice(0, 6), ...clientList.slice(0, 6), ...clientList.slice(0, 6)];
const marqueeRow2 = [...clientList.slice(6, 12), ...clientList.slice(6, 12), ...clientList.slice(6, 12)];

export default function EditorialClientsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 lg:py-32 overflow-hidden selection:bg-[#B8AD76]/30 selection:text-[#0f3b43]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-10 sm:mb-16 border-b border-slate-200 pb-8 md:flex md:items-end md:justify-between md:pb-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-800 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#0f3b43] animate-pulse" />
              Client Testimonials
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl font-black uppercase tracking-tighter text-slate-900 sm:text-6xl md:text-7xl"
            >
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f3b43] to-[#B8AD76]">Leaders.</span>
            </motion.h2>
          </div>
        </div>

        {/* --- FEATURED MAIN WORK --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative mb-8 sm:mb-12 w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-200 bg-slate-100 shadow-2xl sm:h-[450px] lg:h-[600px]"
        >
          <div className="relative h-[350px] w-full sm:h-full">
            <Image src="/images/sagar.jpeg" alt="Sagar Auditorium" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-pulse" />
              Highlighted Work
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">Sagar Auditorium</h3>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm lg:text-base font-light leading-relaxed text-slate-300 drop-shadow-md">
              This is our highlighted work backed by a trusted client testimonial. Comprehensive event security and high-definition crowd monitoring network deployed for absolute public safety.
            </p>
          </div>
        </motion.div>

        {/* --- MOBILE SWIPE INDICATOR --- */}
        <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:hidden">
          <span>Swipe to read</span>
          <MoveRight size={14} className="animate-pulse text-[#0f3b43]" />
        </div>

        {/* --- MOSAIC BENTO GRID (Desktop) / SNAP CAROUSEL (Mobile) --- */}
        <div className="mb-16 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 sm:pb-0 sm:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex w-[85vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:w-auto sm:shrink sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${testimonial.theme} ${testimonial.colSpan}`}
            >
              <div>
                <Quote 
                  className={`mb-6 h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 sm:mb-8 ${testimonial.iconColor}`} 
                  strokeWidth={1.5} 
                />
                <p className={`font-medium leading-relaxed ${testimonial.colSpan.includes('md:col-span-2') ? 'text-lg sm:text-2xl lg:text-3xl' : 'text-base sm:text-lg lg:text-xl'}`}>
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="mt-10 sm:mt-16 border-t border-current/10 pt-6">
                <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
                  {testimonial.entity}
                </p>
                <p className={`mt-1.5 font-mono text-[9px] uppercase tracking-widest sm:text-[10px] ${testimonial.roleColor}`}>
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CLIENTS LIST (DUAL MARQUEE) & SUMMARY --- */}
        <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-slate-950 shadow-2xl lg:grid lg:grid-cols-3">
          
          {/* Summary Box */}
          <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-white sm:text-4xl">
                Our Portfolio
              </h3>
              <p className="text-sm font-light leading-relaxed text-slate-400 sm:text-base">
                From residential complexes to public infrastructure and educational institutions, our growing portfolio reflects the absolute trust our clients place in our hardware and deployment services.
              </p>
            </div>
          </div>

          {/* Marquee Box */}
          <div className="flex flex-col justify-center gap-6 overflow-hidden bg-[#0f3b43] py-10 sm:gap-8 sm:py-16 lg:col-span-2 relative">
            
            {/* Inner shadows for smooth marquee fade */}
            <div className="absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0f3b43] to-transparent sm:w-24" />
            <div className="absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0f3b43] to-transparent sm:w-24" />

            {/* Row 1: Scrolling Left */}
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: [0, -1500] }}
                transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                className="flex w-max items-center gap-6 whitespace-nowrap pl-4 sm:gap-8 sm:pl-8"
              >
                {marqueeRow1.map((client, idx) => (
                  <div key={`r1-${idx}`} className="flex items-center gap-6 sm:gap-8">
                    <span className="font-mono text-sm sm:text-lg lg:text-xl font-bold uppercase text-white transition-colors hover:text-[#B8AD76]">
                      {client}
                    </span>
                    <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#B8AD76]" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: [-1500, 0] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                className="flex w-max items-center gap-6 whitespace-nowrap pl-4 sm:gap-8 sm:pl-8"
              >
                {marqueeRow2.map((client, idx) => (
                  <div key={`r2-${idx}`} className="flex items-center gap-6 sm:gap-8">
                    <span className="font-mono text-sm sm:text-lg lg:text-xl font-bold uppercase text-white/50 transition-colors hover:text-[#B8AD76]">
                      {client}
                    </span>
                    <span className="text-[#B8AD76] font-bold">/</span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}