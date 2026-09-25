import React from 'react';

export const FssaiLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`flex items-center justify-center p-2 bg-white rounded border border-stone-200 shadow-2xs ${className}`}>
    <svg viewBox="0 0 240 70" className="w-full h-full max-h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* fssai emblem */}
      <circle cx="28" cy="35" r="22" fill="#E86C00" opacity="0.12" />
      <path d="M28 17 C22 17 18 21 18 27 C18 36 28 42 28 47 C28 42 38 36 38 27 C38 21 34 17 28 17 Z" fill="#E86C00" />
      <circle cx="28" cy="27" r="4" fill="#FFFFFF" />
      {/* Text fssai */}
      <text x="56" y="44" fontFamily="Impact, Arial Black, sans-serif" fontSize="36" fontStyle="italic" fill="#E86C00" letterSpacing="-1">
        fssai
      </text>
      {/* Subtext */}
      <text x="58" y="58" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="bold" fill="#0B793A" letterSpacing="0.5">
        FOOD SAFETY AND STANDARDS AUTHORITY OF INDIA
      </text>
    </svg>
  </div>
);

export const ApedaLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`flex items-center justify-center p-2 bg-white rounded border border-stone-200 shadow-2xs ${className}`}>
    <svg viewBox="0 0 240 70" className="w-full h-full max-h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* APEDA leaf and grain emblem */}
      <circle cx="28" cy="35" r="22" fill="#0D5F31" opacity="0.1" />
      <path d="M28 16 C35 24 36 34 29 44 C25 40 24 32 28 16 Z" fill="#12833F" />
      <path d="M28 16 C21 24 20 34 27 44 C31 40 32 32 28 16 Z" fill="#D39700" />
      <circle cx="28" cy="46" r="3" fill="#0D5F31" />
      {/* APEDA text */}
      <text x="58" y="42" fontFamily="Arial Black, Impact, sans-serif" fontSize="32" fontWeight="900" fill="#0D5F31" letterSpacing="1">
        APEDA
      </text>
      <text x="59" y="56" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="bold" fill="#8C6500" letterSpacing="0.5">
        AGRICULTURAL & PROCESSED FOOD EXPORT AUTHORITY
      </text>
    </svg>
  </div>
);

export const SpicesBoardLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`flex items-center justify-center p-2 bg-white rounded border border-stone-200 shadow-2xs ${className}`}>
    <svg viewBox="0 0 240 70" className="w-full h-full max-h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Spice Board circle and sprig */}
      <circle cx="28" cy="35" r="22" stroke="#B91C1C" strokeWidth="2.5" fill="#FFF5F5" />
      <path d="M28 20 C23 25 24 33 28 42 C32 33 33 25 28 20 Z" fill="#B91C1C" />
      <path d="M22 28 C26 29 28 34 26 38" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 28 C30 29 28 34 30 38" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
      {/* Text */}
      <text x="58" y="36" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#B91C1C" letterSpacing="1">
        SPICES BOARD
      </text>
      <text x="58" y="50" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" fill="#15803D" letterSpacing="1.5">
        INDIA
      </text>
      <text x="58" y="61" fontFamily="Arial, sans-serif" fontSize="6.5" fill="#78716C">
        MINISTRY OF COMMERCE & INDUSTRY · GOVT. OF INDIA
      </text>
    </svg>
  </div>
);

export const IsoLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`flex items-center justify-center p-2 bg-white rounded border border-stone-200 shadow-2xs ${className}`}>
    <svg viewBox="0 0 240 70" className="w-full h-full max-h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ISO badge seal */}
      <circle cx="28" cy="35" r="22" fill="#0F291E" />
      <circle cx="28" cy="35" r="18" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
      <text x="28" y="39" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
        ISO
      </text>
      {/* ISO 9001:2015 text */}
      <text x="58" y="38" fontFamily="Arial Black, Impact, sans-serif" fontSize="22" fontWeight="bold" fill="#0F291E">
        ISO 9001
      </text>
      <text x="175" y="38" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#B45309">
        :2015
      </text>
      <text x="59" y="54" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="#44403C" letterSpacing="0.8">
        QUALITY MANAGEMENT SYSTEM CERTIFIED
      </text>
    </svg>
  </div>
);
