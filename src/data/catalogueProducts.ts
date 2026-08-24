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
    opticalZoom?: string;
    aiTracking?: string;
    outputs?: string;
    processor?: string;
    memory?: string;
    storage?: string;
    os?: string;
    curriculum?: string;
    languages?: string;
    content?: string;
    osCompatibility?: string;
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
    slug: "led-video-wall",
    name: "LED Video Wall",
    subtitle: "Brilliant. Bold. Boundless.",
    category: "Indoor LED",
    description:
      "Transform any space with ultra-bright visuals, seamless panel integration, and stunning high-definition clarity. Designed for control rooms, corporate spaces, retail, and large venues, LED Video Walls deliver impactful performance with unmatched reliability.",
    image: img.indoorLed,
    badge: "Fine Pitch LED",
    quickSpecs: {
      pixelPitch: "P0.9 – P1.2",
      brightness: "800–1200 nits",
      refreshRate: "3840Hz",
      cabinetSize: "600 × 337.5mm",
      service: "Full Front Access",
    },
    fullSpecs: [
      { label: "Pixel Pitch Options", value: "P0.9 / P1.2 / P1.5 / P1.8 mm" },
      { label: "Brightness Level", value: "1,200 nits (Auto-Adjusting Calibration)" },
      { label: "Refresh Rate", value: "3840Hz / 7680Hz Broadcast Grade" },
      { label: "Contrast Ratio", value: "10,000:1 Deep Black Levels" },
      { label: "Viewing Angle", value: "160° Horizontal / 160° Vertical" },
      { label: "Cabinet Weight", value: "5.2 kg Lightweight Die-Cast Aluminum" },
      { label: "IP Rating", value: "IP40 Front / IP30 Rear Protective Coating" },
      { label: "Operating Temperature", value: "-10°C to +45°C" },
      { label: "Maintenance Mechanism", value: "Full Magnetic Front Vacuum Pull" },
      { label: "Warranty & Support", value: "3 Years On-site Commercial Warranty + AMC" },
    ],
    applications: ["Corporate", "Education", "Control Room", "Hospitality"],
  },
  {
    id: "aura-pro",
    slug: "digital-kiosk",
    name: "Digital Kiosk",
    subtitle: "Engage smarter. Display better.",
    category: "Interactive Displays",
    description:
      "The Digital Kiosk delivers stunning Full HD visuals with interactive touch, remote content management, and a sleek, space-saving design. Perfect for retail, hospitality, and corporate spaces - it helps you connect with your audience effortlessly.",
    image: img.kiosk,
    badge: "Interactive Kiosk",
    quickSpecs: {
      pixelPitch: "P0.7 – P1.2",
      brightness: "1000 nits",
      refreshRate: "3840Hz",
      cabinetSize: "600 × 337.5mm",
      service: "Vacuum Front Access",
    },
    fullSpecs: [
      { label: "Pixel Pitch Options", value: "P0.7 / P0.9 / P1.2 mm" },
      { label: "Surface Protection", value: "IP54 Front Dust & Moisture Encapsulation" },
      { label: "Brightness Level", value: "1,000 nits Anti-Glare Surface" },
      { label: "Contrast Ratio", value: "15,000:1 Ultra-High Contrast" },
      { label: "Driver Architecture", value: "Common Cathode Flip-Chip LED" },
      { label: "Viewing Angle", value: "170° Wide Horizontal / 170° Vertical" },
      { label: "Operating Temperature", value: "-10°C to +50°C" },
      { label: "Maintenance Mechanism", value: "Vacuum Tool Front Access" },
      { label: "Thermal Dissipation", value: "Cool-Surface Aluminum Backplate" },
      { label: "Warranty & Support", value: "3 Years Standard Warranty" },
    ],
    applications: ["Corporate", "Control Room", "Government", "Broadcast"],
  },
  {
    id: "lumina-outdoor",
    slug: "interactive-flat-panel",
    name: "Interactive Flat Panel",
    subtitle: "Touch. Teach. Transform.",
    category: "Interactive Displays",
    description:
      "Experience smarter teaching and seamless collaboration with Interactive Flat Panels. Designed for modern classrooms and meeting spaces, it delivers crisp visuals, smooth multi-touch interaction, and powerful performance—making presentations engaging and learning truly interactive.",
    image: img.heroOutdoor,
    badge: "4K UHD Touch",
    quickSpecs: {
      pixelPitch: "P3.9 – P10",
      brightness: "8000 nits",
      refreshRate: "3840Hz",
      cabinetSize: "960 × 960mm",
      service: "Dual Front & Rear",
    },
    fullSpecs: [
      { label: "Pixel Pitch Options", value: "P3.9 / P5.9 / P8.0 / P10 mm" },
      { label: "Brightness Level", value: "8,000 nits (Automated Ambient Light Sensor)" },
      { label: "Ingress Protection", value: "IP65 Waterproof Front & Rear Sealed" },
      { label: "Refresh Rate", value: "3840Hz High Speed" },
      { label: "Operating Temperature", value: "-20°C to +60°C Extreme Thermal Rating" },
      { label: "Cabinet Material", value: "Heavy-Duty Die-Cast Aluminum Module" },
      { label: "Maintenance Mechanism", value: "Dual Front Quick-Unlock & Rear Door" },
      { label: "Power Savings", value: "Energy Saver Driver (-30% Power Draw)" },
      { label: "Cloud CMS Control", value: "Remote Web Publishing & Health Telemetry" },
      { label: "Warranty & Support", value: "3 Years All-Weather On-Site Warranty" },
    ],
    applications: ["Retail", "Transportation", "Government", "Sports Arena"],
  },
  {
    id: "visionwall-4k",
    slug: "visionwall-4k",
    name: "Commercial Display",
    subtitle: "Engage. Enhance. Elevate.",
    category: "Commercial Displays",
    description:
      "Experience stunning picture quality and powerful audio with large format displays designed for open spaces, delivering a truly immersive viewing experience.",
    image: img.signage,
    badge: "Commercial Display",
    quickSpecs: {
      pixelPitch: "0.88mm Bezel",
      brightness: "700 nits",
      dutyCycle: "24/7 Continuous",
      cabinetSize: "55 inch Panel",
      service: "Push-to-Open Mount",
    },
    fullSpecs: [
      { label: "Bezel Architecture", value: "0.88mm Combined Razor-Thin Bezel" },
      { label: "Screen Diagonal", value: "55 Inch Commercial Grade IPS" },
      { label: "Brightness Level", value: "700 nits Anti-Reflective Matte Coating" },
      { label: "Resolution Per Panel", value: "Full HD 1920 × 1080 (Scalable to 8K Canvas)" },
      { label: "Daisy Chain Loop", value: "DisplayPort 1.2 4K UHD Loop-Through" },
      { label: "Duty Cycle Rating", value: "24/7/365 Continuous Operation" },
      { label: "Viewing Angle", value: "178° Ultra-Wide IPS Panel" },
      { label: "Mounting Grid", value: "3D Micro-Adjustment Push-to-Open System" },
      { label: "Operating Temperature", value: "0°C to +40°C" },
      { label: "Warranty & Support", value: "3 Years On-Site Commercial Warranty" },
    ],
    applications: ["Control Room", "Corporate", "Government", "Transportation"],
  },
  {
    id: "interactive-pro",
    slug: "interactive-pro",
    name: "Accessories",
    subtitle: "Complete Your Setup with Accessories",
    category: "Interactive Displays",
    description:
      "We offer a wide range of high-quality accessories designed to enhance the performance of your digital solutions. From OPS and Floor Stands to Sliding Shutters and Mounts, each accessory ensures seamless integration and reliable performance.",
    image: img.heroIfp,
    badge: "Accessories",
    quickSpecs: {
      pixelPitch: "4K UHD 3840×2160",
      touchPoints: "40-Point Touch",
      brightness: "450 nits",
      cabinetSize: '65" / 75" / 86" / 98"',
      service: "Front Ports & OPS Slot",
    },
    fullSpecs: [
      { label: "Screen Sizes", value: '65" / 75" / 86" / 98" Diagonal' },
      { label: "Touch Technology", value: "40-Point High-Precision Infrared Sensor" },
      { label: "Display Resolution", value: "4K UHD (3840 × 2160 @ 60Hz)" },
      { label: "Glass Bond Type", value: "Zero-Gap Optical Bonding + Anti-Fingerprint Glass" },
      { label: "Dual OS Support", value: "Built-in Android 13 + Standard OPS Slot" },
      { label: "Audio Output", value: "Integrated 2 × 20W Front Speakers + Subwoofer" },
      { label: "Wireless Casting", value: "Up to 9 Simultaneous Source Screens" },
      { label: "Writing Latency", value: "< 8ms Ultra-Fast Stylus Latency" },
      { label: "Interface Ports", value: "Front USB 3.0, HDMI In/Out, Type-C 65W PD, LAN" },
      { label: "Warranty & Support", value: "3 Years On-Site Replacement Warranty" },
    ],
    applications: ["Education", "Corporate", "Healthcare", "Government"],
  },
  {
    id: "controlview",
    slug: "lcd-video-wall",
    name: "LCD Video Wall",
    subtitle: "Seamless Large-Format Display Performance",
    category: "Video Walls",
    description:
      "The LCD Video Wall delivers seamless large-format displays with ultra-clear visuals and powerful performance. Designed for control rooms, corporate spaces, retail, and public environments - it ensures your message stands out with clarity and confidence.",
    image: img.controlRoom,
    badge: "Seamless Large-Format",
    quickSpecs: {
      pixelPitch: "P0.9 – P1.5",
      brightness: "800 nits",
      refreshRate: "3840Hz",
      dutyCycle: "24/7 Zero Downtime",
      service: "Hot-Swappable Modules",
    },
    fullSpecs: [
      { label: "Pixel Pitch Options", value: "P0.9 / P1.2 / P1.5 mm Fine Pitch" },
      { label: "Brightness Tuning", value: "800 nits Eye-Comfort Low Blue Light" },
      { label: "Refresh Rate", value: "3840Hz Flicker-Free Display" },
      { label: "Redundancy Architecture", value: "Dual Power Supply Units & Signal Loop Backup" },
      { label: "KVM Signal Routing", value: "Integrated Hardware Processor & Multi-Window KVM" },
      { label: "Duty Cycle Rating", value: "24/7/365 Continuous Mission-Critical Operation" },
      { label: "Viewing Angle", value: "160° Horizontal / 160° Vertical" },
      { label: "Operating Temperature", value: "0°C to +45°C" },
      { label: "Maintenance Mechanism", value: "Hot-Swappable Modules & Receiver Cards" },
      { label: "Warranty & Support", value: "5 Years Mission-Critical AMC Support" },
    ],
    applications: ["Control Room", "Government", "Transportation", "Defence"],
  },
  {
    id: "digital-standee",
    slug: "commercial-display",
    name: "Digital Standee",
    subtitle: "Engage. Enhance. Elevate.",
    category: "Commercial Displays",
    description:
      "Experience stunning picture quality and powerful audio with large format displays designed for open spaces, delivering a truly immersive viewing experience.",
    image: img.digitalStandeeBanners,
    badge: "Commercial Display",
    quickSpecs: {
      resolution: "4K UHD 3840×2160",
      brightness: "500–700 nits",
      dutyCycle: "24/7 Commercial",
      cabinetSize: '43" / 49" / 55" / 65"',
      service: "Front & Rear Service",
    },
    fullSpecs: [
      { label: "Available Sizes", value: '43" / 49" / 55" / 65" Vertical Form Factor' },
      { label: "Panel Resolution", value: "4K UHD (3840 × 2160 @ 60Hz)" },
      { label: "Screen Brightness", value: "500 – 700 nits High Brightness Anti-Glare" },
      { label: "Interactive Touch", value: "Optional 10-Point PCAP Capacitive Touch Screen" },
      { label: "Operating System", value: "Android 13 / Windows 11 OPS Computer" },
      { label: "Content Playback", value: "Automatic USB Plug & Play + Cloud CMS Remote" },
      { label: "Connectivity", value: "Dual HDMI, USB 3.0, Wi-Fi, RJ45 LAN, Bluetooth" },
      { label: "Enclosure Material", value: "Powder-Coated Steel Chassis + 4mm Tempered Glass" },
      { label: "Duty Cycle Rating", value: "24/7 Continuous Operation Certified" },
      { label: "Warranty & Support", value: "3 Years On-Site Commercial Warranty" },
    ],
    applications: ["Retail", "Corporate", "Hospitality", "Education"],
  },
  {
    id: "ptz-camera",
    slug: "ptz-camera",
    name: "PTZ Camera",
    subtitle: "Pan. Tilt. Zoom.",
    category: "Interactive Displays",
    description:
      "Capture every moment with intelligent auto-tracking, ultra-smooth PTZ control, and stunning 4K clarity. Perfect for classrooms, boardrooms, and hybrid spaces.",
    image: img.ptzCamera,
    badge: "4K AI PTZ",
    quickSpecs: {
      resolution: "4K UHD 60fps",
      opticalZoom: "12x Optical Zoom",
      aiTracking: "AI Presenter Tracking",
      outputs: "HDMI / USB 3.0 / IP",
      service: "Ceiling / Wall / Desk",
    },
    fullSpecs: [
      { label: "Image Sensor", value: '1/2.8" Sony 4K CMOS Sensor' },
      { label: "Video Resolution", value: "4K UHD (3840 × 2160 @ 60fps)" },
      { label: "Optical & Digital Zoom", value: "12x Optical Zoom + 16x Digital Zoom" },
      { label: "AI Tracking Technology", value: "AI Presenter Tracking & Real-Time Auto-Framing" },
      { label: "Field of View (FOV)", value: "80.5° Wide Angle Horizontal FOV" },
      { label: "Video Output Ports", value: "HDMI 2.0, USB 3.0, LAN (NDI|HX / PoE Support)" },
      { label: "Audio Interface", value: "3.5mm Line-In Audio with Acoustic Echo Cancellation" },
      { label: "Control Protocols", value: "VISCA / Pelco-D / Pelco-P / RS232 / IP Control" },
      { label: "Pan & Tilt Range", value: "Pan ±170°, Tilt -30° to +90° (Silent Direct Drive)" },
      { label: "Warranty & Support", value: "3 Years Enterprise Replacement Warranty" },
    ],
    applications: ["Corporate", "Education", "Government", "Healthcare"],
  },
  {
    id: "ops-pc",
    slug: "mieux-ops",
    name: "OPS Module",
    subtitle: "Compact. Powerful. Integrated.",
    category: "Interactive Displays",
    description:
      "Enhance your display performance with plug-and-play computing, fast processing, and seamless multitasking all without extra wires or complexity.",
    image: img.opsPc,
    badge: "OPS Module",
    quickSpecs: {
      processor: "Intel Core i7-1255U",
      memory: "16GB DDR4 RAM",
      storage: "512GB NVMe M.2 SSD",
      os: "Windows 11 Pro",
      service: "80-Pin Standard OPS",
    },
    fullSpecs: [
      { label: "Processor Unit", value: "Intel® Core™ i7-1255U (10 Cores, 12 Threads, up to 4.7GHz)" },
      { label: "System Memory", value: "16GB DDR4 High-Speed RAM (Expandable up to 32GB)" },
      { label: "Internal Storage", value: "512GB High-Speed NVMe M.2 SSD" },
      { label: "Graphics Processing", value: "Intel® Iris® Xe Graphics (4K UHD @ 60Hz Output)" },
      { label: "Display Outputs", value: "1 × HDMI 2.0 (4K Output), 1 × DisplayPort 1.4" },
      { label: "USB Connectivity", value: "6 × USB 3.0 High-Speed, 1 × USB Type-C 3.1" },
      { label: "Network & Wireless", value: "Gigabit Ethernet RJ45, Dual-Band Wi-Fi 6 + Bluetooth 5.2" },
      { label: "Audio Connectivity", value: "3.5mm Headphone Line-Out, 3.5mm Microphone In" },
      { label: "OPS Connector", value: "Standard 80-Pin JAE OPS Slot Interface" },
      { label: "Warranty & Support", value: "3 Years Enterprise On-Site Replacement Warranty" },
    ],
    applications: ["Corporate", "Education", "Government", "Control Room"],
  },
  {
    id: "mieux-shiksha",
    slug: "mieux-shiksha",
    name: "Shiksha Software",
    subtitle: "Learn. Grow. Succeed.",
    category: "Interactive Displays",
    description:
      "Innovative display and digital learning solutions designed to enhance teaching, engagement, and collaboration in modern educational environments.",
    image: img.mieuxShiksha,
    badge: "Shiksha Software",
    quickSpecs: {
      curriculum: "CBSE / ICSE / State Boards",
      languages: "Multilingual Support",
      content: "3D Animations & Quizzes",
      osCompatibility: "IFPD, Windows, Android, iOS",
      service: "Cloud & Offline License",
    },
    fullSpecs: [
      { label: "Curriculum Alignment", value: "NCERT / CBSE / ICSE & 14 Indian State Educational Boards" },
      { label: "Subject Learning Zones", value: "Mathematics, EVS, Science, English, Art, Rhymes & Special Learning Zone" },
      { label: "Interactive Tools", value: "3D Virtual Science Laboratory, Digital Whiteboard, Practice Quizzes" },
      { label: "Multilingual Support", value: "English, Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada & Bengalee" },
      { label: "Platform Compatibility", value: "Mieux IFPD (Android/Windows), Web Portal, Mobile App (Android/iOS)" },
      { label: "Offline License Support", value: "Encrypted Dongle / SD Card Support for Zero-Internet Classrooms" },
      { label: "Teacher Dashboard", value: "Student Performance Analytics, Lesson Planner & Auto-Grading" },
      { label: "Syllabus Updates", value: "Annual Cloud Curriculum & Feature Updates Included" },
      { label: "Licensing Model", value: "Per-Panel Perpetual License / Annual School Subscription" },
      { label: "Warranty & Support", value: "3 Years Software Maintenance & On-Site Teacher Training" },
    ],
    applications: ["Education", "Government"],
  },
  {
    id: "digital-podium",
    slug: "digital-podium",
    name: "Digital Podium",
    subtitle: "Speak. Present. Impress.",
    category: "Interactive Displays",
    description:
      "Elevate presentations with the Mieux Ultra and Slim Digital Podium. Designed for modern classrooms, conference halls, and auditoriums, it features an inbuilt touch screen monitor, integrated gooseneck microphone, and multiple connectivity options delivering seamless control, clear communication, and a professional presentation experience every time.",
    image: img.digitalPodium,
    badge: "Smart Digital Podium",
    quickSpecs: {
      resolution: '21.5" FHD / 4K Touch',
      brightness: "350–500 nits",
      touchPoints: "10-Point PCAP Touch",
      service: "Integrated Audio & Mic",
      dutyCycle: "24/7 Duty Rating",
    },
    fullSpecs: [
      { label: "Screen Size & Type", value: '21.5" IPS Full HD / 4K Interactive Touch Screen' },
      { label: "Microphone System", value: "Dual Integrated Gooseneck Microphones + Phantom Power" },
      { label: "Touch Technology", value: "10-Point PCAP Capacitive Touch Sensor" },
      { label: "Audio Output", value: "Built-in High-Fidelity Amplifier & Speakers" },
      { label: "Motorized Adjustment", value: "Electrical Height & Screen Angle Tilt Adjustment" },
      { label: "Connectivity Ports", value: "HDMI In/Out, USB 3.0, XLR Mic Out, RJ45 LAN, Audio Out" },
      { label: "Operating System", value: "Built-in Android 13 + Optional Windows OPS Slot" },
      { label: "Enclosure Architecture", value: "Powder-Coated Metallic Body with Lockable Storage" },
      { label: "Castors & Mobility", value: "Heavy-Duty Lockable Castor Wheels" },
      { label: "Warranty & Support", value: "3 Years Commercial On-Site Warranty" },
    ],
    applications: ["Education", "Corporate", "Government", "Hospitality"],
  },
];

