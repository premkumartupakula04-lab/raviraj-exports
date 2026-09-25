export interface ProductItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  origin: string;
  varieties: string[];
  packaging: string;
  supplyInfo: string;
}

export interface ProcessingStage {
  step: string;
  title: string;
  description: string;
  focus: string;
  iconName: string;
  image: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  organization: string;
  category: 'Government Body' | 'Export Authority' | 'Quality Standard' | 'Food Safety';
  description: string;
  status: string;
  documentPlaceholder: string;
  documentImage: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year?: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Products' | 'Quality & Processing' | 'Packaging' | 'Company';
  image: string;
  caption: string;
}

export const COMPANY_INFO = {
  name: "RAVIRAJ SPICES EXPORTS PVT LTD",
  shortName: "Raviraj Spices Exports",
  tagline: "Quality Indian Spices. Trusted Global Supply.",
  experience: "30+ Years of Experience",
  experienceSubtitle: "Over 3 Decades of Agricultural & Spice Trade Heritage in Guntur",
  subTagline: "Raviraj Spices Exports Pvt Ltd connects quality Indian spices and agricultural products with buyers through reliable sourcing, quality-focused processing and professional export support.",
  managingDirector: {
    name: "SADHU SIVS SANKAR RAO",
    designation: "MANAGING DIRECTOR",
    company: "Raviraj Spices Exports Pvt Ltd",
    location: "Guntur, Andhra Pradesh, India",
    experience: "30+ Years in Spice Cultivation & Export Trade",
    bio: "With over 30 years of deep-rooted experience in the Guntur spice trade, Sadhu Sivs Sankar Rao leads Raviraj Spices Exports Pvt Ltd with profound knowledge of crop cycles, grading standards, and agricultural grower networks across Andhra Pradesh and India.",
    message: "With over 30 years in the Guntur spice trade, our foundation is built on genuine agricultural sourcing, consistent processing discipline, and direct accountability to our domestic and international buyers. We invite you to experience the authentic quality of Indian spices."
  },
  contact: {
    phone: "9246777627",
    phoneDisplay: "+91 92467 77627",
    whatsapp: "9246777627",
    whatsappLink: "https://wa.me/919246777627?text=Hello%20Raviraj%20Spices%20Exports%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.",
    email: "info@ravirajspices.in",
    registeredAddress: {
      line1: "23-11-124, SADHU COMPLEX",
      line2: "ELURU BAZAR",
      city: "GUNTUR - 522003",
      state: "ANDHRA PRADESH",
      country: "INDIA"
    },
    facilityAddress: {
      estate: "RAVIRAJ SPICES EXPORTS PVT LTD",
      line1: "4/69, SADHU SUBRAHMANYAM ESTATE",
      line2: "NALLAPADU ROAD, BESIDE KOTAK MAHENDRA BANK",
      city: "GUNTUR - 522005",
      state: "ANDHRA PRADESH",
      country: "INDIA"
    },
    googleMapsUrl: "https://maps.app.goo.gl/n7Sacn98Ln2tccVi8?g_st=ac"
  }
};

