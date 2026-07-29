"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Settings, 
  ShieldCheck, 
  ChevronRight, 
  Radio, 
  Terminal,
  Activity,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { JetBrains_Mono } from 'next/font/google';

const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

// --- TABS & CATEGORIES ---
const categories = ['Home Automation', 'Smart Systems', 'Surveillance Cameras'] as const;

// --- COMPLETE DATA FROM PDF ---
const catalogData = [
  // Home Automation
  { id: "HA-01", category: "Home Automation", title: "Smart Switches", desc: "Control lights, fans, and appliances with ease through touch, mobile apps, or voice commands, bringing convenience and energy efficiency to your home.", img: "/images/smart-switches.png" },
  { id: "HA-02", category: "Home Automation", title: "Digital Door Locks", desc: "Provide keyless entry with PIN codes, cards, or fingerprints, ensuring advanced security and convenient access for your home or office.", img: "/images/digital-door-locks.png" },
  { id: "HA-03", category: "Home Automation", title: "Motion Detecting Lights", desc: "Enhance security and convenience by automatically activating when movement is detected, ensuring safety while saving energy.", img: "/images/motion-detect-sensor.png" },
  { id: "HA-04", category: "Home Automation", title: "Dimmer Lights", desc: "Adjust brightness to create the perfect ambiance while saving energy, giving you both comfort and control in your living space.", img: "/images/dimmer-light.png" },
  { id: "HA-05", category: "Home Automation", title: "Curtains Motors", desc: "Open and close curtains effortlessly with remote, app, or voice control, adding convenience, comfort, and a touch of luxury to your home.", img: "/images/curtains-motors.png" },
  { id: "HA-06", category: "Home Automation", title: "Remote Gate", desc: "Provide secure and hassle-free entry with the convenience of operating your gate through a remote, app, or automation system.", img: "/images/remote-gate.png" },
  { id: "HA-07", category: "Home Automation", title: "Public Address", desc: "Deliver clear and effective communication across wide areas, making them ideal for offices, schools, events, and commercial spaces.", img: "/images/indoor.jpg" },

  // Smart Systems
  { id: "SS-01", category: "Smart Systems", title: "Video Door Phones", desc: "See and talk to visitors before granting access, enhancing both security and convenience at your doorstep.", img: "/images/about1.jpg" },
  { id: "SS-02", category: "Smart Systems", title: "Visitor Entry Systems", desc: "Provide secure and hassle-free access management, allowing you to monitor, verify, and record visitors for enhanced safety and control.", img: "/images/about2.jpg" },
  { id: "SS-03", category: "Smart Systems", title: "Smart Cloud AI", desc: "Intelligent cloud-based technology to analyze data in real time, offering advanced security, remote monitoring, and smarter decision-making.", img: "/images/about3.jpg" },
  { id: "SS-04", category: "Smart Systems", title: "Boom Barriers", desc: "Controlled vehicle access at entrances and exits, ensuring security, smooth traffic management, and authorized entry.", img: "/images/outdoor.jpg" },
  { id: "SS-05", category: "Smart Systems", title: "Biometric System", desc: "Use fingerprints, facial recognition, or iris scans to provide secure, keyless access and accurate identity verification.", img: "/images/biometric-system.png" },

  // Surveillance Cameras
  { id: "SV-01", category: "Surveillance Cameras", title: "Outdoor Camera", desc: "Keep your surroundings secure with our weatherproof outdoor cameras, built for 24/7 protection.", img: "/images/outdoor.jpg" },
  { id: "SV-02", category: "Surveillance Cameras", title: "Indoor Camera", desc: "Monitor your home or office interiors with high-definition clarity and real-time alerts.", img: "/images/indoor.jpg" },
  { id: "SV-03", category: "Surveillance Cameras", title: "Solar Camera", desc: "Enjoy uninterrupted surveillance with eco-friendly solar cameras—no wires, no limits.", img: "/images/solar-camera.png" },
  { id: "SV-04", category: "Surveillance Cameras", title: "Vehicle Dash Camera", desc: "Capture every journey and protect your drive with reliable vehicle dash cams.", img: "/images/dash-camera.png" },
  { id: "SV-05", category: "Surveillance Cameras", title: "PIR Sensor Camera", desc: "Detect motion instantly and reduce false alarms with PIR sensor-based surveillance.", img: "/images/pirsensor.png" },
  { id: "SV-06", category: "Surveillance Cameras", title: "PTZ Camera", desc: "Cover wide areas with intelligent zoom, pan, and tilt features—all in one powerful camera.", img: "/images/ptz.webp" },
  { id: "SV-07", category: "Surveillance Cameras", title: "Wireless Camera", desc: "Simplify setup and security with flexible, high-performance wireless cameras.", img: "/images/wireless-camera.png" },
  { id: "SV-08", category: "Surveillance Cameras", title: "C-Mount Camera", desc: "Customize your surveillance range with C-Mount cameras perfect for industrial or long-distance monitoring.", img: "/images/c-mount.png" },
  { id: "SV-09", category: "Surveillance Cameras", title: "ANPR System", desc: "Automatically capture and recognize vehicle number plates, enabling efficient access control and traffic monitoring.", img: "/images/outdoor.jpg" },
  { id: "SV-10", category: "Surveillance Cameras", title: "CCTV with PA", desc: "Integrated system combines CCTV surveillance with public address functionality for improved safety and crowd management.", img: "/images/indoor.jpg" }
];

