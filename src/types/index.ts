export interface MedalStanding {
  id: string;
  rank: number;
  contingent: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
  regionCode: string;
}

export type MatchStatus = 'UPCOMING' | 'LIVE' | 'COMPLETED';

export interface MatchSchedule {
  id: string;
  cabor: string;
  caborIcon?: string;
  category: string;
  stage: string; // e.g. "Penyisihan", "Semifinal", "Final Perebutan Emas"
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
  venue: string;
  athletesCount: number;
  goldMedalsCount: number;
  description: string;
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

export interface Venue {
  id: string;
  name: string;
  location: string;
  city: string;
  caborHosted: string[];
  capacity: string;
  mapUrl?: string;
}

export interface Contingent {
  id: string;
  name: string;
  shortName: string;
  leadOfficial: string;
  athletesTotal: number;
  caborFollowed: number;
  flagUrl?: string;
}