export const TRUST_HIGHLIGHTS = [
  {
    title: "30+ YEARS EXPERIENCE",
    description: "Over three decades of deep-rooted spice trade and agricultural heritage in Guntur."
  },
  {
    title: "QUALITY PRODUCTS",
    description: "Careful sourcing and product selection from trusted regional farming tracts."
  },
  {
    title: "QUALITY PROCESSING",
    description: "Quality-focused handling, cleaning, and sorting under hygienic conditions."
  },
  {
    title: "EXPORT SUPPORT",
    description: "Professional support for buyer documentation, custom packaging, and shipping requirements."
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "red-chillies",
    name: "RED CHILLIES",
    category: "Whole & Powdered",
    shortDesc: "World-renowned Guntur whole dried red chillies, stemless chillies, flakes, and pure red chilli powder.",
    fullDesc: "Guntur in Andhra Pradesh is India's preeminent hub for premium dried red chillies. We source directly from the region's top spice markets and cultivators, delivering vibrant red color, uniform pungency, and clean pod consistency for international culinary and extraction requirements.",
    image: "/src/assets/images/product_red_chillies_1790318953186.jpg",
    origin: "Guntur, Andhra Pradesh, India",
    varieties: [
      "Whole Dried Chillies with Stem",
      "Stemless Whole Chillies",
      "Crushed Chilli Flakes",
      "Pure Ground Chilli Powder"
    ],
    packaging: "10kg, 20kg, 25kg Jute Burlap Sacks or PP woven bags with food-grade inner poly liner. Custom palletized export packing.",
    supplyInfo: "Contact us for current specifications, grades, packaging and availability."
  },
  {
    id: "turmeric",
    name: "TURMERIC",
    category: "Roots & Ground",
    shortDesc: "Pure Indian turmeric finger roots, polished turmeric, and high-curcumin bright golden turmeric powder.",
    fullDesc: "Naturally harvested Indian turmeric renowned for its golden yellow hue, aromatic fragrance, and potent curcumin content. Thoroughly cleaned and dried to preserve active natural compounds and natural earthy flavor profile.",
    image: "/src/assets/images/product_turmeric_1790318968604.jpg",
    origin: "Andhra Pradesh / India",
    varieties: [
      "Whole Dried Turmeric Fingers",
      "Polished Turmeric Fingers",
      "Turmeric Bulbs / Rounds",
      "Curcumin-Rich Turmeric Powder"
    ],
    packaging: "25kg and 50kg Jute bags, PP bags with moisture-protective liners, or heavy corrugated cartons.",
    supplyInfo: "Contact us for current specifications, grades, packaging and availability."
  },
  {
    id: "coriander",
    name: "CORIANDER",
    category: "Seeds & Powder",
    shortDesc: "Aromatic Indian whole coriander seeds with crisp texture and freshly milled fragrant coriander powder.",
    fullDesc: "Carefully selected coriander seeds displaying a distinct light golden-green color and sweet, citrusy herbal aroma. Handled with careful temperature regulation to retain volatile essential oils essential for food processing and spice blending.",
    image: "/src/assets/images/product_coriander_1790318982596.jpg",
    origin: "India",
    varieties: [
      "Whole Coriander Seeds (Eagle / Scooter / Badami)",
      "Split Coriander (Dhanna Dal)",
      "Coarse Ground Coriander",
      "Fine Aromatic Coriander Powder"
    ],
    packaging: "25kg and 40kg export-grade PP or woven gunny bags with moisture prevention barrier.",
    supplyInfo: "Contact us for current specifications, grades, packaging and availability."
  },
  {
    id: "other-spices",
    name: "OTHER SPICES",
    category: "Whole Agricultural Spices",
    shortDesc: "Selective sourcing of staple Indian whole seed spices including Cumin, Fennel, Mustard, and Fenugreek.",
    fullDesc: "In addition to our core Guntur chilli and turmeric selections, Raviraj Spices Exports supplies selective lots of high-demand Indian seed spices upon buyer demand, ensuring authentic origin verification and sanitary handling.",
    image: "/src/assets/images/hero_spices_export_1790318934185.jpg",
    origin: "India",
    varieties: [
      "Cumin Seeds (Jeera)",
      "Fennel Seeds (Saunf)",
      "Mustard Seeds (Rai)",
      "Fenugreek Seeds (Methi)"
    ],
    packaging: "Standard 25kg / 50kg bulk export packaging or customized buyer specifications.",
    supplyInfo: "Contact us for current specifications, grades, packaging and availability."
  }
];

