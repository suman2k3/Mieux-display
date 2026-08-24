import { img } from "./site";

// Import real DIDAC 2025 Event Photography Assets
import didac1 from "@/assets/didac/11_696dfd540de9c.jpeg";
import didac2 from "@/assets/didac/img_696dfb75caca59.96495962.jpeg";
import didac3 from "@/assets/didac/img_696dfb75cba5a4.41426265.jpeg";
import didac4 from "@/assets/didac/img_696dfb75cc31e0.55615402.jpeg";
import didac5 from "@/assets/didac/img_696dfb75ccb258.49788877.jpeg";
import didac6 from "@/assets/didac/img_696dfb75cd53e4.59707954.jpg";
import didac7 from "@/assets/didac/img_696dfb75ce14b2.18084375.jpeg";
import didac8 from "@/assets/didac/img_696dfb75cea018.57552336.jpeg";
import didac9 from "@/assets/didac/img_696dfb75cf21b7.69782851.jpeg";
import didac10 from "@/assets/didac/img_696dfb75cf7ef3.68723994.jpeg";
import didac11 from "@/assets/didac/img_696dfb75cfea27.23681209.jpeg";

// Import real Eldrok K-12 Summit 2026 Event Photography Assets
import eldrok1 from "@/assets/Eldrok k-12/12_696e0162096a3.png";
import eldrok2 from "@/assets/Eldrok k-12/4_696e01c45b4ee.png";
import eldrok3 from "@/assets/Eldrok k-12/5_696e017640f7e.png";
import eldrok4 from "@/assets/Eldrok k-12/DJI_20251209094950_0146_D_696e0264b5a9b.jpg";
import eldrok5 from "@/assets/Eldrok k-12/DJI_20251209123832_0176_D_696e01e743831.jpg";
import eldrok6 from "@/assets/Eldrok k-12/DJI_20251209123852_0177_D_696dffce36bd7.jpg";
import eldrok7 from "@/assets/Eldrok k-12/DJI_20251209123956_0180_D_696e0211cbdcf.jpg";
import eldrok8 from "@/assets/Eldrok k-12/DJI_20251209124331_0185_D_696e023f8e04b.jpg";
import eldrok9 from "@/assets/Eldrok k-12/WhatsAppImage2025-12-17at11.45.13AM1_696dfd7742e82.jpeg";
import eldrok10 from "@/assets/Eldrok k-12/WhatsAppImage2025-12-17at11.46.22AM_696dfd5d89f4a.jpeg";

// Import real IT Voice - 2025 Event Photography Assets
import itVoice1 from "@/assets/IT voice/WhatsAppImage2025-11-03at4.08.01PM_6908861fc0538.jpeg";
import itVoice2 from "@/assets/IT voice/itawards2_690885e4b2404.jpeg";
import itVoice3 from "@/assets/IT voice/itawards_690885e4b1897.jpeg";

// Import real Swaraksha Mahotsav 2025 Event Photography Assets
import sw1 from "@/assets/Swarksha/1_690883dad3c4b.jpg";
import sw2 from "@/assets/Swarksha/2_690883dad458f.jpg";
import sw3 from "@/assets/Swarksha/3_690883dad4f9d.jpg";
import sw4 from "@/assets/Swarksha/4_690883dad5da4.jpg";
import sw5 from "@/assets/Swarksha/5_690883dad65f3.jpg";
import sw6 from "@/assets/Swarksha/6_690883dad724a.jpg";
import sw7 from "@/assets/Swarksha/7_690883dad78aa.jpg";
import sw8 from "@/assets/Swarksha/8_690883dad8590.jpg";
import sw9 from "@/assets/Swarksha/9_690883dad92cb.jpg";
import sw10 from "@/assets/Swarksha/10_690883dad9abc.jpg";
import sw11 from "@/assets/Swarksha/11_690883dada290.jpg";
import sw12 from "@/assets/Swarksha/12_690883dada999.jpg";
import sw13 from "@/assets/Swarksha/13_690883dadb1af.jpg";
import sw14 from "@/assets/Swarksha/14_690883dadb975.jpg";
import sw15 from "@/assets/Swarksha/15_690883dadc0b7.jpg";
import sw16 from "@/assets/Swarksha/16_690883dadc94d.jpg";
import sw17 from "@/assets/Swarksha/17_690883dadd03b.jpg";

export interface GalleryPhoto {
  id: string;
  url: string;
  alt: string;
  aspect?: "large" | "medium" | "small" | "wide";
}

export interface EventGallery {
  id: string;
  slug: string;
  title: string;
  category: "Events" | "Exhibitions" | "Installations" | "Product Demos" | "Industry Meets";
  year: string;
  description?: string;
  coverImage?: string;
  displayOrder: number;
  isPublished: boolean;
  createdAt: string;
  images: GalleryPhoto[];
}

