"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Connect this form to the actual email/form service before launch.
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      e.currentTarget.reset();
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* 1. DARK HERO (Matches Inner Pages) */}
      <section className="relative min-h-[360px] sm:min-h-[400px] flex items-center justify-center pt-28 pb-14 sm:pt-32 sm:pb-16 bg-[#0B111E] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-[#0B111E]/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Get in Touch
              </span>
              <span className="w-8 h-[1.5px] bg-primary" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3 sm:mb-4">
              Let&apos;s Talk About Your{" "}
              <span className="text-primary">Safety Needs.</span>
            </h1>

            <p className="text-sm sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
              Whether you need a Fire Risk Assessment, RAMS documentation, site
              audits, or ongoing support, get in touch for a no-obligation
              discussion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN ARCHITECTURAL SPLIT: CONTACT DETAILS & MAP (LEFT) + FORM (RIGHT) */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN (5 Cols): 2x2 Contact Grid + UK-Wide Strip + Map */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col gap-5"
            >
              {/* 2x2 Contact Cards (2 per row on Mobile & Desktop) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                
                {/* Card 1: Phone */}
                <a
                  href="tel:07468010989"
                  className="group bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 hover:border-primary/60 shadow-xs transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-secondary flex items-center justify-center transition-colors mb-3 sm:mb-4">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-textLight mb-0.5">
                      Phone
                    </span>
                    <span className="text-xs sm:text-base font-extrabold text-secondary group-hover:text-primary transition-colors">
                      07468 010989
                    </span>
                  </div>
                </a>

                {/* Card 2: Email */}
                <a
                  href="mailto:symon@sitesafety-solutions.co.uk"
                  className="group bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 hover:border-primary/60 shadow-xs transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-secondary flex items-center justify-center transition-colors mb-3 sm:mb-4">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-textLight mb-0.5">
                      Email
                    </span>
                    <span className="block text-xs sm:text-sm font-extrabold text-secondary group-hover:text-primary transition-colors break-all leading-snug">
                      symon@sitesafety-solutions.co.uk
                    </span>
                  </div>
                </a>

                {/* Card 3: Business Address */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xs flex flex-col justify-between">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 sm:mb-4">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-textLight mb-1">
                      Business Address
                    </span>
                    <address className="not-italic text-xs sm:text-sm font-bold text-secondary leading-snug">
                      188 Moorcroft Road
                      <br />
                      Manchester, M23 0AJ
                    </address>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=188%20Moorcroft%20Road%2C%20Manchester%20M23%200AJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-secondary transition-colors"
                    >
                      <span>Google Maps</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                {/* Card 4: Registered Office */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xs flex flex-col justify-between">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-100 text-secondary flex items-center justify-center mb-3 sm:mb-4">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-textLight mb-1">
                      Registered Office
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-secondary leading-snug">
                      71–75 Shelton Street
                      <br />
                      London, WC2H 9JQ
                    </p>
                    <p className="mt-2 text-[10px] sm:text-[11px] font-semibold text-textLight">
                      Company No. 17410537
                    </p>
                  </div>
                </div>

              </div>

              {/* UK-Wide Coverage Banner */}
              <div className="rounded-2xl bg-[#0B111E] text-white p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    Service Area
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                    UK-Wide Health &amp; Safety Consultancy &amp; Site Support
                  </p>
                </div>
              </div>

              {/* Compact Embedded Map Card */}
              <div className="bg-white rounded-2xl border border-gray-200/90 p-2.5 shadow-xs overflow-hidden">
                <div className="flex items-center justify-between px-2.5 pt-1 pb-2.5">
                  <span className="text-xs font-extrabold text-secondary">
                    Business Address Location
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=188%20Moorcroft%20Road%2C%20Manchester%20M23%200AJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors"
                  >
                    <span>Open Map</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div className="overflow-hidden rounded-xl bg-gray-100">
                  <iframe
                    title="Site Safety Solutions Ltd location"
                    src="https://www.google.com/maps?q=188%20Moorcroft%20Road%2C%20Manchester%20M23%200AJ&output=embed"
                    className="h-[220px] sm:h-[250px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN (7 Cols): ENQUIRY FORM */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
                
                <div className="mb-6 sm:mb-8 pb-5 border-b border-gray-100">
                  <div className="inline-flex items-center gap-2.5 mb-2">
                    <span className="w-7 h-[2px] bg-primary" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Direct Enquiry
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
                    Tell Us How We Can Help
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-textLight leading-relaxed">
                    Send a few details about your premises or project and we
                    will get back to you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-[#F8FAFC] border border-gray-200 px-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <CheckCircle2 size={30} />
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold text-secondary">
                      Thank you for your enquiry
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-textLight">
                      We have received your details and will get back to you as
                      soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    
                    {/* Row 1: Name + Company (2-per-line on Mobile & Desktop) */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-xs sm:text-sm font-bold text-secondary"
                        >
                          Name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] focus:bg-white px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="mb-1.5 block text-xs sm:text-sm font-bold text-secondary"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] focus:bg-white px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email + Phone (2-per-line on Mobile & Desktop) */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-xs sm:text-sm font-bold text-secondary"
                        >
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] focus:bg-white px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                          placeholder="you@company.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-xs sm:text-sm font-bold text-secondary"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] focus:bg-white px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    {/* Row 3: Service Select */}
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-xs sm:text-sm font-bold text-secondary"
                      >
                        What can we help you with?
                      </label>
                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] focus:bg-white px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="Fire Risk Assessment">
                          Fire Risk Assessment
                        </option>
                        <option value="RAMS">
                          Risk Assessments &amp; Method Statements (RAMS)
                        </option>
                        <option value="Health & Safety Policies">
                          Health &amp; Safety Policies &amp; Procedures
                        </option>
                        <option value="Site Inspections">
                          Site Inspections &amp; Audits
                        </option>
                        <option value="CDM Support">
                          CDM Health &amp; Safety Support
                        </option>
                        <option value="COSHH Assessments">
                          COSHH Assessments
                        </option>
                        <option value="Accident Investigations">
                          Accident &amp; Incident Investigations
                        </option>
                        <option value="Training">
                          Training &amp; Toolbox Talks
                        </option>
                        <option value="Ongoing Consultancy">
                          Ongoing Consultancy
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-xs sm:text-sm font-bold text-secondary"
                      >
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full resize-none rounded-xl border border-gray-200 bg-[#F8FAFC] focus:bg-white px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                        placeholder="Tell us briefly about your premises, site, or requirements..."
                      />
                    </div>

                    {/* Submit Button + Disclaimer */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-[11px] sm:text-xs text-textLight leading-relaxed max-w-xs order-2 sm:order-1 text-center sm:text-left">
                        By submitting this form, you request contact from Site
                        Safety Solutions Ltd regarding your enquiry.
                      </p>

                      <button
                        type="submit"
                        className="group order-1 sm:order-2 inline-flex items-center justify-center gap-3 bg-secondary hover:bg-primary text-white hover:text-secondary font-bold text-xs sm:text-sm pl-7 pr-2 py-2 rounded-full transition-all duration-300 shadow-md shrink-0 cursor-pointer"
                      >
                        <span>Send Enquiry</span>
                        <span className="w-9 h-9 rounded-full bg-primary group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                          <ArrowUpRight size={16} strokeWidth={2.5} />
                        </span>
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}