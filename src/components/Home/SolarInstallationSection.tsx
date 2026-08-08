import React from 'react';
import { Sun } from 'lucide-react';
import Image from 'next/image';

export default function SolarInstallationSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f3b43] py-12 lg:py-16 selection:bg-[#B8AD76]/20 selection:text-white border-b border-[#09252a]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
          {/* Subtle glowing orb in background */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#B8AD76]/20 blur-[80px]" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#B8AD76]/10 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-10 lg:p-12">
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8AD76]/40 bg-[#B8AD76]/20 px-3 py-1.5 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#B8AD76]">
                <Sun size={14} className="animate-[spin_4s_linear_infinite]" /> ECO-FRIENDLY // RENEWABLE ENERGY
              </div>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Solar <span className="underline decoration-[#B8AD76]/40 decoration-wavy decoration-2 underline-offset-8">Installation</span> Services
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-300 md:mx-0 md:text-lg font-light leading-relaxed">
                Empower your home or business with clean, renewable energy. We provide end-to-end solar panel installation, setup, and maintenance services to help you build a sustainable future while reducing energy costs.
              </p>
            </div>
            
            <div className="relative h-64 w-full md:w-1/2 lg:w-[450px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(184,173,118,0.15)] group">
              <Image
                src="/images/solar.jpg"
                alt="Solar Panel Installation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f3b43]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
