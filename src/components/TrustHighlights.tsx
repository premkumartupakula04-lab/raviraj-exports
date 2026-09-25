import React from 'react';
import { Award, Sparkles, Cog, Globe2, PhoneCall } from 'lucide-react';
import { TRUST_HIGHLIGHTS } from '../data/companyData';

export const TrustHighlights: React.FC = () => {
  const icons = [Award, Sparkles, Cog, Globe2, PhoneCall];

  return (
    <section className="bg-[#FAF8F5] border-y border-stone-200/80 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_HIGHLIGHTS.map((item, idx) => {
            const IconComponent = icons[idx] || Sparkles;
            return (
              <div
                key={item.title}
                className="group relative p-6 bg-white rounded-lg border border-stone-200/90 hover:border-amber-600/40 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-[#0F291E]/5 text-[#0F291E] flex items-center justify-center shrink-0 group-hover:bg-[#0F291E] group-hover:text-amber-300 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif-brand text-sm sm:text-base font-bold tracking-wide text-stone-900 group-hover:text-[#0F291E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
