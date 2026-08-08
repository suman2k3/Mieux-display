import { img } from "./site";

export type VideoItem = {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  youtubeUrl: string;
};

export const videoItems: VideoItem[] = [
  {
    id: "v1",
    title: "500 Sq.Ft Fine-Pitch LED Video Wall Commissioning",
    category: "Case Study",
    duration: "3:45",
    thumbnail: img.heroVideoWall,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "MIEUX Interactive Flat Panel 4K Touch & Whiteboard Demo",
    category: "Product Demo",
    duration: "4:20",
    thumbnail: img.heroIfp,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "Weatherproof IP65 Outdoor LED Billboard Direct Sunlight Test",
    category: "Field Test",
    duration: "2:50",
    thumbnail: img.heroOutdoor,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "v4",
    title: "24/7 Mission Critical NOC Control Room Display Setup",
    category: "Installation",
    duration: "5:12",
    thumbnail: img.controlRoom,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "v5",
    title: "90% Transparent Glass LED Storefront Window Showcase",
    category: "Retail Showcase",
    duration: "2:15",
    thumbnail: img.transparentLed,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "v6",
    title: "Corporate Headquarters Executive Auditorium Display Overhaul",
    category: "Enterprise AV",
    duration: "4:05",
    thumbnail: img.corporate,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
