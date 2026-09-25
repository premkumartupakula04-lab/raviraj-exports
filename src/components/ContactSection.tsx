import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, ExternalLink, TrendingUp, Building, BarChart3 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { TODAY_MARKET_UPDATE } from '../data/marketData';

interface ContactSectionProps {
  onOpenMarketUpdate: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenMarketUpdate }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Direct Communication
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Contact Raviraj Spices Exports
          </h2>
          <p className="text-base text-stone-600">
            Reach out directly to our managing director and export management team in Guntur, Andhra Pradesh.
          </p>
        </div>

        {/* Quick Contact Action Bar (Replaced Save Contact with Today Market Update card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Call */}
          <a
            href={`tel:${COMPANY_INFO.contact.phone}`}
            className="group p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 hover:border-amber-600/40 shadow-xs hover:shadow-md transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-[#0F291E] text-amber-300 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">Phone Support</span>
              <span className="font-mono text-sm sm:text-base font-bold text-stone-900 group-hover:text-amber-800">
                {COMPANY_INFO.contact.phoneDisplay}
              </span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={COMPANY_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 bg-emerald-50/70 rounded-xl border border-emerald-200 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">WhatsApp Chat</span>
              <span className="font-mono text-sm sm:text-base font-bold text-emerald-950 group-hover:text-emerald-700">
                +91 92467 77627
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${COMPANY_INFO.contact.email}`}
            className="group p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 hover:border-amber-600/40 shadow-xs hover:shadow-md transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">Official Email</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-amber-800 truncate block">
                {COMPANY_INFO.contact.email}
              </span>
            </div>
          </a>

          {/* Today Market Update Button Card (Replaced Save Contact) */}
          <button
            type="button"
            onClick={onOpenMarketUpdate}
            className="group p-5 bg-gradient-to-br from-[#0F291E] to-[#16382B] text-white rounded-xl border border-amber-500/40 hover:border-amber-400 shadow-md hover:shadow-lg transition-all flex items-center gap-4 text-left transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="w-12 h-12 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 shadow-sm relative">
              <BarChart3 className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  Today Market Update
                </span>
              </div>
              <span className="text-xs font-bold text-white group-hover:text-amber-200 block">
                Guntur Yard Rates ({TODAY_MARKET_UPDATE.date})
              </span>
            </div>
          </button>

        </div>

        {/* Addresses and Map Link Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Physical Office & Facility Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Registered Business Address */}
            <div className="p-6 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F291E]">
                <Building className="w-4 h-4 text-amber-700" />
                <span>Registered Business Address</span>
              </div>
              <h3 className="font-serif-brand text-lg font-bold text-stone-900">
                Sadhu Complex Corporate Office
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-mono">
                {COMPANY_INFO.contact.registeredAddress.line1}<br />
                {COMPANY_INFO.contact.registeredAddress.line2}<br />
                {COMPANY_INFO.contact.registeredAddress.city}<br />
                {COMPANY_INFO.contact.registeredAddress.state}, {COMPANY_INFO.contact.registeredAddress.country}
              </p>
            </div>

            {/* Estate / Facility Address */}
            <div className="p-6 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F291E]">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Facility / Location Address</span>
              </div>
              <h3 className="font-serif-brand text-lg font-bold text-stone-900">
                {COMPANY_INFO.contact.facilityAddress.estate}
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-mono">
                {COMPANY_INFO.contact.facilityAddress.line1}<br />
                {COMPANY_INFO.contact.facilityAddress.line2}<br />
                {COMPANY_INFO.contact.facilityAddress.city}<br />
                {COMPANY_INFO.contact.facilityAddress.state}, {COMPANY_INFO.contact.facilityAddress.country}
              </p>
            </div>

          </div>

          {/* Google Maps Visual Location Card */}
          <div className="lg:col-span-6 bg-[#0F291E] text-white rounded-xl border border-amber-900/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-800 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300">
                  Google Maps Verified Coordinates
                </span>
                <span className="flex items-center gap-1 text-xs text-stone-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Guntur, AP
                </span>
              </div>

              <h3 className="font-serif-brand text-2xl font-bold text-white">
                Raviraj Spices Exports Facility
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Located on Nallapadu Road, beside Kotak Mahindra Bank in Sadhu Subrahmanyam Estate, Guntur. Accessible for domestic agricultural transport vehicles, container trailers, and commercial trade visitors.
              </p>

              {/* Map Preview Graphic */}
              <div className="relative rounded-lg overflow-hidden border border-emerald-700/50 bg-[#0B1E16] p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-300 mx-auto flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-serif-brand text-base font-bold text-white block">
                    Sadhu Subrahmanyam Estate
                  </span>
                  <span className="text-xs text-stone-300">
                    Nallapadu Road, Guntur - 522005
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#0F291E] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Open Location in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
