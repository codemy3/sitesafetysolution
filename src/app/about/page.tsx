"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  Shield, 
  ArrowUpRight, 
  Camera, 
  Phone, 
  Eye, 
  Target, 
  MapPin, 
  Activity, 
  Lock, 
  Radio, 
  Crosshair, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';

// --- FONTS ---
const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'] });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

// --- DATA ---
const regions = [
  { name: 'Mangalore', tag: 'HQ' },
  { name: 'Udupi' },
  { name: 'Bangalore' },
  { name: 'Shimoga' },
  { name: 'Hubli' },
  { name: 'Savannur' },
  { name: 'Kerala' },
];

const timeline = [
  {
    code: 'PHASE 01',
    title: 'Regional Reach',
    desc: 'Built a trusted distribution network for security systems across coastal Karnataka.'
  },
  {
    code: 'PHASE 02',
    title: 'Smart Integration',
    desc: 'Expanded into smart home automation and integrated access control for homes and businesses.'
  },
  {
    code: 'PHASE 03',
    title: 'Tailored Solutions',
    desc: 'Delivered bespoke surveillance for residential communities, retail sites, and public venues.'
  },
  {
    code: 'PHASE 04',
    title: 'Long-term Growth',
    desc: 'Grew by focusing on reliable service, local support, and long-term system health.'
  }
];

const strengths = [
  {
    title: 'Securus Distributor',
    description: "Proud authorized distributor of Securus—delivering premium 'Made in India' surveillance solutions backed by ISO 9001:2015 certification for Quality Management Systems.",
    icon: <Shield strokeWidth={1.5} size={32} />
  },
  {
    title: 'Integrated Security',
    description: 'CCTV, access control, and home automation solutions designed for practical everyday use.',
    icon: <Camera strokeWidth={1.5} size={32} />
  },
  {
    title: 'After-Sales Support',
    description: 'Installation, maintenance, and troubleshooting handled by a local team you can reach quickly.',
    icon: <Phone strokeWidth={1.5} size={32} />
  },
];

// --- DESIGN COMPONENTS ---

function ViewfinderCorners({ className = 'border-[#B8AD76]' }: { className?: string }) {
  return (
    <>
      <span className={`pointer-events-none absolute left-0 top-0 h-4 w-4 sm:h-6 sm:w-6 border-l-2 border-t-2 ${className}`} />
      <span className={`pointer-events-none absolute right-0 top-0 h-4 w-4 sm:h-6 sm:w-6 border-r-2 border-t-2 ${className}`} />
      <span className={`pointer-events-none absolute bottom-0 left-0 h-4 w-4 sm:h-6 sm:w-6 border-b-2 border-l-2 ${className}`} />
      <span className={`pointer-events-none absolute bottom-0 right-0 h-4 w-4 sm:h-6 sm:w-6 border-b-2 border-r-2 ${className}`} />
    </>
  );
}

