import heroVideoWall from "@/assets/hero-videowall.jpg";
import heroIfp from "@/assets/hero-ifp.jpg";
import heroOutdoor from "@/assets/hero-outdoor.jpg";
import controlRoom from "@/assets/control-room.jpg";
import signage from "@/assets/signage.jpg";
import education from "@/assets/education.jpg";
import transparentLed from "@/assets/transparent-led.jpg";
import corporate from "@/assets/corporate.jpg";
import kiosk from "@/assets/kiosk.jpg";
import indoorLed from "@/assets/indoor-led.jpg";

export const img = {
  heroVideoWall,
  heroIfp,
  heroOutdoor,
  controlRoom,
  signage,
  education,
  transparentLed,
  corporate,
  kiosk,
  indoorLed,
};

export const company = {
  name: "MIEUX DISPLAY PRIVATE LIMITED",
  short: "MIEUX DISPLAY",
  email: "info@mieuxdisplay.com",
  phone: "+91 9876543210",
  address: "Plot 14, Tech Park Road, Sector 62, Noida, Uttar Pradesh 201301, India",
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: string[];
  features: { title: string; body: string }[];
};

export const products: Product[] = [
  {
    slug: "indoor-led-display",
    name: "Indoor LED Display",
    tagline: "Fine-pitch brilliance for interiors",
    description:
      "Seamless fine-pitch LED walls from P0.9 to P2.5 engineered for lobbies, auditoriums and command centres.",
    image: indoorLed,
    specs: ["Pixel pitch P0.9 – P2.5", "1000 nits brightness", "3840Hz refresh rate", "Front & rear service"],
    features: [
      { title: "Seamless canvas", body: "Bezel-free modular cabinets deliver a single uninterrupted image at any scale." },
      { title: "Colour accuracy", body: "16-bit processing and factory calibration keep greyscale consistent for years." },
      { title: "Silent operation", body: "Fanless cabinets rated below 30dB for boardrooms and studios." },
    ],
  },
  {
    slug: "outdoor-led-display",
    name: "Outdoor LED Display",
    tagline: "Built for sunlight and storms",
    description:
      "IP65-rated high-brightness LED billboards and facade screens designed for 24x7 operation in Indian climates.",
    image: heroOutdoor,
    specs: ["Up to 8000 nits", "IP65 front & rear", "P3 – P10 pitch", "Auto brightness sensor"],
    features: [
      { title: "All-weather build", body: "Die-cast aluminium cabinets with sealed masks survive monsoon and dust." },
      { title: "Power efficient", body: "Common-cathode drive reduces consumption by up to 30%." },
      { title: "Remote control", body: "Cloud publishing with scheduling, monitoring and fault alerts." },
    ],
  },
  {
    slug: "interactive-flat-panel",
    name: "Interactive Flat Panel",
    tagline: "Collaboration that feels natural",
    description:
      "4K multi-touch panels with built-in whiteboarding, wireless casting and Android + Windows OPS options.",
    image: heroIfp,
    specs: ["65\" / 75\" / 86\" / 98\"", "40-point multi-touch", "4K UHD anti-glare", "Android 13 + OPS slot"],
    features: [
      { title: "Zero-lag writing", body: "Sub-8ms pen latency with palm rejection for natural annotation." },
      { title: "Wireless casting", body: "Share from any laptop or phone with up to 9 simultaneous sources." },
      { title: "Device management", body: "Fleet-wide firmware, policy and content management from one console." },
    ],
  },
  {
    slug: "commercial-display",
    name: "Commercial Display",
    tagline: "24x7 professional panels",
    description:
      "Industrial-grade commercial displays for retail, hospitality and corporate environments with 24x7 duty rating.",
    image: signage,
    specs: ["43\" – 98\" sizes", "500 nits typical", "24x7 duty cycle", "Portrait & landscape"],
    features: [
      { title: "Always on", body: "Thermal design certified for continuous operation with 3-year warranty." },
      { title: "Built-in player", body: "System-on-chip signage player removes external media boxes." },
      { title: "Slim mounting", body: "Sub-30mm depth for flush architectural installations." },
    ],
  },
  {
    slug: "lcd-video-wall",
    name: "LCD Video Wall",
    tagline: "Ultra-narrow bezel arrays",
    description:
      "0.88mm bezel-to-bezel LCD video walls for control rooms, network operations and corporate lobbies.",
    image: corporate,
    specs: ["0.88mm combined bezel", "700 nits", "Daisy-chain DP loop", "Any m x n layout"],
    features: [
      { title: "Precision alignment", body: "Micro-adjust mounts deliver perfect grid geometry on site." },
      { title: "Multi-source", body: "Show up to 16 sources across the wall with a video wall processor." },
      { title: "Redundancy", body: "Dual power and looping inputs keep critical walls alive." },
    ],
  },
  {
    slug: "digital-signage",
    name: "Digital Signage",
    tagline: "Content that converts",
    description:
      "End-to-end signage: players, CMS, screens and analytics for multi-store and multi-city networks.",
    image: signage,
    specs: ["Cloud CMS", "Multi-zone layouts", "Offline playback", "Proof-of-play reports"],
    features: [
      { title: "Central control", body: "Publish to thousands of screens by store, region or format." },
      { title: "Dynamic data", body: "Feed pricing, queue, weather and API data straight into layouts." },
      { title: "Audience insight", body: "Optional anonymous analytics measure dwell and impressions." },
    ],
  },
  {
    slug: "touch-kiosk",
    name: "Touch Kiosk",
    tagline: "Self-service, simplified",
    description:
      "Free-standing and wall-mount interactive kiosks for wayfinding, ticketing, check-in and ordering.",
    image: kiosk,
    specs: ["32\" – 55\" touch", "PCAP 10-point", "Optional printer & scanner", "Custom branding"],
    features: [
      { title: "Rugged enclosure", body: "Powder-coated steel body built for high-footfall public spaces." },
      { title: "Peripheral ready", body: "Integrate payment, QR, printer and RFID modules." },
      { title: "Accessible", body: "Ergonomic heights and audio guidance options." },
    ],
  },
  {
    slug: "control-room-display",
    name: "Control Room Display",
    tagline: "Mission-critical visualisation",
    description:
      "Fine-pitch LED and LCD walls with redundant processing for 24x7 command, security and utility centres.",
    image: controlRoom,
    specs: ["24x7 rated", "Redundant processors", "KVM integration", "Low blue light"],
    features: [
      { title: "Zero downtime", body: "Hot-swappable modules and dual power paths for critical uptime." },
      { title: "Operator comfort", body: "Low-flicker, low blue-light tuning for long shifts." },
      { title: "Any source", body: "IP, SDI, HDMI and KVM streams on one managed canvas." },
    ],
  },
  {
    slug: "video-conference-display",
    name: "Video Conference Display",
    tagline: "Hybrid meetings, solved",
    description:
      "All-in-one meeting displays with 4K camera, beamforming mics and native Teams / Zoom certification.",
    image: heroIfp,
    specs: ["4K AI camera", "8-mic array", "Teams / Zoom certified", "One-cable connect"],
    features: [
      { title: "Auto framing", body: "AI tracks speakers and frames the room automatically." },
      { title: "Clear audio", body: "Beamforming mics with echo and noise suppression." },
      { title: "One touch join", body: "Start a scheduled call from the display in a single tap." },
    ],
  },
  {
    slug: "transparent-led",
    name: "Transparent LED",
    tagline: "Glass that comes alive",
    description:
      "Up to 90% transparent LED film and grid screens for storefronts, atriums and experience centres.",
    image: transparentLed,
    specs: ["Up to 90% transparency", "P3.9 – P15.6", "4500 nits", "Lightweight 12kg/m²"],
    features: [
      { title: "Keeps the daylight", body: "High transparency preserves the view and natural light." },
      { title: "Featherweight", body: "Low-load design mounts directly on existing glazing." },
      { title: "Showstopper", body: "Floating visuals that stop footfall at the window." },
    ],
  },
];

