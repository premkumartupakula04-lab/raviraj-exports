import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingActions: React.FC = () => {
  return (
    <aside aria-label="Quick contact options" className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
      {/* Phone Call Button */}
      <a
        href={`tel:${COMPANY_INFO.contact.phone}`}
        aria-label="Call Raviraj Spices Exports"
        className="w-11 h-11 sm:w-12 sm:h-12 bg-[#0F291E] text-amber-300 rounded-full shadow-lg border border-amber-500/30 flex items-center justify-center hover:bg-[#16382B] hover:scale-105 active:scale-95 transition-all"
        title="Call +91 9246777627"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={COMPANY_INFO.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Raviraj Spices on WhatsApp"
        className="h-11 sm:h-12 px-3 sm:px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-full shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        title="WhatsApp +91 9246777627"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs tracking-wider uppercase font-bold hidden sm:inline">WhatsApp</span>
      </a>
    </aside>
  );
};
