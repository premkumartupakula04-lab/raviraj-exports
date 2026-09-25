import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenQuote: (productName?: string) => void;
  onOpenMarketUpdate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenMarketUpdate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Quality & Processing', href: '#quality' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Awards', href: '#awards' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F291E]/95 backdrop-blur-md shadow-lg border-b border-amber-900/20 py-3'
          : 'bg-gradient-to-b from-[#0B1E16]/90 via-[#0B1E16]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#hero"
            className="group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
          >
            <span className="font-serif-brand font-bold text-lg sm:text-xl tracking-wider text-amber-50 group-hover:text-amber-300 transition-colors">
              RAVIRAJ SPICES EXPORTS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-amber-200/70 font-semibold uppercase">
              PVT LTD · INDIA
            </span>
          </a>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-stone-200 hover:text-amber-300 transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary Actions (Zone 3) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Today Market Update Button */}
            <button
              type="button"
              onClick={onOpenMarketUpdate}
              className="px-3 py-1.5 text-xs font-bold text-amber-200 bg-amber-950/60 hover:bg-amber-900/80 border border-amber-500/40 rounded-md transition-all flex items-center gap-1.5 shadow-xs"
              title="View Today's Guntur Mandi Rates"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span>Today Market Update</span>
            </button>

            <a
              href={COMPANY_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 rounded-lg border border-emerald-500/20 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="px-4 py-2 text-xs font-semibold text-[#0F291E] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-md shadow-sm transition-all transform active:scale-95 whitespace-nowrap uppercase tracking-wider"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="sm:hidden px-3 py-1.5 text-[11px] font-semibold text-[#0F291E] bg-amber-400 rounded-md tracking-wider uppercase"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-amber-100 hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-md"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1E16] border-b border-amber-900/30 px-5 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 divide-y divide-emerald-900/40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 text-sm font-medium text-stone-200 hover:text-amber-300"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-stone-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-emerald-900/40 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMarketUpdate();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-300 text-stone-950 rounded-md shadow-sm flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Today Market Update (24/09/2026)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-bold uppercase tracking-wider bg-stone-800 text-white rounded-md shadow-sm"
            >
              Request a Quote
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-stone-200 bg-stone-900/60 border border-stone-700/60 rounded-md"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Us</span>
              </a>
              <a
                href={COMPANY_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-800/40 rounded-md"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