// Helper functions to get product by slug with robust fallback mapping
export function getProductBySlug(slug: string): CatalogueProduct {
  // 1. Direct match by slug or id
  const match = catalogueProducts.find((p) => p.slug === slug || p.id === slug);
  if (match) return match;

  // 2. Category & keyword alias fallback mappings
  const normalized = (slug || "").toLowerCase();
  const found =
    (normalized.includes("indoor") || normalized.includes("spectra")) ? catalogueProducts.find((p) => p.id === "spectra-s1") :
    (normalized.includes("control") || normalized.includes("command") || normalized.includes("cob")) ? catalogueProducts.find((p) => p.id === "controlview") :
    (normalized.includes("interact") || normalized.includes("flat") || normalized.includes("ifp")) ? catalogueProducts.find((p) => p.id === "interactive-pro") :
    (normalized.includes("standee") || normalized.includes("signage")) ? catalogueProducts.find((p) => p.id === "digital-standee") :
    (normalized.includes("outdoor") || normalized.includes("lumina")) ? catalogueProducts.find((p) => p.id === "lumina-outdoor") :
    (normalized.includes("wall") || normalized.includes("visionwall")) ? catalogueProducts.find((p) => p.id === "visionwall-4k") :
    (normalized.includes("camera") || normalized.includes("ptz")) ? catalogueProducts.find((p) => p.id === "ptz-camera") :
    (normalized.includes("ops") || normalized.includes("pc")) ? catalogueProducts.find((p) => p.id === "ops-pc") :
    (normalized.includes("shiksha") || normalized.includes("learning") || normalized.includes("app")) ? catalogueProducts.find((p) => p.id === "mieux-shiksha") :
    normalized.includes("podium") ? catalogueProducts.find((p) => p.id === "digital-podium") :
    undefined;

  if (found) return found;

  // 3. Guaranteed dummy product fallback (never returns 404)
  return catalogueProducts[0]!;
}
