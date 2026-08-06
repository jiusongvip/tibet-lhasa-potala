export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  photoUrl: string;
  sameAs: string[];
  specialties: string[];
}

export const authors: Record<string, Author> = {
  "tenzin-dorje": {
    slug: "tenzin-dorje",
    name: "Tenzin Dorje",
    title: "Lhasa-based Researcher & Cultural Guide",
    bio: "Born in Shigatse and raised in Lhasa, Tenzin has spent over 20 years studying Tibetan Buddhist art and architecture. He has guided hundreds of visitors through Potala Palace and holds a degree in Tibetan Studies from Tibet University. Tenzin writes the history, architecture, and cultural etiquette content on Potala Guide.",
    credentials: [
      "BA Tibetan Studies, Tibet University",
      "20+ years guiding at Potala Palace and Lhasa monasteries",
      "Fluent in Tibetan, Mandarin Chinese, and English",
    ],
    photoUrl: "/images/author-tenzin-dorje.webp",
    sameAs: [],
    specialties: ["Tibetan architecture", "Buddhist art", "Cultural etiquette", "Potala Palace history"],
  },
  "sarah-chen": {
    slug: "sarah-chen",
    name: "Sarah Chen",
    title: "Senior Travel Writer & Tibet Specialist",
    bio: "Sarah has visited Tibet six times across all four seasons since 2017. A former Lonely Planet contributor and Wilderness First Responder, she focuses on practical trip planning, altitude safety, and honest logistical advice. Sarah writes the travel tips, permits, and itinerary content on Potala Guide.",
    credentials: [
      "Wilderness First Responder (WFR) certified",
      "Contributor to major travel guidebooks since 2017",
      "6+ visits to Tibet across all seasons",
      "High-altitude first aid training",
    ],
    photoUrl: "/images/author-sarah-chen.webp",
    sameAs: [],
    specialties: ["Trip planning", "Altitude safety", "Permits & logistics", "Seasonal travel advice"],
  },
  "michael-rivera": {
    slug: "michael-rivera",
    name: "Michael Rivera",
    title: "Travel Photographer & Visual Guide",
    bio: "An award-winning travel photographer whose work has appeared in National Geographic Traveler and Conde Nast Traveler. Michael has documented Potala Palace through every season and lighting condition over four visits to Lhasa. He writes the photography guide and contributes images throughout the site.",
    credentials: [
      "Published in National Geographic Traveler, Conde Nast Traveler",
      "4 photography expeditions to Lhasa since 2018",
      "Specialist in high-altitude and architectural photography",
    ],
    photoUrl: "/images/author-michael-rivera.webp",
    sameAs: [],
    specialties: ["Travel photography", "Architectural photography", "Photo spot scouting", "Camera technique"],
  },
};

export const editorialTeam = {
  name: "Potala Guide Editorial Team",
  description: "Independent travel writers, researchers, and photographers covering Potala Palace and Lhasa, Tibet. Our team combines firsthand experience with rigorous cross-referencing against official sources.",
  url: "/about",
  members: ["tenzin-dorje", "sarah-chen", "michael-rivera"],
};

export function getAuthor(slug: string): Author | undefined {
  return authors[slug];
}

export function getAuthorsBySlugs(slugs: string[]): Author[] {
  return slugs.map((s) => authors[s]).filter(Boolean);
}
