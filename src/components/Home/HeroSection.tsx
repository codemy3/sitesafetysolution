"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Cctv, Network, Settings, Monitor, HardDrive, MessagesSquare } from "lucide-react";

const slides = [
  {
    id: "01",
    title: "Surveillance",
    subtitle: "AI-Powered Threat Detection",
    description: "Enterprise-grade monitoring systems with real-time analytics and predictive threat assessment designed to provide 24/7 surveillance and peace of mind.",
    image: "/images/hero1.png", // Replace with your image
    href: "/services#surveillance",
  },
  {
    id: "02",
    title: "Automation",
    subtitle: "Intelligent Environment Control",
    description: "Seamlessly control climate, lighting, and curtains from a single, intuitive centralized interface.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2000&auto=format&fit=crop",
    href: "/services#automation",
  },
  {
    id: "03",
    title: "Access",
    subtitle: "Enterprise Biometric Systems",
    description: "Advanced fingerprint, facial recognition, and digital locks for absolute perimeter control.",
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2000&auto=format&fit=crop",
    href: "/services#access",
  },
  {
    id: "04",
    title: "Perimeter",
    subtitle: "High-Speed Traffic Management",
    description: "Robust boom barriers and public address systems engineered for heavy, continuous daily use.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    href: "/services#gates",
  }
];

const bottomFeatures = [
  { label: "INSTALLATION", icon: <Cctv size={56} strokeWidth={1.5} /> },
  { label: "SYSTEM DESIGN", icon: <Network size={56} strokeWidth={1.5} /> },
  { label: "MAINTENANCE", icon: <Settings size={56} strokeWidth={1.5} /> },
  { label: "MONITORING", icon: <Monitor size={56} strokeWidth={1.5} /> },
  { label: "STORAGE & BACKUP", icon: <HardDrive size={56} strokeWidth={1.5} /> },
  { label: "CONSULTATION", icon: <MessagesSquare size={56} strokeWidth={1.5} /> }
];

const SLIDE_DURATION = 6000;

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [active]);

  const nextSlide = () => setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#0a0a0a] flex flex-col justify-center">

      {/* --- 1. FULL-BLEED BACKGROUND WITH INSTANT CROSSFADE --- */}
      <div className="absolute inset-0 h-full w-full">
        {/* Removed mode="wait" so images transition instantly without delay */}
        <AnimatePresence>
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }} // Fast crossfade
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={slides[active].image}
              alt={slides[active].title}
              fill
              priority // Ensures the browser loads it immediately
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for perfect contrast */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80 pointer-events-none z-0" />
      </div>

      {/* --- 2. CENTERED MAIN CONTENT --- */}
      <div className="relative z-20 flex w-full flex-col items-center px-6 text-center -mt-10 md:-mt-20">
        {/* We keep mode="wait" on the text so it doesn't overlap messily during rapid clicks */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }} // Sped up the text entrance
            className="flex max-w-5xl flex-col items-center"
          >
            {/* Title with Tech Corner Brackets */}
            <div className="relative mb-6 inline-block px-8 py-4 sm:px-12 sm:py-6">
              <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-white/40 md:h-6 md:w-6" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-white/40 md:h-6 md:w-6" />

              <h1 className="text-4xl font-black uppercase tracking-[0.15em] text-white sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-none drop-shadow-2xl">
                {slides[active].title}
              </h1>
            </div>

            <p className="mb-8 max-w-2xl text-xs font-medium leading-relaxed text-white/90 sm:text-sm md:text-base lg:text-lg">
              {slides[active].description}
            </p>

            <Link
              href={slides[active].href}
              className="group relative flex items-center justify-center gap-3 overflow-hidden border border-white/50 bg-transparent px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-white hover:bg-white hover:text-black md:px-10 md:py-4 md:text-xs"
            >
              <span className="relative z-10">Get a Free Quote</span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- 3. CIRCULAR SIDE NAVIGATION ARROWS --- */}
      <div className="absolute left-2 top-1/2 z-20 -translate-y-1/2 md:left-6 lg:left-12">
        <button onClick={prevSlide} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-all hover:scale-110 hover:border-white hover:bg-white hover:text-black md:h-12 md:w-12">
          <ArrowLeft size={18} strokeWidth={1.5} />
        </button>
      </div>
      <div className="absolute right-2 top-1/2 z-20 -translate-y-1/2 md:right-6 lg:right-12">
        <button onClick={nextSlide} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-all hover:scale-110 hover:border-white hover:bg-white hover:text-black md:h-12 md:w-12">
          <ArrowRight size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* --- 4. BOTTOM STATIC FEATURE DOCK --- */}
      <div className="absolute bottom-0 left-0 z-30 w-full px-2 pb-6 pt-20 md:px-6 md:pb-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-3 gap-y-6 gap-x-2 md:flex md:justify-between md:gap-4">
            {bottomFeatures.map((item, idx) => (
              <div key={idx} className="group flex flex-col items-center justify-center gap-3 transition-transform hover:-translate-y-1 cursor-pointer md:flex-1">
                <div className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  <div className="scale-90 md:scale-100">
                    {item.icon}
                  </div>
                </div>
                <span className="text-center text-[9px] font-black uppercase tracking-[0.15em] text-white/90 md:text-[10px] lg:text-[11px] lg:tracking-[0.2em]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}