export const PROCESSING_STAGES: ProcessingStage[] = [
  {
    step: "01",
    title: "SOURCING",
    description: "Direct farm and primary agricultural mandi procurement in Guntur and key spice cultivation belts.",
    focus: "Farm-level origin integrity, farmer partnerships & moisture monitoring",
    iconName: "Sprout",
    image: "/src/assets/images/stage_01_sourcing_1790319869315.jpg"
  },
  {
    step: "02",
    title: "QUALITY SELECTION",
    description: "Rigorous visual inspection, pod maturity verification, and physical quality parameter screening.",
    focus: "Individual inspection, removal of immature crops & foreign matter",
    iconName: "SearchCheck",
    image: "/src/assets/images/stage_02_selection_1790319884158.jpg"
  },
  {
    step: "03",
    title: "CLEANING & PROCESSING",
    description: "Modern hygienic handling facility with dust separation, stone removal, and gentle air-cleaning.",
    focus: "Mechanical purity, hygienic destoning & sanitary screening",
    iconName: "Sparkles",
    image: "/src/assets/images/stage_03_cleaning_1790319897441.jpg"
  },
  {
    step: "04",
    title: "GRADING",
    description: "Precise sorting by pod size, color consistency, pungency category, and buyer grade requirements.",
    focus: "Uniform physical grading, ASTA color value & length sorting",
    iconName: "SlidersHorizontal",
    image: "/src/assets/images/stage_04_grading_1790319915539.jpg"
  },
  {
    step: "05",
    title: "PACKAGING",
    description: "Packaging in heavy-duty food-grade jute burlap and multi-ply poly bags with moisture-lock liners.",
    focus: "Tamper-evident stitch sealing & moisture-barrier export protection",
    iconName: "PackageCheck",
    image: "/src/assets/images/stage_05_packaging_1790319929962.jpg"
  },
  {
    step: "06",
    title: "EXPORT DISPATCH",
    description: "Palletized container loading, container fumigation, phytosanitary checks, and dispatch to major sea ports.",
    focus: "Forklift stuffing, ocean container logistics & export customs clearance",
    iconName: "Ship",
    image: "/src/assets/images/stage_06_dispatch_1790319944020.jpg"
  }
];

export const QUALITY_COMMITMENT = [
  {
    title: "Careful Sourcing",
    description: "Procured directly from established farmers and recognized agricultural trade yards with verified crop histories."
  },
  {
    title: "Quality Inspection",
    description: "Every incoming batch is evaluated for visual consistency, moisture thresholds, and absence of external contaminants."
  },
  {
    title: "Hygienic Processing",
    description: "Handled inside dedicated clean facilities following sanitary agricultural handling practices and protective measures."
  },
  {
    title: "Export-Ready Packaging",
    description: "Standardized bulk packaging tailored to withstand sea transit, temperature fluctuations, and long-distance transport."
  }
];

