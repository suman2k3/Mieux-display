import { img } from "./site";

export type CategoryId =
  | "indoor-led"
  | "outdoor-led"
  | "interactive-panel"
  | "commercial-display"
  | "lcd-video-wall"
  | "digital-signage"
  | "touch-kiosk"
  | "control-room"
  | "all-products";

export type FilterId = "All Series" | "Fine Pitch" | "COB LED" | "Rental" | "Creative LED";

export type MegaProductItem = {
  id: string;
  name: string;
  tagline: string;
  category: CategoryId;
  filterTag: FilterId[];
  image: string;
  slug: string;
  badge?: string;
};

export const megaCategories: { id: CategoryId; label: string; count: number }[] = [
  { id: "indoor-led", label: "Indoor LED Display", count: 9 },
  { id: "outdoor-led", label: "Outdoor LED Display", count: 7 },
  { id: "interactive-panel", label: "Interactive Flat Panel", count: 3 },
  { id: "commercial-display", label: "Commercial Display", count: 3 },
  { id: "lcd-video-wall", label: "LCD Video Wall", count: 2 },
  { id: "digital-signage", label: "Digital Signage", count: 2 },
  { id: "touch-kiosk", label: "Touch Kiosk", count: 2 },
  { id: "control-room", label: "Control Room Display", count: 3 },
  { id: "all-products", label: "All Products", count: 31 },
];

export const megaFilters: FilterId[] = [
  "All Series",
  "Fine Pitch",
  "COB LED",
  "Rental",
  "Creative LED",
];