export type Solution = {
  slug: string;
  title: string;
  description: string;
  image: string;
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "education",
    title: "Education",
    description: "Interactive classrooms, lecture capture and campus-wide signage.",
    image: education,
    outcomes: ["Interactive flat panels", "Lecture halls & auditoriums", "Campus wayfinding"],
  },
  {
    slug: "corporate",
    title: "Corporate",
    description: "Boardrooms, lobbies and huddle spaces that work on the first try.",
    image: corporate,
    outcomes: ["Hybrid meeting rooms", "Lobby video walls", "Workplace signage"],
  },
  {
    slug: "government",
    title: "Government",
    description: "Citizen services, smart city command and public information systems.",
    image: controlRoom,
    outcomes: ["Smart city command", "Citizen kiosks", "Public info displays"],
  },
  {
    slug: "banking",
    title: "Banking",
    description: "Branch digital signage, queue management, rate boards and self-service kiosks.",
    image: kiosk,
    outcomes: ["Branch rate displays", "Customer queue management", "Self-service banking kiosks"],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    description: "Lobby LED, banquet screens and in-room guest experiences.",
    image: signage,
    outcomes: ["Banquet LED walls", "Lobby storytelling", "Digital menu boards"],
  },
  {
    slug: "retail",
    title: "Retail",
    description: "Storefront LED, in-aisle signage and window displays that convert.",
    image: transparentLed,
    outcomes: ["Window transparent LED", "Shelf-edge signage", "Queue & promo screens"],
  },
];

