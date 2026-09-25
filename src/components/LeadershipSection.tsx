import React, { useState } from 'react';
import { Quote, TrendingUp, Phone, MessageSquare, Mail, BarChart3, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface LeadershipSectionProps {
  onOpenMarketUpdate: () => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onOpenMarketUpdate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyContact = () => {
    navigator.clipboard.writeText(
      `Sadhu Sivs Sankar Rao, Managing Director, Raviraj Spices Exports Pvt Ltd. Phone: +91 9246777627, Email: info@ravirajspices.in`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="leadership" className="py-20 lg:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Executive Governance
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Leadership at Raviraj Spices Exports
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            Guiding company operations, agricultural grower relations, and international buyer communications.
          </p>
        </div>

        {/* Leadership Profile Grid */}
        <div className="max-w-5xl mx-auto bg-[#FAF8F5] rounded-xl border border-stone-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Executive Visual & Identity */}
            <div className="md:col-span-5 relative bg-stone-900 overflow-hidden flex flex-col justify-end">
              <img
                src="/src/assets/images/director_portrait_1790319116054.jpg"
                alt="Sadhu Sivs Sankar Rao Managing Director"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top min-h-[380px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E16] via-[#0B1E16]/40 to-transparent" />
              
              <div className="relative z-10 p-6 text-white space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-300">
                  Managing Director · 30+ Years Experience
                </span>
                <h3 className="font-serif-brand text-2xl font-bold text-white">
                  SADHU SIVS SANKAR RAO
                </h3>
                <p className="text-xs text-stone-300 flex items-center gap-1.5 pt-1">
                  <span>Guntur, Andhra Pradesh, India</span>
                </p>
              </div>
            </div>

            {/* Executive Details & Founder Message */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                    Leadership Profile
                  </span>
                  <h4 className="font-serif-brand text-xl font-bold text-stone-900 mt-1">
                    Sadhu Sivs Sankar Rao
                  </h4>
                  <p className="text-xs font-medium text-amber-800 uppercase tracking-widest">
                    Managing Director · Raviraj Spices Exports Pvt Ltd (ESTD. 1992)
                  </p>
                </div>

                {/* Professional Introduction */}
                <p className="text-sm text-stone-700 leading-relaxed">
                  As Managing Director of Raviraj Spices Exports Pvt Ltd, Sadhu Sivs Sankar Rao brings over 30 years of seasoned leadership and deep agricultural roots in Guntur, Andhra Pradesh. His three decades of domain expertise guide the company's rigorous procurement, farmer relationships, and export supply chain management.
                </p>

                {/* Message from Managing Director Placeholder */}
                <div className="relative p-5 bg-white rounded-lg border border-amber-900/15 shadow-sm space-y-2">
                  <Quote className="w-6 h-6 text-amber-700/30" />
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">
                      Message from the Managing Director
                    </span>
                    <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed">
                      "With 30 years of experience in the Guntur spice trade, we believe that enduring international partnerships are built on honest farm sourcing, rigorous processing discipline, and transparent communication. We welcome domestic and global buyers to connect directly with us for their agricultural spice requirements."
                    </p>
                    <span className="text-[11px] text-stone-400 block pt-1 font-mono">
                      — Sadhu Sivs Sankar Rao, Managing Director
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Leadership Affordances: Replaced Save Contact with Today Market Update */}
              <div className="space-y-3 pt-2 border-t border-stone-200">
                <div className="flex flex-wrap items-center gap-3">
                  
                  {/* Today Market Update Button */}
                  <button
                    type="button"
                    onClick={onOpenMarketUpdate}
                    className="flex-1 min-w-[200px] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#0F291E] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-lg shadow-sm inline-flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                    </span>
                    <BarChart3 className="w-4 h-4 text-[#0F291E]" />
                    <span>Today Market Update</span>
                  </button>

                  <a
                    href={COMPANY_INFO.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 text-xs font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/80 border border-emerald-300 rounded-lg inline-flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyContact}
                    className="py-2.5 px-4 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg inline-flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <span>Copy Info</span>
                    )}
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600">
                  <a href={`tel:${COMPANY_INFO.contact.phone}`} className="flex items-center gap-1.5 hover:text-amber-800">
                    <Phone className="w-3.5 h-3.5 text-stone-500" />
                    <span className="font-mono">{COMPANY_INFO.contact.phoneDisplay}</span>
                  </a>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="flex items-center gap-1.5 hover:text-amber-800">
                    <Mail className="w-3.5 h-3.5 text-stone-500" />
                    <span className="font-mono">{COMPANY_INFO.contact.email}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
