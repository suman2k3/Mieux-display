import heroVideoWall from "@/assets/hero-videowall.jpg";
import heroIfp from "@/assets/hero-ifp.png";
import heroOutdoor from "@/assets/hero-outdoor.jpg";
import controlRoom from "@/assets/control-room.jpg";
import signage from "@/assets/signage.jpg";
import education from "@/assets/education.jpg";
import transparentLed from "@/assets/transparent-led.jpg";
import corporate from "@/assets/corporate.jpg";
import kiosk from "@/assets/kiosk.jpg";
import indoorLed from "@/assets/indoor-led.jpg";
import solutionEducation from "@/assets/solution-education.png";
import solutionCorporate from "@/assets/solution-corporate.png";
import solutionGovernment from "@/assets/solution-government.png";
import solutionBanking from "@/assets/solution-banking.png";
import solutionHospitality from "@/assets/solution-hospitality.png";
import digitalStandeeBanners from "@/assets/digital-standee-banners.png";
import ptzCamera from "@/assets/ptz-camera.png";
import opsPc from "@/assets/ops-pc.png";
import mieuxShiksha from "@/assets/mieux-shiksha.png";
import environmentalDesign from "@/assets/environmental-design.jpg";
import digitalPodium from "@/assets/digital-podium.png";
import logoUnilever from "@/assets/logo-unilever.png";
import logoKvs from "@/assets/logo-kvs.png";
import logoAai from "@/assets/logo-aai.png";
import logoBsf from "@/assets/logo-bsf.png";
import logoIndianArmy from "@/assets/logo-indian-army.png";
import logoDrdo from "@/assets/logo-drdo.png";
import logoOngc from "@/assets/logo-ongc.png";
import logoAvani from "@/assets/logo-avani.png";
import logoAdda247 from "@/assets/logo-adda247.png";
import logoBel from "@/assets/logo-bel.png";
import logoAiims from "@/assets/logo-aiims.png";
import logoIaf from "@/assets/logo-iaf.png";
import logoIitIndore from "@/assets/logo-iit-indore.png";
import logoPnbGilts from "@/assets/logo-pnb-gilts.png";
import logoIndianOil from "@/assets/logo-indianoil.png";
import logoNdtv from "@/assets/logo-ndtv.png";
import logoOptel from "@/assets/logo-optel.png";
import logoRozanaSpokesman from "@/assets/logo-rozana-spokesman.png";
import logoBharatPetroleum from "@/assets/logo-bharat-petroleum.png";