export const industries = [
  { title: "Education", image: education, slug: "education" },
  { title: "Corporate", image: corporate, slug: "corporate" },
  { title: "Government", image: controlRoom, slug: "government" },
  { title: "Banking", image: kiosk, slug: "banking" },
  { title: "Hospitality", image: signage, slug: "hospitality" },
  { title: "Retail", image: transparentLed, slug: "retail" },
];

export const galleryItems = [
  { title: "Corporate HQ Lobby Wall", category: "Corporate", image: heroVideoWall, span: "tall" },
  { title: "Smart Classroom Rollout", category: "Education", image: education, span: "short" },
  { title: "Highway Facade LED", category: "Outdoor", image: heroOutdoor, span: "short" },
  { title: "City Command Centre", category: "Government", image: controlRoom, span: "tall" },
  { title: "Flagship Store Window", category: "Retail", image: transparentLed, span: "short" },
  { title: "Hospital Wayfinding", category: "Healthcare", image: signage, span: "short" },
  { title: "Fine-pitch Indoor Install", category: "Indoor", image: indoorLed, span: "tall" },
  { title: "Airport Self-service", category: "Outdoor", image: kiosk, span: "short" },
  { title: "Boardroom Video Wall", category: "Corporate", image: corporate, span: "short" },
];

export const galleryFilters = ["All", "Indoor", "Outdoor", "Corporate", "Education", "Retail", "Healthcare", "Government"];

export const testimonials = [
  { name: "Rajesh Menon", role: "Head of IT, Verdant Group", initials: "RM", quote: "MIEUX delivered a 24-panel control room wall in six weeks flat. Two years on, zero downtime and their support team still answers in minutes." },
  { name: "Ananya Kulkarni", role: "Director, Northline Schools", initials: "AK", quote: "They fitted 140 interactive panels across nine campuses and trained every teacher. Adoption was near total within a term." },
  { name: "Vikram Shetty", role: "VP Retail Ops, Aureate Stores", initials: "VS", quote: "The transparent LED windows lifted walk-ins measurably. The engineering and the finish both feel genuinely premium." },
  { name: "Priya Nair", role: "Facilities Lead, Helix Pharma", initials: "PN", quote: "From site survey to handover, everything was documented and on schedule. Rare in this industry." },
];

export const clients = [
  "NEXORA", "VERDANT", "AURORA LABS", "HELIX", "NORTHLINE", "BLUEPEAK", "ORBIT RAIL", "SENTINEL",
  "CIVITAS", "MERIDIAN", "KAIROS", "ATLAS ENERGY", "PRISMA", "VANTAGE", "QUANTA", "SUMMIT CARE",
  "TERRAFORM", "LUMEN BANK", "ZENITH", "IRONGATE", "OASIS HOTELS", "PULSE MEDIA", "STRATUM", "ELEVATE",
];

export const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Enterprise Clients" },
  { value: 25, suffix: "+", label: "Cities Covered" },
  { value: 10, suffix: "+", label: "Years Experience" },
];
