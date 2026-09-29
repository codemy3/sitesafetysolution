"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fire-risk-assessments", label: "Fire Risk Assessments" },
  { href: "/work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Optimistic active state so the highlight moves in 0ms on click
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
    setOpen(false);
  }, [pathname]);


  useEffect(() => {
    const handleScroll = () => {
      const isPast = window.scrollY > 20;
      setScrolled((prev) => (prev !== isPast ? isPast : prev));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    setActivePath(href);
    setOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-[top] duration-200 px-3 sm:px-6 lg:px-8 ${
        scrolled ? "top-2 sm:top-3" : "top-3 sm:top-5"
      }`}
    >
      {/* Floating Pill Container */}
      <div
        className={`mx-auto max-w-7xl transition-[padding,box-shadow] duration-200 rounded-2xl lg:rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 px-4 sm:px-6 lg:pl-6 lg:pr-3 ${
          scrolled
            ? "py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            : "py-2.5 shadow-[0_4px_20px_rgb(0,0,0,0.08)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* 1. Brand Logo */}
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center shrink-0"
          >
            <Image
              src="/logo-bg-white.webp"
              alt="Site Safety Solutions Ltd"
              width={200}
              height={70}
              className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply"
              priority
            />
          </Link>

          {/* 2. Center Inner Pill Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center bg-gray-100/90 border border-gray-200/60 rounded-full p-1">
            {navItems.map((item) => {
              const isActive = activePath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3.5 xl:px-4 py-2 text-xs xl:text-[13px] font-semibold rounded-full transition-colors duration-150 whitespace-nowrap z-10 ${
                    isActive
                      ? "text-white"
                      : "text-secondary/80 hover:text-secondary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                      className="absolute inset-0 bg-secondary rounded-full -z-10 shadow-sm"
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right Contact & Pill CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:07468010989"
              className="group flex items-center gap-2 text-secondary hover:text-primary transition-colors px-2"
            >
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform group-hover:scale-105">
                <Phone size={14} strokeWidth={2.5} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs xl:text-sm font-bold leading-none tracking-tight">
                  07468 010989
                </span>
                <span className="text-[10px] text-gray-500 font-medium mt-0.5">
                  Call direct
                </span>
              </div>
            </a>

            <Link
              href="/contact"
              onClick={() => handleNavClick("/contact")}
              className="group inline-flex items-center gap-3 bg-secondary hover:bg-primary text-white text-xs xl:text-sm font-semibold pl-5 pr-1.5 py-1.5 rounded-full transition-colors duration-200"
            >
              <span>Get a Quote</span>
              <span className="w-8 h-8 rounded-full bg-white text-secondary flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </Link>
          </div>

          {/* 4. Mobile Quick-Call + Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:07468010989"
              aria-label="Call Site Safety Solutions"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
            >
              <Phone size={18} />
            </a>

            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white transition-transform active:scale-95 cursor-pointer"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Floating Mobile Menu Drawer (Original Design Restored) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs -z-10 lg:hidden"
            />

            {/* Detached Mobile Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="mx-auto mt-2 max-w-7xl rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden lg:hidden"
            >
              {/* Navigation Links with Architectural Numbering */}
              <div className="p-3 divide-y divide-gray-100">
                {navItems.map((item, idx) => {
                  const isActive = activePath === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-colors ${
                        isActive
                          ? "bg-secondary text-white font-semibold"
                          : "text-secondary hover:bg-gray-50 font-medium"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`text-xs font-mono ${
                            isActive ? "text-primary" : "text-gray-400"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="text-[15px]">{item.label}</span>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className={isActive ? "text-primary" : "text-gray-400"}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Bottom Contact Dock */}
              <div className="bg-secondary p-5 text-white">
                <p className="text-[11px] uppercase tracking-[0.16em] text-primary font-semibold mb-3">
                  OSHCR Registered Consultancy
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <Link
                    href="/contact"
                    onClick={() => handleNavClick("/contact")}
                    className="flex items-center justify-between bg-primary hover:bg-accent text-white font-semibold text-sm px-4 py-3 rounded-xl transition-colors"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowUpRight size={18} />
                  </Link>

                  <a
                    href="tel:07468010989"
                    className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm px-4 py-3 rounded-xl transition-colors"
                  >
                    <Phone size={16} className="text-primary" />
                    <span>07468 010989</span>
                  </a>
                </div>

                <a
                  href="mailto:symon@sitesafety-solutions.co.uk"
                  className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-300 hover:text-white transition-colors pt-2 border-t border-white/10"
                >
                  <Mail size={13} className="text-primary" />
                  <span>symon@sitesafety-solutions.co.uk</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}