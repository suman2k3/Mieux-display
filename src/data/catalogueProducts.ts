import { img } from "./site";

export type CatalogueProductCategory =
  | "All Products"
  | "Indoor LED"
  | "Outdoor LED"
  | "Interactive Displays"
  | "Commercial Displays"
  | "Digital Signage"
  | "Video Walls"
  | "Control Room"
  | "Creative LED";

export type ProductSpecItem = {
  label: string;
  value: string;
};

export type CatalogueProduct = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: CatalogueProductCategory;
  description: string;
  image: string;
  badge?: string;
  quickSpecs: {
    pixelPitch?: string;
    brightness?: string;
    refreshRate?: string;
    cabinetSize?: string;
    service?: string;
    dutyCycle?: string;
    touchPoints?: string;
    resolution?: string;
  };
  fullSpecs: ProductSpecItem[];
  applications: string[];
};

export const catalogueCategories: CatalogueProductCategory[] = [
  "All Products",
  "Indoor LED",
  "Outdoor LED",
  "Interactive Displays",
  "Commercial Displays",
  "Digital Signage",
  "Video Walls",
  "Control Room",
  "Creative LED",
];

export const catalogueProducts: CatalogueProduct[] = [
  {
    id: "spectra-s1",
    slug: "spectra-s1",
    name: "MIEUX Spectra S1",
    subtitle: "Fine Pitch Indoor LED Display",
    category: "Indoor LED",
    description:
      "Seamless fine-pitch LED display with 16-bit greyscale and ultra-low latency processing, engineered for luxury corporate lobbies, executive boardrooms, and command centres.",
    image: img.indoorLed,
    badge: "Fine Pitch",
    quickSpecs: {
      pixelPitch: "P0.9 – P1.2",
      brightness: "800–1200 nits",
      refreshRate: "3840Hz",
      cabinetSize: "600 × 337.5mm",
      service: "Front & Rear",
    },
    fullSpecs: [
      { label: "Pixel Pitch", value: "P0.9 / P1.2 / P1.5 mm" },
      { label: "Brightness", value: "1,200 nits (Adjustable)" },
      { label: "Refresh Rate", value: "3840Hz / 7680Hz Option" },
      { label: "Contrast Ratio", value: "10,000:1" },
      { label: "Viewing Angle", value: "160° H / 160° V" },
      { label: "Cabinet Weight", value: "5.2 kg / cabinet" },
      { label: "IP Rating", value: "IP40 Front / IP30 Rear" },
      { label: "Operating Temp", value: "-10°C to +45°C" },
      { label: "Maintenance", value: "Full Front Magnet Access" },
      { label: "Warranty", value: "3 Years Standard + AMC" },
    ],
    applications: ["Corporate", "Education", "Control Room", "Hospitality"],
  },
  {
    id: "apex-cob",
    slug: "apex-cob",
    name: "MIEUX Apex COB",
    subtitle: "COB Flip-Chip LED Display",
    category: "Indoor LED",
    description:
      "Next-generation Chip-On-Board (COB) flip-chip technology offering dust-proof, moisture-proof, impact-resistant surface protection with deep black levels.",
    image: img.heroVideoWall,
    badge: "COB Tech",
    quickSpecs: {
      pixelPitch: "P0.7 – P1.2",
      brightness: "1000 nits",
      refreshRate: "3840Hz",
      cabinetSize: "600 × 337.5mm",
      service: "Front Service",
    },
    fullSpecs: [
      { label: "Pixel Pitch", value: "P0.7 / P0.9 / P1.2 mm" },
      { label: "Brightness", value: "1,000 nits" },
      { label: "Refresh Rate", value: "3840Hz" },
      { label: "Contrast Ratio", value: "15,000:1" },
      { label: "Viewing Angle", value: "170° H / 170° V" },
      { label: "Cabinet Weight", value: "4.8 kg / cabinet" },
      { label: "IP Rating", value: "IP54 Front Protection" },
      { label: "Operating Temp", value: "-10°C to +50°C" },
      { label: "Maintenance", value: "Vacuum Tool Front Access" },
      { label: "Warranty", value: "3 Years Standard + AMC" },
    ],
    applications: ["Corporate", "Control Room", "Government", "Broadcast"],
  },
  {
    id: "lit-pro",
    slug: "lit-pro",
    name: "MIEUX LIT Pro",
    subtitle: "Studio Grade Broadcast LED",
    category: "Indoor LED",
    description:
      "Ultra-high 7680Hz refresh rate LED wall optimized for broadcast studios, virtual production sets, newsrooms, and high-framerate camera environments.",
    image: img.indoorLed,
    badge: "7680Hz",
    quickSpecs: {
      pixelPitch: "P1.5 – P2.0",
      brightness: "1200 nits",
      refreshRate: "7680Hz",
      cabinetSize: "500 × 500mm",
      service: "Dual Service",
    },
    fullSpecs: [
      { label: "Pixel Pitch", value: "P1.5 / P1.8 / P2.0 mm" },
      { label: "Brightness", value: "1,200 nits" },
      { label: "Refresh Rate", value: "7680Hz Broadcast Grade" },
      { label: "Contrast Ratio", value: "8,000:1" },
      { label: "Viewing Angle", value: "160° H / 160° V" },
      { label: "Cabinet Weight", value: "6.5 kg / cabinet" },
      { label: "IP Rating", value: "IP40 Front" },
      { label: "Operating Temp", value: "-10°C to +45°C" },
      { label: "Maintenance", value: "Front & Rear Serviceable" },
      { label: "Warranty", value: "3 Years Standard" },
    ],
    applications: ["Broadcast", "Corporate", "Education", "Sports Arena"],
  },
  {
    id: "vega-x",
    slug: "vega-x",
    name: "MIEUX Vega X",
    subtitle: "Modular LED Display",
    category: "Indoor LED",
    description:
      "Versatile die-cast aluminum modular LED cabinets engineered for rapid installation in auditoriums, multipurpose corporate halls, and event spaces.",
    image: img.corporate,
    badge: "Modular",
    quickSpecs: {
      pixelPitch: "P1.8 – P2.5",
      brightness: "1000 nits",
      refreshRate: "3840Hz",
      cabinetSize: "500 × 1000mm",
      service: "Rear Service",
    },
    fullSpecs: [
      { label: "Pixel Pitch", value: "P1.8 / P2.0 / P2.5 mm" },
      { label: "Brightness", value: "1,000 nits" },
      { label: "Refresh Rate", value: "3840Hz" },
      { label: "Contrast Ratio", value: "5,000:1" },
      { label: "Viewing Angle", value: "140° H / 140° V" },
      { label: "Cabinet Weight", value: "11 kg / cabinet" },
      { label: "IP Rating", value: "IP30" },
      { label: "Operating Temp", value: "-10°C to +45°C" },
      { label: "Maintenance", value: "Rear Lock Access" },
      { label: "Warranty", value: "3 Years Standard" },
    ],
    applications: ["Education", "Corporate", "Hospitality", "Retail"],
  },
  {
    id: "nova-outdoor",
    slug: "nova-outdoor",
    name: "MIEUX Nova Outdoor",
    subtitle: "Outdoor LED Display",
    category: "Outdoor LED",
    description:
      "IP65-rated high-brightness outdoor LED billboard display built for 24/7 all-weather performance under direct Indian sunlight and monsoons.",
    image: img.heroOutdoor,
    badge: "8000 Nits",
    quickSpecs: {
      pixelPitch: "P3.9 – P10",
      brightness: "8000 nits",
      refreshRate: "3840Hz",
      cabinetSize: "960 × 960mm",
      service: "Dual Service",
    },
    fullSpecs: [
      { label: "Pixel Pitch", value: "P3.9 / P5.9 / P8.0 / P10 mm" },
      { label: "Brightness", value: "8,000 nits (Auto Sensor)" },
      { label: "Refresh Rate", value: "3840Hz" },
      { label: "Contrast Ratio", value: "8,000:1" },
      { label: "Viewing Angle", value: "140° H / 140° V" },
      { label: "Cabinet Weight", value: "18 kg / cabinet" },
      { label: "IP Rating", value: "IP65 Front & Rear" },
      { label: "Operating Temp", value: "-20°C to +60°C" },
      { label: "Maintenance", value: "Dual Front & Rear Access" },
      { label: "Warranty", value: "3 Years Weatherproof" },
    ],
    applications: ["Retail", "Transportation", "Government", "Sports Arena"],
  },
  {
    id: "visionwall-4k",
    slug: "visionwall-4k",
    name: "MIEUX VisionWall 4K",
    subtitle: "LCD Video Wall System",
    category: "Video Walls",
    description:
      "Ultra-narrow 0.88mm combined bezel LCD video wall with 4K DP daisy-chain loop, 700 nits high brightness, and precision alignment mounting grid.",
    image: img.corporate,
    badge: "0.88mm Bezel",
    quickSpecs: {
      pixelPitch: "0.88mm Bezel",
      brightness: "700 nits",
      dutyCycle: "24/7 Continuous",
      cabinetSize: "55 inch Panel",
      service: "Push-to-Open",
    },
    fullSpecs: [
      { label: "Bezel Width", value: "0.88mm Combined Bezel-to-Bezel" },
      { label: "Panel Size", value: "55 Inch Diagonal IPS" },
      { label: "Brightness", value: "700 nits Anti-Glare" },
      { label: "Resolution", value: "1920 × 1080 (Per Panel)" },
      { label: "Daisy Chain", value: "DisplayPort 1.2 4K Loop" },
      { label: "Duty Cycle", value: "24/7 Operational Rating" },
      { label: "Viewing Angle", value: "178° H / 178° V" },
      { label: "Operating Temp", value: "0°C to +40°C" },
      { label: "Mounting", value: "3D Micro-Adjust Mounts" },
      { label: "Warranty", value: "3 Years On-site" },
    ],
    applications: ["Control Room", "Corporate", "Government", "Transportation"],
  },
  {
    id: "interactive-pro",
    slug: "interactive-pro",
    name: "MIEUX Interactive Pro",
    subtitle: "Interactive Flat Panel",
    category: "Interactive Displays",
    description:
      "All-in-one 4K interactive display panel with zero-gap optical bonding, 40-point multi-touch, sub-8ms pen latency, Android 13, and Windows OPS slot.",
    image: img.heroIfp,
    badge: "4K Touch",
    quickSpecs: {
      pixelPitch: "4K UHD 3840×2160",
      touchPoints: "40-Point Touch",
      brightness: "450 nits",
      cabinetSize: '65" / 75" / 86"',
      service: "Front Ports & OPS",
    },
    fullSpecs: [
      { label: "Sizes Available", value: '65" / 75" / 86" / 98"' },
      { label: "Touch Technology", value: "40-Point Infrared Touch" },
      { label: "Resolution", value: "4K UHD (3840 × 2160 @ 60Hz)" },
      { label: "Glass Type", value: "4mm Zero-Gap Anti-Glare TMM" },
      { label: "OS Platform", value: "Android 13 + OPS Windows Slot" },
      { label: "Speakers", value: "2 × 20W + 15W Subwoofer" },
      { label: "Wireless Casting", value: "Up to 9 Screen Split Share" },
      { label: "Writing Latency", value: "< 8ms Pen Response" },
      { label: "Maintenance", value: "Front Modular Access" },
      { label: "Warranty", value: "3 Years On-site Replacement" },
    ],
    applications: ["Education", "Corporate", "Healthcare", "Government"],
  },
  {
    id: "signaview",
    slug: "signaview",
    name: "MIEUX SignaView",
    subtitle: "Digital Signage Display",
    category: "Digital Signage",
    description:
      "Industrial-grade commercial signage screen with built-in cloud CMS player, 24/7 operation rating, and portrait or landscape architectural mounting.",
    image: img.signage,
    badge: "Cloud CMS",
    quickSpecs: {
      resolution: "4K UHD",
      brightness: "500 nits",
      dutyCycle: "24/7 Continuous",
      cabinetSize: '43" – 86"',
      service: "Cloud Remote",
    },
    fullSpecs: [
      { label: "Screen Sizes", value: '43" / 55" / 65" / 75" / 86"' },
      { label: "Brightness", value: "500 nits Commercial Grade" },
      { label: "Duty Cycle", value: "24/7 Duty Cycle Certified" },
      { label: "Player Hardware", value: "Embedded Quad-Core SoC" },
      { label: "CMS Software", value: "MIEUX Cloud Signage Engine" },
      { label: "Orientation", value: "Portrait & Landscape Support" },
      { label: "Bezel Depth", value: "Slim 28mm Architectural Profile" },
      { label: "Operating Temp", value: "0°C to +40°C" },
      { label: "Connectivity", value: "Wi-Fi, LAN, HDMI, USB" },
      { label: "Warranty", value: "3 Years Commercial Warranty" },
    ],
    applications: ["Retail", "Hospitality", "Healthcare", "Transportation"],
  },
  {
    id: "controlview",
    slug: "controlview",
    name: "MIEUX ControlView",
    subtitle: "Control Room Display",
    category: "Control Room",
    description:
      "Mission-critical 24/7 fine-pitch LED video wall system with redundant power supplies, hot-swappable modules, and KVM multi-canvas management.",
    image: img.controlRoom,
    badge: "24/7 Mission Critical",
    quickSpecs: {
      pixelPitch: "P0.9 – P1.5",
      brightness: "800 nits",
      refreshRate: "3840Hz",
      dutyCycle: "24/7 Zero Downtime",
      service: "Full Hot-Swap",
    },
    fullSpecs: [
      { label: "Pixel Pitch", value: "P0.9 / P1.2 / P1.5 mm" },
      { label: "Brightness", value: "800 nits Low Blue Light" },
      { label: "Refresh Rate", value: "3840Hz Low-Flicker" },
      { label: "Redundancy", value: "Dual Power & Signal Loops" },
      { label: "Processing", value: "KVM Multi-Source Canvas" },
      { label: "Duty Cycle", value: "24/7/365 Continuous Rating" },
      { label: "Viewing Angle", value: "160° H / 160° V" },
      { label: "Operating Temp", value: "0°C to +45°C" },
      { label: "Maintenance", value: "Hot-Swappable Modules" },
      { label: "Warranty", value: "5 Years Mission Critical AMC" },
    ],
    applications: ["Control Room", "Government", "Transportation", "Defence"],
  },
  {
    id: "flex-led",
    slug: "flex-led",
    name: "MIEUX Flex LED",
    subtitle: "Creative Flexible LED",
    category: "Creative LED",
    description:
      "Ultra-flexible soft rubber substrate LED modules allowing convex, concave, S-curve, and 360° cylindrical column installations.",
    image: img.transparentLed,
    badge: "Flexible",
    quickSpecs: {
      pixelPitch: "P1.8 – P2.5",
      brightness: "1000 nits",
      refreshRate: "3840Hz",
      cabinetSize: "Custom Curve",
      service: "Magnetic Snap",
    },
    fullSpecs: [
      { label: "Pixel Pitch", value: "P1.8 / P2.0 / P2.5 mm" },
      { label: "Bending Angle", value: "Up to 120° Bending Radius" },
      { label: "Brightness", value: "1,000 nits" },
      { label: "Refresh Rate", value: "3840Hz" },
      { label: "Substrate Material", value: "Soft Flexible Silicone" },
      { label: "Module Weight", value: "170g per module" },
      { label: "Mounting", value: "Strong Magnetic Snap-on" },
      { label: "Operating Temp", value: "-10°C to +45°C" },
      { label: "Maintenance", value: "Magnet Front Pull" },
      { label: "Warranty", value: "3 Years Standard" },
    ],
    applications: ["Retail", "Corporate", "Hospitality", "Broadcast"],
  },
  {
    id: "floorvision",
    slug: "floorvision",
    name: "MIEUX FloorVision",
    subtitle: "Interactive Floor LED",
    category: "Creative LED",
    description:
      "Heavy-duty 2,000kg/m² load-bearing interactive LED floor tiles with integrated optical sensors for immersive experiential spaces.",
    image: img.kiosk,
    badge: "Interactive Floor",
    quickSpecs: {
      pixelPitch: "P3.9 – P6.2",
      brightness: "2500 nits",
      refreshRate: "3840Hz",
      cabinetSize: "500 × 500mm",
      service: "Top Tile Access",
    },
    fullSpecs: [
      { label: "Load Capacity", value: "2,000 kg / m² Load Rating" },
      { label: "Pixel Pitch", value: "P3.9 / P6.2 mm" },
      { label: "Interactive Sensor", value: "High-Speed Optical Pressure Grid" },
      { label: "Surface Glass", value: "Anti-Scratch Anti-Slip Tempered Glass" },
      { label: "Brightness", value: "2,500 nits" },
      { label: "Refresh Rate", value: "3840Hz" },
      { label: "IP Rating", value: "IP65 Waterproof Surface" },
      { label: "Operating Temp", value: "-10°C to +50°C" },
      { label: "Maintenance", value: "Top Tile Suction Tool" },
      { label: "Warranty", value: "3 Years Heavy Duty" },
    ],
    applications: ["Retail", "Hospitality", "Corporate", "Education"],
  },
  {
    id: "maxview",
    slug: "maxview",
    name: "MIEUX MaxView",
    subtitle: "Large Format Commercial Display",
    category: "Commercial Displays",
    description:
      "Impactful 98-inch 4K UHD commercial display panel with 700 nits high brightness and anti-glare coating engineered for flagship executive boardrooms.",
    image: img.signage,
    badge: '98" 4K',
    quickSpecs: {
      resolution: "4K UHD 3840×2160",
      brightness: "700 nits",
      dutyCycle: "24/7 Duty",
      cabinetSize: '98" Single Panel',
      service: "Front & Wall Mount",
    },
    fullSpecs: [
      { label: "Display Size", value: '98 Inch Diagonal IPS' },
      { label: "Resolution", value: "4K UHD (3840 × 2160)" },
      { label: "Brightness", value: "700 nits High Brightness" },
      { label: "Contrast Ratio", value: "4,000:1" },
      { label: "Duty Cycle", value: "24/7 Continuous Duty" },
      { label: "Glass Coating", value: "25% Low-Reflection Anti-Glare" },
      { label: "Bezel Profile", value: "Slim 14mm Metallic Edge" },
      { label: "Operating Temp", value: "0°C to +40°C" },
      { label: "Inputs", value: "4 × HDMI 2.0, DP 1.2, RS232, LAN" },
      { label: "Warranty", value: "3 Years On-site Commercial" },
    ],
    applications: ["Corporate", "Government", "Education", "Retail"],
  },
];

// Helper functions
export function getProductBySlug(slug: string): CatalogueProduct | undefined {
  return catalogueProducts.find((p) => p.slug === slug || p.id === slug);
}
