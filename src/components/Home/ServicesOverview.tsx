"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Activity,
  Terminal,
  Radio,
  ArrowRight
} from 'lucide-react';

// ==========================================
// 1. DATA STRUCTURES
// ==========================================
const surveillanceData = [
  { id: '01', title: 'Outdoor Camera', description: 'Keep your surroundings secure with our weatherproof outdoor cameras, built for 24/7 protection.', image: '/images/outdoor.jpg' },
  { id: '02', title: 'Indoor Camera', description: 'Monitor your home or office interiors with high-definition clarity and real-time alerts.', image: '/images/indoor.jpg' },
  { id: '03', title: 'Solar Camera', description: 'Enjoy uninterrupted surveillance with eco-friendly solar cameras—no wires, no limits.', image: '/images/solar-camera.png' },
  { id: '04', title: 'Dash Camera', description: 'Capture every journey and protect your drive with reliable vehicle dash cams.', image: '/images/dash-camera.png' },
  { id: '05', title: 'PIR Sensor', description: 'Detect motion instantly and reduce false alarms with PIR sensor-based surveillance.', image: '/images/pirsensor.png' },
  { id: '06', title: 'PTZ Camera', description: 'Cover wide areas with intelligent zoom, pan, and tilt features—all in one powerful camera.', image: '/images/ptz.webp' },
  { id: '07', title: 'Wireless', description: 'Simplify setup and security with flexible, high-performance wireless cameras.', image: '/images/wireless-camera.png' },
  { id: '08', title: 'C-Mount', description: 'Customize your surveillance range with C-Mount cameras perfect for industrial monitoring.', image: '/images/c-mount.png' }
];

const automationData = [
  { id: 'HA-01', title: 'Smart Switches', description: 'Control lights, fans, and appliances with ease through touch, mobile apps, or voice commands.', image: '/images/smart-switches.png' },
  { id: 'HA-02', title: 'Dimmer Light', description: 'Set the perfect mood and save energy with intelligent dimmer controls.', image: '/images/dimmer-light.png' },
  { id: 'HA-03', title: 'Motion Sensors', description: 'Automatically activate lights when movement is detected, ensuring safety while saving energy.', image: '/images/motion-detect-sensor.png' },
  { id: 'HA-04', title: 'Curtains Motors', description: 'Automate your window treatments for ultimate convenience and climate control.', image: '/images/curtains-motors.png' },
  { id: 'HA-05', title: 'Video Door', description: 'See and talk to visitors before granting access, enhancing both security and convenience.', image: '/images/video-door.jpg' },
  { id: 'HA-06', title: 'PIR Sensor', description: 'Detect motion instantly and reduce false alarms with PIR sensor-based automation.', image: '/images/pirsensor.png' },
];

