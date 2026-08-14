import { img } from "./site";

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

export const eventGalleries: EventGallery[] = [
  {
    id: "didac-2025",
    slug: "didac-2025",
    title: "DIDAC 2025",
    category: "Exhibitions",
    year: "2025",
    description: "Interactive display solutions showcased at one of India's leading education exhibitions.",
    coverImage: img.heroIfp,
    displayOrder: 1,
    isPublished: true,
    createdAt: "2025-01-15T00:00:00Z",
    images: [
      { id: "didac-1", url: img.heroIfp, alt: "MIEUX Display at DIDAC 2025 - Interactive Panel Demo", aspect: "large" },
      { id: "didac-2", url: img.indoorLed, alt: "MIEUX Display DIDAC 2025 Fine Pitch LED Booth", aspect: "small" },
      { id: "didac-3", url: img.education, alt: "DIDAC 2025 Smart Classroom Exhibition", aspect: "medium" },
      { id: "didac-4", url: img.kiosk, alt: "DIDAC 2025 Interactive Touch Kiosk Display", aspect: "medium" },
      { id: "didac-5", url: img.heroVideoWall, alt: "DIDAC 2025 Main Stage LED Video Wall", aspect: "wide" },
      { id: "didac-6", url: img.corporate, alt: "DIDAC 2025 Industry Delegation Visit", aspect: "medium" },
      { id: "didac-7", url: img.signage, alt: "DIDAC 2025 Commercial Display Demonstration", aspect: "small" },
      { id: "didac-8", url: img.controlRoom, alt: "DIDAC 2025 Command Center Matrix Display", aspect: "large" },
      { id: "didac-9", url: img.transparentLed, alt: "DIDAC 2025 Transparent LED Screen Demo", aspect: "medium" },
      { id: "didac-10", url: img.heroOutdoor, alt: "DIDAC 2025 Outdoor High Brightness Display", aspect: "small" },
      { id: "didac-11", url: img.heroIfp, alt: "DIDAC 2025 Educator Interactive Experience", aspect: "medium" },
    ],
  },
  {
    id: "eldrok-2026",
    slug: "eldrok-2026",
    title: "Eldrok K-12 Summit 2026",
    category: "Industry Meets",
    year: "2026",
    description: "Showcasing next-generation IFPD and classroom technology for educational leaders.",
    coverImage: img.education,
    displayOrder: 2,
    isPublished: true,
    createdAt: "2026-02-10T00:00:00Z",
    images: [
      { id: "eldrok-1", url: img.education, alt: "Eldrok K-12 Summit 2026 - Education Stage", aspect: "wide" },
      { id: "eldrok-2", url: img.heroIfp, alt: "Eldrok K-12 Summit 2026 Interactive Panel Demo", aspect: "medium" },
      { id: "eldrok-3", url: img.indoorLed, alt: "Eldrok Summit Keynote LED Background", aspect: "large" },
      { id: "eldrok-4", url: img.corporate, alt: "Eldrok K-12 Leadership Conference", aspect: "small" },
      { id: "eldrok-5", url: img.kiosk, alt: "Eldrok Summit Interactive Kiosk", aspect: "medium" },
      { id: "eldrok-6", url: img.signage, alt: "Eldrok K-12 Digital Signage Display", aspect: "medium" },
      { id: "eldrok-7", url: img.heroVideoWall, alt: "Eldrok Summit Main Auditorium Wall", aspect: "wide" },
      { id: "eldrok-8", url: img.controlRoom, alt: "Eldrok Tech Showcase Unit", aspect: "small" },
      { id: "eldrok-9", url: img.transparentLed, alt: "Eldrok Architectural Display Unit", aspect: "medium" },
      { id: "eldrok-10", url: img.education, alt: "Eldrok K-12 Interactive Classroom Demo", aspect: "large" },
    ],
  },
  {
    id: "it-voice-2025",
    slug: "it-voice-2025",
    title: "IT Voice - 2025",
    category: "Events",
    year: "2025",
    description: "Live demonstration of MIEUX high-brightness LED video walls and digital signage.",
    coverImage: img.corporate,
    displayOrder: 3,
    isPublished: true,
    createdAt: "2025-05-20T00:00:00Z",
    images: [
      { id: "itv-1", url: img.corporate, alt: "IT Voice 2025 - MIEUX Display Keynote", aspect: "large" },
      { id: "itv-2", url: img.indoorLed, alt: "IT Voice 2025 Fine-Pitch LED Zone", aspect: "medium" },
      { id: "itv-3", url: img.heroVideoWall, alt: "IT Voice 2025 Video Wall Showcase", aspect: "medium" },
      { id: "itv-4", url: img.signage, alt: "IT Voice 2025 Commercial Signage Network", aspect: "wide" },
      { id: "itv-5", url: img.heroIfp, alt: "IT Voice 2025 Boardroom Panel Demo", aspect: "small" },
      { id: "itv-6", url: img.controlRoom, alt: "IT Voice 2025 NOC Monitoring Matrix", aspect: "large" },
      { id: "itv-7", url: img.kiosk, alt: "IT Voice 2025 Self-Service Kiosk Unit", aspect: "medium" },
      { id: "itv-8", url: img.transparentLed, alt: "IT Voice 2025 Architectural Glass Display", aspect: "small" },
    ],
  },
  {
    id: "mieux-kickoff-2026",
    slug: "mieux-kickoff-2026",
    title: "Mieux Kick Off Meet 2026",
    category: "Events",
    year: "2026",
    description: "Annual strategic gathering presenting MIEUX's latest display engineering roadmap.",
    coverImage: img.indoorLed,
    displayOrder: 4,
    isPublished: true,
    createdAt: "2026-01-05T00:00:00Z",
    images: [
      { id: "ko-1", url: img.indoorLed, alt: "Mieux Kick Off Meet 2026 - Executive Keynote", aspect: "wide" },
      { id: "ko-2", url: img.corporate, alt: "Mieux Team Annual Alignment & Gala", aspect: "medium" },
      { id: "ko-3", url: img.heroVideoWall, alt: "Mieux Kick Off Meet 2026 Stage Wall", aspect: "large" },
      { id: "ko-4", url: img.heroIfp, alt: "Mieux Product Strategy Session", aspect: "small" },
      { id: "ko-5", url: img.education, alt: "Mieux Engineering Excellence Awards", aspect: "medium" },
      { id: "ko-6", url: img.controlRoom, alt: "Mieux Command Ops Strategy", aspect: "medium" },
      { id: "ko-7", url: img.signage, alt: "Mieux Brand & Marketing Review", aspect: "small" },
      { id: "ko-8", url: img.heroOutdoor, alt: "Mieux Outdoor Outdoor Display Preview", aspect: "large" },
      { id: "ko-9", url: img.transparentLed, alt: "Mieux Next-Gen Tech Preview", aspect: "wide" },
    ],
  },
  {
    id: "swaraksha-2025",
    slug: "swaraksha-2025",
    title: "Swaraksha Mahotsav 2025",
    category: "Installations",
    year: "2025",
    description: "Public infrastructure LED display installation supporting national safety initiatives.",
    coverImage: img.controlRoom,
    displayOrder: 5,
    isPublished: true,
    createdAt: "2025-08-15T00:00:00Z",
    images: [
      { id: "sw-1", url: img.controlRoom, alt: "Swaraksha Mahotsav 2025 - Command Display", aspect: "large" },
      { id: "sw-2", url: img.heroOutdoor, alt: "Swaraksha Mahotsav Outdoor Screen", aspect: "medium" },
      { id: "sw-3", url: img.heroVideoWall, alt: "Swaraksha Mahotsav Security Wall", aspect: "medium" },
      { id: "sw-4", url: img.indoorLed, alt: "Swaraksha Mahotsav Public Safety Pavilion", aspect: "wide" },
      { id: "sw-5", url: img.signage, alt: "Swaraksha Mahotsav Information Kiosk", aspect: "small" },
      { id: "sw-6", url: img.corporate, alt: "Swaraksha Mahotsav Dignitary Visit", aspect: "large" },
      { id: "sw-7", url: img.heroIfp, alt: "Swaraksha Mahotsav Tactical Panel", aspect: "medium" },
      { id: "sw-8", url: img.kiosk, alt: "Swaraksha Mahotsav Registration Unit", aspect: "small" },
      { id: "sw-9", url: img.education, alt: "Swaraksha Mahotsav Safety Awareness Zone", aspect: "medium" },
    ],
  },
];
