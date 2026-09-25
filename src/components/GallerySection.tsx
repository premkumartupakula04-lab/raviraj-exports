import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '../data/companyData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Products', 'Quality & Processing', 'Packaging'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Visual Documentation
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Company Gallery
          </h2>
          <p className="text-base text-stone-600">
            Explore authentic photographs of our spices, quality inspection, processing floor, and export shipments.
          </p>
        </div>

        {/* Interactive Filter Tabs (Buttons allowed per skill section 1.A) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 max-w-xl mx-auto bg-stone-200/60 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                activeCategory === cat
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group cursor-pointer relative bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-stone-900 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-stone-900/80 backdrop-blur-xs text-[10px] uppercase font-mono text-amber-300 rounded">
                  {item.category}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="font-serif-brand text-sm font-bold text-stone-900 group-hover:text-[#0F291E] transition-colors truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-500 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Gallery Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            type="button"
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-20 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-lg bg-black/40">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="w-full text-center text-white mt-4 space-y-1 px-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300">
                {currentItem.category}
              </span>
              <h3 className="font-serif-brand text-lg sm:text-xl font-bold">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
