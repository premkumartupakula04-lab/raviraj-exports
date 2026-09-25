import React, { useState, useEffect } from 'react';
import {
  X,
  MessageSquare,
  Mail,
  Send,
  CheckCircle2,
  Package,
  Building,
  User,
  Globe,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export interface InquiryChannelModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  defaultQuantity?: string;
  defaultMessage?: string;
}

export const InquiryChannelModal: React.FC<InquiryChannelModalProps> = ({
  isOpen,
  onClose,
  productName = 'Red Chillies',
  defaultQuantity = '',
  defaultMessage = ''
}) => {
  const [buyerName, setBuyerName] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [customNotes, setCustomNotes] = useState(defaultMessage);
  const [sentSuccess, setSentSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setQuantity(defaultQuantity);
      setCustomNotes(defaultMessage);
      setSentSuccess(null);
    }
  }, [isOpen, defaultQuantity, defaultMessage]);

  if (!isOpen) return null;

  // Build the complete inquiry message
  const generateInquiryMessage = () => {
    const lines = [
      `*COMMERCIAL INQUIRY - RAVIRAJ SPICES EXPORTS PVT LTD*`,
      `Date: ${new Date().toLocaleDateString('en-GB')}`,
      `---------------------------------------`,
      `*Product / Variety:* ${productName}`,
      buyerName.trim() ? `*Buyer Name:* ${buyerName.trim()}` : null,
      company.trim() ? `*Company:* ${company.trim()}` : null,
      country.trim() ? `*Destination Country / Port:* ${country.trim()}` : null,
      quantity.trim() ? `*Required Quantity / Volume:* ${quantity.trim()}` : null,
      `---------------------------------------`,
      `*Requirement Details:*`,
      customNotes.trim()
        ? customNotes.trim()
        : `Hello Raviraj Spices Exports, please share available consignment volume, quality grade specifications, and current FOB/CIF price quote for ${productName}.`,
      `---------------------------------------`,
      `*Destination Contact:* Raviraj Spices Exports Pvt Ltd (Guntur, India)`
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleSendWhatsApp = () => {
    const message = generateInquiryMessage();
    const encoded = encodeURIComponent(message);
    const phone = COMPANY_INFO.contact.phone || '919246777627';
    const url = `https://wa.me/${phone.startsWith('91') ? phone : `91${phone}`}?text=${encoded}`;
    
    window.open(url, '_blank');
    setSentSuccess('WhatsApp');
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  const handleSendEmail = () => {
    const message = generateInquiryMessage();
    const recipient = COMPANY_INFO.contact.email || 'info@ravirajspices.in';
    const subject = encodeURIComponent(`Commercial Spice Inquiry: ${productName} ${company ? `(${company})` : ''}`);
    const body = encodeURIComponent(message);
    const mailtoUrl = `mailto:${recipient}?cc=sales@ravirajspices.in&subject=${subject}&body=${body}`;

    window.open(mailtoUrl, '_blank');
    setSentSuccess('Email');
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-70 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-stone-200 overflow-hidden my-4 flex flex-col max-h-[92vh]">
        
        {/* Header Ribbon */}
        <div className="bg-[#0F291E] text-white p-5 sm:p-6 border-b border-amber-900/40 flex items-start justify-between shrink-0">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Commercial Trade Inquiry
            </span>
            <h3 className="font-serif-brand text-xl sm:text-2xl font-bold">
              Send Inquiry: {productName}
            </h3>
            <p className="text-xs text-stone-300">
              Select whether you want to send your requirement via <strong>Email</strong> or <strong>WhatsApp</strong>.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          
          {sentSuccess && (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-in slide-in-from-top-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Dispatching your inquiry via {sentSuccess}! Opening {sentSuccess}...
              </span>
            </div>
          )}

          {/* Quick Optional Details Form to enrich the message */}
          <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-200/90 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-700">
              <span>Your Details (Optional)</span>
              <span className="text-[11px] text-stone-500 font-normal lowercase">appended to inquiry</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-stone-600 mb-1 flex items-center gap-1">
                  <User className="w-3 h-3 text-stone-400" />
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe / Rajesh Kumar"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-600 mb-1 flex items-center gap-1">
                  <Building className="w-3 h-3 text-stone-400" />
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Global Foods Ltd"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-600 mb-1 flex items-center gap-1">
                  <Globe className="w-3 h-3 text-stone-400" />
                  Country / Destination Port
                </label>
                <input
                  type="text"
                  placeholder="e.g. UAE (Jebel Ali) / USA"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-600 mb-1 flex items-center gap-1">
                  <Package className="w-3 h-3 text-stone-400" />
                  Estimated Quantity / Bags
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500 Bags / 1x20ft Container"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-600 mb-1 flex items-center gap-1">
                <FileText className="w-3 h-3 text-stone-400" />
                Special Requirements / Note
              </label>
              <textarea
                rows={2}
                placeholder="Stemless, moisture spec, ASTA color value, or packaging requirements..."
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* ================= CHANNEL SELECTOR BUTTONS ================= */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
              Choose Where to Send Message:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* OPTION 1: WHATSAPP */}
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="group relative p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50/60 hover:bg-emerald-100/90 text-left transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full">
                      Instant Chat
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif-brand text-base font-bold text-emerald-950">
                      Send via WhatsApp
                    </h4>
                    <p className="text-xs text-emerald-800">
                      Direct WhatsApp message to Managing Director: +91 92467 77627
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-emerald-200/80 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-950">
                  <span>Open WhatsApp</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* OPTION 2: EMAIL */}
              <button
                type="button"
                onClick={handleSendEmail}
                className="group relative p-4 rounded-xl border-2 border-[#0F291E] bg-[#FAF8F5] hover:bg-amber-50/80 text-left transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#0F291E] text-white flex items-center justify-center shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-200 text-stone-900 px-2 py-0.5 rounded-full">
                      Official B2B
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif-brand text-base font-bold text-stone-900">
                      Send via Email
                    </h4>
                    <p className="text-xs text-stone-600">
                      Dispatches official inquiry to: info@ravirajspices.in
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-stone-200 flex items-center justify-between text-xs font-bold text-[#0F291E] group-hover:text-amber-800">
                  <span>Open Email Client</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 border-t border-stone-200 px-5 py-3 flex items-center justify-between text-xs text-stone-600 shrink-0">
          <span>Official Trade Desk: Raviraj Spices Exports Pvt Ltd</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 font-semibold text-stone-600 hover:text-stone-900"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};
