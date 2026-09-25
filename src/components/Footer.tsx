import React, { useState } from 'react';
import { Phone, Mail, MapPin, X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { downloadVCard } from '../utils/vcard';

interface FooterProps {
  onOpenMarketUpdate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMarketUpdate }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Products', href: '#products' },
    { name: 'Quality & Processing', href: '#quality' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Awards', href: '#awards' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const productsList = [
    { name: 'Red Chillies', href: '#products' },
    { name: 'Turmeric', href: '#products' },
    { name: 'Coriander', href: '#products' },
    { name: 'Other Spices', href: '#products' },
  ];

  return (
    <footer className="bg-[#07130E] text-stone-300 border-t border-emerald-950/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif-brand text-xl font-bold text-white tracking-wider block">
                RAVIRAJ SPICES EXPORTS
              </span>
              <span className="text-[10px] tracking-[0.25em] text-amber-300 font-semibold uppercase">
                PVT LTD · GUNTUR, INDIA
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed font-light">
              "Quality Indian Spices for Global Markets."
            </p>

            <p className="text-xs text-stone-400 leading-relaxed">
              Export-oriented agricultural spice procurement, cleaning, grading and dispatch serving domestic and global B2B buyers.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              {onOpenMarketUpdate && (
                <button
                  type="button"
                  onClick={onOpenMarketUpdate}
                  className="text-xs font-bold text-amber-300 hover:text-amber-200 underline flex items-center gap-1.5 text-left"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                  <span>View Today's Guntur Mandi Market Update</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif-brand text-xs font-bold uppercase tracking-widest text-amber-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif-brand text-xs font-bold uppercase tracking-widest text-amber-200">
              Products
            </h4>
            <ul className="space-y-2 text-xs">
              {productsList.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-4 space-y-4 text-xs">
            <h4 className="font-serif-brand text-xs font-bold uppercase tracking-widest text-amber-200">
              Contact & Sourcing Base
            </h4>

            <div className="space-y-2 text-stone-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white font-mono">
                  {COMPANY_INFO.contact.phone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white font-mono">
                  {COMPANY_INFO.contact.email}
                </a>
              </p>

              <div className="flex items-start gap-2 pt-1 font-mono text-[11px] leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.contact.registeredAddress.line1}, {COMPANY_INFO.contact.registeredAddress.line2}, {COMPANY_INFO.contact.registeredAddress.city}, {COMPANY_INFO.contact.registeredAddress.state}, {COMPANY_INFO.contact.registeredAddress.country}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Raviraj Spices Exports Pvt Ltd. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-stone-300 transition-colors underline"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-stone-300 transition-colors underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white text-stone-900 rounded-xl max-w-lg w-full p-6 sm:p-8 space-y-4 border border-stone-200 shadow-2xl">
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-brand text-xl font-bold text-stone-900">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <div className="text-xs text-stone-600 space-y-2 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>Raviraj Spices Exports Pvt Ltd</strong> respects the privacy of all commercial partners, website visitors, and prospective buyers.
                  </p>
                  <p>
                    <strong>Information Collection:</strong> We collect contact details (such as name, company, email, phone number, and product requirements) submitted through our B2B inquiry form solely for the purpose of communicating regarding spice product availability, commercial quotations, and export logistics.
                  </p>
                  <p>
                    <strong>Data Confidentiality:</strong> Your commercial specifications and contact details are never rented, sold, or shared with unauthorized third parties.
                  </p>
                  <p>
                    For inquiries concerning data handling, contact us at <code>info@ravirajspices.in</code>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Commercial Export Terms:</strong> All product specifications, grades, moisture thresholds, packing types, and shipment terms (FOB/CIF) are mutually agreed upon in formal sales contracts and proforma invoices issued by Raviraj Spices Exports Pvt Ltd.
                  </p>
                  <p>
                    <strong>Origin & Compliance:</strong> Goods originate from verified agricultural sources in India and are inspected in compliance with statutory food safety and phytosanitary export guidelines.
                  </p>
                  <p>
                    <strong>Jurisdiction:</strong> All legal and commercial matters are subject to the jurisdiction of competent courts in Guntur, Andhra Pradesh, India.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="w-full py-2 text-xs font-semibold text-white bg-[#0F291E] rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
