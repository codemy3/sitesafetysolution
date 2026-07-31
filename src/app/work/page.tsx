"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Activity,
  ArrowUpRight,
  Radio
} from 'lucide-react';
import { JetBrains_Mono } from 'next/font/google';

const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

// --- DATA ---
const projects = [
  {
    id: "PRJ-01",
    title: "Harborpoint Factory",
    category: "Industrial Facility",
    description: "Comprehensive CCTV surveillance and automated access control deployment across a 50,000 sq ft manufacturing floor.",
    image: "/images/harborpoint_factory.png",
    stats: [
      { label: "Cameras", value: "120+" },
      { label: "Uptime", value: "99.9%" }
    ],
    colSpan: "col-span-12 lg:col-span-8",
    height: "h-[400px] sm:h-[600px]",
    theme: "dark"
  },
  {
    id: "PRJ-02",
    title: "Coastal View",
    category: "Residential Complex",
    description: "Complete smart systems integration including video door phones and automated visitor entry for a luxury 40-unit building.",
    image: "/images/coastal_view.png",
    stats: [
      { label: "Units", value: "40" },
      { label: "Response", value: "<1s" }
    ],
    colSpan: "col-span-12 lg:col-span-4",
    height: "h-[400px] sm:h-[600px]",
    theme: "light"
  },
  {
    id: "PRJ-03",
    title: "Sagar Auditorium",
    category: "Public Infrastructure",
    description: "High-density surveillance, public address systems, and remote gate automation designed to manage large event crowds safely.",
    image: "/images/sagar.jpeg",
    stats: [
      { label: "Capacity", value: "2000+" },
      { label: "Coverage", value: "100%" }
    ],
    colSpan: "col-span-12 lg:col-span-4",
    height: "h-[400px] sm:h-[600px]",
    theme: "light"
  },
  {
    id: "PRJ-04",
    title: "City Surveillance Network",
    category: "Urban Security",
    description: "Deployment of weather-proof outdoor and ANPR cameras at critical city intersections to monitor and control traffic flow.",
    image: "/images/city_surveillance.png",
    stats: [
      { label: "Nodes", value: "45" },
      { label: "Network", value: "Fiber" }
    ],
    colSpan: "col-span-12 lg:col-span-8",
    height: "h-[400px] sm:h-[600px]",
    theme: "dark"
  }
];

// --- COMPONENTS ---
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

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#B8AD76]/20 selection:text-slate-900">
      
      {/* ========================================== */}
      {/* 1. CINEMATIC HERO SECTION (Dark Edition)   */}
      {/* ========================================== */}
      <section className="relative overflow-hidden bg-[#0f3b43] pb-24 pt-32 sm:pb-36 sm:pt-40">
        <div className="absolute inset-0 z-0 bg-[url('/images/hero-background.png')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
        
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B8AD76]/20 via-[#0f3b43]/0 to-[#0f3b43]/0 pointer-events-none" />
        
        <div className={`${mono.className} absolute left-6 top-6 hidden items-center gap-4 text-[10px] uppercase tracking-widest text-white/50 sm:flex`}>
          <span>TCF-PORTFOLIO // 2026</span>
          <span className="h-px w-8 bg-white/20" />
          <span className="flex items-center gap-2 text-[#B8AD76]"><Activity size={12} className="animate-pulse" /> LIVE</span>
        </div>

        <ViewfinderCorners className="border-[#B8AD76]/40 hidden sm:block m-6" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <div className={`${mono.className} mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-300 shadow-sm backdrop-blur-md`}>
              <ShieldCheck size={16} className="text-[#B8AD76]" />
              <span>Client Deployments</span>
            </div>
            
            <h1 className="text-5xl font-black uppercase tracking-tighter text-white sm:text-7xl lg:text-[7.5rem] leading-none">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8AD76] to-white/70">Works</span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-base text-slate-400 sm:text-xl font-light">
              Explore our successful integrations of advanced surveillance, access control, and smart systems across industrial and residential spaces.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[40px] sm:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48V120h1200z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. MASONRY PORTFOLIO GRID                  */}
      {/* ========================================== */}
      <section className="relative py-16 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] ${project.colSpan} ${project.height}`}
              >
                {/* Background Image */}
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  priority={idx < 2}
                />
                
                {/* Gradient Overlays */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  project.theme === 'dark' 
                    ? 'bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent' 
                    : 'bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent'
                }`} />

                {/* Top Badge */}
                <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8AD76] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8AD76]" />
                    </span>
                    {project.id}
                  </div>
                </div>

                {/* Content Area */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 lg:p-14">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    
                    <div className="flex-1">
                      <div className="mb-4 inline-flex items-center gap-2">
                        <Radio size={14} className="text-[#B8AD76]" />
                        <span className={`${mono.className} text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B8AD76]`}>
                          {project.category}
                        </span>
                      </div>
                      <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
                        {project.title}
                      </h2>
                      <p className="max-w-xl text-sm sm:text-base font-light leading-relaxed text-slate-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 border-t border-white/20 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0 shrink-0">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                          <span className={`${mono.className} text-xl sm:text-2xl font-bold text-white`}>
                            {stat.value}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                      
                      <Link href="/contact" className="ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-all hover:scale-110 hover:bg-[#B8AD76]">
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