// --- DESIGN COMPONENTS ---
function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`pointer-events-none absolute inset-0 z-0 opacity-[0.4] ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, #e2e8f0 1px, transparent 1px),
          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    />
  );
}

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

export default function ModernProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#B8AD76]/20 selection:text-slate-900">
      
      {/* ========================================== */}
      {/* 1. CINEMATIC HERO SECTION (Light Edition)  */}
      {/* ========================================== */}
      <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pb-24 sm:pt-40 border-b border-slate-200">
        <GridPattern />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B8AD76]/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Technical HUD Elements */}
        <div className={`${mono.className} absolute left-6 top-6 hidden items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400 sm:flex`}>
          <span>TCF-CATALOG // 2026</span>
          <span className="h-px w-8 bg-slate-300" />
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
            <div className={`${mono.className} mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-600 shadow-sm backdrop-blur-md`}>
              <ShieldCheck size={16} className="text-[#B8AD76]" />
              <span>Complete Ecosystem</span>
            </div>
            
            <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 sm:text-7xl lg:text-[7.5rem] leading-none">
              Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8AD76] to-slate-400">Services</span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-base text-slate-500 sm:text-xl font-light">
              Explore our comprehensive range of high-performance surveillance systems, smart access control, and intelligent home automation hardware.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. EDITORIAL STICKY CATALOG                */}
      {/* ========================================== */}
      <section className="relative py-16 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          
          {categories.map((category, idx) => {
            const categoryProducts = catalogData.filter(item => item.category === category);
            
            let featuredProject = null;
            if (category === 'Home Automation') {
              featuredProject = {
                title: "Harborpoint Factory",
                image: "/images/about3.jpg",
                tag: "Industrial Facility"
              };
            } else if (category === 'Smart Systems') {
              featuredProject = {
                title: "Coastal View",
                image: "/images/visitor-entry-system.jpg",
                tag: "Residential Complex"
              };
            } else if (category === 'Surveillance Cameras') {
              featuredProject = {
                title: "Sagar Auditorium",
                image: "/images/sagar.jpeg",
                tag: "Public Infrastructure"
              };
            }
            
            return (
              <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-24 flex flex-col gap-12 lg:mb-40 lg:flex-row lg:gap-16 border-t border-slate-200 pt-16 lg:pt-24 first:border-0 first:pt-0 scroll-mt-32">
                
                {/* LEFT: Sticky Category Title */}
                <div className="lg:w-1/3">
                  <div className="sticky top-32">
                    <div className={`${mono.className} mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8AD76]`}>
                      <Terminal size={14} /> CATEGORY // 0{idx + 1}
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                      {category}
                    </h2>
                    <p className="mt-6 max-w-sm text-sm font-light text-slate-500 sm:text-base leading-relaxed">
                      Industrial-grade hardware designed to seamlessly integrate into your daily environment, ensuring maximum control and security.
                    </p>
                  </div>
                </div>

                {/* RIGHT: Product Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:w-2/3 xl:gap-8">
                  
                  {/* --- FEATURED DEPLOYMENT INJECTED --- */}
                  {featuredProject && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="group relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl shadow-slate-900/30 sm:col-span-2"
                    >
                      {/* Subtle grid background */}
                      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />
                      
                      {/* Corner brackets */}
                      <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-[#B8AD76]/60 z-20" />
                      <span className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-[#B8AD76]/60 z-20" />
                      <span className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-[#B8AD76]/60 z-20" />
                      <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-[#B8AD76]/60 z-20" />

                      <div className="relative z-10 flex flex-col md:flex-row">
                        <div className="relative h-[260px] w-full shrink-0 overflow-hidden md:h-auto md:w-1/2">
                          <Image src={featuredProject.image} alt={featuredProject.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/60 md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-slate-900" />
                          
                          <div className="absolute left-5 top-5 rounded-full border border-[#B8AD76]/40 bg-[#B8AD76]/20 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#B8AD76] backdrop-blur-md shadow-lg flex items-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8AD76] opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#B8AD76]" />
                            </span>
                            Case Study
                          </div>
                        </div>
                        
                        <div className="flex w-full flex-col justify-center p-7 sm:p-10 md:w-1/2 md:p-12">
                          <div className="mb-4 inline-flex items-center gap-2">
                            <Activity size={14} className="text-[#B8AD76]" />
                            <span className={`${mono.className} text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B8AD76]`}>
                              {featuredProject.tag}
                            </span>
                          </div>
                          <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                            {featuredProject.title}
                          </h3>
                          <p className="mb-8 text-sm font-light leading-relaxed text-slate-400">
                            A prime example of our {category.toLowerCase()} deployed in a real-world scenario, offering unparalleled reliability and control for complex environments.
                          </p>
                          
                          <div className="flex items-center justify-between border-t border-slate-700/60 pt-6">
                             <div className="flex items-center gap-4 sm:gap-6">
                               <div className="flex flex-col">
                                 <span className={`${mono.className} text-lg sm:text-xl font-bold text-white`}>100%</span>
                                 <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">Success</span>
                               </div>
                               <div className="h-8 w-px bg-slate-700" />
                               <div className="flex flex-col">
                                 <span className={`${mono.className} text-lg sm:text-xl font-bold text-white`}>24/7</span>
                                 <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">Active</span>
                               </div>
                             </div>
                             
                             <Link href="/contact" className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#B8AD76] text-slate-900 shadow-lg shadow-[#B8AD76]/20 transition-all hover:scale-110 hover:shadow-[#B8AD76]/40">
                               <ArrowUpRight size={18} className="sm:h-5 sm:w-5" />
                             </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {categoryProducts.map((product, pIdx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: pIdx * 0.05 }}
                      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#B8AD76]/50 hover:shadow-xl hover:shadow-[#B8AD76]/5"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-slate-100 bg-slate-50">
                        
                        {/* Technical ID Badge */}
                        <div className={`${mono.className} absolute top-4 left-4 z-10 flex items-center gap-2 rounded-lg bg-white/90 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-700 border border-slate-200/60 shadow-sm`}>
                          <Radio size={12} className="text-[#B8AD76] group-hover:animate-pulse" />
                          <span>ID // {product.id}</span>
                        </div>

                        {/* REMOVED grayscale class so images show full color immediately */}
                        <Image
                          src={product.img}
                          alt={product.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        
                        {/* Subtle inner shadow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                        <div>
                          <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-[#B8AD76] transition-colors">
                            {product.title}
                          </h3>
                          <p className="mt-4 text-sm leading-relaxed text-slate-500 font-light">
                            {product.desc}
                          </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                          <span className={`${mono.className} text-[10px] font-bold text-slate-400 uppercase tracking-widest`}>
                            STATUS: <span className="text-emerald-500">AVAILABLE</span>
                          </span>
                          <Link href="/contact" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-500 transition-all group-hover:bg-[#B8AD76] group-hover:text-white group-hover:border-[#B8AD76]">
                            <ChevronRight size={18} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. COLOR-BLOCKED SERVICE PROTOCOL          */}
      {/* ========================================== */}
      <section className="relative overflow-hidden bg-[#0f3b43] py-20 sm:py-32 border-t border-slate-200">
        <GridPattern className="opacity-[0.1]" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-end">
            <div>
              <div className={`${mono.className} inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8AD76] mb-4`}>
                <Terminal size={14} />
                <span>Service Protocol</span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
                Professional Delivery <br />
                <span className="text-white/40">& Dependable Support.</span>
              </h2>
            </div>
            <p className="text-lg text-slate-300 font-light lg:justify-self-end lg:max-w-md lg:pb-2">
              We combine quality products with expert installation and a responsive after-sales team to make every deployment smooth and reliable.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            
            {/* Installation Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#09252a] bg-[#09252a]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-md transition-transform hover:-translate-y-2"
            >
              <div className={`${mono.className} absolute top-0 right-0 bg-[#B8AD76] px-4 py-2 rounded-bl-xl text-[10px] font-bold text-black uppercase tracking-widest`}>
                PHASE // 01
              </div>
              
              <div className="mb-8 inline-flex rounded-2xl bg-black/40 p-4 border border-white/10 text-white shadow-inner">
                <Wrench size={32} className="group-hover:text-[#B8AD76] transition-colors" />
              </div>
              
              <h3 className="text-3xl font-bold tracking-tight text-white">
                Installation & Deployment
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300 font-light">
                Our expert team ensures smooth, efficient, and secure installation at any location. We handle exact positioning, wiring, and network configuration for an optimal setup.
              </p>
              
              <div className={`${mono.className} mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest`}>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> POSITIONING</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> WIRING</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> CONFIG</span>
              </div>
            </motion.div>

            {/* Maintenance Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#09252a] bg-[#09252a]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-md transition-transform hover:-translate-y-2"
            >
              <div className={`${mono.className} absolute top-0 right-0 bg-[#B8AD76] px-4 py-2 rounded-bl-xl text-[10px] font-bold text-black uppercase tracking-widest`}>
                PHASE // 02
              </div>
              
              <div className="mb-8 inline-flex rounded-2xl bg-black/40 p-4 border border-white/10 text-white shadow-inner">
                <Settings size={32} className="group-hover:text-[#B8AD76] transition-colors" />
              </div>
              
              <h3 className="text-3xl font-bold tracking-tight text-white">
                After-Sales & Maintenance
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300 font-light">
                Count on us for ongoing support, timely maintenance, and quick troubleshooting to keep your security and automation systems running flawlessly around the clock.
              </p>

              <div className={`${mono.className} mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest`}>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> 24/7 SUPPORT</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> DIAGNOSTICS</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> UPGRADES</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}