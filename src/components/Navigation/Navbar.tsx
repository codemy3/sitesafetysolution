"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

type DropdownItem = {
  href: string;
  label: string;
};

type NavItem = {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  { 
    href: '/', 
    label: 'Home', 
  },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact Us' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-2 pt-3 sm:px-6 sm:pt-6 lg:px-8">
      <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-300 sm:px-6 sm:py-3 ${
        scrolled 
          ? 'border-white/50 bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-lg' 
          : 'border-white/20 bg-white/10 shadow-none backdrop-blur-sm'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Desktop Logo */}
          <div className="hidden sm:block">
            <Image src="/images/logo.png" alt="TechFin Enterprises" width={176} height={72} className="h-12 w-auto" priority />
          </div>
          {/* Mobile Logo */}
          <div className="block sm:hidden">
            <Image src="/images/logo-mobile.png" alt="TechFin Enterprises" width={176} height={72} className="h-9 w-auto" priority />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={item.href} 
                className={`group flex items-center gap-1 py-4 text-sm font-semibold transition ${
                  pathname === item.href 
                    ? 'text-primary' 
                    : scrolled ? 'text-slate-800 hover:text-primary' : 'text-white hover:text-white/80'
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-primary' : ''}`} 
                  />
                )}
              </Link>

              {/* Desktop Dropdown with Framer Motion */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      key={`dropdown-${item.label}`}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`absolute left-0 top-full w-52 rounded-xl border p-2 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-colors ${
                        scrolled ? 'border-white/50 bg-white/80' : 'border-white/20 bg-black/40'
                      }`}
                    >
                      {item.dropdown?.map((dropItem: DropdownItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                          className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                            scrolled ? 'text-slate-700 hover:bg-slate-100/50 hover:text-primary' : 'text-white hover:bg-white/20 hover:text-white'
                          }`}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link 
            href="/contact" 
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 hover:shadow-[0_12px_30px_rgba(0,62,71,0.25)]"
          >
            Get A Quote <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className={`flex h-10 w-10 items-center justify-center rounded-full p-2 transition lg:hidden ${
          scrolled ? 'bg-slate-100 text-slate-800 hover:bg-slate-200' : 'bg-white/10 text-white hover:bg-white/20'
        }`} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay — tap to close */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div 
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
              className={`absolute left-2 right-2 top-16 z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-[1.5rem] border p-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl sm:left-4 sm:right-4 lg:hidden ${
                scrolled ? 'border-white/50 bg-white/90' : 'border-white/20 bg-black/60'
              }`}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <Link 
                      href={item.href} 
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        pathname === item.href 
                          ? scrolled ? 'text-primary bg-slate-100' : 'text-primary bg-white/10' 
                          : scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {/* Indented Mobile Dropdown Items */}
                    {item.dropdown && (
                      <div className="flex flex-col border-l-2 border-slate-100 ml-6 pl-4 mt-1">
                        {item.dropdown.map((dropItem: DropdownItem) => (
                          <Link
                            key={dropItem.label}
                            href={dropItem.href}
                            className={`block rounded-lg py-2 text-sm font-medium ${
                              scrolled ? 'text-slate-600 hover:text-primary' : 'text-white/80 hover:text-white'
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link 
                  href="/contact" 
                  className="mt-4 flex justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,62,71,0.2)]"
                  onClick={() => setOpen(false)}
                >
                  Get A Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}