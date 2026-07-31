"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, MoveRight, Home, Building2, Landmark, Briefcase, BookOpen, Camera, ShieldCheck, Wifi } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuredWorks = [
  {
    id: 1,
    title: "Sagar Auditorium",
    desc: "Comprehensive event security and high-definition crowd monitoring network deployed for absolute public safety.",
    image: "/images/sagar.jpeg"
  },
  {
    id: 2,
    title: "Harborpoint Factory",
    desc: "Comprehensive CCTV surveillance and automated access control deployment across a 50,000 sq ft manufacturing floor.",
    image: "/images/harborpoint_factory.png"
  },
  {
    id: 3,
    title: "Coastal View",
    desc: "Complete smart systems integration including video door phones and automated visitor entry for a luxury building.",
    image: "/images/coastal_view.png"
  }
];

const testimonials = [
  {
    quote: "The camera installation at our apartment was seamless and professional. The Securus system has given our residents a real sense of security. Thank you, TechFin!",
    role: "President",
    entity: "Coastal View Residences",
    theme: "bg-[#0f3b43] text-white", // Brand Blue
    iconColor: "text-white/40",
    roleColor: "text-[#B8AD76]",
    colSpan: "col-span-2 md:col-span-2" 
  },
  {
    quote: "We had over 150 cameras installed at Mariner Heights and the entire process was handled with great coordination. The clarity, coverage, and support have exceeded our expectations.",
    role: "Facility Manager",
    entity: "Mariner Heights",
    theme: "bg-slate-100 text-slate-900 border border-slate-200/60", // Light
    iconColor: "text-[#0f3b43]/30",
    roleColor: "text-[#0f3b43]",
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    quote: "TechFin helped us secure our school campus with top-notch surveillance. Their team guided us with the best camera placements and ensured zero blind spots.",
    role: "Principal",
    entity: "Lakeview Academy",
    theme: "bg-slate-900 text-white", // Dark Slate
    iconColor: "text-white/20",
    roleColor: "text-[#B8AD76]",
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    quote: "The PTZ and ANPR cameras installed at the city depot have greatly improved our monitoring and security. We're very happy with the service provided.",
    role: "Project Coordinator",
    entity: "City Central Depot",
    theme: "bg-white text-slate-900 border border-slate-200", // White Outline
    iconColor: "text-slate-200",
    roleColor: "text-slate-500",
    colSpan: "col-span-2 md:col-span-1" 
  },
  {
    quote: "From consultation to installation, everything was smooth. The wireless Securus cameras are perfect for our commercial store. After-sales support has also been excellent.",
    role: "Operations Head",
    entity: "Harborpoint Hardware",
    theme: "bg-[#B8AD76] text-slate-900", // Accent Gold/Khaki
    iconColor: "text-slate-900/20",
    roleColor: "text-slate-800",
    colSpan: "col-span-2 md:col-span-1"
  }
];

const clientList = [
  "Seaside Auditorium", "Mariner Heights", "Harborview Arena", 
  "Harborpoint Hardware", "Pearl Ridge Apartments", "Beacon Heights", 
  "Coastal View Residences", "Whitecliff Residences", "Samudra Trust", 
  "Lakeview Academy", "City Central Depot", "Mangalore Transit Security"
];

// Split the list in half for the dual-direction marquees (Removed for tag cloud redesign)

