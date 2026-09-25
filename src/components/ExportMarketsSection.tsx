import React from 'react';
import { Globe, Anchor, Ship, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

interface ExportMarketsProps {
  onOpenQuote: () => void;
}

export const ExportMarketsSection: React.FC<ExportMarketsProps> = ({ onOpenQuote }) => {
  const ports = [
    { name: "Chennai Port", type: "Major Container Hub", desc: "Direct maritime route connectivity for global container shipments." },
    { name: "Krishnapatnam Port", type: "Deepwater Modern Port", desc: "Fast-turnaround export terminal on the East Coast of India." },
    { name: "Visakhapatnam Port", type: "Key Eastern Gateway", desc: "Premier port handling bulk and containerized agricultural exports." }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#0A1711] text-white relative overflow-hidden">
      {/* Subtle background radial lighting */}
      <div className="absolute inset-0 bg-radial-gradient from-emerald-950/40 via-transparent to-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Global Trade & Logistics
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Connecting Indian Spices with Global Buyers
          </h2>
          <p className="text-base sm:text-lg text-stone-300">
            Serving buyers seeking quality Indian agricultural and spice products.
          </p>
        </div>

        {/* Global Logistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sourcing Hub to Ocean Port Graphic */}
          <div className="lg:col-span-7 bg-[#0F291E]/60 border border-emerald-500/20 rounded-xl p-6 sm:p-8 backdrop-blur-md space-y-6">
            <div className="border-b border-emerald-900/60 pb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">
                Supply Chain Architecture
              </span>
              <h3 className="font-serif-brand text-xl font-bold text-white mt-1">
                From Guntur Farms to International Ports
              </h3>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed">
              Situated in the heart of Andhra Pradesh's fertile Krishna delta region, Raviraj Spices Exports Pvt Ltd benefits from well-connected freight arteries linking our Guntur facility directly to prime deep-sea container terminals on India's eastern seaboard.
            </p>

            {/* Port Gateways */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                Primary Maritime Gateways:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ports.map((p) => (
                  <div key={p.name} className="p-3 bg-stone-900/70 border border-stone-700/60 rounded-lg space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <Anchor className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{p.name}</span>
                    </div>
                    <span className="text-[10px] text-amber-300/80 uppercase font-mono block">
                      {p.type}
                    </span>
                    <p className="text-[11px] text-stone-400 leading-tight">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Readiness */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Phytosanitary & Inspection Compliance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Ship className="w-4 h-4 text-emerald-400" />
                <span>FCL & LCL Container Logistics</span>
              </div>
            </div>
          </div>

          {/* Inquiry / Global Inquiry Callout Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#143628] to-[#0D2219] p-6 sm:p-8 rounded-xl border border-amber-500/30 shadow-xl space-y-6">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="font-serif-brand text-2xl font-bold text-white">
                International Inquiries
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Whether you are an overseas importer, spice distributor, food processor, or trade house, our export team is equipped to address your product specifications, shipment terms (FOB/CIF), and container schedules.
              </p>
            </div>

            <div className="p-4 bg-black/30 rounded-lg border border-emerald-500/20 text-xs text-stone-300 space-y-2">
              <span className="font-semibold text-amber-300 block uppercase tracking-wider">
                Export Services Provided:
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-stone-300">
                <li>Customized food-grade bulk packaging</li>
                <li>Moisture-sealed export containers</li>
                <li>Commercial trade documentation support</li>
                <li>Direct communication with company leadership</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#0F291E] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Export Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