export const megaProducts: MegaProductItem[] = [
  // Indoor LED
  {
    id: "spectra",
    name: "Spectra Series",
    tagline: "P0.9 - P1.2 Fine Pitch",
    category: "indoor-led",
    filterTag: ["Fine Pitch"],
    image: img.indoorLed,
    slug: "indoor-led-display",
    badge: "Flagship",
  },
  {
    id: "apex",
    name: "Apex Series",
    tagline: "COB Flip-Chip Tech",
    category: "indoor-led",
    filterTag: ["Fine Pitch", "COB LED"],
    image: img.heroVideoWall,
    slug: "indoor-led-display",
    badge: "COB Tech",
  },
  {
    id: "lit",
    name: "LIT Series",
    tagline: "3840Hz Studio Grade",
    category: "indoor-led",
    filterTag: ["Fine Pitch"],
    image: img.indoorLed,
    slug: "indoor-led-display",
  },
  {
    id: "vega",
    name: "Vega Series",
    tagline: "Modular Cabinet LED",
    category: "indoor-led",
    filterTag: ["All Series"],
    image: img.corporate,
    slug: "indoor-led-display",
  },
  {
    id: "nova",
    name: "Nova Series",
    tagline: "Ultra Slim Profile",
    category: "indoor-led",
    filterTag: ["Fine Pitch"],
    image: img.heroVideoWall,
    slug: "indoor-led-display",
  },
  {
    id: "pixel",
    name: "Pixel Series",
    tagline: "High Contrast Interior",
    category: "indoor-led",
    filterTag: ["All Series"],
    image: img.indoorLed,
    slug: "indoor-led-display",
  },
  {
    id: "nyx-indoor",
    name: "Nyx Indoor",
    tagline: "Micro Pitch COB",
    category: "indoor-led",
    filterTag: ["COB LED", "Fine Pitch"],
    image: img.indoorLed,
    slug: "indoor-led-display",
    badge: "Micro COB",
  },
  {
    id: "flex",
    name: "Flex Series",
    tagline: "Curved & Pillar LED",
    category: "indoor-led",
    filterTag: ["Creative LED"],
    image: img.transparentLed,
    slug: "indoor-led-display",
    badge: "Flexible",
  },
  {
    id: "floor-led",
    name: "Floor LED Display",
    tagline: "Interactive Floor Tiles",
    category: "indoor-led",
    filterTag: ["Creative LED"],
    image: img.kiosk,
    slug: "indoor-led-display",
  },

  // Outdoor LED
  {
    id: "helio",
    name: "Helio Series",
    tagline: "8000 Nits Sun-Beating",
    category: "outdoor-led",
    filterTag: ["All Series"],
    image: img.heroOutdoor,
    slug: "outdoor-led-display",
    badge: "8000 Nits",
  },
  {
    id: "earth",
    name: "Earth Series",
    tagline: "IP65 Monsoon Sealed",
    category: "outdoor-led",
    filterTag: ["All Series"],
    image: img.heroOutdoor,
    slug: "outdoor-led-display",
  },
  {
    id: "aegis",
    name: "Aegis Pro",
    tagline: "Common Cathode Saver",
    category: "outdoor-led",
    filterTag: ["All Series"],
    image: img.heroOutdoor,
    slug: "outdoor-led-display",
    badge: "Eco Saver",
  },
  {
    id: "nyx-od",
    name: "Nyx OD Series",
    tagline: "DOOH Billboard Grade",
    category: "outdoor-led",
    filterTag: ["All Series"],
    image: img.heroOutdoor,
    slug: "outdoor-led-display",
  },
  {
    id: "iris-facade",
    name: "Iris Media Façade",
    tagline: "Architectural Mesh",
    category: "outdoor-led",
    filterTag: ["Creative LED"],
    image: img.transparentLed,
    slug: "transparent-led",
    badge: "Mesh LED",
  },
  {
    id: "arena-rental",
    name: "Arena Series",
    tagline: "Stadium & Perimeter",
    category: "outdoor-led",
    filterTag: ["Rental"],
    image: img.heroOutdoor,
    slug: "outdoor-led-display",
  },
  {
    id: "orion-rental",
    name: "Orion Series",
    tagline: "Quick Lock Event LED",
    category: "outdoor-led",
    filterTag: ["Rental"],
    image: img.heroVideoWall,
    slug: "outdoor-led-display",
    badge: "Fast Lock",
  },

  // Interactive Flat Panel & Podiums
  {
    id: "digital-podium",
    name: "Mieux Digital Podium",
    tagline: "Speak. Present. Impress.",
    category: "interactive-panel",
    filterTag: ["All Series"],
    image: img.digitalPodium,
    slug: "digital-podium",
    badge: "New Release",
  },
  {
    id: "vision-pro",
    name: "Vision Pro",
    tagline: "4K 40-Pt Zero Latency",
    category: "interactive-panel",
    filterTag: ["All Series"],
    image: img.heroIfp,
    slug: "interactive-flat-panel",
    badge: "Popular",
  },
  {
    id: "smart-panel",
    name: "Smart Panel",
    tagline: "EDLA Android 13 + OPS",
    category: "interactive-panel",
    filterTag: ["All Series"],
    image: img.education,
    slug: "interactive-flat-panel",
  },
  {
    id: "alpha-display",
    name: "Alpha Display",
    tagline: "Dual OS Boardroom",
    category: "interactive-panel",
    filterTag: ["All Series"],
    image: img.heroIfp,
    slug: "interactive-flat-panel",
  },

  // Commercial Display
  {
    id: "elite-display",
    name: "Elite Display",
    tagline: "24x7 Industrial Panel",
    category: "commercial-display",
    filterTag: ["All Series"],
    image: img.signage,
    slug: "commercial-display",
  },
  {
    id: "ultra-view",
    name: "Ultra View",
    tagline: "700 Nits Anti-Glare",
    category: "commercial-display",
    filterTag: ["All Series"],
    image: img.signage,
    slug: "commercial-display",
  },
  {
    id: "max-vision",
    name: "Max Vision",
    tagline: "4K UHD Narrow Bezel",
    category: "commercial-display",
    filterTag: ["All Series"],
    image: img.signage,
    slug: "commercial-display",
  },

  // LCD Video Wall
  {
    id: "prowall",
    name: "ProWall Series",
    tagline: "0.88mm Bezel-to-Bezel",
    category: "lcd-video-wall",
    filterTag: ["All Series"],
    image: img.corporate,
    slug: "lcd-video-wall",
    badge: "0.88mm",
  },
  {
    id: "infinity-led",
    name: "Infinity Wall",
    tagline: "DP Loop Matrix Array",
    category: "lcd-video-wall",
    filterTag: ["All Series"],
    image: img.corporate,
    slug: "lcd-video-wall",
  },

  // Digital Signage
  {
    id: "signage-pro",
    name: "Signage Pro",
    tagline: "Cloud CMS Integrated",
    category: "digital-signage",
    filterTag: ["All Series"],
    image: img.signage,
    slug: "digital-signage",
  },
  {
    id: "window-showcase",
    name: "Window Showcase",
    tagline: "2500 Nits High Bright",
    category: "digital-signage",
    filterTag: ["All Series"],
    image: img.transparentLed,
    slug: "digital-signage",
  },

  // Touch Kiosk
  {
    id: "kiosk-touch55",
    name: "Touch Kiosk 55",
    tagline: "PCAP Self-Service",
    category: "touch-kiosk",
    filterTag: ["All Series"],
    image: img.kiosk,
    slug: "touch-kiosk",
  },
  {
    id: "checkin-stand",
    name: "Check-in Stand",
    tagline: "Printer & Scanner Ready",
    category: "touch-kiosk",
    filterTag: ["All Series"],
    image: img.kiosk,
    slug: "touch-kiosk",
  },

  // Control Room Display
  {
    id: "ignis",
    name: "IGNIS Series",
    tagline: "Redundant Power NOC",
    category: "control-room",
    filterTag: ["Fine Pitch"],
    image: img.controlRoom,
    slug: "control-room-display",
    badge: "24x7 NOC",
  },
  {
    id: "ace",
    name: "Ace Series",
    tagline: "Low Latency SOC Wall",
    category: "control-room",
    filterTag: ["Fine Pitch"],
    image: img.controlRoom,
    slug: "control-room-display",
  },
  {
    id: "unify-sys",
    name: "Unify System",
    tagline: "Multi-Source Canvas",
    category: "control-room",
    filterTag: ["All Series"],
    image: img.controlRoom,
    slug: "control-room-display",
  },
];