function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`pointer-events-none absolute inset-0 z-0 opacity-[0.15] ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, #94a3b8 1px, transparent 1px),
          linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    />
  );
}

function TelemetryHUD() {
  return (
    <div className={`${mono.className} pointer-events-none absolute inset-x-4 top-4 sm:inset-x-8 sm:top-8 z-10 hidden justify-between text-[10px] uppercase tracking-widest text-slate-400 opacity-60 md:flex`}>
      <div className="flex items-center gap-4">
        <span>SYS_ID: TCF-2026-MNG</span>
        <span className="inline-block h-3 w-px bg-slate-300" />
        <span>LAT: 12.9141° N / LONG: 74.8560° E</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <Activity size={12} className="text-[#B8AD76]" /> TELEMETRY: ACTIVE
        </span>
        <span className="inline-block h-3 w-px bg-slate-300" />
        <span>SEC_LEVEL: MAX</span>
      </div>
    </div>
  );
}

export default function BrightAwwwardsAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const pulse = shouldReduceMotion ? '' : 'animate-pulse';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "50%"]);

  return (
    <main ref={containerRef} className={`${display.className} relative bg-white selection:bg-[#B8AD76] selection:text-white`}>

      {/* ========================================== */}
      {/* 1. HERO — Clean, Bright, Light Theme       */}
      {/* ========================================== */}
      <section className="relative min-h-[100dvh] lg:min-h-[80vh] overflow-hidden pt-24 pb-12 sm:pt-28 bg-white">
        
        <GridPattern />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #000 0px, #000 1px, transparent 1px, transparent 4px)' }}
        />
        
        <TelemetryHUD />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">

            {/* Typography Column */}
            <motion.div
              style={{ y: yHeroText }}
              className="relative z-10 flex min-w-0 flex-col justify-center lg:col-span-6 xl:col-span-7 lg:pr-12"
            >
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`${mono.className} mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full border border-slate-200 bg-white/80 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-600 shadow-sm backdrop-blur-md`}>
                  <span className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#B8AD76] ${pulse}`} />
                  About TechFin
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-400"><Lock size={10} /> SECURED</span>
                </div>

                <h1 className="text-4xl font-bold uppercase tracking-tight text-[#0B0F0D] sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] lg:leading-[0.9]">
                  Security <br />
                  <span className="relative inline-block text-[#B8AD76]">
                    Perfected
                    <Crosshair className="absolute -right-5 -top-2 sm:-right-6 sm:-top-2 hidden h-5 w-5 sm:h-6 sm:w-6 text-slate-300 md:block animate-spin-slow" />
                  </span> <br />
                  Locally.
                </h1>

                <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg font-medium leading-relaxed text-slate-500 sm:text-xl">
                  A Mangalore-based distributor and systems integrator for Securus CCTV & smart home automation. We deliver practical installations and unwavering service support.
                </p>

                {/* Technical status bar */}
                <div className={`${mono.className} mt-6 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-200 pt-4 text-[10px] sm:text-xs text-slate-400`}>
                  <div className="flex items-center gap-2">
                    <Radio size={14} className="text-emerald-500" />
                    <span>24/7 MONITORING READY</span>
                  </div>
                  <div className="hidden h-3 w-px bg-slate-200 sm:block" />
                  <div className="flex items-center gap-2">
                    <Cpu size={14} className="text-[#B8AD76]" />
                    <span>SMART AUTOMATION</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Parallax 4-Image Collage Composition */}
            <div className="relative z-10 block lg:col-span-6 xl:col-span-5 h-[400px] sm:h-[500px] lg:h-[650px] w-full mt-8 lg:mt-0">
              
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "10%"]) }}
                className="absolute left-0 top-0 h-[220px] sm:h-[280px] lg:h-[320px] w-[55%] overflow-hidden rounded-2xl sm:rounded-[2rem] border border-slate-200/50 bg-slate-100 shadow-xl z-10"
              >
                <Image src="/images/about2.jpg" alt="Surveillance" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <span className={`${mono.className} rounded-md bg-black/60 px-2 py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md`}>Surveillance</span>
                </div>
              </motion.div>

              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "-10%"]) }}
                className="absolute right-0 top-[20px] sm:top-[30px] lg:top-[40px] h-[160px] sm:h-[200px] lg:h-[240px] w-[40%] overflow-hidden rounded-2xl sm:rounded-[2rem] border-[3px] sm:border-[4px] border-white bg-slate-100 shadow-2xl z-20"
              >
                <Image src="/images/biometric-system.png" alt="Access Control" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                  <span className={`${mono.className} rounded-md bg-black/60 px-2 py-1 text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-white backdrop-blur-md`}>Access Control</span>
                </div>
              </motion.div>

              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "-20%"]) }}
                className="absolute bottom-[20px] sm:bottom-[30px] lg:bottom-[40px] left-[5%] h-[180px] sm:h-[220px] lg:h-[260px] w-[40%] overflow-hidden rounded-2xl sm:rounded-[2rem] border-[3px] sm:border-[4px] border-white bg-slate-900 shadow-2xl z-30"
              >
                <video
                  src="/curtain.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                  <span className={`${mono.className} rounded-md bg-[#B8AD76]/90 px-2 py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md`}>Smart Curtains</span>
                </div>
              </motion.div>

              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "15%"]) }}
                className="absolute bottom-0 right-0 h-[200px] sm:h-[260px] lg:h-[300px] w-[50%] overflow-hidden rounded-2xl sm:rounded-[2rem] border-[3px] sm:border-[4px] border-white bg-slate-900 shadow-2xl z-20"
              >
                <video
                  src="/folding-gate-automated.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                  <span className={`${mono.className} rounded-md bg-black/60 px-2 py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md`}>Auto Gate</span>
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
                className="absolute left-1/2 top-1/2 z-40 flex h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[4px] sm:border-[6px] lg:border-[8px] border-white bg-[#0f3b43] shadow-2xl"
              >
                <div className="flex items-center -ml-1">
                  <span className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-white">15</span>
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-[#B8AD76]">+</span>
                </div>
                <span className={`${mono.className} mt-0.5 text-[6px] sm:text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.2em] text-[#B8AD76]`}>Years</span>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. COVERAGE NODES — network-status strip   */}
      {/* ========================================== */}
      <div className="relative border-y border-slate-200/80 bg-slate-50 py-4 sm:py-5 overflow-hidden">
        <div className="absolute inset-y-0 left-1/2 w-px bg-slate-200" />
        <div className="flex overflow-hidden">
          <motion.div
            animate={shouldReduceMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 24, repeat: Infinity }}
            className="flex w-max items-center gap-4 pl-4"
          >
            {[...regions, ...regions].map((region, idx) => (
              <div
                key={idx}
                className="group flex shrink-0 items-center gap-2 sm:gap-3 whitespace-nowrap rounded-full border border-[#09252a] bg-[#0f3b43] px-4 py-2 sm:px-5 sm:py-2.5 shadow-md transition-colors hover:border-[#B8AD76]"
              >
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  {!shouldReduceMotion && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  )}
                  <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500" />
                </span>
                <span className={`${mono.className} text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white`}>
                  {region.name}{region.tag ? ` · ${region.tag}` : ''}
                </span>
                <MapPin size={12} className="text-[#B8AD76] transition-transform group-hover:scale-110 sm:h-3.5 sm:w-3.5" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. STRENGTHS — Clean Cards                 */}
      {/* ========================================== */}
      <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
        <GridPattern className="opacity-[0.08]" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className={`${mono.className} mb-3 flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B8AD76]`}>
                <CheckCircle2 size={14} /> CORE ADVANTAGES
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-[#0B0F0D] sm:text-5xl lg:text-6xl">
                Why Choose <span className="text-[#B8AD76]">TechFin.</span>
              </h2>
            </div>
            <div className={`${mono.className} hidden text-right text-xs text-slate-400 md:block`}>
              <div>SYSTEM ARCHITECTURE: VERIFIED</div>
              <div>RELIABILITY INDEX: 99.9%</div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {strengths.map((strength, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-10 lg:p-12"
              >
                <span className={`${mono.className} pointer-events-none absolute -right-2 -top-4 sm:-right-4 sm:-top-6 text-[5rem] sm:text-[8rem] font-bold text-slate-200/40 transition-colors duration-500 group-hover:text-slate-100`}>
                  0{idx + 1}
                </span>

                <div className="absolute inset-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hidden sm:block">
                  <ViewfinderCorners className="border-[#B8AD76]" />
                </div>

                <div className="relative z-10">
                  <div className="mb-8 inline-flex rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 text-[#0B0F0D] shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:border-[#B8AD76] group-hover:text-[#B8AD76]">
                    {strength.icon}
                  </div>
                  <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#0B0F0D]">
                    {strength.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-500">
                    {strength.description}
                  </p>
                </div>

                <div className={`${mono.className} relative z-10 mt-8 flex items-center justify-between border-t border-slate-200/60 pt-4 text-[9px] sm:text-[10px] text-slate-400`}>
                  <span>SPEC_REF: 0{idx + 1}</span>
                  <span className="flex items-center gap-1 text-[#B8AD76] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    READY <Activity size={10} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. VISION & MISSION - COLOR BLOCKED!       */}
      {/* ========================================== */}
      <section className="relative bg-slate-50 py-16 sm:py-20 border-y border-slate-200/80 overflow-hidden">
        
        {/* Background decorative radar circles */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full border border-slate-200/60" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full border border-slate-200/60" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

            {/* Vision — Deep Brand Blue Block */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border border-[#09252a] bg-[#0f3b43] p-8 shadow-2xl sm:p-12 lg:p-20 group hover:-translate-y-1 transition-transform duration-500"
            >
              {/* Subtle gold glow */}
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#B8AD76]/10 blur-[80px]" />
              
              <ViewfinderCorners className="border-[#B8AD76]/30 m-4 sm:m-6 hidden sm:block" />
              
              <div className="absolute right-4 top-4 sm:right-8 sm:top-8 flex items-center justify-center opacity-[0.05] group-hover:opacity-10 transition-opacity duration-700">
                <div className="h-20 w-20 sm:h-40 sm:w-40 rounded-full border border-dashed border-[#B8AD76] animate-spin-slow" />
                <Eye size={40} className="absolute text-[#B8AD76] sm:h-20 sm:w-20" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 sm:mb-8 inline-flex rounded-xl sm:rounded-2xl bg-black/30 p-3 sm:p-4 border border-white/10 text-[#B8AD76] shadow-inner">
                  <Eye size={32} className="sm:h-10 sm:w-10" />
                </div>
                <p className={`${mono.className} mb-3 sm:mb-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B8AD76] flex items-center gap-2`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> Our Vision
                </p>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
                  A trusted name in smart security.
                </h3>
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg font-light leading-relaxed text-slate-300">
                  We aim to deliver reliable technology, practical advice, and consistent support for every site we serve—ensuring complete peace of mind.
                </p>
              </div>
            </motion.div>

            {/* Mission — Dark Slate Block (For Assymetry & Premium Feel) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-800 bg-slate-900 p-8 shadow-2xl sm:p-12 lg:p-20 group hover:-translate-y-1 transition-transform duration-500"
            >
               {/* Subtle blue glow */}
               <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#0f3b43]/30 blur-[80px]" />

              <ViewfinderCorners className="border-[#B8AD76]/30 m-4 sm:m-6 hidden sm:block" />
              
              <div className="absolute right-4 top-4 sm:right-8 sm:top-8 flex items-center justify-center opacity-[0.05] group-hover:opacity-10 transition-opacity duration-700">
                <div className="h-20 w-20 sm:h-40 sm:w-40 rounded-full border border-solid border-white" />
                <div className="absolute h-12 w-12 sm:h-24 sm:w-24 rounded-full border border-dashed border-[#B8AD76]" />
                <Target size={40} className="absolute text-white sm:h-20 sm:w-20" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 sm:mb-8 inline-flex rounded-xl sm:rounded-2xl bg-black/40 p-3 sm:p-4 border border-white/10 text-white shadow-inner">
                  <Target size={32} className="sm:h-10 sm:w-10" />
                </div>
                <p className={`${mono.className} mb-3 sm:mb-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Our Mission
                </p>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Quality systems with responsive service.
                </h3>
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg font-light leading-relaxed text-slate-400">
                  Provide top-tier security systems and home automation across our regions, focusing heavily on reliable installation and straightforward after-sales support.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. TIMELINE — sequence of trust            */}
      {/* ========================================== */}
      <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
        <GridPattern className="opacity-[0.05]" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">

            {/* Sticky Header */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 lg:top-40 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200/80 bg-slate-50 p-6 sm:p-8 lg:p-12">
                <div className={`${mono.className} mb-3 sm:mb-4 flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B8AD76]`}>
                  <Radio size={14} /> DEVELOPMENT VECTOR
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight text-[#0B0F0D] sm:text-5xl lg:text-6xl">
                  A Journey <br />
                  <span className="text-[#B8AD76]">Shaped By</span> <br />
                  Trust.
                </h2>
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg font-medium leading-relaxed text-slate-500">
                  15+ years of building secure environments, adapting to modern technology, and keeping coastal Karnataka safe.
                </p>
              </div>
            </div>

            {/* Scrolling Timeline Items */}
            <div className="lg:col-span-7">
              <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-16">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group relative mb-8 rounded-[1.5rem] sm:rounded-[2rem] border border-transparent bg-white p-5 sm:p-8 transition-all hover:border-slate-200 hover:bg-slate-50 hover:shadow-sm last:mb-0"
                  >
                    <motion.div
                      initial={shouldReduceMotion ? false : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="absolute -left-[35px] top-6 sm:-left-[75px] sm:top-8 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#B8AD76] ring-[6px] sm:ring-8 ring-white"
                    >
                      {!shouldReduceMotion && (
                        <span className="absolute inset-0 rounded-full bg-[#B8AD76] opacity-40 animate-ping" />
                      )}
                    </motion.div>

                    <div className="flex items-center justify-between">
                      <span className={`${mono.className} mb-2 sm:mb-3 inline-block rounded-md bg-slate-100 px-2.5 py-1 text-[10px] sm:text-xs font-bold tracking-widest text-[#B8AD76] group-hover:bg-white`}>
                        {item.code}
                      </span>
                    </div>

                    <h3 className="mb-2 sm:mb-4 text-xl sm:text-3xl font-bold uppercase tracking-tight text-[#0B0F0D]">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-lg font-medium leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. CTA — viewfinder focus bookend          */}
      {/* ========================================== */}
      <section className="relative border-t border-slate-200/80 bg-white py-16 sm:py-20 overflow-hidden">
        
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full border border-slate-100 opacity-60" />
          <div className="absolute inset-6 sm:inset-12 rounded-full border border-slate-100 opacity-60" />
          <div className="absolute inset-12 sm:inset-24 rounded-full border border-slate-100 opacity-60" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center rounded-[2rem] sm:rounded-[3rem] border border-slate-200/80 bg-slate-50/80 px-4 py-12 shadow-lg backdrop-blur-xl sm:px-16 sm:py-20"
          >
            <ViewfinderCorners className="border-[#B8AD76] m-4 sm:m-6 hidden sm:block" />

            <div className={`${mono.className} mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 text-[9px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B8AD76] shadow-sm`}>
              <Shield size={12} className="sm:h-3.5 sm:w-3.5" /> Ready to secure your space?
            </div>

            <h2 className="mx-auto max-w-4xl text-3xl font-bold uppercase tracking-tight text-[#0B0F0D] sm:text-5xl md:text-7xl lg:text-[6rem]">
              LET'S BUILD IT <span className="text-slate-300">TOGETHER.</span>
            </h2>

            <div className="mt-10 sm:mt-16 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-6">
              <a
                href="/contact"
                className={`${mono.className} group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-[#0B0F0D] px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8AD76] focus-visible:ring-offset-2`}
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Start Your Project <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-[18px] sm:w-[18px]" />
                </span>
                <div className="absolute inset-0 z-0 bg-[#B8AD76] transition-transform duration-500 [transform:translateY(100%)] group-hover:[transform:translateY(0)]" />
              </a>

              <a
                href="mailto:techfinent@gmail.com"
                className={`${mono.className} group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border-2 border-slate-200 bg-white px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B0F0D] shadow-sm transition-all hover:border-[#0B0F0D] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8AD76] focus-visible:ring-offset-2`}
              >
                Email Us
              </a>
            </div>

            <div className={`${mono.className} mt-10 sm:mt-16 flex items-center gap-4 sm:gap-8 text-[8px] sm:text-[10px] uppercase tracking-widest text-slate-400`}>
              <span>SEC_SYSTEMS // MANGALORE</span>
              <span className="h-1 w-1 rounded-full bg-[#B8AD76]" />
              <span>EST. 15+ YEARS</span>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}