import React, { useState } from 'react';
import {
  Sprout,
  SearchCheck,
  Sparkles,
  SlidersHorizontal,
  PackageCheck,
  Ship,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { PROCESSING_STAGES, QUALITY_COMMITMENT } from '../data/companyData';

export const QualityProcessingSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const getStageIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sprout className="w-4 h-4" />;
      case 1:
        return <SearchCheck className="w-4 h-4" />;
      case 2:
        return <Sparkles className="w-4 h-4" />;
      case 3:
        return <SlidersHorizontal className="w-4 h-4" />;
      case 4:
        return <PackageCheck className="w-4 h-4" />;
      case 5:
        return <Ship className="w-4 h-4" />;
      default:
        return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  const activeStage = PROCESSING_STAGES[activeStageIndex];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Standards & Traceability
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Quality & Processing
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            From careful sourcing to export-ready packaging — dedicated steps with documented quality controls.
          </p>
        </div>

        {/* 6-Stage Timeline with Individual Step Images */}
        <div className="space-y-8">
          
          {/* Desktop Stepper Bar with Step Photos */}
          <div className="hidden lg:grid grid-cols-6 gap-3">
            {PROCESSING_STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`text-left rounded-lg overflow-hidden transition-all border flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#0F291E] text-white border-[#0F291E] shadow-md ring-2 ring-amber-400/80 -translate-y-1'
                      : 'bg-[#FAF8F5] text-stone-700 border-stone-200 hover:border-amber-600/50 hover:bg-white'
                  }`}
                >
                  {/* Step Image Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200">
                    <img
                      src={stage.image}
                      alt={`Stage ${stage.step} ${stage.title}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-xs font-mono text-[10px] font-bold text-amber-300">
                      Step {stage.step}
                    </span>
                  </div>

                  <div className="p-3 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className={isActive ? 'text-amber-300' : 'text-stone-500'}>
                        {getStageIcon(idx)}
                      </span>
                      <h4 className="font-serif-brand text-xs font-bold tracking-wider truncate">
                        {stage.title}
                      </h4>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Spotlight Box (Shows exact stage-related image) */}
          <div className="bg-[#FAF8F5] rounded-xl border border-stone-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Stage Description & Controls */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-bold text-amber-800 bg-amber-100/80 px-3 py-1 rounded">
                      Stage {activeStage.step}
                    </span>
                    <div className="h-6 w-px bg-stone-300" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                      Processing Pipeline
                    </span>
                  </div>

                  <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900">
                    {activeStage.title}
                  </h3>

                  <p className="text-base text-stone-700 leading-relaxed">
                    {activeStage.description}
                  </p>

                  <div className="p-4 bg-white rounded-lg border border-stone-200 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F291E] block">
                      Quality Control Objective:
                    </span>
                    <p className="text-sm text-stone-600 font-medium">
                      {activeStage.focus}
                    </p>
                  </div>
                </div>

                {/* Stepper Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-200/80">
                  <button
                    type="button"
                    disabled={activeStageIndex === 0}
                    onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                    className="py-2 px-4 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50"
                  >
                    ← Previous Stage
                  </button>

                  <span className="text-xs font-mono text-stone-500">
                    Stage {activeStageIndex + 1} of {PROCESSING_STAGES.length}
                  </span>

                  <button
                    type="button"
                    disabled={activeStageIndex === PROCESSING_STAGES.length - 1}
                    onClick={() => setActiveStageIndex((prev) => Math.min(PROCESSING_STAGES.length - 1, prev + 1))}
                    className="py-2 px-4 text-xs font-semibold text-white bg-[#0F291E] rounded disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#16382B]"
                  >
                    Next Stage →
                  </button>
                </div>
              </div>

              {/* Dedicated Step Image for the Active Stage */}
              <div className="lg:col-span-5 relative bg-stone-900 min-h-[340px] flex items-center justify-center overflow-hidden">
                <img
                  key={activeStage.step}
                  src={activeStage.image}
                  alt={`Stage ${activeStage.step}: ${activeStage.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300 block">
                    Dedicated Stage Visual · Step {activeStage.step}
                  </span>
                  <h4 className="font-serif-brand text-base font-bold text-white">
                    {activeStage.title}
                  </h4>
                  <p className="text-xs text-stone-300 line-clamp-2 mt-0.5">
                    {activeStage.focus}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Vertical Process Stepper with Individual Images */}
          <div className="lg:hidden space-y-3 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block text-center mb-2">
              Select any of the 6 Processing Stages:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PROCESSING_STAGES.map((s, idx) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-2 rounded text-left border text-xs flex flex-col gap-1.5 ${
                    idx === activeStageIndex
                      ? 'bg-[#0F291E] text-white border-[#0F291E] ring-2 ring-amber-400'
                      : 'bg-white text-stone-800 border-stone-200'
                  }`}
                >
                  <div className="aspect-[16/10] w-full rounded overflow-hidden bg-stone-200">
                    <img
                      src={s.image}
                      alt={s.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-semibold truncate">{s.step}. {s.title}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Commitment to Quality (4 Elegant Cards) */}
        <div className="pt-8 border-t border-stone-200 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
              Core Principles
            </span>
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900">
              Our Commitment to Quality
            </h3>
            <p className="text-sm text-stone-600">
              Rigorous agricultural practices applied across procurement, evaluation, cleaning, and dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_COMMITMENT.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-[#FAF8F5] rounded-lg border border-stone-200/90 space-y-3 hover:border-amber-700/30 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-[#0F291E]/10 text-[#0F291E] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif-brand text-base font-bold text-stone-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
