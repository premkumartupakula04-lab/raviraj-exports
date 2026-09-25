import { DailyMarketReport, TODAY_MARKET_UPDATE } from '../data/marketData';

const STORAGE_KEY = 'raviraj_spices_live_market_data_v1';
export const MARKET_REPORT_UPDATED_EVENT = 'raviraj-market-report-updated';

export function notifyMarketReportUpdated(): void {
  window.dispatchEvent(new Event(MARKET_REPORT_UPDATED_EVENT));
}

export function getStoredMarketReport(): DailyMarketReport {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.varieties && parsed.varieties.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error loading stored market report', err);
  }
  return TODAY_MARKET_UPDATE;
}

export function saveStoredMarketReport(report: DailyMarketReport): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(report));
  } catch (err) {
    console.error('Error saving market report', err);
  }
}

export async function loadSharedMarketReport(): Promise<DailyMarketReport> {
  try {
    const response = await fetch('/api/market-report', { cache: 'no-store' });
    if (response.ok) {
      const report = (await response.json()) as DailyMarketReport;
      if (report && report.varieties && report.varieties.length > 0) {
        saveStoredMarketReport(report);
        return report;
      }
    }
  } catch (err) {
    console.warn('Shared market report unavailable; using local report', err);
  }
  return getStoredMarketReport();
}

export async function saveSharedMarketReport(report: DailyMarketReport): Promise<void> {
  let response: Response;
  try {
    response = await fetch('/api/market-report', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(report)
    });
  } catch (err) {
    if (import.meta.env.DEV) {
      saveStoredMarketReport(report);
      return;
    }
    throw err;
  }

  if (!response.ok) {
    if (import.meta.env.DEV) {
      saveStoredMarketReport(report);
      return;
    }
    const detail = await response.text();
    throw new Error(`Shared update failed (${response.status}): ${detail || response.statusText}`);
  }

  saveStoredMarketReport(report);
}

export async function resetSharedMarketReport(): Promise<DailyMarketReport> {
  let response: Response;
  try {
    response = await fetch('/api/market-report', { method: 'DELETE' });
  } catch (err) {
    if (import.meta.env.DEV) return resetStoredMarketReport();
    throw err;
  }
  if (!response.ok) {
    if (import.meta.env.DEV) return resetStoredMarketReport();
    const detail = await response.text();
    throw new Error(`Shared reset failed (${response.status}): ${detail || response.statusText}`);
  }

  return resetStoredMarketReport();
}

export function resetStoredMarketReport(): DailyMarketReport {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Error resetting market report', err);
  }
  notifyMarketReportUpdated();
  return TODAY_MARKET_UPDATE;
}

export function formatMarketBulletin(report: DailyMarketReport): string {
  const varietyLines = report.varieties.map((v) => {
    let line = `${v.name}.. ${v.minPrice} To ${v.maxPrice}`;
    if (v.extraMin) {
      line += `\nEXTRA..... ${v.extraMin}${v.extraMax && v.extraMax !== v.extraMin ? ` to ${v.extraMax}` : ''}`;
    }
    if (v.notes) {
      line += `\n(${v.notes})`;
    }
    return line;
  }).join('\n\n');

  const bagsLines = report.varieties.map((v, i) => {
    return `${i + 1}. ${v.name}: ${v.estimatedBags.toLocaleString()} Bags`;
  }).join('\n');

  return `Raviraj spices exports Pvt Ltd 
  GUNTUR. (A.P.) INDIA
💐**ESTD.. 1992. **💐*************************
            ${report.date}
*************************

 Late A/ c.& Outside cold Arrivals. ${report.outsideColdArrivals.toLocaleString()}

❤️A/c... Arrivals.....${report.mainYardArrivals.toLocaleString()}
Total Arrivals: ${report.totalArrivals.toLocaleString()} Bags
Total Varieties: ${report.varieties.length} Varieties
**********************"*************                      
            
MARKET.... ${report.trend} --------------------------
 
${varietyLines}

📦 VARIETY-WISE BAGS BREAKDOWN (${report.totalArrivals.toLocaleString()} Bags Total):
${bagsLines}
--------------------------------------------
Total: ${report.varieties.length} Varieties | ${report.totalArrivals.toLocaleString()} Bags
${report.footer}`;
}
