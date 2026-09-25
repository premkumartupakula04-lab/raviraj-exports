import React, { useState } from 'react';
import { Award, Trophy, X, ZoomIn, ShieldCheck } from 'lucide-react';
import { AWARDS_DATA, AwardItem } from '../data/companyData';

export const AwardsSection: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  return (
    <section id="awards" className="py-20 lg:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Industry Standing
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Awards & Recognition
          </h2>
          <p className="text-base text-stone-600">
            Acknowledged by regional agricultural and trade forums for dependable supply integrity and ethical commercial trade.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {AWARDS_DATA.map((award) => (
            <div
              key={award.id}
              className="group bg-[#FAF8F5] rounded-xl border border-stone-200 hover:border-amber-600/40 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-amber-700" />
                  </div>
                  <span className="text-xs font-mono font-medium text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200/60">
                    Trade Honor
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif-brand text-xl font-bold text-stone-900 group-hover:text-[#0F291E] transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                    {award.organization}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {award.description}
                </p>
              </div>

              {/* Award Image / Document Preview Area */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedAward(award)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 rounded flex items-center justify-center gap-2 transition-colors group-hover:border-amber-500/50"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-amber-700" />
                  <span>View Award Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Integrity Footnote */}
        <div className="text-center text-xs text-stone-500 max-w-lg mx-auto">
          Recognition received from recognized regional mercantile associations and trade platforms across Andhra Pradesh.
        </div>

      </div>

      {/* Award Modal Lightbox */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            className="relative bg-white rounded-xl max-w-md w-full shadow-2xl overflow-hidden border border-stone-200 p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200 text-center"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center">
              <Trophy className="w-8 h-8 text-amber-700" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800">
                Industry Citation
              </span>
              <h3 className="font-serif-brand text-2xl font-bold text-stone-900">
                {selectedAward.title}
              </h3>
              <p className="text-xs font-semibold text-stone-600">
                {selectedAward.organization}
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-600 leading-relaxed text-left">
              <span className="font-bold text-stone-900 block mb-1">Citation Note:</span>
              {selectedAward.description}
            </div>

            <button
              type="button"
              onClick={() => setSelectedAward(null)}
              className="w-full py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
