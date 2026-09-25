import { DailyMarketReport, TODAY_MARKET_UPDATE } from '../data/marketData';

const STORAGE_KEY = 'raviraj_spices_live_market_data_v1';

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

export function resetStoredMarketReport(): DailyMarketReport {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Error resetting market report', err);
  }
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
