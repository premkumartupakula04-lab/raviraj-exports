export interface VarietyRate {
  id: string;
  name: string;
  aliases?: string;
  minPrice: number;
  maxPrice: number;
  extraMin?: number;
  extraMax?: number;
  unit: string;
  notes?: string;
  estimatedBags: number;
}

export interface DailyMarketReport {
  company: string;
  location: string;
  established: string;
  date: string;
  outsideColdArrivals: number;
  mainYardArrivals: number;
  totalArrivals: number;
  totalVarietiesCount: number;
  avgBagsPerVariety: number;
  trend: 'STEADY' | 'FIRMER' | 'EASY' | 'ACTIVE';
  varieties: VarietyRate[];
  footer: string;
}

export const TODAY_MARKET_UPDATE: DailyMarketReport = {
  company: "RAVIRAJ SPICES EXPORTS PVT LTD",
  location: "GUNTUR. (A.P.) INDIA",
  established: "ESTD. 1992",
  date: "24/09/2026",
  outsideColdArrivals: 7000,
  mainYardArrivals: 50000,
  totalArrivals: 57000,
  totalVarietiesCount: 8,
  avgBagsPerVariety: 57000 / 8, // 7,125 bags
  trend: "STEADY",
  varieties: [
    {
      id: "teja",
      name: "A/c. TEJA",
      aliases: "S17 Guntur Hot",
      minPrice: 180,
      maxPrice: 200,
      extraMin: 210,
      extraMax: 225,
      unit: "₹ / Kg",
      notes: "Extra: ₹210 - ₹225",
      estimatedBags: 7125
    },
    {
      id: "341",
      name: "A/c. 341",
      aliases: "DD / Syngenta 341",
      minPrice: 220,
      maxPrice: 250,
      unit: "₹ / Kg",
      estimatedBags: 7125
    },
    {
      id: "2043",
      name: "A/c. 2043",
      aliases: "Premium High Pungency",
      minPrice: 330,
      maxPrice: 380,
      unit: "₹ / Kg",
      estimatedBags: 7125
    },
    {
      id: "aarmoor",
      name: "A/c. Aarmoor",
      aliases: "Top Gun & Ganesh",
      minPrice: 210,
      maxPrice: 220,
      extraMin: 230,
      extraMax: 230,
      unit: "₹ / Kg",
      notes: "",
      estimatedBags: 7125
    },
    {
      id: "334-s10",
      name: "A/c. 334 & S10",
      aliases: "Export Quality Dual Pod",
      minPrice: 230,
      maxPrice: 290,
      unit: "₹ / Kg",
      estimatedBags: 7125
    },
    {
      id: "5531",
      name: "A/c. 5531",
      aliases: "Super Rich Red Color",
      minPrice: 220,
      maxPrice: 250,
      unit: "₹ / Kg",
      estimatedBags: 7125
    },
    {
      id: "355",
      name: "A/c. 355",
      aliases: "High ASTA Value",
      minPrice: 220,
      maxPrice: 280,
      unit: "₹ / Kg",
      estimatedBags: 7125
    },
    {
      id: "dd",
      name: "A/c. D. D.",
      aliases: "Deep Red Deluxe",
      minPrice: 230,
      maxPrice: 260,
      unit: "₹ / Kg",
      estimatedBags: 7125
    }
  ],
  footer: "RAVIRAJ SPICES EXPORTS PVT LTD GUNTUR-3 ANDHRA PRADESH"
};

export const RAW_MARKET_BULLETIN_TEXT = `Raviraj spices exports Pvt Ltd 
  GUNTUR. (A.P.) INDIA
💐**ESTD.. 1992. **💐*************************
            24/09/2026
*************************

 Late A/ c.& Outside cold Arrivals. 7,000

❤️A/c... Arrivals.....50,000
Total Arrivals: 57,000 Bags
Total Varieties: 8 Varieties (57,000 / 8 = 7,125 Bags each)
**********************"*************                      
            
MARKET.... STEADY --------------------------
 
A/c.  TEJA.. 180 To 200
EXTRA..... 210 to 225

A/c.  341..... 220 To 250

A/c...2043... 330 To 380.

A/c. Aarmoor..210To.220
EXTRA....  230
( Top Gun & Genesh)

A/c. 334 & S10.230 To 290

A/c.. 5531.. 220 To 250

A/c... 355.... 220 To 280

A/c.... D. D....230 To 260

📦 VARIETY-WISE BAGS BREAKDOWN (57,000 Bags Total):
1. A/c. TEJA: 7,125 Bags
2. A/c. 341: 7,125 Bags
3. A/c. 2043: 7,125 Bags
4. A/c. Aarmoor: 7,125 Bags
5. A/c. 334 & S10: 7,125 Bags
6. A/c. 5531: 7,125 Bags
7. A/c. 355: 7,125 Bags
8. A/c. D. D.: 7,125 Bags
--------------------------------------------
Total: 8 Varieties | 57,000 Bags
RAVIRAJ SPICES EXPORTS PVT LTD GUNTUR-3 ANDHRA PRADESH`;