const accessData = [
  { id: 'AC-01', title: 'Biometric System', description: 'Advanced fingerprint and facial recognition for secure, keyless entry.', image: '/images/biometric-system.png' },
  { id: 'AC-02', title: 'Digital Door Locks', description: 'Keyless entry with PIN codes, cards, or fingerprints, ensuring advanced security.', image: '/images/digital-door-locks.png' },
  { id: 'AC-03', title: 'Boom Barriers', description: 'High-speed automated boom barriers for efficient traffic management.', image: '/images/boom-barriers.png' },
  { id: 'AC-04', title: 'Remote Gate', description: 'Convenient and secure remote-controlled gates for residential and commercial use.', image: '/images/remote-gate.png' },
  { id: 'AC-05', title: 'Visitor Entry', description: 'Streamline guest access and maintain detailed entry logs effortlessly.', image: '/images/visitor-entry-system.jpg' },
  { id: 'AC-06', title: 'Public Address', description: 'Clear and reliable public address systems for announcements and emergency broadcasts.', image: '/images/public-address.png' },
];
// ==========================================
// 2. REUSABLE CAROUSEL COMPONENT
// ==========================================
const FannedCarouselSection = ({
  titlePrefix,
  titleHighlight,
  badgeText,
  BadgeIcon,
  items,
  isMobile,
  theme = 'light',
  linkTo = '/services'
}: {
  titlePrefix: string,
  titleHighlight: string,
  badgeText: string,
  BadgeIcon: any,
  items: any[],
  isMobile: boolean,
  theme?: 'light' | 'brand-blue',
  linkTo?: string
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Decreased from 2.5 to 1.5 to make it faster
  const ROTATION_SPEED = 1.5;

  // Auto-rotation matches the animation duration exactly to create a continuous flow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, ROTATION_SPEED * 1000);
    return () => clearInterval(interval);
  }, [items.length]);

  // Dynamic Theme Classes
  const isBlue = theme === 'brand-blue';
  const sectionBg = isBlue ? 'bg-[#0f3b43] border-[#09252a]' : 'bg-slate-50 border-slate-200/80';
  const gridBg = isBlue
    ? 'bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]'
    : 'bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]';
  const headingColor = isBlue ? 'text-white' : 'text-slate-900';
  const descBoxBg = isBlue
    ? 'border-white/10 bg-white/10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-md'
    : 'border-slate-200/80 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm';

  return (
    <section className={`relative overflow-hidden py-10 lg:py-14 border-b transition-colors duration-500 selection:bg-[#B8AD76]/20 ${sectionBg} ${isBlue ? 'selection:text-white' : 'selection:text-slate-900'}`}>

      {/* Subtle Background Architectural Grid */}
      <div className={`absolute inset-0 z-0 ${gridBg} bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none`} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Telemetry Header */}
        <div className="mb-4 text-center sm:mb-6">
          <div className="mb-2 flex items-center justify-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#B8AD76] uppercase sm:text-xs">
            <BadgeIcon size={14} className="animate-pulse" />
            <span>{badgeText}</span>
          </div>
          <h2 className={`text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl ${headingColor}`}>
            {titlePrefix} <span className="underline decoration-[#B8AD76]/40 decoration-wavy decoration-2 underline-offset-8">{titleHighlight}</span>
          </h2>
        </div>

        {/* Carousel Area (Always Moving) */}
        <div className="relative flex flex-col items-center">
          <div className="relative my-6 flex h-[320px] w-full items-center justify-center sm:my-10 sm:h-[420px] lg:h-[500px]">
            <AnimatePresence mode="popLayout">
              {items.map((item, index) => {
                const total = items.length;
                let offset = index - activeIndex;
                
                // Wrap the cards around cleanly
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isCenter = offset === 0;
                const rotation = offset * 10;
                const xMultiplier = isMobile ? 90 : 170;
                const xTranslation = offset * xMultiplier;
                const yTranslation = Math.abs(offset) * 20;
                const scale = 1 - Math.abs(offset) * 0.06;
                const zIndex = 50 - Math.abs(offset);

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    initial={false}
                    animate={{
                      opacity: Math.abs(offset) > (isMobile ? 2 : 3) ? 0 : 1,
                      rotate: rotation,
                      x: xTranslation,
                      y: yTranslation,
                      scale: scale,
                      zIndex: zIndex,
                    }}
                    // Smooth, continuous linear motion synchronized with the interval
                    transition={{
                      type: "tween",
                      ease: "linear",
                      duration: ROTATION_SPEED,
                    }}
                    className={`absolute h-[280px] w-[200px] cursor-pointer overflow-hidden rounded-[1.5rem] bg-white sm:h-[340px] sm:w-[250px] lg:h-[440px] lg:w-[310px] sm:rounded-[2rem] ${
                      isCenter
                        ? 'shadow-[0_25px_60px_-15px_rgba(184,173,118,0.5)] ring-2 ring-[#B8AD76]'
                        : `shadow-2xl ring-1 ${isBlue ? 'ring-white/10' : 'ring-slate-200/80'} hover:ring-[#B8AD76]/50`
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover transition-all duration-500 ${isCenter ? 'brightness-100' : 'brightness-40'}`}
                    />

                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0'}`} />

                    <div className={`absolute bottom-5 left-5 right-5 text-white transition-opacity duration-300 sm:bottom-6 sm:left-6 sm:right-6 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#B8AD76]/40 bg-[#B8AD76]/20 px-2 py-1 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8AD76] backdrop-blur-md">
                        <Radio size={12} className="animate-pulse" /> ID // {item.id}
                      </span>
                      <h3 className="text-lg font-extrabold tracking-tight text-white drop-shadow-md sm:text-xl md:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Active Product Description */}
          <div className="relative z-20 mx-auto w-full max-w-xl text-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={items[activeIndex].id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                // Sped up the text transition slightly to match the faster card rotation
                transition={{ duration: 0.1 }}
                className={`rounded-xl sm:rounded-2xl border p-3 sm:p-4 ${descBoxBg}`}
              >
                <p className="text-xs sm:text-sm font-light leading-relaxed sm:text-base">
                  {items[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* View All Link */}
            <Link
              href={linkTo}
              className={`mt-4 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${isBlue
                  ? 'border border-white/20 text-white hover:bg-white/10 hover:border-[#B8AD76]'
                  : 'border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-[#B8AD76]'
                }`}
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
// ==========================================
// 3. MAIN EXPORT COMPONENT
// ==========================================
export default function AutoCarouselAndCards() {
  const [isMobile, setIsMobile] = useState(false);

  // Global listener for mobile state to pass down to carousels
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener('change', updateMobileState);
    return () => mediaQuery.removeEventListener('change', updateMobileState);
  }, []);

  return (
    <div className="w-full">

      {/* SECTION 1: HOME AUTOMATION (Brand Blue Theme) */}
      <FannedCarouselSection
        titlePrefix="Home"
        titleHighlight="Automation"
        badgeText="INTELLIGENT ECOSYSTEM // HARDWARE INTEGRATION"
        BadgeIcon={Terminal}
        items={automationData}
        isMobile={isMobile}
        theme="brand-blue"
        linkTo="/services#home-automation"
      />

      {/* SECTION 2: SURVEILLANCE (Light Theme) */}
      <FannedCarouselSection
        titlePrefix="Surveillance"
        titleHighlight="Cameras"
        badgeText="OPTICAL SURVEILLANCE // ACTIVE MATRIX"
        BadgeIcon={Activity}
        items={surveillanceData}
        isMobile={isMobile}
        theme="light"
        linkTo="/services#surveillance-cameras"
      />

      {/* SECTION 3: ACCESS & SECURITY (Light Theme) */}
      <FannedCarouselSection
        titlePrefix="Access &"
        titleHighlight="Security"
        badgeText="PERIMETER // ENTRY MANAGEMENT"
        BadgeIcon={Lock}
        items={accessData}
        isMobile={isMobile}
        theme="light"
        linkTo="/services#smart-systems"
      />

    </div>
  );
}