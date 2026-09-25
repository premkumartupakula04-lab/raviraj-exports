import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  X,
  ShieldCheck,
  Mail,
  Maximize2,
  ZoomIn,
  Download,
  ExternalLink
} from 'lucide-react';
import { CERTIFICATIONS_DATA, CredentialItem, COMPANY_INFO } from '../data/companyData';
import { FssaiLogo, ApedaLogo, SpicesBoardLogo, IsoLogo } from './CertificateLogos';

export const CertificationsSection: React.FC = () => {
  const [selectedCredential, setSelectedCredential] = useState<CredentialItem | null>(null);
  const [zoomDoc, setZoomDoc] = useState(false);

  const renderLogo = (id: string, className?: string) => {
    switch (id) {
      case 'fssai':
        return <FssaiLogo className={className} />;
      case 'apeda':
        return <ApedaLogo className={className} />;
      case 'spices-board':
        return <SpicesBoardLogo className={className} />;
      case 'iso':
        return <IsoLogo className={className} />;
      default:
        return <ShieldCheck className="w-10 h-10 text-amber-700" />;
    }
  };

  return (
    <section id="certifications" className="py-20 lg:py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Compliance & Registrations
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Certifications & Registrations
          </h2>
          <p className="text-base text-stone-600">
            Official trade registrations and quality oversight frameworks aligned with Indian and international export protocols.
          </p>
        </div>

        {/* 4 Cards Grid with Big Realistic Certificate Previews & Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cred) => (
            <div
              key={cred.id}
              className="group bg-white rounded-xl border border-stone-200 hover:border-amber-600/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Document Image Sheet Preview with Overlay */}
              <div
                onClick={() => setSelectedCredential(cred)}
                className="relative aspect-[3/4] bg-stone-100 overflow-hidden cursor-pointer border-b border-stone-100"
              >
                <img
                  src={cred.documentImage}
                  alt={`${cred.title} Official Certificate Document`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Official Logo Banner Overlaid on Top */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="bg-white/95 backdrop-blur-xs rounded px-2 py-1 shadow-md max-w-[70%]">
                    {renderLogo(cred.id, "h-8")}
                  </div>
                  <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[10px] font-mono font-bold uppercase text-amber-300">
                    {cred.category}
                  </span>
                </div>

                {/* Hover Click to Expand */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="py-2 px-4 rounded-full bg-stone-900/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4 text-amber-300" />
                    <span>View Certificate</span>
                  </span>
                </div>

                {/* Bottom title strip on image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 block">
                    Verified Credential Record
                  </span>
                  <h3 className="font-serif-brand text-base font-bold truncate">
                    {cred.title}
                  </h3>
                </div>
              </div>

              {/* Card Body & Description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h4 className="font-serif-brand text-sm font-bold text-stone-900 group-hover:text-[#0F291E] transition-colors">
                    {cred.organization}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {cred.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{cred.status}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCredential(cred)}
                    className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-stone-800 bg-[#FAF8F5] hover:bg-stone-100 border border-stone-300 rounded-md flex items-center justify-center gap-1.5 transition-colors group-hover:border-amber-600/50"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-700" />
                    <span>View Credential Sheet</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Authenticity Compliance Note */}
        <div className="max-w-2xl mx-auto text-center p-4 bg-white rounded-lg border border-stone-200/80">
          <p className="text-xs text-stone-600">
            For buyer due-diligence, authenticated certificate copies and registration certificates can be provided upon direct request by writing to{' '}
            <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-amber-800 font-medium underline">
              {COMPANY_INFO.contact.email}
            </a>.
          </p>
        </div>

      </div>

      {/* Credential Lightbox Modal with Realistic Big Certificate Preview */}
      {selectedCredential && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden border border-stone-200 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Header bar */}
            <div className="bg-[#0F291E] text-white p-4 sm:p-5 flex items-center justify-between border-b border-amber-900/30 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                  {renderLogo(selectedCredential.id, "h-8")}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 block">
                    Official Certificate Document
                  </span>
                  <h3 className="font-serif-brand text-lg sm:text-xl font-bold">
                    {selectedCredential.title} · {selectedCredential.organization}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoomDoc(!zoomDoc)}
                  className="p-2 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold hidden sm:flex items-center gap-1"
                  title="Toggle Zoom"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>{zoomDoc ? 'Fit' : 'Expand'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCredential(null);
                    setZoomDoc(false);
                  }}
                  className="p-2 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Display Area */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-start bg-stone-100/60">
              {/* Big Realistic Certificate Document Sheet */}
              <div className="md:col-span-8 flex justify-center">
                <div className="relative bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-stone-300 max-w-full">
                  <img
                    src={selectedCredential.documentImage}
                    alt={`${selectedCredential.title} Official Certificate Document Full View`}
                    referrerPolicy="no-referrer"
                    className={`rounded shadow-inner object-contain transition-all duration-300 ${
                      zoomDoc ? 'max-h-[85vh] w-auto' : 'max-h-[62vh] w-auto'
                    }`}
                  />
                  <div className="mt-2 text-center text-[11px] font-mono text-stone-500">
                    Official Regulatory Certificate Format · Raviraj Spices Exports Pvt Ltd
                  </div>
                </div>
              </div>

              {/* Credential Details and Actions */}
              <div className="md:col-span-4 bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-4">
                <div className="border-b border-stone-200 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold block">
                    Registration Authority
                  </span>
                  <h4 className="font-serif-brand text-lg font-bold text-stone-900 mt-1">
                    {selectedCredential.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {selectedCredential.organization}
                  </p>
                </div>

                <div className="space-y-3 text-xs text-stone-700">
                  <div>
                    <span className="font-bold uppercase tracking-wider text-stone-900 block text-[11px]">
                      Scope of Trade & Oversight:
                    </span>
                    <p className="text-stone-600 leading-relaxed mt-0.5">
                      {selectedCredential.description}
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950 space-y-1">
                    <span className="font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Status: Active Record
                    </span>
                    <p className="text-[11px] text-emerald-800">
                      Enterprise registration record maintained and validated for international spice consignments.
                    </p>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-950 space-y-1">
                    <span className="font-bold text-[11px] block">
                      Due Diligence & Verification:
                    </span>
                    <p className="text-[11px] text-amber-900 leading-relaxed">
                      High-resolution certified PDF copies with official registration numbers and renewal validity dates are shared directly with verified trade houses.
                    </p>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}?subject=Request%20for%20Certified%20${encodeURIComponent(selectedCredential.title)}%20Document`}
                    className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0F291E] hover:bg-[#16382B] rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>Request Certified Copy</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCredential(null);
                      setZoomDoc(false);
                    }}
                    className="w-full py-2 px-3 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
