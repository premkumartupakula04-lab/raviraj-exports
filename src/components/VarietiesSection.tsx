import React from 'react';
import { ArrowUpRight, CalendarDays, TrendingUp } from 'lucide-react';
import { DailyMarketReport, VarietyRate } from '../data/marketData';

interface VarietiesSectionProps {
  report: DailyMarketReport;
  onOpenMarketUpdate: () => void;
}

const varietyImages: Record<string, string> = {
  teja: '/src/assets/images/actejas17.jpg',
  '341': '/src/assets/images/ac341.jpg',
  '2043': '/src/assets/images/ac2043.jpg',
  aarmoor: '/src/assets/images/acarmoor.jpg',
  '334-s10': '/src/assets/images/ac334 & S10.jpg',
  '5531': '/src/assets/images/ac5531.jpg',
  '355': '/src/assets/images/ac355.jpg',
  dd: '/src/assets/images/acdd.jpg'
};

const formatPrice = (value: number) => `₹${value.toLocaleString('en-IN')}`;

const getRateLabel = (variety: VarietyRate) => {
  const range = `${formatPrice(variety.minPrice)} - ${formatPrice(variety.maxPrice)}`;
  if (variety.extraMin === undefined) return range;

  const extraRange = variety.extraMax && variety.extraMax !== variety.extraMin
    ? `${formatPrice(variety.extraMin)} - ${formatPrice(variety.extraMax)}`
    : formatPrice(variety.extraMin);

  return `${range} | Extra ${extraRange}`;
};

export const VarietiesSection: React.FC<VarietiesSectionProps> = ({
  report,
  onOpenMarketUpdate
}) => {
  return (
    <section id="varieties" className="relative overflow-hidden border-y border-amber-900/10 bg-[#17382b] py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,160,56,0.18),transparent_35%),linear-gradient(135deg,#17382b_0%,#0f291e_60%,#092019_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Guntur Yard Market
            </span>
            <h2 className="font-serif-brand text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Our Chilli Varieties
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
              Browse our eight regularly traded varieties with today&apos;s live mandi rate shown on every image.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenMarketUpdate}
            className="inline-flex w-fit items-center gap-2 rounded-md border border-amber-400/50 bg-amber-400 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#0f291e] transition-colors hover:bg-amber-300"
          >
            <TrendingUp className="h-4 w-4" />
            Open Live Rate Editor
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {report.varieties.map((variety) => (
            <article key={variety.id} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] shadow-lg backdrop-blur-sm">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                <img
                  src={varietyImages[variety.id] || '/src/assets/images/hero_spices_export_1790318934185.jpg'}
                  alt={`${variety.name} chilli variety`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-3 bottom-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Live rate</p>
                  <p className="mt-1 text-lg font-bold text-white">{getRateLabel(variety)}</p>
                  <p className="text-xs text-stone-300">per kilogram</p>
                </div>
              </div>
              <div className="space-y-2 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif-brand text-lg font-bold text-white">{variety.name}</h3>
                  <span className="shrink-0 rounded border border-amber-300/30 bg-amber-300/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-200">
                    {variety.estimatedBags.toLocaleString('en-IN')} Bags
                  </span>
                </div>
                {variety.aliases && <p className="text-xs text-stone-300">{variety.aliases}</p>}
                <div className="flex items-center gap-1.5 border-t border-white/10 pt-3 text-[11px] text-stone-400">
                  <CalendarDays className="h-3.5 w-3.5 text-amber-400" />
                  <span>Updated {report.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-stone-400">
          Rates are market indications and may change with grade, quantity, and buyer specifications.
        </p>
      </div>
    </section>
  );
};
