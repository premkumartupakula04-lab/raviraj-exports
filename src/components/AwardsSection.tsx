import React from 'react';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="border-t border-stone-200 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Industry Standing
          </span>
          <h2 className="font-serif-brand text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Awards &amp; Recognition
          </h2>
          <p className="text-base text-stone-600">
            Recognition received for dependable supply integrity and ethical commercial trade.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-stone-200 bg-[#FAF8F5] shadow-sm">
          <img
            src="/src/assets/images/Awards & Recognition.jpg"
            alt="Awards and recognition received by Raviraj Spices Exports"
            className="h-auto max-h-[680px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
