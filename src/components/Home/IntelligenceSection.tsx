import { Activity, ShieldCheck, UserCheck, Server, Zap, MessageSquare, BrainCircuit, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Operational Monitoring',
    description: 'Staff presence, queue analytics, VIP monitoring, branch opening / closing compliance.',
    icon: Activity,
  },
  {
    title: 'Security Analytics',
    description: 'Human intrusion, perimeter alerts, loitering, unauthorized parking.',
    icon: ShieldCheck,
  },
  {
    title: 'Facial Recognition',
    description: 'Attendance automation, biometric alerts, visitor tracking.',
    icon: UserCheck,
  },
  {
    title: 'Infrastructure Monitoring',
    description: 'Camera device status, network device health, power monitoring.',
    icon: Server,
  },
  {
    title: 'Smart Automation',
    description: 'Video call, WhatsApp / BMS alerts, automated escalation.',
    icon: Zap,
  },
];

export default function IntelligenceSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-y border-slate-200/80 selection:bg-[#B8AD76]/20 selection:text-slate-900">
      
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          
          {/* Left Content Area */}
          <div className="max-w-2xl">
            {/* Telemetry Header */}
            <div className="mb-6 flex items-center justify-start gap-2 text-[10px] font-mono tracking-[0.2em] text-[#B8AD76] uppercase sm:text-xs">
              <BrainCircuit size={16} className="animate-pulse" />
              <span>AI & Analytics // Core Features</span>
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              AI-Powered Video Analytics & Operational Intelligence Solutions
            </h2>
            
            <p className="mt-6 text-base font-light leading-relaxed text-slate-600 sm:text-lg">
              Empower operations with real-time visibility, smart alerts, and automated workflows for safer, smarter facilities.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#0f3b43] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-[0_12px_30px_rgba(0,62,71,0.25)] transition-all hover:bg-[#102d3a]"
              >
                <span className="relative z-10 flex items-center gap-2">Talk to Sales <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/50 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-slate-700 backdrop-blur-sm transition-all hover:border-[#B8AD76] hover:bg-slate-50 hover:text-[#0f3b43]"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Cards Area */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              // Staggered layout for cards
              const isEven = index % 2 === 0;
              const isLastAndOdd = index === features.length - 1 && features.length % 2 !== 0;
              return (
                <div
                  key={feature.title}
                  className={`group relative overflow-hidden rounded-[1.25rem] sm:rounded-[2rem] border border-slate-200/80 bg-white/80 p-4 sm:p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8AD76]/50 hover:shadow-[0_18px_45px_-25px_rgba(15,23,42,0.15)] flex flex-col justify-between ${
                    isEven && !isLastAndOdd ? 'lg:translate-y-6' : ''
                  } ${isLastAndOdd ? 'col-span-2' : ''}`}
                >
                  <div className="absolute top-0 right-0 p-3 sm:p-6 opacity-5 transition-opacity group-hover:opacity-10">
                    <Icon className="h-16 w-16 sm:h-20 sm:w-20" />
                  </div>
                  <div>
                    <div className="mb-4 sm:mb-6 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0f3b43] text-[#B8AD76] shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#102d3a]">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="relative z-10 text-[13px] leading-tight font-bold tracking-tight text-slate-900 sm:text-xl">
                      {feature.title}
                    </h3>
                    <p className="relative z-10 mt-2 sm:mt-3 text-[10px] sm:text-sm font-light leading-relaxed text-slate-600 line-clamp-3 sm:line-clamp-none">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 sm:mt-6 flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#0f3b43]/70 transition-colors group-hover:text-[#0f3b43]">
                    <MessageSquare className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#B8AD76]" />
                    <span className="hidden sm:inline">Learn More</span>
                    <span className="sm:hidden">More</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