export const clientLogos = [
  { name: "Unilever", logo: logoUnilever },
  { name: "Kendriya Vidyalaya Sangathan", logo: logoKvs },
  { name: "Airports Authority of India", logo: logoAai },
  { name: "Border Security Force", logo: logoBsf },
  { name: "Indian Army", logo: logoIndianArmy },
  { name: "DRDO", logo: logoDrdo },
  { name: "ONGC", logo: logoOngc },
  { name: "AVANI Armoured Vehicles", logo: logoAvani },
  { name: "Adda247", logo: logoAdda247 },
  { name: "Bharat Electronics Limited", logo: logoBel },
  { name: "AIIMS", logo: logoAiims },
  { name: "Indian Air Force", logo: logoIaf },
  { name: "IIT Indore", logo: logoIitIndore },
  { name: "PNB Gilts", logo: logoPnbGilts },
  { name: "IndianOil", logo: logoIndianOil },
  { name: "NDTV", logo: logoNdtv },
  { name: "OPTEL", logo: logoOptel },
  { name: "Rozana Spokesman", logo: logoRozanaSpokesman },
  { name: "Bharat Petroleum", logo: logoBharatPetroleum },
];

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
  solutionEducation,
  solutionCorporate,
  solutionGovernment,
  solutionBanking,
  solutionHospitality,
  digitalStandeeBanners,
  ptzCamera,
  opsPc,
  mieuxShiksha,
  environmentalDesign,
  digitalPodium,
  logoUnilever,
  logoKvs,
  logoAai,
  logoBsf,
  logoIndianArmy,
  logoDrdo,
  logoOngc,
  logoAvani,
  logoAdda247,
  logoBel,
  logoAiims,
  logoIaf,
  logoIitIndore,
  logoPnbGilts,
  logoIndianOil,
  logoNdtv,
  logoOptel,
  logoRozanaSpokesman,
  logoBharatPetroleum,
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
    slug: "spectra-s1",
    name: "LED Video Wall",
    tagline: "Brilliant. Bold. Boundless.",
    description: "Transform any space with ultra-bright visuals, seamless panel integration, and stunning high-definition clarity. Designed for control rooms, corporate spaces, retail, and large venues, Mieux LED Video Walls deliver impactful performance with unmatched reliability.",
    image: indoorLed,
    specs: ["Pixel pitch P0.9 – P1.2", "1200 nits brightness", "3840Hz refresh rate", "Front Magnet Access"],
    features: [
      { title: "Seamless Canvas", body: "Bezel-free modular cabinets deliver a single uninterrupted image at any scale." },
      { title: "Colour Accuracy", body: "16-bit processing and factory calibration keep greyscale consistent for years." },
      { title: "Silent Operation", body: "Fanless cabinets rated below 30dB for boardrooms and studios." },
    ],
  },
  {
    slug: "aura-pro",
    name: "Digital Kiosk",
    tagline: "Engage smarter. Display better.",
    description: "The Digital Kiosk delivers stunning Full HD visuals with interactive touch, remote content management, and a sleek, space-saving design. Perfect for retail, hospitality, and corporate spaces - it helps you connect with your audience effortlessly.",
    image: kiosk,
    specs: ["Pixel pitch P0.7 – P1.2", "1000 nits brightness", "15,000:1 contrast", "Vacuum Front Access"],
    features: [
      { title: "Rugged COB Surface", body: "IP54 front dust and moisture-resistant surface protection." },
      { title: "Deep Black Levels", body: "Ultra-high 15,000:1 contrast ratio with true black background." },
      { title: "Energy Efficient", body: "Flip-chip common cathode driver reduces thermal dissipation." },
    ],
  },
  {
    slug: "lumina-outdoor",
    name: "Interactive Flat Panel",
    tagline: "Touch. Teach. Transform.",
    description: "Experience smarter teaching and seamless collaboration with Interactive Flat Panels. Designed for modern classrooms and meeting spaces, it delivers crisp visuals, smooth multi-touch interaction, and powerful performance—making presentations engaging and learning truly interactive.",
    image: heroOutdoor,
    specs: ["8000 nits brightness", "IP65 Front & Rear", "P3.9 – P10.0 pitch", "Dual Front/Rear Access"],
    features: [
      { title: "All-Weather Build", body: "Die-cast aluminium cabinets with sealed masks survive monsoon and dust." },
      { title: "Sunlight Readable", body: "Ultra-high 8,000 nits brightness remains vivid under direct noon sunlight." },
      { title: "Remote Cloud CMS", body: "Cloud publishing with scheduling, monitoring and automated fault alerts." },
    ],
  },
  {
    slug: "visionwall-4k",
    name: "Commercial Display",
    tagline: "Engage. Enhance. Elevate.",
    description: "Experience stunning picture quality and powerful audio with large format displays designed for open spaces, delivering a truly immersive viewing experience.",
    image: signage,
    specs: ["0.88mm combined bezel", "700 nits Anti-Glare", "24/7 Duty Rating", "DisplayPort 4K Loop"],
    features: [
      { title: "Ultra-Slim Bezel", body: "0.88mm bezel-to-bezel delivers virtually seamless video wall canvases." },
      { title: "24/7 Reliability", body: "Commercial IPS panel rated for continuous 24/7/365 operation." },
      { title: "Precision Mounting", body: "Micro-adjust push-to-open wall mounts ensure zero-gap alignment." },
    ],
  },
  {
    slug: "interactive-pro",
    name: "Accessories",
    tagline: "Complete Your Setup with Accessories",
    description: "We offer a wide range of high-quality accessories designed to enhance the performance of your digital solutions. From OPS and Floor Stands to Sliding Shutters and Mounts, each accessory ensures seamless integration and reliable performance.",
    image: heroIfp,
    specs: ['65" / 75" / 86" / 98"', "40-Point Touch", "< 8ms Pen Response", "Android 13 + OPS Slot"],
    features: [
      { title: "Zero-Lag Writing", body: "Sub-8ms pen response latency with palm rejection for fluid annotation." },
      { title: "Wireless Casting", body: "Share from any laptop, tablet or phone with up to 9 screen split share." },
      { title: "Zero-Gap Bonding", body: "Optical bonding eliminates parallax for paper-like touch writing." },
    ],
  },
  {
    slug: "controlview",
    name: "LCD Video Wall",
    tagline: "Seamless Large-Format Display Performance",
    description: "The LCD Video Wall delivers seamless large-format displays with ultra-clear visuals and powerful performance. Designed for control rooms, corporate spaces, retail, and public environments - it ensures your message stands out with clarity and confidence.",
    image: controlRoom,
    specs: ["P0.9 – P1.5 mm", "800 nits Low Blue Light", "Dual Redundancy", "KVM Multi-Canvas"],
    features: [
      { title: "Zero Downtime", body: "Dual power supplies and redundant signal loops prevent blackouts." },
      { title: "Hot-Swappable", body: "Replace LED modules and power units without interrupting live feeds." },
      { title: "KVM Integration", body: "Control multiple workstations and IP cameras on a single wall canvas." },
    ],
  },
  {
    slug: "commercial-display",
    name: "Commercial Display",
    tagline: "Engage. Enhance. Elevate.",
    description: "Experience stunning picture quality and powerful audio with large format displays designed for open spaces, delivering a truly immersive viewing experience.",
    image: digitalStandeeBanners,
    specs: ['43" / 49" / 55" / 65"', "500–700 nits", "24/7 Commercial Rating", "Plug & Play / Cloud CMS"],
    features: [
      { title: "Plug & Play Media", body: "Auto-loop USB video playback or cloud remote management." },
      { title: "Sturdy Enclosure", body: "Powder-coated steel chassis with 4mm shatter-proof tempered glass." },
      { title: "Interactive Touch", body: "Optional 10-point PCAP touch screen for self-service navigation." },
    ],
  },
  {
    slug: "ptz-camera",
    name: "PTZ Camera",
    tagline: "Pan. Tilt. Zoom.",
    description: "Capture every moment with intelligent auto-tracking, ultra-smooth PTZ control, and stunning 4K clarity. Perfect for classrooms, boardrooms, and hybrid spaces.",
    image: ptzCamera,
    specs: ["4K UHD @ 60fps", "12x Optical Zoom", "AI Presenter Tracking", "HDMI, USB 3.0 & IP"],
    features: [
      { title: "AI Speaker Tracking", body: "Auto-frames active speakers and tracks presenters smooth across the room." },
      { title: "Sony 4K Sensor", body: "Ultra-crisp 4K optics with 12x optical zoom for large conference rooms." },
      { title: "Universal Connect", body: "Seamless USB 3.0 plug-and-play with Zoom, Teams, and Webex." },
    ],
  },
  {
    slug: "ops-pc",
    name: "OPS Module",
    tagline: "Compact. Powerful. Integrated.",
    description: "Enhance your display performance with plug-and-play computing, fast processing, and seamless multitasking all without extra wires or complexity.",
    image: opsPc,
    specs: ["Intel Core i7-1255U", "16GB DDR4 RAM", "512GB NVMe M.2 SSD", "Standard 80-Pin OPS"],
    features: [
      { title: "Slot-in Convenience", body: "Standard 80-pin OPS slot slides cleanly into IFPDs without cables." },
      { title: "Windows 11 Pro", body: "Full desktop PC capability for running high-demand 3D applications." },
      { title: "Dual-Band Wi-Fi 6", body: "Fast wireless connectivity and Bluetooth 5.2 peripheral support." },
    ],
  },
  {
    slug: "mieux-shiksha",
    name: "Shiksha Software",
    tagline: "Learn. Grow. Succeed.",
    description: "Innovative display and digital learning solutions designed to enhance teaching, engagement, and collaboration in modern educational environments.",
    image: mieuxShiksha,
    specs: ["K-12 CBSE / ICSE", "Multilingual Support", "3D Virtual Science Lab", "Full Offline License"],
    features: [
      { title: "Interactive Subjects", body: "Mathematics, EVS, Science, English, Art, Rhymes & Special Learning Zone." },
      { title: "Cross-Platform", body: "Runs on MIEUX IFPDs, Windows, Android, and iOS mobile apps." },
      { title: "Offline Encrypted", body: "Full offline playback support without requiring active internet connection." },
    ],
  },
  {
    slug: "digital-podium",
    name: "Digital Podium",
    tagline: "Speak. Present. Impress.",
    description: "Elevate presentations with the Mieux Ultra and Slim Digital Podium. Designed for modern classrooms, conference halls, and auditoriums, it features an inbuilt touch screen monitor, integrated gooseneck microphone, and multiple connectivity options delivering seamless control, clear communication, and a professional presentation experience every time.",
    image: digitalPodium,
    specs: ['21.5" FHD / 4K Touch', "Dual Gooseneck Mic", "Motorized Angle Tilt", "OPS Slot & Audio Out"],
    features: [
      { title: "Inbuilt Interactive Touch", body: "High-precision PCAP touch screen with zero-lag digital annotation." },
      { title: "Gooseneck Microphones", body: "Dual crystal-clear noise-canceling gooseneck microphones." },
      { title: "Universal Connectivity", body: "HDMI, USB, XLR Mic Out, LAN, and wireless screen casting." },
    ],
  },
];

