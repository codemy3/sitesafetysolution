"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring-physics scroll progress for the SVG ring
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 320);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileTap={{ scale: 0.92 }}
          className="group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#0B111E]/95 backdrop-blur-md shadow-[0_14px_35px_rgba(11,17,30,0.45)] cursor-pointer"
        >
          {/* 1. Real-Time SVG Scroll Progress Ring */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 56 56"
          >
            {/* Subtle Background Track */}
            <circle
              cx="28"
              cy="28"
              r="25"
              fill="none"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="2"
            />
            {/* Animated Emerald Progress Indicator */}
            <motion.circle
              cx="28"
              cy="28"
              r="25"
              fill="none"
              stroke="#22C55E"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: smoothProgress }}
            />
          </svg>

          {/* 2. Inner Core with Bottom-Up Liquid Emerald Fill */}
          <span className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full overflow-hidden">
            {/* Hover Curtain Fill */}
            <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />

            {/* 3. Vertical Twin-Arrow Swap Animation */}
            <span className="relative z-10 flex h-5 w-5 items-center justify-center overflow-hidden">
              {/* Primary Arrow (Shoots Up on Hover) */}
              <ArrowUp
                size={18}
                strokeWidth={2.5}
                className="text-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-6"
              />
              {/* Secondary Arrow (Rises from Bottom on Hover) */}
              <ArrowUp
                size={18}
                strokeWidth={2.5}
                className="absolute translate-y-6 text-[#0B111E] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
              />
            </span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}