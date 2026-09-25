import React, { useState, useEffect } from 'react';
import {
  X,
  TrendingUp,
  BarChart3,
  Copy,
  Check,
  Share2,
  Calendar,
  ArrowUpRight,
  Maximize2,
  Minimize2,
  Package,
  ChevronRight,
  ShieldCheck,
  KeyRound,
  RotateCcw,
  Save,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { DailyMarketReport, VarietyRate } from '../data/marketData';
import {
  getStoredMarketReport,
  saveStoredMarketReport,
  resetStoredMarketReport,
  formatMarketBulletin
} from '../utils/marketStorage';

interface TodayMarketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (productName?: string, defaultMessage?: string) => void;
}

export const TodayMarketModal: React.FC<TodayMarketModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote
}) => {
  // Live market data state loaded from storage
  const [report, setReport] = useState<DailyMarketReport>(getStoredMarketReport());
  const [copied, setCopied] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(true);

  // Authentication Dialog State
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [hostId, setHostId] = useState('');
  const [siddhuCode, setSiddhuCode] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Host Editor Form State
  const [showEditorModal, setShowEditorModal] = useState(false);
  const [editDate, setEditDate] = useState(report.date);
  const [editTrend, setEditTrend] = useState<DailyMarketReport['trend']>(report.trend);
  const [editMainYard, setEditMainYard] = useState<number>(report.mainYardArrivals);
  const [editOutsideCold, setEditOutsideCold] = useState<number>(report.outsideColdArrivals);
  const [editVarieties, setEditVarieties] = useState<VarietyRate[]>([]);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  // Reload report when modal opens
  useEffect(() => {
    if (isOpen) {
      const stored = getStoredMarketReport();
      setReport(stored);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const maxScale = 400; // max ₹ / Kg for graph scaling

  // Computed total arrivals for the editor (Main Yard + Outside Cold)
  const computedTotalArrivals = (editMainYard || 0) + (editOutsideCold || 0);

  const handleCopy = () => {
    const text = formatMarketBulletin(report);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(formatMarketBulletin(report));
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  // Open the Auth dialog
  const handleOpenAuth = () => {
    setHostId('');
    setSiddhuCode('');
    setPassword('');
    setAuthError('');
    setShowAuthModal(true);
  };

  // Submit Host Authentication
  const handleVerifyAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      hostId.trim() === '3333' &&
      siddhuCode.trim() === '132799' &&
      password === 'Siddhu@1327'
    ) {
      // Credentials verified! Open editor
      setAuthError('');
      setShowAuthModal(false);

      // Populate editor state with current report
      setEditDate(report.date);
      setEditTrend(report.trend);
      setEditMainYard(report.mainYardArrivals);
      setEditOutsideCold(report.outsideColdArrivals);
      setEditVarieties(JSON.parse(JSON.stringify(report.varieties)));
      setShowEditorModal(true);
    } else {
      setAuthError('Invalid credentials! Verify Host ID, Siddhu Code, and Password.');
    }
  };

  // Auto-distribute total bags evenly across all 8 varieties
  const handleDistributeBagsEvenly = () => {
    const total = computedTotalArrivals;
    const perVariety = Math.round(total / (editVarieties.length || 8));
    setEditVarieties((prev) =>
      prev.map((v) => ({
        ...v,
        estimatedBags: perVariety
      }))
    );
  };

  // Update a specific variety in editor
  const handleVarietyChange = (
    index: number,
    field: keyof VarietyRate,
    value: string | number
  ) => {
    setEditVarieties((prev) => {
      const next = [...prev];
      next[index] = {
        ...next[index],
        [field]: value
      };
      return next;
    });
  };

  // Save the updated market update
  const handleSaveMarketData = (e: React.FormEvent) => {
    e.preventDefault();
    const totalArrivals = (editMainYard || 0) + (editOutsideCold || 0);

    const updatedReport: DailyMarketReport = {
      ...report,
      date: editDate || report.date,
      trend: editTrend,
      mainYardArrivals: Number(editMainYard) || 0,
      outsideColdArrivals: Number(editOutsideCold) || 0,
      totalArrivals: totalArrivals,
      avgBagsPerVariety: Math.round(totalArrivals / (editVarieties.length || 8)),
      totalVarietiesCount: editVarieties.length,
      varieties: editVarieties
    };

    saveStoredMarketReport(updatedReport);
    setReport(updatedReport);
    setSaveSuccessMsg(true);
    setTimeout(() => {
      setSaveSuccessMsg(false);
      setShowEditorModal(false);
    }, 1200);
  };

  // Reset to default data
  const handleResetData = () => {
    if (window.confirm('Reset all live market rates and arrivals back to factory default?')) {
      const def = resetStoredMarketReport();
      setReport(def);
      setShowEditorModal(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-black/85 backdrop-blur-xs flex items-center justify-center transition-all duration-200 ${
        isFullScreen ? 'p-0' : 'p-3 sm:p-6'
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative bg-[#FAF8F5] shadow-2xl flex flex-col transition-all duration-200 ${
          isFullScreen
            ? 'w-full h-full rounded-none'
            : 'max-w-6xl w-full max-h-[92vh] rounded-2xl border border-stone-200 overflow-hidden my-4'
        }`}
      >
        {/* Top Header Ribbon */}
        <div className="bg-[#0F291E] text-white px-5 py-4 sm:px-8 sm:py-5 border-b border-amber-900/40 shrink-0">
          <div className="max-w-7xl mx-auto flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Clickable Badge to open Host Login */}
                <button
                  type="button"
                  onClick={handleOpenAuth}
                  className="group inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 hover:text-white border border-emerald-400/40 transition-all shadow-xs cursor-pointer"
                  title="Live Guntur Yard Rates"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Live Guntur Yard Rates</span>
                </button>

                <span className="text-amber-300 font-serif-brand font-semibold text-xs tracking-wider">
                  💐 ESTD. 1992 💐
                </span>
                <span className="text-stone-400 text-xs hidden sm:inline">·</span>
                <span className="text-xs text-stone-300 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Market Date: {report.date}</span>
                </span>
              </div>

              <h2 className="font-serif-brand text-xl sm:text-3xl font-bold tracking-tight text-white">
                {report.company}
              </h2>

              <p className="text-xs sm:text-sm text-stone-300">
                Guntur Chilli Yard Daily Arrivals, Variety Price Graph & Volume Breakdown · GUNTUR (A.P.) INDIA
              </p>
            </div>

            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="p-2 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-1 text-xs"
                title={isFullScreen ? 'Exit Full Screen' : 'Open Full Screen'}
                aria-label={isFullScreen ? 'Exit Full Screen' : 'Open Full Screen'}
              >
                {isFullScreen ? (
                  <>
                    <Minimize2 className="w-4 h-4" />
                    <span className="hidden md:inline">Window</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-4 h-4" />
                    <span className="hidden md:inline">Full Screen</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close market update"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Top Market Arrivals Bar */}
        <div className="bg-white border-b border-stone-200 px-4 sm:px-8 py-3.5 shrink-0 shadow-2xs">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Main Yard Arrivals */}
            <div className="p-3 bg-[#FAF8F5] rounded-xl border border-stone-200 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                Main Yard Arrivals
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-serif-brand text-lg sm:text-2xl font-bold text-red-700">
                  {report.mainYardArrivals.toLocaleString()}
                </span>
                <span className="text-xs text-stone-600 font-medium">Bags</span>
              </div>
            </div>

            {/* Outside Cold Arrivals */}
            <div className="p-3 bg-[#FAF8F5] rounded-xl border border-stone-200 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                Outside Cold Arrivals
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-serif-brand text-lg sm:text-2xl font-bold text-stone-800">
                  {report.outsideColdArrivals.toLocaleString()}
                </span>
                <span className="text-xs text-stone-600 font-medium">Bags</span>
              </div>
            </div>

            {/* Total Combined Arrivals (Main Yard + Outside Cold) */}
            <div className="p-3 bg-[#FAF8F5] rounded-xl border border-stone-200 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                Total Market Arrivals
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-serif-brand text-lg sm:text-2xl font-bold text-[#0F291E]">
                  {report.totalArrivals.toLocaleString()}
                </span>
                <span className="text-xs text-stone-600 font-medium">Bags</span>
              </div>
            </div>

            {/* Market Tone */}
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Market Sentiment
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <span className="font-serif-brand text-lg sm:text-2xl font-bold text-emerald-900">
                  {report.trend}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar with Navigation & Actions */}
        <div className="px-4 sm:px-8 py-2.5 bg-stone-100 border-b border-stone-200 shrink-0">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-stone-800">
              <a href="#rates-section" className="flex items-center gap-1.5 hover:text-[#0F291E]">
                <BarChart3 className="w-4 h-4 text-amber-800" />
                <span>1. Variety Price Graph</span>
              </a>
              <span className="text-stone-300">·</span>
              <a href="#volume-section" className="flex items-center gap-1.5 hover:text-[#0F291E]">
                <Package className="w-4 h-4 text-amber-800" />
                <span>2. Variety Bags Breakdown</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="py-1.5 px-3 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Full Report' : 'Copy Rates'}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="py-1.5 px-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-md transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Share WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 space-y-10">
          <div className="max-w-7xl mx-auto space-y-10">
            
            {/* ================= SECTION 1: VARIETY RATES & PRICE GRAPH ================= */}
            <div id="rates-section" className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-200">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold block">
                    Part 1: Mandi Trading Transactions
                  </span>
                  <h3 className="font-serif-brand text-lg sm:text-xl font-bold text-stone-900">
                    Guntur Chilli Varieties Price Graph (₹ / Kg)
                  </h3>
                </div>

                <div className="text-xs font-mono text-stone-600 flex items-center gap-3">
                  <span>Price Scale: ₹0 — ₹400 / Kg</span>
                </div>
              </div>

              {/* Price Scale Grid Markers */}
              <div className="hidden sm:flex justify-between text-[11px] font-mono text-stone-400 sm:pl-56 sm:pr-8">
                <span>₹0</span>
                <span>₹100</span>
                <span>₹200</span>
                <span>₹300</span>
                <span>₹400</span>
              </div>

              {/* Individual Varieties Graph Rows */}
              <div className="space-y-3 sm:space-y-3.5">
                {report.varieties.map((v) => {
                  const leftPercent = (v.minPrice / maxScale) * 100;
                  const widthPercent = ((v.maxPrice - v.minPrice) / maxScale) * 100;
                  const hasExtra = Boolean(v.extraMin);
                  const extraLeft = hasExtra ? ((v.extraMin || 0) / maxScale) * 100 : 0;
                  const extraWidth = hasExtra
                    ? Math.max(2, (((v.extraMax || v.extraMin || 0) - (v.extraMin || 0)) / maxScale) * 100)
                    : 0;

                  return (
                    <div
                      key={v.id}
                      className="p-3.5 sm:p-4 bg-white rounded-xl border border-stone-200 hover:border-amber-600/50 transition-all space-y-2.5 group shadow-2xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        {/* Variety Title & Aliases */}
                        <div className="flex items-center gap-2">
                          <span className="font-serif-brand font-bold text-stone-900 text-sm sm:text-base">
                            {v.name}
                          </span>
                          {v.aliases && (
                            <span className="text-xs text-stone-500 font-medium">
                              ({v.aliases})
                            </span>
                          )}
                        </div>

                        {/* Exact Price Values - Clean Separated Badges */}
                        <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm font-bold text-stone-900">
                          <span className="text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200/60 shadow-2xs">
                            ₹{v.minPrice} – ₹{v.maxPrice} / Kg
                          </span>
                          {hasExtra && (
                            <span className="text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-300 shadow-2xs">
                              Extra: ₹{v.extraMin}{v.extraMax && v.extraMax !== v.extraMin ? ` – ₹${v.extraMax}` : ''} / Kg
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Visual Range Graph Bar */}
                      <div className="relative h-7 bg-stone-100 rounded-full overflow-hidden flex items-center p-0.5 border border-stone-200">
                        {/* Background Scale Marks */}
                        <div className="absolute inset-0 flex justify-between px-2 pointer-events-none opacity-20">
                          <div className="w-px h-full bg-stone-500" />
                          <div className="w-px h-full bg-stone-500" />
                          <div className="w-px h-full bg-stone-500" />
                          <div className="w-px h-full bg-stone-500" />
                        </div>

                        {/* Standard Quality Range Bar */}
                        <div
                          className="absolute h-5 rounded-full bg-gradient-to-r from-red-600 to-red-500 group-hover:from-red-500 group-hover:to-red-400 transition-all shadow-xs flex items-center justify-center text-[10px] text-white font-mono font-bold"
                          style={{
                            left: `${leftPercent}%`,
                            width: `${Math.max(widthPercent, 8)}%`
                          }}
                        >
                          <span className="truncate px-1.5">₹{v.minPrice}-₹{v.maxPrice}</span>
                        </div>

                        {/* Extra Quality Premium Marker */}
                        {hasExtra && (
                          <div
                            className="absolute h-5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 border border-amber-600/30 transition-all shadow-xs flex items-center justify-center text-[9px] text-[#0F291E] font-mono font-bold"
                            style={{
                              left: `${extraLeft}%`,
                              width: `${Math.max(extraWidth, 6)}%`
                            }}
                            title={`Extra Grade: ₹${v.extraMin}`}
                          >
                            <span className="truncate px-1">Extra</span>
                          </div>
                        )}
                      </div>

                      {/* Clean Notes display without redundant overlapping extra rate */}
                      {v.notes && v.notes.trim() !== '' && (
                        <p className="text-[11px] text-stone-500 font-medium italic">
                          ℹ️ {v.notes}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Graph Legend */}
              <div className="flex flex-wrap items-center justify-between text-xs text-stone-600 pt-2 border-t border-stone-200 gap-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-600" />
                    <span>Standard Quality Rate Range (₹/Kg)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                    <span>Extra / Premium Grade Rate</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-stone-400">
                  Daily yard quotes based on current Guntur transactions
                </span>
              </div>
            </div>

            {/* ================= SECTION 2: VARIETY-WISE BAGS DETAILINGS ================= */}
            <div id="volume-section" className="space-y-6 pt-4 border-t-2 border-stone-300">
              
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-200">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#0F291E] font-bold block">
                    Part 2: Variety Bags Breakdown
                  </span>
                  <h3 className="font-serif-brand text-lg sm:text-2xl font-bold text-stone-900">
                    Variety-Wise Bags Detailings
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Distribution across all {report.varieties.length} varieties from the {report.totalArrivals.toLocaleString()} total market arrivals.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-stone-200/80 text-stone-800 px-3 py-1.5 rounded-lg text-xs font-mono font-bold">
                    Total: {report.totalArrivals.toLocaleString()} Bags
                  </span>
                  <span className="bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1.5 rounded-lg text-xs font-mono font-bold">
                    {report.varieties.length} Varieties
                  </span>
                </div>
              </div>

              {/* Clean Variety Detailings Table */}
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
                <div className="p-4 sm:p-5 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 bg-stone-50/70">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#0F291E]" />
                    <span className="font-serif-brand text-base font-bold text-stone-900">
                      Variety-Wise Bags Table
                    </span>
                  </div>
                  <span className="text-xs font-mono text-stone-500">
                    Total Arrivals: {report.totalArrivals.toLocaleString()} Bags (Yard: {report.mainYardArrivals.toLocaleString()} + Cold: {report.outsideColdArrivals.toLocaleString()})
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-stone-100/80 text-stone-700 border-b border-stone-200 uppercase font-mono text-[11px] tracking-wider">
                        <th className="py-3.5 px-5">#</th>
                        <th className="py-3.5 px-5">Type of Variety</th>
                        <th className="py-3.5 px-5">Mandi Rate (₹/Kg)</th>
                        <th className="py-3.5 px-5 text-right font-bold text-[#0F291E]">No. of Bags</th>
                        <th className="py-3.5 px-5 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 font-sans">
                      {report.varieties.map((v, idx) => (
                        <tr
                          key={v.id}
                          className="hover:bg-amber-50/40 transition-colors group"
                        >
                          <td className="py-3.5 px-5 font-mono text-stone-400 font-semibold">
                            0{idx + 1}
                          </td>
                          <td className="py-3.5 px-5">
                            <span className="font-serif-brand font-bold text-stone-900 block group-hover:text-[#0F291E] text-sm sm:text-base">
                              {v.name}
                            </span>
                            {v.aliases && (
                              <span className="text-[11px] text-stone-500 block">
                                {v.aliases}
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-5 font-mono font-semibold text-stone-900 whitespace-nowrap">
                            <span className="text-red-700 font-bold">₹{v.minPrice} – ₹{v.maxPrice}</span>
                            {v.extraMin && (
                              <span className="text-[11px] text-amber-800 block">
                                Extra: ₹{v.extraMin}{v.extraMax && v.extraMax !== v.extraMin ? ` – ₹${v.extraMax}` : ''}
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-5 text-right font-mono font-bold text-stone-900 whitespace-nowrap text-sm sm:text-base">
                            <span className="bg-stone-100 group-hover:bg-amber-100 px-3 py-1 rounded border border-stone-200 transition-colors">
                              {v.estimatedBags.toLocaleString()} Bags
                            </span>
                          </td>
                          <td className="py-3.5 px-5 text-center whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => {
                                const extraText = v.extraMin
                                  ? ` (Extra: ₹${v.extraMin}${v.extraMax && v.extraMax !== v.extraMin ? `–₹${v.extraMax}` : ''}/Kg)`
                                  : '';
                                const msg = `Inquiring for Guntur Mandi Lot: ${v.name} ${v.aliases ? `(${v.aliases})` : ''}\nCurrent Mandi Rate: ₹${v.minPrice} – ₹${v.maxPrice} / Kg${extraText}\nEstimated Volume: ${v.estimatedBags.toLocaleString()} Bags\n\nHello Raviraj Spices Exports, please share available consignment quantity, quality grade certificate specifications, and CIF/FOB quote.`;
                                onOpenQuote(`Red Chilli - ${v.name}`, msg);
                              }}
                              className="px-4 py-2 text-xs font-bold text-white bg-[#0F291E] hover:bg-[#16382B] rounded-lg shadow-2xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                            >
                              <span>Inquire / Book</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-stone-900 text-white font-mono text-xs sm:text-sm font-bold border-t-2 border-amber-400">
                        <td className="py-4 px-5">TOTAL</td>
                        <td className="py-4 px-5">{report.varieties.length} Varieties</td>
                        <td className="py-4 px-5 text-stone-300">Market {report.trend}</td>
                        <td className="py-4 px-5 text-right text-amber-300 font-bold text-base">
                          {report.totalArrivals.toLocaleString()} Total Bags
                        </td>
                        <td className="py-4 px-5 text-center">
                          <span className="text-[11px] text-amber-400 uppercase tracking-wider">
                            Full Mandi
                          </span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Total Arrivals: <strong>{report.totalArrivals.toLocaleString()} Bags</strong> ({report.mainYardArrivals.toLocaleString()} Main Yard + {report.outsideColdArrivals.toLocaleString()} Outside Cold)</span>
                  </div>
                  <span className="font-mono text-stone-500">
                    Live updates powered by Raviraj Spices Mandi Trade Desk
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-white border-t border-stone-200 px-4 sm:px-8 py-4 shrink-0 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left text-xs text-stone-600">
              <span className="font-bold text-stone-900 block font-serif-brand text-sm sm:text-base">
                {report.footer}
              </span>
              <span>Direct Trade Desk: +91 92467 77627 · info@ravirajspices.in</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  const msg = `Inquiring for bulk Guntur Chilli Mandi consignment.\nMarket Date: ${report.date}\nTotal Arrivals: ${report.totalArrivals.toLocaleString()} Bags (Main Yard: ${report.mainYardArrivals.toLocaleString()} + Cold: ${report.outsideColdArrivals.toLocaleString()})\nMarket Sentiment: ${report.trend}\n\nHello Raviraj Spices Exports, please share available bulk lots, export grading parameters, and current CIF/FOB pricing.`;
                  onOpenQuote('Guntur Red Chillies - Bulk Mandi Consignment', msg);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F291E] hover:bg-[#16382B] rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book Consignment / Inquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ================= HOST AUTHENTICATION MODAL ================= */}
      {showAuthModal && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl border border-stone-300 overflow-hidden">
            <div className="bg-[#0F291E] text-white p-5 border-b border-amber-900/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-brand text-base font-bold">Host Verification</h4>
                  <p className="text-[11px] text-stone-300">Guntur Mandi Rate Desk Access</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowAuthModal(false)}
                className="p-1.5 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleVerifyAuth} className="p-6 space-y-4">
              {authError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{authError}</span>
                </div>
              )}

              {/* Host ID */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Host ID
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Host ID"
                  value={hostId}
                  onChange={(e) => setHostId(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm font-mono border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {/* Siddhu Code */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Siddhu Code
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Siddhu Code"
                  value={siddhuCode}
                  onChange={(e) => setSiddhuCode(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm font-mono border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm font-mono border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0F291E] hover:bg-[#16382B] rounded-lg shadow-sm transition-colors"
                >
                  Verify & Enter
                </button>
                <button
                  type="button"
                  onClick={() => setShowAuthModal(false)}
                  className="py-2.5 px-4 text-xs font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= HOST LIVE MARKET UPDATE PORTAL ================= */}
      {showEditorModal && (
        <div className="fixed inset-0 z-60 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-stone-300 overflow-hidden my-6 max-h-[92vh] flex flex-col">
            
            {/* Editor Header */}
            <div className="bg-[#0F291E] text-white p-5 border-b border-amber-900/40 flex items-center justify-between shrink-0">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-stone-950 uppercase">
                    Host Desk: 3333
                  </span>
                  <span className="text-xs text-stone-300">Authorized: Siddhu</span>
                </div>
                <h3 className="font-serif-brand text-xl font-bold">
                  Daily Guntur Market Rates & Arrivals Entry
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowEditorModal(false)}
                className="p-1.5 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Editor Form Body */}
            <form onSubmit={handleSaveMarketData} className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
              
              {/* Success Notification */}
              {saveSuccessMsg && (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-in slide-in-from-top-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Live Market Update successfully saved & published! Updating view...</span>
                </div>
              )}

              {/* 1. Market Overview & Date */}
              <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-xl border border-stone-200 space-y-4">
                <h4 className="font-serif-brand text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-700" />
                  <span>1. Market Date & Sentiment</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Market Report Date
                    </label>
                    <input
                      type="text"
                      required
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                      placeholder="DD/MM/YYYY (e.g. 24/09/2026)"
                      className="w-full px-3.5 py-2 text-sm font-mono border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Market Sentiment / Trend
                    </label>
                    <select
                      value={editTrend}
                      onChange={(e) => setEditTrend(e.target.value as DailyMarketReport['trend'])}
                      className="w-full px-3.5 py-2 text-sm font-mono border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white font-bold"
                    >
                      <option value="STEADY">STEADY (Normal trading)</option>
                      <option value="FIRMER">FIRMER (Upward price pressure)</option>
                      <option value="EASY">EASY (Softer prices)</option>
                      <option value="ACTIVE">ACTIVE (Heavy trading)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 2. Arrivals Section (Auto-adds Main Yard + Outside Cold) */}
              <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-xl border border-stone-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-serif-brand text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
                    <Package className="w-4 h-4 text-red-600" />
                    <span>2. Market Arrivals (Bags)</span>
                  </h4>
                  <span className="text-[11px] font-mono text-stone-500">
                    Total is automatically computed: Main Yard + Outside Cold
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                  {/* Main Yard Arrivals Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Main Yard Arrivals (Bags)
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={editMainYard}
                      onChange={(e) => setEditMainYard(parseInt(e.target.value) || 0)}
                      className="w-full px-3.5 py-2 text-sm font-mono font-bold text-red-700 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                    />
                  </div>

                  {/* Outside Cold Arrivals Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Outside Cold Arrivals (Bags)
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={editOutsideCold}
                      onChange={(e) => setEditOutsideCold(parseInt(e.target.value) || 0)}
                      className="w-full px-3.5 py-2 text-sm font-mono font-bold text-stone-800 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                    />
                  </div>

                  {/* Total Calculated Arrivals (Automatic addition) */}
                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-300 space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Total Arrivals (Auto-Added)
                    </span>
                    <div className="text-lg font-mono font-bold text-emerald-950">
                      {computedTotalArrivals.toLocaleString()} Bags
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. 8 Varieties Rates & Bags Input */}
              <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-xl border border-stone-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                  <div>
                    <h4 className="font-serif-brand text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[#0F291E]" />
                      <span>3. 8 Varieties Rates & Bags Entry</span>
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      Input Min Rate, Max Rate, Extra Rate (if applicable), and Bags for each variety.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleDistributeBagsEvenly}
                    className="py-1 px-3 bg-amber-200 hover:bg-amber-300 text-stone-900 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                    title="Divide total bags equally among 8 varieties"
                  >
                    Auto-Divide Total Bags ({Math.round(computedTotalArrivals / 8).toLocaleString()} bags/variety)
                  </button>
                </div>

                <div className="space-y-4">
                  {editVarieties.map((v, idx) => (
                    <div
                      key={v.id}
                      className="p-3.5 bg-white rounded-lg border border-stone-200 space-y-2 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif-brand text-sm font-bold text-stone-900">
                          {idx + 1}. {v.name} {v.aliases ? `(${v.aliases})` : ''}
                        </span>
                        <span className="text-[11px] font-mono text-stone-400 uppercase">
                          Variety #{idx + 1}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                        {/* Min Price */}
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-stone-600">
                            Min Rate (₹)
                          </label>
                          <input
                            type="number"
                            required
                            min="1"
                            value={v.minPrice}
                            onChange={(e) =>
                              handleVarietyChange(idx, 'minPrice', parseInt(e.target.value) || 0)
                            }
                            className="w-full px-2.5 py-1.5 text-xs font-mono font-bold text-stone-900 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                          />
                        </div>

                        {/* Max Price */}
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-stone-600">
                            Max Rate (₹)
                          </label>
                          <input
                            type="number"
                            required
                            min="1"
                            value={v.maxPrice}
                            onChange={(e) =>
                              handleVarietyChange(idx, 'maxPrice', parseInt(e.target.value) || 0)
                            }
                            className="w-full px-2.5 py-1.5 text-xs font-mono font-bold text-stone-900 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                          />
                        </div>

                        {/* Extra Rate */}
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-amber-800">
                            Extra Rate (₹)
                          </label>
                          <input
                            type="number"
                            min="0"
                            placeholder="Optional"
                            value={v.extraMin || ''}
                            onChange={(e) => {
                              const val = parseInt(e.target.value) || 0;
                              handleVarietyChange(idx, 'extraMin', val > 0 ? val : undefined as any);
                              handleVarietyChange(idx, 'extraMax', val > 0 ? val : undefined as any);
                            }}
                            className="w-full px-2.5 py-1.5 text-xs font-mono font-bold text-amber-900 border border-amber-300 rounded focus:ring-1 focus:ring-amber-500 bg-amber-50/40"
                          />
                        </div>

                        {/* No of Bags */}
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-stone-600">
                            No. of Bags
                          </label>
                          <input
                            type="number"
                            required
                            min="0"
                            value={v.estimatedBags}
                            onChange={(e) =>
                              handleVarietyChange(
                                idx,
                                'estimatedBags',
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full px-2.5 py-1.5 text-xs font-mono font-bold text-stone-900 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={handleResetData}
                  className="py-2.5 px-4 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default Data</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowEditorModal(false)}
                    className="py-2.5 px-4 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 rounded-lg"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="py-2.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#0F291E] hover:bg-[#16382B] rounded-lg shadow-md flex items-center gap-2 transition-all transform active:scale-95"
                  >
                    <Save className="w-4 h-4 text-amber-400" />
                    <span>Save & Update Live Rates</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
