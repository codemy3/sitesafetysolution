"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Blinds, 
  Lightbulb, 
  DoorOpen, 
  Smartphone, 
  ArrowRight, 
  Sparkles, 
  Wifi, 
  Speaker,
  Activity 
} from 'lucide-react';

const smartServices = [
  {
    icon: Blinds,
    title: 'Automatic Curtains',
    desc: 'Motorized curtains that open and close on schedule, by voice, or via app — adding luxury and effortless comfort to your living space.',
  },
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    desc: 'Dimmers, motion-detecting lights, and scene control — set the perfect mood for any moment with intelligent illumination.',
  },
  {
    icon: DoorOpen,
    title: 'Digital Door Locks',
    desc: 'PIN, fingerprint, card, or app access — keyless entry solutions that combine advanced security with modern convenience.',
  },
  {
    icon: Smartphone,
    title: 'Smart Switches',
    desc: 'Control lights, fans, and appliances through touch panels, mobile apps, or voice assistants from anywhere in the world.',
  },
  {
    icon: Wifi,
    title: 'Remote Gate Control',
    desc: 'Open and close your gates remotely via app or automation — secure, convenient, and fully integrated with your smart home.',
  },
  {
    icon: Speaker,
    title: 'Public Address Systems',
    desc: 'Crystal-clear communication across wide areas — perfect for offices, schools, events, and commercial spaces.',
  },
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ModernTechSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F0D] py-20 sm:py-28">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      
      {/* Gold radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(184,173,118,0.12)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Video + Intro */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16 sm:mb-24">
          
          {/* Left: Video Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Corner brackets */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#B8AD76]/60 pointer-events-none hidden sm:block z-20" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#B8AD76]/60 pointer-events-none hidden sm:block z-20" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/50 bg-slate-900 p-2 sm:p-3 shadow-2xl shadow-black/40">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <video
                  src="/morden-tech.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-72 w-full object-cover sm:h-[420px]"
                />
                {/* Floating overlay label */}
                <div className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/60 px-3.5 py-1.5 text-[11px] font-mono tracking-wider text-white backdrop-blur-md flex items-center gap-2 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8AD76] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8AD76]" />
                  </span>
                  <span>LIVE DEMO</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Intro Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#B8AD76] uppercase">
              <Activity size={14} className="animate-pulse" />
              <span>SMART LIVING // HOME AUTOMATION</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Transform Your Space With{' '}
              <span className="relative">
                <span className="relative z-10 text-[#B8AD76]">Modern Technology</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#B8AD76]/10 z-0 rounded" />
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg font-light">
              From automatic curtains that glide at your command to smart lighting that adapts to your mood — we bring cutting-edge home automation to Mangaluru and beyond. Experience the future of living, today.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link 
                href="/services" 
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B8AD76] px-8 py-4 text-sm font-bold text-[#0B0F0D] transition-all hover:bg-white hover:shadow-lg hover:shadow-[#B8AD76]/20"
              >
                Explore All Services
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-slate-600 px-8 py-4 text-sm font-bold text-white transition-all hover:border-[#B8AD76] hover:text-[#B8AD76]"
              >
                Get a Quote
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-10 flex items-center gap-8 border-t border-slate-800 pt-6">
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">500+</p>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Smart Homes</p>
              </div>
              <div className="h-10 w-px bg-slate-800" />
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">15+</p>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Years Expert</p>
              </div>
              <div className="h-10 w-px bg-slate-800" />
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">24/7</p>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Support</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Service Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-10 flex items-center gap-3">
            <Sparkles size={18} className="text-[#B8AD76]" />
            <h3 className="text-lg font-bold text-white sm:text-xl">Our Smart Home Solutions</h3>
            <div className="hidden sm:block flex-1 h-px bg-slate-800 ml-4" />
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {smartServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900/60 p-3 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#B8AD76]/50 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-[#B8AD76]/5"
                >
                  {/* Gold accent bar on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent transition-colors duration-300 group-hover:bg-[#B8AD76]" />
                  
                  {/* Mobile: vertical stack | Desktop: horizontal */}
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:gap-4">
                    <div className="rounded-lg sm:rounded-xl bg-[#B8AD76]/10 p-2 sm:p-3 text-[#B8AD76] ring-1 ring-[#B8AD76]/20 shrink-0 transition-all duration-300 group-hover:bg-[#B8AD76]/20 group-hover:ring-[#B8AD76]/40">
                      <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-white text-xs sm:text-base group-hover:text-[#B8AD76] transition-colors leading-tight">
                        {service.title}
                      </h4>
                      <p className="hidden sm:block mt-1.5 text-sm leading-relaxed text-slate-400 font-light">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}