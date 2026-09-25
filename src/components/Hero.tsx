import React from 'react';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A1711]"
    >
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_spices_export_1790318934185.jpg"
          alt="Raviraj Spices Exports Indian agricultural spices and red chillies"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09150F]/95 via-[#0A1A13]/85 to-[#09150F]/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A1A13]/40 to-[#0A1A13]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            {/* Unboxed Metadata Kicker (Anti-Pill Rule) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-amber-300 tracking-wider">
              <span className="font-semibold text-amber-300">
                30+ Years of Industry Experience
              </span>
              <span className="text-amber-500/70" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-amber-200">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Guntur, Andhra Pradesh
              </span>
              <span className="text-amber-500/70" aria-hidden="true">·</span>
              <span className="text-stone-300">Indian Spice & Agro Exporter</span>
              <span className="text-amber-500/70" aria-hidden="true">·</span>
              <span className="text-emerald-300 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified B2B Supply
              </span>
            </div>

            {/* Main Heading with Balanced Wrap */}
            <h1 className="font-serif-brand text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              Quality Indian Spices.<br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100">
                Trusted Global Supply.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-stone-200/90 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              {COMPANY_INFO.subTagline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0F291E] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-md shadow-lg shadow-amber-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#products"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold tracking-wide text-stone-100 bg-stone-900/60 hover:bg-stone-800/80 border border-stone-600/60 hover:border-amber-400/50 rounded-md transition-colors flex items-center justify-center"
              >
                Explore Products
              </a>
            </div>

            {/* Quiet Origin Callout */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-stone-300/80">
              <div>
                <span className="block font-semibold text-stone-100 uppercase tracking-wider">Experience</span>
                <span className="text-amber-300 font-medium">30+ Years in Guntur Spice Trade</span>
              </div>
              <div className="w-px h-8 bg-stone-700/60" />
              <div>
                <span className="block font-semibold text-stone-100 uppercase tracking-wider">Direct Origin</span>
                <span>Guntur Spice Belt, India</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-stone-700/60" />
              <div className="hidden sm:block">
                <span className="block font-semibold text-stone-100 uppercase tracking-wider">Specialization</span>
                <span>Red Chillies · Turmeric · Coriander</span>
              </div>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="p-6 rounded-lg bg-[#0F291E]/70 backdrop-blur-md border border-amber-500/20 text-stone-200 shadow-2xl space-y-4">
              <div className="border-b border-amber-500/20 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">Company Overview</span>
                <h2 className="font-serif-brand text-lg font-bold text-white mt-1">
                  RAVIRAJ SPICES EXPORTS PVT LTD
                </h2>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-stone-300">
                <div className="flex justify-between items-start py-1 border-b border-stone-800">
                  <span className="text-stone-400">Managing Director:</span>
                  <span className="font-semibold text-white text-right">Sadhu Sivs Sankar Rao</span>
                </div>
                <div className="flex justify-between items-start py-1 border-b border-stone-800">
                  <span className="text-stone-400">Location:</span>
                  <span className="font-semibold text-stone-200 text-right">Guntur, Andhra Pradesh</span>
                </div>
                <div className="flex justify-between items-start py-1 border-b border-stone-800">
                  <span className="text-stone-400">Direct Phone:</span>
                  <a href={`tel:${COMPANY_INFO.contact.phone}`} className="font-mono text-amber-300 hover:underline">
                    {COMPANY_INFO.contact.phoneDisplay}
                  </a>
                </div>
                <div className="flex justify-between items-start py-1 border-b border-stone-800">
                  <span className="text-stone-400">Official Email:</span>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="font-mono text-amber-300 hover:underline">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 text-center text-xs font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-600/40 rounded flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