export const CERTIFICATIONS_DATA: CredentialItem[] = [
  {
    id: "fssai",
    title: "FSSAI",
    organization: "Food Safety and Standards Authority of India",
    category: "Food Safety",
    description: "Statutory food safety license ensuring compliance with hygienic handling and national food quality standards.",
    status: "Company Registration Record on File",
    documentPlaceholder: "Credential document on file. Official verification copies available for trade due-diligence.",
    documentImage: "/src/assets/images/cert_fssai_doc_1790323093666.jpg"
  },
  {
    id: "apeda",
    title: "APEDA",
    organization: "Agricultural and Processed Food Products Export Development Authority",
    category: "Export Authority",
    description: "Official export council registration facilitating agricultural and food product consignments to global markets.",
    status: "Export Registration Record on File",
    documentPlaceholder: "Credential document on file. Official verification copies available for trade due-diligence.",
    documentImage: "/src/assets/images/cert_apeda_doc_1790323115250.jpg"
  },
  {
    id: "spices-board",
    title: "Spices Board India",
    organization: "Ministry of Commerce & Industry, Govt. of India",
    category: "Government Body",
    description: "Registration with the apex Indian spice regulatory body regulating spice trade quality and international exports.",
    status: "Regulatory Registration on File",
    documentPlaceholder: "Credential document on file. Official verification copies available for trade due-diligence.",
    documentImage: "/src/assets/images/cert_spicesboard_doc_1790323132541.jpg"
  },
  {
    id: "iso",
    title: "ISO Certification",
    organization: "International Organization for Standardization",
    category: "Quality Standard",
    description: "Quality management framework alignment ensuring systematic batch tracking, inspection, and customer satisfaction.",
    status: "Quality Management Framework",
    documentPlaceholder: "Credential document on file. Official verification copies available for trade due-diligence.",
    documentImage: "/src/assets/images/cert_iso_doc_1790323145006.jpg"
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: "award-1",
    title: "Agricultural Enterprise Excellence",
    organization: "Regional Spice Trade & Commerce Forum",
    description: "Recognized for reliable sourcing and dependable supply chain contribution in the Guntur spice corridor."
  },
  {
    id: "award-2",
    title: "Quality Spice Trader Recognition",
    organization: "Andhra Pradesh Agricultural Merchants Association",
    description: "Acknowledged for dedication to product purity and ethical business practices in domestic and export spice trade."
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Premium Dried Guntur Red Chillies",
    category: "Products",
    image: "/src/assets/images/product_red_chillies_1790318953186.jpg",
    caption: "Deep crimson whole dried chillies selected for export grade pungency and color value."
  },
  {
    id: "gal-2",
    title: "Golden Turmeric Roots & Ground Powder",
    category: "Products",
    image: "/src/assets/images/product_turmeric_1790318968604.jpg",
    caption: "Sun-dried natural turmeric fingers displaying intense natural curcumin pigmentation."
  },
  {
    id: "gal-3",
    title: "Aromatic Whole Coriander Seeds",
    category: "Products",
    image: "/src/assets/images/product_coriander_1790318982596.jpg",
    caption: "Uniform coriander harvest, freshly cleaned and packed for spice blending."
  },
  {
    id: "gal-4",
    title: "Stage 01: Agricultural Harvest & Sourcing",
    category: "Quality & Processing",
    image: "/src/assets/images/stage_01_sourcing_1790319869315.jpg",
    caption: "Direct procurement from mature chilli and spice crop farms in Guntur, Andhra Pradesh."
  },
  {
    id: "gal-5",
    title: "Stage 02: Manual & Technical Quality Inspection",
    category: "Quality & Processing",
    image: "/src/assets/images/stage_02_selection_1790319884158.jpg",
    caption: "Meticulous quality inspection of dried chillies and turmeric on clean stainless steel sorting tables."
  },
  {
    id: "gal-6",
    title: "Stage 03: Industrial Cleaning & Destoning",
    category: "Quality & Processing",
    image: "/src/assets/images/stage_03_cleaning_1790319897441.jpg",
    caption: "Modern food-grade pneumatic vibratory cleaners removing impurities and dust particles."
  },
  {
    id: "gal-7",
    title: "Stage 04: Spice Grading by Size & ASTA Color",
    category: "Quality & Processing",
    image: "/src/assets/images/stage_04_grading_1790319915539.jpg",
    caption: "Uniform physical grading ensuring consistent pod dimensions and color specifications."
  },
  {
    id: "gal-8",
    title: "Stage 05: Export Bulk Packaging & Stitching",
    category: "Packaging",
    image: "/src/assets/images/stage_05_packaging_1790319929962.jpg",
    caption: "Industrial stitching of tamper-evident heavy jute burlap and poly-lined export sacks."
  },
  {
    id: "gal-9",
    title: "Stage 06: Container Freight Dispatch",
    category: "Packaging",
    image: "/src/assets/images/stage_06_dispatch_1790319944020.jpg",
    caption: "Palletized container stuffing and freight staging for ocean dispatch via Chennai & Krishnapatnam ports."
  }
];