export default function EditorialClientsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredWorks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

        {/* --- FEATURED MAIN WORK SLIDER --- */}
        <Link href="/work" className="block group">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-8 sm:mb-12 w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-200 bg-slate-100 shadow-2xl h-[350px] sm:h-[450px] lg:h-[600px]"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full">
                  <Image src={featuredWorks[currentSlide].image} alt={featuredWorks[currentSlide].title} fill className="object-cover transition-transform duration-[10000ms] ease-linear group-hover:scale-105" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md shadow-sm">
                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Highlighted Work
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg flex items-center gap-4">
                    {featuredWorks[currentSlide].title}
                    <MoveRight className="h-8 w-8 text-[#B8AD76] opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block" />
                  </h3>
                  <p className="mt-3 max-w-2xl text-xs sm:text-sm lg:text-base font-light leading-relaxed text-slate-300 drop-shadow-md">
                    {featuredWorks[currentSlide].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Slider Indicators */}
            <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 z-20 flex gap-2">
              {featuredWorks.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-[#B8AD76]' : 'w-2 bg-white/30'}`} 
                />
              ))}
            </div>
          </motion.div>
        </Link>

        {/* --- MOSAIC BENTO GRID (All Devices) --- */}
        <div className="mb-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 pb-8 sm:pb-0">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col justify-between overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${testimonial.theme} ${testimonial.colSpan}`}
            >
              <div>
                <Quote 
                  className={`mb-4 sm:mb-8 h-6 w-6 sm:h-10 sm:w-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 ${testimonial.iconColor}`} 
                  strokeWidth={1.5} 
                />
                <p className={`font-medium leading-snug sm:leading-relaxed ${
                  testimonial.colSpan.includes('col-span-2') ? 'text-sm sm:text-2xl lg:text-3xl' : 'text-[11px] sm:text-lg lg:text-xl'
                }`}>
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="mt-6 sm:mt-16 border-t border-current/10 pt-4 sm:pt-6">
                <p className="font-mono text-[10px] sm:text-sm font-bold uppercase tracking-wider leading-tight">
                  {testimonial.entity}
                </p>
                <p className={`mt-1 sm:mt-1.5 font-mono text-[8px] uppercase tracking-widest sm:text-[10px] ${testimonial.roleColor}`}>
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

        {/* --- PORTFOLIO CREATIVE HIGHLIGHTS --- */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          
          {/* Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto px-4">
            <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-5xl">
              Highlight <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f3b43] to-[#B8AD76]">Works.</span>
            </h3>
            <p className="text-sm font-light leading-relaxed text-slate-600 sm:text-base">
              A creative showcase of our diverse technological implementations across multiple sectors.
            </p>
          </div>

          {/* Creative Highlight Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-dashed border-slate-300">
            {[
              {
                title: "Smart Homes",
                MainIcon: Home,
                BgIcon: Wifi,
                clients: ["Mariner Heights", "Pearl Ridge Apts", "Coastal View"]
              },
              {
                title: "Commercial",
                MainIcon: Building2,
                BgIcon: Briefcase,
                clients: ["Seaside Auditorium", "Harborview Arena", "Harborpoint"]
              },
              {
                title: "Institutions",
                MainIcon: Landmark,
                BgIcon: BookOpen,
                clients: ["Samudra Trust", "Lakeview Academy", "City Central"]
              },
              {
                title: "Public Sec",
                MainIcon: ShieldCheck,
                BgIcon: Camera,
                clients: ["Mangalore Security", "Transit Network", "Beacon Heights"]
              }
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group flex flex-col items-center px-2 py-8 sm:p-12 text-center border-dashed border-slate-300 
                  ${idx % 2 === 0 ? 'border-r' : 'lg:border-r'} 
                  ${idx < 2 ? 'border-b lg:border-b-0' : ''} 
                  last:border-r-0`
                }
              >
                {/* Patterned Circle */}
                <div className="relative mb-6 sm:mb-8 flex h-24 w-24 sm:h-40 sm:w-40 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                  
                  {/* Repeating Pattern Background */}
                  <div className="absolute inset-0 flex flex-wrap content-start items-start justify-center p-0.5 sm:p-1 opacity-[0.15]">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div key={i} className="p-[2px] sm:p-[3px]">
                        <cat.BgIcon className="h-3 w-3 sm:h-4 sm:w-4 text-slate-800" strokeWidth={2} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Solid Center Box to clear background */}
                  <div className="relative z-10 flex h-10 w-10 sm:h-16 sm:w-16 items-center justify-center bg-white shadow-[0_0_15px_rgba(255,255,255,1)]">
                    <cat.MainIcon className="h-5 w-5 sm:h-10 sm:w-10 text-[#B8AD76] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h4 className="mb-2 sm:mb-4 text-xs sm:text-lg font-black uppercase tracking-widest text-slate-900">{cat.title}</h4>
                <div className="space-y-1 sm:space-y-2">
                  {cat.clients.map((client, i) => (
                    <p key={i} className="text-[10px] sm:text-sm font-medium text-slate-500 transition-colors hover:text-[#0f3b43]">
                      {client}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}