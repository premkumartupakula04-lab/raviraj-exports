import React, { useState } from 'react';
import { Eye, ArrowRight, X, Check, Package, MapPin, Layers, Info } from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '../data/companyData';

interface ProductsSectionProps {
  onOpenQuote: (productName?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuote }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const handleOpenDetail = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleInquireFromModal = (productName: string) => {
    handleCloseDetail();
    onOpenQuote(productName);
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Agricultural Commodities
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Our Products
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Quality Indian spices and agricultural products for domestic and international buyers.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg border border-stone-200/90 hover:border-amber-600/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={`Raviraj Spices Exports ${product.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute top-3 left-3 px-2 py-1 bg-stone-900/80 backdrop-blur-xs text-[10px] uppercase font-bold tracking-wider text-amber-300 rounded">
                  {product.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <MapPin className="w-3 h-3 text-amber-700" />
                    <span>{product.origin}</span>
                  </div>
                  <h3 className="font-serif-brand text-lg font-bold text-stone-900 group-hover:text-[#0F291E] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-2 border-t border-stone-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenDetail(product)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded transition-colors flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenQuote(product.name)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-[#0F291E] hover:bg-[#16382B] rounded transition-colors flex items-center justify-center gap-1 shadow-xs"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Footnote about customized specifications */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500 max-w-xl mx-auto">
            Contact us for current specifications, grades, packaging and availability tailored to your import compliance parameters.
          </p>
        </div>

      </div>

      {/* Product Details Modal Lightbox */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            className="relative bg-white rounded-xl max-w-3xl w-full shadow-2xl overflow-hidden border border-stone-200 animate-in zoom-in-95 duration-200 my-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-product-title"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseDetail}
              className="absolute top-4 right-4 z-10 p-2 bg-stone-900/60 hover:bg-stone-900 text-white rounded-full transition-colors focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Product Visual */}
              <div className="md:col-span-5 relative bg-stone-900 min-h-[260px] md:min-h-full">
                <img
                  src={selectedProduct.image}
                  alt={`Raviraj Spices Exports ${selectedProduct.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Product Specification
                  </span>
                  <p className="font-serif-brand text-lg font-bold">
                    {selectedProduct.name}
                  </p>
                </div>
              </div>

              {/* Specification Details */}
              <div className="md:col-span-7 p-6 sm:p-8 space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest">
                    <span>{selectedProduct.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {selectedProduct.origin}
                    </span>
                  </div>
                  <h3 id="modal-product-title" className="font-serif-brand text-2xl font-bold text-stone-900 mt-1">
                    {selectedProduct.name}
                  </h3>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {selectedProduct.fullDesc}
                </p>

                {/* Varieties & Grades */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#0F291E]" />
                    Available Varieties & Forms:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {selectedProduct.varieties.map((v) => (
                      <div key={v} className="flex items-start gap-2 text-xs text-stone-700 bg-stone-50 p-2 rounded border border-stone-100">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packaging & Logistics */}
                <div className="space-y-1.5 text-xs text-stone-700">
                  <span className="font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#0F291E]" />
                    Packaging Options:
                  </span>
                  <p className="bg-stone-50 p-2.5 rounded border border-stone-100 text-stone-600 leading-relaxed">
                    {selectedProduct.packaging}
                  </p>
                </div>

                {/* Supply Information Callout (Strict Authenticity Notice) */}
                <div className="flex items-start gap-2 p-3 bg-amber-50 rounded border border-amber-200/80 text-amber-900 text-xs">
                  <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Current Supply & Inquiry:</span>
                    <span>{selectedProduct.supplyInfo}</span>
                  </div>
                </div>

                {/* Action CTA inside modal */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleInquireFromModal(selectedProduct.name)}
                    className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#0F291E] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded shadow transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request a Quote for {selectedProduct.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseDetail}
                    className="py-3 px-4 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded transition-colors"
                  >
                    Close
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