export type Solution = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  outcomes: string[];
  highlights: string[];
};

export const solutions: Solution[] = [
  {
    slug: "education",
    title: "Education",
    category: "Education",
    description: "Interactive smart classrooms, lecture halls, auditoriums, and campus-wide wayfinding display infrastructure.",
    image: solutionEducation,
    outcomes: ["Interactive flat panels", "Lecture halls & auditoriums", "Campus wayfinding"],
    highlights: ["4K Touch Panels", "Lecture Capture", "Campus Signage"],
  },
  {
    slug: "corporate",
    title: "Corporate",
    category: "Corporate",
    description: "Executive boardrooms, experience centers, and corporate lobbies engineered to perform flawlessly.",
    image: solutionCorporate,
    outcomes: ["Hybrid meeting rooms", "Lobby video walls", "Workplace signage"],
    highlights: ["Executive Boardrooms", "Experience Centers", "Video Walls"],
  },
  {
    slug: "government",
    title: "Government",
    category: "Government",
    description: "Compliant visual display infrastructure for civic buildings, assembly halls, and public administration centers.",
    image: solutionGovernment,
    outcomes: ["Public infrastructure", "Assembly hall video walls", "Public info displays"],
    highlights: ["GeM Compliant", "24/7 Duty Rating", "Assembly Halls"],
  },
  {
    slug: "banking",
    title: "Banking",
    category: "Banking",
    description: "Branch digital signage, customer queue management, exchange rate boards, and self-service banking kiosks.",
    image: solutionBanking,
    outcomes: ["Branch rate displays", "Customer queue management", "Self-service banking kiosks"],
    highlights: ["Rate Boards", "Queue Systems", "Self-Service Kiosks"],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    category: "Hospitality",
    description: "High-impact backdrop LED walls for hotel lobbies, reception desks, banquet halls, and digital venue signage.",
    image: solutionHospitality,
    outcomes: ["Hotel reception displays", "Banquet LED walls", "Digital menu boards"],
    highlights: ["Banquet LED Walls", "Reception Displays", "Menu Boards"],
  },
  {
    slug: "retail",
    title: "Retail",
    category: "Retail",
    description: "High-brightness storefront window displays, transparent glass facades, and interactive in-store digital posters.",
    image: signage,
    outcomes: ["Window transparent LED", "Digital apparel posters", "In-store promo screens"],
    highlights: ["Transparent Glass LED", "High-Brightness Posters", "In-Store Signage"],
  },
];

export const industries = [
  { title: "Education", image: solutionEducation, slug: "education" },
  { title: "Corporate", image: solutionCorporate, slug: "corporate" },
  { title: "Government", image: solutionGovernment, slug: "government" },
  { title: "Banking", image: solutionBanking, slug: "banking" },
  { title: "Hospitality", image: solutionHospitality, slug: "hospitality" },
  { title: "Retail", image: signage, slug: "retail" },
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
