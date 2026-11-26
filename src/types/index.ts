export interface MedalStanding {
  id: string;
  rank: number;
  contingent: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
  regionCode: string;
  badgeBg?: string;
  badgeColor?: string;
  emblemInitials?: string;
  athletesTotal?: number;
  logoUrl?: string;
}

export type MatchStatus = 'UPCOMING' | 'LIVE' | 'COMPLETED';

export interface MatchSchedule {
  id: string;
  cabor: string;
  caborIcon?: string;
  category: string;
  stage: string;
  teamA: string;
  teamB: string;
  scoreA?: number | string;
  scoreB?: number | string;
  venue: string;
  date: string;
  time: string;
  status: MatchStatus;
  winner?: string;
  notes?: string;
}

export interface SportBranch {
  id: string;
  name: string;
  category: 'Beregu' | 'Individu' | 'Bela Diri' | 'Akuatik' | 'Akurasi';
  icon: string;
  ikon?: string;
  venue: string;
  locationCity: string;
  athletesCount: number;
  goldMedalsCount: number;
  description: string;
  nomorDaftar?: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
}

export interface Venue {
  id: string;
  name: string;
  location: string;
  city: string;
  caborHosted: string[];
  capacity: string;
  mapUrl?: string;
}

export interface Athlete {
  id: string;
  name: string;
  gender: 'Putra' | 'Putri';
  contingent: string; // Kabupaten / Kota
  cabor: string;
  eventNumber: string; // Nomor Pertandingan
  medals: {
    gold: number;
    silver: number;
    bronze: number;
    total: number;
  };
  achievements: string;
  coachName: string;
}

export interface Coach {
  id: string;
  name: string;
  cabor: string;
  contingent: string; // Kabupaten / Kota
  certification: string;
  experienceYears: number;
  athletesTrained: number;
  medalsProduced: {
    gold: number;
    silver: number;
    bronze: number;
  };
}