// High-resolution Event, Expo & Installation photographs (No product cutouts)
const eventPhotos = {
  expoStage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
  auditoriumKeynote: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
  corporateConference: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
  expoDisplayWall: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
  techSummit: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80",
  controlRoomNoc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
  interactiveWorkshop: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
  cityOutdoorDisplay: "https://images.unsplash.com/photo-1508997449629-303059a039c0?w=1200&q=80",
  corporateLobby: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  educationSummit: img.education,
  corporateBoardroom: img.corporate,
  commandControlRoom: img.controlRoom,
  heroVideoWallStage: img.heroVideoWall,
  transparentArch: img.transparentLed,
};

export const eventGalleries: EventGallery[] = [
  {
    id: "didac-2025",
    slug: "didac-2025",
    title: "DIDAC 2025",
    category: "Exhibitions",
    year: "2025",
    description: "Interactive display solutions and smart classroom technologies showcased at DIDAC 2025 India.",
    coverImage: didac1,
    displayOrder: 1,
    isPublished: true,
    createdAt: "2025-01-15T00:00:00Z",
    images: [
      { id: "didac-1", url: didac1, alt: "MIEUX Display Exhibition Booth at DIDAC 2025", aspect: "large" },
      { id: "didac-2", url: didac2, alt: "DIDAC 2025 Interactive Flat Panel Demonstration", aspect: "small" },
      { id: "didac-3", url: didac3, alt: "DIDAC 2025 Visitors & Educator Interactive Session", aspect: "medium" },
      { id: "didac-4", url: didac4, alt: "DIDAC 2025 Smart Education Display Solutions Showcase", aspect: "medium" },
      { id: "didac-5", url: didac5, alt: "DIDAC 2025 LED Video Wall Array Live Demo", aspect: "wide" },
      { id: "didac-6", url: didac6, alt: "DIDAC 2025 Product Showcase & Delegate Interactions", aspect: "medium" },
      { id: "didac-7", url: didac7, alt: "DIDAC 2025 Commercial Standee & Digital Poster Display", aspect: "small" },
      { id: "didac-8", url: didac8, alt: "DIDAC 2025 Interactive Classroom Technology Presentation", aspect: "large" },
      { id: "didac-9", url: didac9, alt: "DIDAC 2025 Enterprise Audio-Visual Solution Area", aspect: "medium" },
      { id: "didac-10", url: didac10, alt: "DIDAC 2025 Education Sector Partner Delegation", aspect: "small" },
      { id: "didac-11", url: didac11, alt: "DIDAC 2025 MIEUX Team & Exhibition Highlights", aspect: "medium" },
    ],
  },
  {
    id: "eldrok-2026",
    slug: "eldrok-2026",
    title: "Eldrok K-12 Summit 2026",
    category: "Industry Meets",
    year: "2026",
    description: "Showcasing next-generation IFPD and classroom technology for educational leaders.",
    coverImage: eldrok1,
    displayOrder: 2,
    isPublished: true,
    createdAt: "2026-02-10T00:00:00Z",
    images: [
      { id: "eldrok-1", url: eldrok1, alt: "Eldrok K-12 Summit 2026 Exhibition Stage & Banner", aspect: "wide" },
      { id: "eldrok-2", url: eldrok2, alt: "Eldrok K-12 Summit 2026 Interactive Flat Panel Showcase", aspect: "medium" },
      { id: "eldrok-3", url: eldrok3, alt: "Eldrok K-12 Summit 2026 Keynote Presentation Backdrop", aspect: "large" },
      { id: "eldrok-4", url: eldrok4, alt: "Eldrok K-12 Summit Aerial Arena View & MIEUX Display", aspect: "small" },
      { id: "eldrok-5", url: eldrok5, alt: "Eldrok K-12 Summit Leadership Networking Session", aspect: "medium" },
      { id: "eldrok-6", url: eldrok6, alt: "Eldrok K-12 Summit Main Auditorium Video Wall", aspect: "medium" },
      { id: "eldrok-7", url: eldrok7, alt: "Eldrok K-12 Summit Smart Classroom Technology Demo", aspect: "wide" },
      { id: "eldrok-8", url: eldrok8, alt: "Eldrok K-12 Summit Educator Discussion & Experience Zone", aspect: "small" },
      { id: "eldrok-9", url: eldrok9, alt: "Eldrok K-12 Summit MIEUX Product Showcase Unit", aspect: "medium" },
      { id: "eldrok-10", url: eldrok10, alt: "Eldrok K-12 Summit Award & Excellence Ceremony", aspect: "large" },
    ],
  },
  {
    id: "it-voice-2025",
    slug: "it-voice-2025",
    title: "IT Voice - 2025",
    category: "Events",
    year: "2025",
    description: "MIEUX Display recognized for excellence at IT Voice Awards 2025 with live product showcases.",
    coverImage: itVoice1,
    displayOrder: 3,
    isPublished: true,
    createdAt: "2025-05-20T00:00:00Z",
    images: [
      { id: "itv-1", url: itVoice1, alt: "MIEUX Display Team & Leadership at IT Voice Awards 2025", aspect: "large" },
      { id: "itv-2", url: itVoice2, alt: "IT Voice Excellence Award Ceremony 2025 Stage Presentation", aspect: "medium" },
      { id: "itv-3", url: itVoice3, alt: "IT Voice 2025 MIEUX Display Showcase & Exhibition Zone", aspect: "wide" },
    ],
  },
  {
    id: "mieux-kickoff-2026",
    slug: "mieux-kickoff-2026",
    title: "Mieux Kick Off Meet 2026",
    category: "Events",
    year: "2026",
    description: "Annual strategic gathering presenting MIEUX's latest display engineering roadmap.",
    coverImage: eventPhotos.auditoriumKeynote,
    displayOrder: 4,
    isPublished: true,
    createdAt: "2026-01-05T00:00:00Z",
    images: [
      { id: "ko-1", url: eventPhotos.auditoriumKeynote, alt: "Mieux Kick Off Meet 2026 - Executive Keynote", aspect: "wide" },
      { id: "ko-2", url: eventPhotos.corporateConference, alt: "Mieux Team Annual Alignment & Gala", aspect: "medium" },
      { id: "ko-3", url: eventPhotos.heroVideoWallStage, alt: "Mieux Kick Off Meet 2026 Stage Wall", aspect: "large" },
      { id: "ko-4", url: eventPhotos.techSummit, alt: "Mieux Product Strategy Session", aspect: "small" },
      { id: "ko-5", url: eventPhotos.educationSummit, alt: "Mieux Engineering Excellence Awards", aspect: "medium" },
      { id: "ko-6", url: eventPhotos.commandControlRoom, alt: "Mieux Command Ops Strategy", aspect: "medium" },
      { id: "ko-7", url: eventPhotos.corporateLobby, alt: "Mieux Brand & Marketing Review", aspect: "small" },
      { id: "ko-8", url: eventPhotos.cityOutdoorDisplay, alt: "Mieux Outdoor Display Preview", aspect: "large" },
      { id: "ko-9", url: eventPhotos.transparentArch, alt: "Mieux Next-Gen Tech Preview", aspect: "wide" },
    ],
  },
  {
    id: "swaraksha-2025",
    slug: "swaraksha-2025",
    title: "Swaraksha Mahotsav 2025",
    category: "Installations",
    year: "2025",
    description: "Public safety & infrastructure LED display installation deployed for Swaraksha Mahotsav 2025.",
    coverImage: sw1,
    displayOrder: 5,
    isPublished: true,
    createdAt: "2025-08-15T00:00:00Z",
    images: [
      { id: "sw-1", url: sw1, alt: "Swaraksha Mahotsav 2025 Main Stage LED Video Wall", aspect: "large" },
      { id: "sw-2", url: sw2, alt: "Swaraksha Mahotsav Public Address & Information Display", aspect: "medium" },
      { id: "sw-3", url: sw3, alt: "Swaraksha Mahotsav Dignitary & Official Gathering", aspect: "medium" },
      { id: "sw-4", url: sw4, alt: "Swaraksha Mahotsav Live Security Monitoring Station", aspect: "wide" },
      { id: "sw-5", url: sw5, alt: "Swaraksha Mahotsav Public Awareness LED Screen", aspect: "small" },
      { id: "sw-6", url: sw6, alt: "Swaraksha Mahotsav High Brightness Outdoor Showcase", aspect: "large" },
      { id: "sw-7", url: sw7, alt: "Swaraksha Mahotsav Exhibition Area & Visitor Walkthrough", aspect: "medium" },
      { id: "sw-8", url: sw8, alt: "Swaraksha Mahotsav Interactive Touch Kiosk Unit", aspect: "small" },
      { id: "sw-9", url: sw9, alt: "Swaraksha Mahotsav Pavilion Audio-Visual Setup", aspect: "medium" },
      { id: "sw-10", url: sw10, alt: "Swaraksha Mahotsav Defense & Public Safety Display", aspect: "large" },
      { id: "sw-11", url: sw11, alt: "Swaraksha Mahotsav Keynote Presentation LED Array", aspect: "medium" },
      { id: "sw-12", url: sw12, alt: "Swaraksha Mahotsav Interactive Flat Panel Workshop", aspect: "small" },
      { id: "sw-13", url: sw13, alt: "Swaraksha Mahotsav Information Kiosk Network", aspect: "medium" },
      { id: "sw-14", url: sw14, alt: "Swaraksha Mahotsav Outdoor Video Wall Control Matrix", aspect: "wide" },
      { id: "sw-15", url: sw15, alt: "Swaraksha Mahotsav Event Arena & Delegation", aspect: "large" },
      { id: "sw-16", url: sw16, alt: "Swaraksha Mahotsav Technical Team Operations", aspect: "medium" },
      { id: "sw-17", url: sw17, alt: "Swaraksha Mahotsav Closing Ceremony & Highlights", aspect: "small" },
    ],
  },
];
