import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutSection } from './components/AboutSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ProductsSection } from './components/ProductsSection';
import { QualityProcessingSection } from './components/QualityProcessingSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AwardsSection } from './components/AwardsSection';
import { ExportMarketsSection } from './components/ExportMarketsSection';
import { GallerySection } from './components/GallerySection';
import { InquirySection } from './components/InquirySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { TodayMarketModal } from './components/TodayMarketModal';
import { InquiryChannelModal } from './components/InquiryChannelModal';

export default function App() {
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<string>('Red Chillies');
  const [isMarketModalOpen, setIsMarketModalOpen] = useState<boolean>(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [inquiryModalMessage, setInquiryModalMessage] = useState<string>('');

  const handleOpenQuote = (productName?: string, defaultMessage?: string) => {
    const product = productName || 'Red Chillies';
    setSelectedProductForInquiry(product);
    setInquiryModalMessage(defaultMessage || '');
    setIsInquiryModalOpen(true);
  };

  const handleOpenMarketUpdate = () => {
    setIsMarketModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-amber-800 selection:text-white flex flex-col font-sans">
      {/* Sticky Responsive Header */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onOpenMarketUpdate={handleOpenMarketUpdate}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. Trust Highlights (Immediately Below Hero) */}
        <TrustHighlights />

        {/* 3. About Raviraj Spices Exports with Today Market Update button */}
        <AboutSection onOpenMarketUpdate={handleOpenMarketUpdate} />

        {/* 4. Leadership Section with Today Market Update button */}
        <LeadershipSection onOpenMarketUpdate={handleOpenMarketUpdate} />

        {/* 5. Products Section & Specifications */}
        <ProductsSection onOpenQuote={handleOpenQuote} />

        {/* 6. Quality & Processing (6 Stages + Commitment) */}
        <QualityProcessingSection />

        {/* 7. Certifications & Registrations with Big Realistic Certificate Sheets */}
        <CertificationsSection />

        {/* 8. Awards & Recognition */}
        <AwardsSection />

        {/* 9. Export Markets & Logistics Gateways */}
        <ExportMarketsSection onOpenQuote={() => handleOpenQuote()} />

        {/* 10. Company Gallery */}
        <GallerySection />

        {/* 11. Request a Quote (B2B Inquiry Form) */}
        <InquirySection
          initialProduct={selectedProductForInquiry}
          onClearInitialProduct={() => setSelectedProductForInquiry('Red Chillies')}
        />

        {/* 12. Contact Section & Verified Google Maps */}
        <ContactSection onOpenMarketUpdate={handleOpenMarketUpdate} />
      </main>

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Footer */}
      <Footer onOpenMarketUpdate={handleOpenMarketUpdate} />

      {/* Today Market Update Modal (Neat Graph View & Mandi Bulletin) */}
      <TodayMarketModal
        isOpen={isMarketModalOpen}
        onClose={() => setIsMarketModalOpen(false)}
        onOpenQuote={handleOpenQuote}
      />

      {/* Inquiry Channel Dispatch Modal (WhatsApp or Email) */}
      <InquiryChannelModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productName={selectedProductForInquiry}
        defaultMessage={inquiryModalMessage}
      />
    </div>
  );
}
