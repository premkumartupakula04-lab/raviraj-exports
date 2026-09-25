import React from 'react';
import { ArrowDown, TrendingUp, MessageSquare, Phone, BarChart2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onOpenMarketUpdate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenMarketUpdate }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Company Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
                  Company Profile
                </span>
                <span className="text-stone-300">·</span>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                  30+ Years Industry Heritage
                </span>
              </div>
              <h2 className="font-serif-brand text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.2]">
                About Raviraj Spices Exports
              </h2>
            </div>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              Raviraj Spices Exports Pvt Ltd is an Indian spice export company based in Guntur, Andhra Pradesh. Backed by over 30 years of agricultural and spice trading experience in the region, the company focuses on sourcing and supplying Indian spices and agricultural products for buyers seeking quality, reliability and professional export support.
            </p>

            <div className="p-6 bg-stone-100/70 border-l-4 border-[#0F291E] rounded-r-md space-y-3">
              <h3 className="font-serif-brand text-base font-bold text-stone-900">
                30 Years of Sourcing & Agricultural Strength in Guntur
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Located in Guntur, the premier center of India’s spice cultivation, our three decades of ground experience provide unmatched access to local agricultural markets, primary farm producers, and transit corridors. This enduring presence enables thorough quality oversight from initial farm receipt through export packaging.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border border-stone-200 p-4 rounded-md bg-white">
                <span className="block text-xs font-semibold text-[#0F291E] uppercase tracking-wider">Industry Experience</span>
                <span className="text-sm font-bold text-stone-900">30+ Years in Guntur Spice Sector</span>
              </div>
              <div className="border border-stone-200 p-4 rounded-md bg-white">
                <span className="block text-xs font-semibold text-[#0F291E] uppercase tracking-wider">Business Focus</span>
                <span className="text-sm font-medium text-stone-900">Spices & Agricultural Export Supply</span>
              </div>
            </div>

            {/* Actions: Replaced Save Contact with Today Market Update */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#leadership"
                className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0F291E] hover:bg-[#16382B] rounded-lg shadow-sm transition-colors inline-flex items-center gap-2"
              >
                <span>Learn More About Us</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Today Market Update Button */}
              <button
                type="button"
                onClick={onOpenMarketUpdate}
                className="group relative px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 border border-amber-500/40 rounded-lg shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                </span>
                <BarChart2 className="w-4 h-4 text-amber-900" />
                <span>Today Market Update</span>
              </button>
            </div>
          </div>

          {/* Right Column: Managing Director Card */}
          <div className="lg:col-span-5">
            <div className="relative group max-w-md mx-auto bg-white rounded-xl border border-stone-200 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              {/* Photo Area */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src="/src/assets/images/director_portrait_1790319116054.jpg"
                  alt="Sadhu Sivs Sankar Rao Managing Director of Raviraj Spices Exports Pvt Ltd"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E16]/90 via-[#0B1E16]/30 to-transparent" />
                
                {/* Overlay Text Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                    MANAGING DIRECTOR · 30+ YEARS EXPERIENCE
                  </span>
                  <h3 className="font-serif-brand text-xl sm:text-2xl font-bold tracking-tight text-white">
                    SADHU SIVS SANKAR RAO
                  </h3>
                  <p className="text-xs text-stone-300">
                    Raviraj Spices Exports Pvt Ltd
                  </p>
                </div>
              </div>

              {/* Action Ribbon below photo */}
              <div className="p-5 bg-white space-y-3">
                <div className="text-xs text-stone-600 flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="font-medium text-stone-500">Official Mobile:</span>
                  <a href={`tel:${COMPANY_INFO.contact.phone}`} className="font-mono font-semibold text-stone-900 hover:text-amber-700">
                    {COMPANY_INFO.contact.phoneDisplay}
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone}`}
                    className="py-2.5 px-3 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-700" />
                    <span>Call MD</span>
                  </a>
                  <a
                    href={COMPANY_INFO.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Additional Quick Market Button on MD Card */}
                <button
                  type="button"
                  onClick={onOpenMarketUpdate}
                  className="w-full py-2 px-3 text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-red-600" />
                  <span>Check Today's Guntur Mandi Rates</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
