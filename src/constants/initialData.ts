import { MedalStanding, MatchSchedule, SportBranch, NewsArticle, Venue, Athlete, Coach } from '../types';
import { ASSETS } from '../assets';

export const INITIAL_MEDALS: MedalStanding[] = [
  { id: '1', rank: 1, contingent: 'Kota Medan', gold: 84, silver: 45, bronze: 41, total: 170, regionCode: 'MDN', emblemInitials: 'MDN', badgeBg: '#1E3A8A', badgeColor: '#FFFFFF', athletesTotal: 385 },
  { id: '2', rank: 2, contingent: 'Kabupaten Deli Serdang', gold: 20, silver: 29, bronze: 43, total: 92, regionCode: 'DS', emblemInitials: 'DS', badgeBg: '#065F46', badgeColor: '#FFFFFF', athletesTotal: 290 },
  { id: '3', rank: 3, contingent: 'Kota Binjai', gold: 18, silver: 25, bronze: 28, total: 71, regionCode: 'BNJ', emblemInitials: 'BNJ', badgeBg: '#7C2D12', badgeColor: '#FFFFFF', athletesTotal: 240 },
  { id: '4', rank: 4, contingent: 'Kabupaten Karo', gold: 16, silver: 14, bronze: 21, total: 51, regionCode: 'KAR', emblemInitials: 'KAR', badgeBg: '#831843', badgeColor: '#FFFFFF', athletesTotal: 195 },
  { id: '5', rank: 5, contingent: 'Kabupaten Asahan', gold: 14, silver: 18, bronze: 24, total: 56, regionCode: 'ASH', emblemInitials: 'ASH', badgeBg: '#1E293B', badgeColor: '#FFFFFF', athletesTotal: 210 },
  { id: '6', rank: 6, contingent: 'Kota Pematangsiantar', gold: 12, silver: 15, bronze: 19, total: 46, regionCode: 'PMS', emblemInitials: 'PMS', badgeBg: '#312E81', badgeColor: '#FFFFFF', athletesTotal: 185 },
  { id: '7', rank: 7, contingent: 'Kabupaten Simalungun', gold: 10, silver: 12, bronze: 18, total: 40, regionCode: 'SML', emblemInitials: 'SML', badgeBg: '#064E3B', badgeColor: '#FFFFFF', athletesTotal: 170 },
  { id: '8', rank: 8, contingent: 'Kabupaten Serdang Bedagai', gold: 9, silver: 11, bronze: 16, total: 36, regionCode: 'SER', emblemInitials: 'SER', badgeBg: '#713F12', badgeColor: '#FFFFFF', athletesTotal: 160 },
  { id: '9', rank: 9, contingent: 'Kabupaten Toba', gold: 8, silver: 9, bronze: 14, total: 31, regionCode: 'TOB', emblemInitials: 'TOB', badgeBg: '#155E75', badgeColor: '#FFFFFF', athletesTotal: 145 },
  { id: '10', rank: 10, contingent: 'Kabupaten Labuhanbatu', gold: 7, silver: 8, bronze: 12, total: 27, regionCode: 'LBB', emblemInitials: 'LBB', badgeBg: '#4C1D95', badgeColor: '#FFFFFF', athletesTotal: 140 },
  { id: '11', rank: 11, contingent: 'Kabupaten Dairi', gold: 6, silver: 7, bronze: 11, total: 24, regionCode: 'DAI', emblemInitials: 'DAI', badgeBg: '#14532D', badgeColor: '#FFFFFF', athletesTotal: 130 },
  { id: '12', rank: 12, contingent: 'Kota Tanjungbalai', gold: 5, silver: 8, bronze: 10, total: 23, regionCode: 'TJB', emblemInitials: 'TJB', badgeBg: '#1E3E62', badgeColor: '#FFFFFF', athletesTotal: 125 },
  { id: '13', rank: 13, contingent: 'Kota Tebing Tinggi', gold: 5, silver: 7, bronze: 9, total: 21, regionCode: 'TBT', emblemInitials: 'TBT', badgeBg: '#3F3F46', badgeColor: '#FFFFFF', athletesTotal: 120 },
  { id: '14', rank: 14, contingent: 'Kabupaten Langkat', gold: 4, silver: 6, bronze: 11, total: 21, regionCode: 'LKT', emblemInitials: 'LKT', badgeBg: '#047857', badgeColor: '#FFFFFF', athletesTotal: 135 },
  { id: '15', rank: 15, contingent: 'Kota Padangsidimpuan', gold: 4, silver: 5, bronze: 8, total: 17, regionCode: 'PSP', emblemInitials: 'PSP', badgeBg: '#854D0E', badgeColor: '#FFFFFF', athletesTotal: 110 },
  { id: '16', rank: 16, contingent: 'Kabupaten Tapanuli Utara', gold: 3, silver: 6, bronze: 7, total: 16, regionCode: 'TAP', emblemInitials: 'TAP', badgeBg: '#1E40AF', badgeColor: '#FFFFFF', athletesTotal: 105 },
  { id: '17', rank: 17, contingent: 'Kabupaten Samosir', gold: 3, silver: 4, bronze: 6, total: 13, regionCode: 'SMS', emblemInitials: 'SMS', badgeBg: '#0E7490', badgeColor: '#FFFFFF', athletesTotal: 95 },
  { id: '18', rank: 18, contingent: 'Kota Sibolga', gold: 2, silver: 5, bronze: 7, total: 14, regionCode: 'SBG', emblemInitials: 'SBG', badgeBg: '#0284C7', badgeColor: '#FFFFFF', athletesTotal: 90 },
  { id: '19', rank: 19, contingent: 'Kabupaten Batubara', gold: 2, silver: 4, bronze: 6, total: 12, regionCode: 'BTR', emblemInitials: 'BTR', badgeBg: '#475569', badgeColor: '#FFFFFF', athletesTotal: 85 },
  { id: '20', rank: 20, contingent: 'Kabupaten Humbang Hasundutan', gold: 2, silver: 3, bronze: 5, total: 10, regionCode: 'HMB', emblemInitials: 'HMB', badgeBg: '#15803D', badgeColor: '#FFFFFF', athletesTotal: 80 },
  { id: '21', rank: 21, contingent: 'Kabupaten Nias', gold: 1, silver: 3, bronze: 4, total: 8, regionCode: 'NIS', emblemInitials: 'NIS', badgeBg: '#B45309', badgeColor: '#FFFFFF', athletesTotal: 75 },
  { id: '22', rank: 22, contingent: 'Kota Gunungsitoli', gold: 1, silver: 2, bronze: 5, total: 8, regionCode: 'GNS', emblemInitials: 'GNS', badgeBg: '#0369A1', badgeColor: '#FFFFFF', athletesTotal: 70 },
  { id: '23', rank: 23, contingent: 'Kabupaten Mandailing Natal', gold: 1, silver: 2, bronze: 4, total: 7, regionCode: 'MDN', emblemInitials: 'MDN', badgeBg: '#991B1B', badgeColor: '#FFFFFF', athletesTotal: 75 },
  { id: '24', rank: 24, contingent: 'Kabupaten Labuhanbatu Utara', gold: 1, silver: 1, bronze: 4, total: 6, regionCode: 'LBU', emblemInitials: 'LBU', badgeBg: '#5B21B6', badgeColor: '#FFFFFF', athletesTotal: 65 },
  { id: '25', rank: 25, contingent: 'Kabupaten Labuhanbatu Selatan', gold: 1, silver: 1, bronze: 3, total: 5, regionCode: 'LBS', emblemInitials: 'LBS', badgeBg: '#6B21A8', badgeColor: '#FFFFFF', athletesTotal: 60 },
  { id: '26', rank: 26, contingent: 'Kabupaten Pakpak Bharat', gold: 0, silver: 2, bronze: 3, total: 5, regionCode: 'PKP', emblemInitials: 'PKP', badgeBg: '#166534', badgeColor: '#FFFFFF', athletesTotal: 55 },
  { id: '27', rank: 27, contingent: 'Kabupaten Tapanuli Selatan', gold: 0, silver: 2, bronze: 2, total: 4, regionCode: 'TSL', emblemInitials: 'TSL', badgeBg: '#1E3A8A', badgeColor: '#FFFFFF', athletesTotal: 50 },
  { id: '28', rank: 28, contingent: 'Kabupaten Tapanuli Tengah', gold: 0, silver: 1, bronze: 3, total: 4, regionCode: 'TTG', emblemInitials: 'TTG', badgeBg: '#0284C7', badgeColor: '#FFFFFF', athletesTotal: 50 },
  { id: '29', rank: 29, contingent: 'Kabupaten Padang Lawas', gold: 0, silver: 1, bronze: 2, total: 3, regionCode: 'PDL', emblemInitials: 'PDL', badgeBg: '#92400E', badgeColor: '#FFFFFF', athletesTotal: 48 },
  { id: '30', rank: 30, contingent: 'Kabupaten Padang Lawas Utara', gold: 0, silver: 1, bronze: 1, total: 2, regionCode: 'PLU', emblemInitials: 'PLU', badgeBg: '#78350F', badgeColor: '#FFFFFF', athletesTotal: 45 },
  { id: '31', rank: 31, contingent: 'Kabupaten Nias Selatan', gold: 0, silver: 0, bronze: 2, total: 2, regionCode: 'NSS', emblemInitials: 'NSS', badgeBg: '#C2410C', badgeColor: '#FFFFFF', athletesTotal: 45 },
  { id: '32', rank: 32, contingent: 'Kabupaten Nias Utara', gold: 0, silver: 0, bronze: 1, total: 1, regionCode: 'NSU', emblemInitials: 'NSU', badgeBg: '#EA580C', badgeColor: '#FFFFFF', athletesTotal: 40 },
  { id: '33', rank: 33, contingent: 'Kabupaten Nias Barat', gold: 0, silver: 0, bronze: 1, total: 1, regionCode: 'NSB', emblemInitials: 'NSB', badgeBg: '#D97706', badgeColor: '#FFFFFF', athletesTotal: 40 },
];

export const INITIAL_ATHLETES: Athlete[] = [
  {
    id: 'atl-1',
    name: 'Bagus Tri Handoko',
    gender: 'Putra',
    contingent: 'Kota Medan',
    cabor: 'Atletik',
    eventNumber: 'Lari 100m & 200m Putra',
    medals: { gold: 2, silver: 0, bronze: 0, total: 2 },
    achievements: 'Rekor Porprovsu 10.38s pada Lari 100m Putra',
    coachName: 'Bambang Supriyadi (Lisensi A Atletik)'
  },
  {
    id: 'atl-2',
    name: 'Sri Wahyuni Sitorus',
    gender: 'Putri',
    contingent: 'Kabupaten Karo',
    cabor: 'Atletik',
    eventNumber: 'Lari 5.000m & 10.000m Putri',
    medals: { gold: 2, silver: 1, bronze: 0, total: 3 },
    achievements: 'Emas Lari Jarak Jauh Porprovsu',
    coachName: 'Saut Martua Purba'
  },
  {
    id: 'atl-3',
    name: 'Kevin Jonathan Sinaga',
    gender: 'Putra',
    contingent: 'Kota Binjai',
    cabor: 'Bulu Tangkis',
    eventNumber: 'Tunggal Putra',
    medals: { gold: 1, silver: 1, bronze: 0, total: 2 },
    achievements: 'Juara 1 Tunggal Putra PORPROVSU XII',
    coachName: 'Hendri Kurniawan (PBSI Sumut)'
  },
  {
    id: 'atl-4',
    name: 'Muhammad Farhan Lubis',
    gender: 'Putra',
    contingent: 'Kabupaten Deli Serdang',
    cabor: 'Pencak Silat',
    eventNumber: 'Tanding Kelas C Putra (55-60 kg)',
    medals: { gold: 1, silver: 0, bronze: 0, total: 1 },
    achievements: 'Medali Emas Tanding Silat Dewasa',
    coachName: 'Pendekar Idris Siregar'
  },
  {
    id: 'atl-5',
    name: 'Cindy Aurelia Tan',
    gender: 'Putri',
    contingent: 'Kota Medan',
    cabor: 'Wushu',
    eventNumber: 'Taolu Changquan & Jianshu Putri',
    medals: { gold: 2, silver: 0, bronze: 0, total: 2 },
    achievements: 'Skor Tertinggi Jurus Changquan 9.65',
    coachName: 'Master Zhang Jie / Iwan Setiawan'
  },
  {
    id: 'atl-6',
    name: 'Rizky Syahputra Ginting',
    gender: 'Putra',
    contingent: 'Kabupaten Karo',
    cabor: 'Wushu',
    eventNumber: 'Sanda Kelas 60 kg Putra',
    medals: { gold: 1, silver: 0, bronze: 0, total: 1 },
    achievements: 'Medali Emas Pertarungan Sanda',
    coachName: 'Darma Sitepu'
  },
  {
    id: 'atl-7',
    name: 'Nadia Safitri Harahap',
    gender: 'Putri',
    contingent: 'Kabupaten Asahan',
    cabor: 'Renang',
    eventNumber: '100m Gaya Dada & 200m Gaya Dada',
    medals: { gold: 1, silver: 1, bronze: 1, total: 3 },
    achievements: 'Medali Emas 100m Gaya Dada Putri',
    coachName: 'Coach Zulkifli Batubara'
  },
  {
    id: 'atl-8',
    name: 'Daniel Christian Hutapea',
    gender: 'Putra',
    contingent: 'Kabupaten Toba',
    cabor: 'Dayung',
    eventNumber: 'Kayak 1 (K1) 1.000m Putra',
    medals: { gold: 1, silver: 1, bronze: 0, total: 2 },
    achievements: 'Juara Kayak Perairan Terbuka Danau Toba',
    coachName: 'Poltak Manurung'
  },
  {
    id: 'atl-9',
    name: 'Ahmad Fadillah',
    gender: 'Putra',
    contingent: 'Kota Medan',
    cabor: 'Sepak Bola',
    eventNumber: 'Tim Beregu Putra (Kapten Tim)',
    medals: { gold: 1, silver: 0, bronze: 0, total: 1 },
    achievements: 'Kapten Tim Juara Sepak Bola & Top Scorer (6 Gol)',
    coachName: 'Ansyari Lubis / Syafei Pilly'
  },
  {
    id: 'atl-10',
    name: 'Bella Novita Saragih',
    gender: 'Putri',
    contingent: 'Kabupaten Simalungun',
    cabor: 'Karate',
    eventNumber: 'Kumite -55 kg Putri',
    medals: { gold: 1, silver: 0, bronze: 1, total: 2 },
    achievements: 'Medali Emas Kumite Perorangan',
    coachName: 'Sensei Jhonny Saragih'
  },
  {
    id: 'atl-11',
    name: 'Teguh Pratama Zebua',
    gender: 'Putra',
    contingent: 'Kota Gunungsitoli',
    cabor: 'Taekwondo',
    eventNumber: 'Kyorugi Under 68 kg Putra',
    medals: { gold: 1, silver: 0, bronze: 1, total: 2 },
    achievements: 'Medali Emas Pertama Kepulauan Nias',
    coachName: 'Sabeum Firman Halawa'
  },
  {
    id: 'atl-12',
    name: 'Annisa Fitriani Daulay',
    gender: 'Putri',
    contingent: 'Kota Padangsidimpuan',
    cabor: 'Catur',
    eventNumber: 'Catur Cepat & Catur Standar Putri',
    medals: { gold: 1, silver: 1, bronze: 0, total: 2 },
    achievements: 'Master Percasi Sumut',
    coachName: 'MN Syamsir Siregar'
  }
];

export const INITIAL_COACHES: Coach[] = [
  {
    id: 'coa-1',
    name: 'Bambang Supriyadi, M.Pd.',
    cabor: 'Atletik',
    contingent: 'Kota Medan',
    certification: 'Lisensi A Nasional PASI',
    experienceYears: 14,
    athletesTrained: 28,
    medalsProduced: { gold: 18, silver: 10, bronze: 8 }
  },
  {
    id: 'coa-2',
    name: 'Hendri Kurniawan, S.Or.',
    cabor: 'Bulu Tangkis',
    contingent: 'Kota Binjai',
    certification: 'BWF Level 2 Coach',
    experienceYears: 12,
    athletesTrained: 18,
    medalsProduced: { gold: 4, silver: 3, bronze: 5 }
  },
  {
    id: 'coa-3',
    name: 'Pendekar Idris Siregar',
    cabor: 'Pencak Silat',
    contingent: 'Kabupaten Deli Serdang',
    certification: 'Pelatih Madya IPSI Tingkat 1',
    experienceYears: 20,
    athletesTrained: 32,
    medalsProduced: { gold: 6, silver: 7, bronze: 9 }
  },
  {
    id: 'coa-4',
    name: 'Iwan Setiawan',
    cabor: 'Wushu',
    contingent: 'Kota Medan',
    certification: 'Pelatih Internasional IWUF',
    experienceYears: 16,
    athletesTrained: 24,
    medalsProduced: { gold: 12, silver: 4, bronze: 2 }
  },
  {
    id: 'coa-5',
    name: 'Saut Martua Purba',
    cabor: 'Atletik (Jarak Jauh)',
    contingent: 'Kabupaten Karo',
    certification: 'Lisensi B Nasional PASI',
    experienceYears: 11,
    athletesTrained: 16,
    medalsProduced: { gold: 7, silver: 5, bronze: 4 }
  },
  {
    id: 'coa-6',
    name: 'Zulkifli Batubara',
    cabor: 'Renang',
    contingent: 'Kabupaten Asahan',
    certification: 'Pelatih Nasional Akuatik PRSI',
    experienceYears: 15,
    athletesTrained: 22,
    medalsProduced: { gold: 5, silver: 6, bronze: 8 }
  },
  {
    id: 'coa-7',
    name: 'Ansyari Lubis',
    cabor: 'Sepak Bola',
    contingent: 'Kota Medan',
    certification: 'Lisensi A AFC / PSSI',
    experienceYears: 18,
    athletesTrained: 35,
    medalsProduced: { gold: 2, silver: 1, bronze: 0 }
  },
  {
    id: 'coa-8',
    name: 'Poltak Manurung',
    cabor: 'Dayung',
    contingent: 'Kabupaten Toba',
    certification: 'Pelatih Nasional PODSI',
    experienceYears: 10,
    athletesTrained: 14,
    medalsProduced: { gold: 3, silver: 4, bronze: 3 }
  }
];

export const INITIAL_SCHEDULES: MatchSchedule[] = [
  {
    id: 'sch-1',
    cabor: 'Sepak Bola',
    category: 'Putra',
    stage: 'Final Perebutan Emas',
    teamA: 'Kota Medan',
    teamB: 'Kab. Deli Serdang',
    scoreA: 2,
    scoreB: 1,
    venue: 'Stadion Utama Sumut (Sport Centre Batang Kuis)',
    date: '2026-12-08',
    time: '15:30 WIB',
    status: 'COMPLETED',
    winner: 'Kota Medan',
    notes: 'Pertandingan sengit ditonton 25.000 warga.'
  },
  {
    id: 'sch-2',
    cabor: 'Bulu Tangkis',
    category: 'Tunggal Putra',
    stage: 'Final',
    teamA: 'Kota Binjai',
    teamB: 'Kab. Asahan',
    scoreA: '21-18, 22-20',
    scoreB: '',
    venue: 'GOR PBSI Dispora Sumut, Medan',
    date: '2026-12-08',
    time: '14:00 WIB',
    status: 'COMPLETED',
    winner: 'Kota Binjai',
  },
  {
    id: 'sch-3',
    cabor: 'Futsal',
    category: 'Putra',
    stage: 'Babak Perempat Final',
    teamA: 'Kab. Karo',
    teamB: 'Kota Pematangsiantar',
    scoreA: 4,
    scoreB: 3,
    venue: 'GOR Mini Dispora Sumut, Jl. William Iskandar',
    date: '2026-12-09',
    time: '10:00 WIB',
    status: 'LIVE',
    notes: 'Babak kedua sedang berjalan (menit 34).'
  },
  {
    id: 'sch-4',
    cabor: 'Bola Voli',
    category: 'Putri',
    stage: 'Semifinal',
    teamA: 'Kab. Deli Serdang',
    teamB: 'Kab. Serdang Bedagai',
    scoreA: '25-22, 19-25, 25-18',
    scoreB: '1 Set',
    venue: 'Gedung Serbaguna Pemprovsu, Medan',
    date: '2026-12-09',
    time: '11:30 WIB',
    status: 'LIVE',
    notes: 'Set ke-4 sedang berlangsung.'
  },
  {
    id: 'sch-5',
    cabor: 'Pencak Silat',
    category: 'Tanding Kelas C Putra (55-60 kg)',
    stage: 'Final',
    teamA: 'Kota Medan',
    teamB: 'Kab. Toba',
    scoreA: '-',
    scoreB: '-',
    venue: 'Gelanggang Remaja Medan',
    date: '2026-12-09',
    time: '14:00 WIB',
    status: 'UPCOMING',
  },
  {
    id: 'sch-6',
    cabor: 'Renang',
    category: '100m Gaya Dada Putri',
    stage: 'Final Waktu',
    teamA: 'Kab. Asahan (Nadia Safitri)',
    teamB: 'Kota Medan (Atlet 2)',
    venue: 'Kolam Renang Selayang, Medan',
    date: '2026-12-09',
    time: '16:00 WIB',
    status: 'UPCOMING',
  }
];

export const INITIAL_CABOR: SportBranch[] = [
  {
    id: 'cabor-1',
    name: 'Sepak Bola',
    category: 'Beregu',
    icon: 'Trophy',
    venue: 'Stadion Utama Sumut & Stadion Baharoeddin Siregar',
    locationCity: 'Deli Serdang',
    athletesCount: 396,
    goldMedalsCount: 2,
    description: 'Cabang olahraga primadona mempertandingkan tim terbaik dari 33 kabupaten/kota.'
  },
  {
    id: 'cabor-2',
    name: 'Futsal',
    category: 'Beregu',
    icon: 'Flame',
    venue: 'GOR Mini Dispora Sumut, Medan',
    locationCity: 'Medan',
    athletesCount: 280,
    goldMedalsCount: 2,
    description: 'Pertandingan futsal putra dan putri dengan tempo cepat dan strategi presisi.'
  },
  {
    id: 'cabor-3',
    name: 'Bulu Tangkis',
    category: 'Individu',
    icon: 'Zap',
    venue: 'GOR PBSI Sumut, Percut Sei Tuan',
    locationCity: 'Deli Serdang - Medan',
    athletesCount: 198,
    goldMedalsCount: 7,
    description: 'Nomor tunggal, ganda, dan beregu putra/putri pembibitan atlet nasional.'
  },
  {
    id: 'cabor-4',
    name: 'Atletik',
    category: 'Individu',
    icon: 'Activity',
    venue: 'Stadion Utama Sumut, Batang Kuis',
    locationCity: 'Deli Serdang',
    athletesCount: 320,
    goldMedalsCount: 42,
    description: 'Lari 100m, 200m, 400m, estafet, tolak peluru, lompat jauh, dan maraton.'
  },
  {
    id: 'cabor-5',
    name: 'Pencak Silat',
    category: 'Bela Diri',
    icon: 'Shield',
    venue: 'Gelanggang Remaja Kota Medan',
    locationCity: 'Medan',
    athletesCount: 220,
    goldMedalsCount: 22,
    description: 'Kategori tanding dan seni tunggal/ganda/regu warisan luhur pencak silat.'
  },
  {
    id: 'cabor-6',
    name: 'Renang',
    category: 'Akuatik',
    icon: 'Waves',
    venue: 'Kolam Renang Selayang, Jl. Dr. Mansyur',
    locationCity: 'Medan',
    athletesCount: 180,
    goldMedalsCount: 38,
    description: 'Gaya bebas, dada, punggung, kupu-kupu, dan estafet beregu akuatik.'
  },
  {
    id: 'cabor-7',
    name: 'Karate',
    category: 'Bela Diri',
    icon: 'Award',
    venue: 'Gedung Serbaguna Unimed',
    locationCity: 'Deli Serdang',
    athletesCount: 190,
    goldMedalsCount: 17,
    description: 'Nomor Kata dan Kumite pertarungan kelas berat badan.'
  },
  {
    id: 'cabor-8',
    name: 'Taekwondo',
    category: 'Bela Diri',
    icon: 'Crosshair',
    venue: 'GOR Cemara Asri',
    locationCity: 'Deli Serdang',
    athletesCount: 175,
    goldMedalsCount: 16,
    description: 'Pertarungan Kyorugi dan keindahan teknik Poomsae.'
  },
  {
    id: 'cabor-9',
    name: 'Wushu',
    category: 'Bela Diri',
    icon: 'Sparkles',
    venue: 'Padepokan Wushu Sumut, Medan',
    locationCity: 'Medan',
    athletesCount: 140,
    goldMedalsCount: 20,
    description: 'Lumbung medali Sumatera Utara, nomor seni Taolu dan laga Sanda.'
  },
  {
    id: 'cabor-10',
    name: 'Bola Basket',
    category: 'Beregu',
    icon: 'CircleDot',
    venue: 'GOR Angsapura Medan',
    locationCity: 'Medan',
    athletesCount: 264,
    goldMedalsCount: 4,
    description: 'Kompetisi basket 5x5 dan 3x3 putra dan putri.'
  },
  {
    id: 'cabor-11',
    name: 'Bola Voli',
    category: 'Beregu',
    icon: 'Radio',
    venue: 'Gedung Serbaguna Pemprovsu, Jl. William Iskandar',
    locationCity: 'Deli Serdang - Medan',
    athletesCount: 264,
    goldMedalsCount: 4,
    description: 'Pertandingan voli indoor putra dan putri antardaerah.'
  },
  {
    id: 'cabor-12',
    name: 'Dayung',
    category: 'Akuatik',
    icon: 'Anchor',
    venue: 'Perairan Danau Toba & Danau Siombak',
    locationCity: 'Toba & Medan',
    athletesCount: 110,
    goldMedalsCount: 16,
    description: 'Kano, Kayak, dan Dragon Boat beregu di perairan Sumatera Utara.'
  }
];

export const INITIAL_VENUES: Venue[] = [
  {
    id: 'ven-1',
    name: 'Stadion Utama Sumatera Utara',
    location: 'Kawasan Sport Centre Batang Kuis',
    city: 'Deli Serdang',
    caborHosted: ['Sepak Bola (Final)', 'Atletik', 'Upacara Penutupan'],
    capacity: '25.750 Kursi',
    mapUrl: 'https://maps.google.com/?q=Stadion+Utama+Sumatera+Utara+Batang+Kuis'
  },
  {
    id: 'ven-2',
    name: 'Gedung Serbaguna Pemprovsu',
    location: 'Jl. William Iskandar No. 9, Kenangan Baru',
    city: 'Medan - Deli Serdang',
    caborHosted: ['Bola Voli', 'Senam', 'Judo'],
    capacity: '10.000 Penonton',
    mapUrl: 'https://maps.google.com/?q=Gedung+Serbaguna+Pemprov+Sumut'
  },
  {
    id: 'ven-3',
    name: 'GOR Mini Dispora Sumatera Utara',
    location: 'Kompleks Dispora Sumut, Jl. William Iskandar',
    city: 'Medan',
    caborHosted: ['Futsal', 'Tarung Derajat'],
    capacity: '3.500 Penonton',
    mapUrl: 'https://maps.google.com/?q=Dispora+Sumatera+Utara'
  },
  {
    id: 'ven-4',
    name: 'Kolam Renang Selayang',
    location: 'Jl. Dr. Mansyur No. 71, Medan Selayang',
    city: 'Medan',
    caborHosted: ['Renang', 'Loncat Indah', 'Polo Air'],
    capacity: '2.000 Penonton',
    mapUrl: 'https://maps.google.com/?q=Kolam+Renang+Selayang+Medan'
  },
  {
    id: 'ven-5',
    name: 'GOR PBSI Sumatera Utara',
    location: 'Jl. Willem Iskandar, Percut Sei Tuan',
    city: 'Deli Serdang',
    caborHosted: ['Bulu Tangkis'],
    capacity: '2.500 Penonton',
    mapUrl: 'https://maps.google.com/?q=GOR+PBSI+Sumatera+Utara'
  },
  {
    id: 'ven-6',
    name: 'Gelanggang Remaja Kota Medan',
    location: 'Jl. Sutomo No. 4, Gaharu, Medan Timur',
    city: 'Medan',
    caborHosted: ['Pencak Silat', 'Tinju'],
    capacity: '3.000 Penonton',
    mapUrl: 'https://maps.google.com/?q=Gelanggang+Remaja+Medan'
  }
];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Pembukaan Spektakuler PORPROVSU XII: Bersatu Mewujudkan Prestasi Emas Sumatera Utara',
    slug: 'pembukaan-spektakuler-porprovsu-sumut',
    excerpt: '33 Kontingen Kabupaten dan Kota berparade meriah di hadapan puluhan ribu penonton di Stadion Utama Sumatera Utara.',
    content: 'Pekan Olahraga Provinsi Sumatera Utara (PORPROVSU) resmi dibuka. Ribuan atlet muda berbakat dari seluruh kabupaten dan kota siap bersaing secara sportif memperebutkan supremasi tertinggi di tanah Sumatera Utara.',
    category: 'Utama',
    date: '08 Desember 2026',
    author: 'Humas Panitia PORPROVSU',
    image: ASSETS.logoJpeg,
    readTime: '3 Menit'
  },
  {
    id: 'news-2',
    title: 'Kota Medan Memimpin Klasemen Sementara, Deli Serdang dan Binjai Membayangi Ketat',
    slug: 'kota-medan-kokoh-puncak-klasemen-porprovsu',
    excerpt: 'Dominasi di cabang atletik, renang, dan wushu menjaga posisi kontingen Kota Medan di puncak peringkat medali.',
    content: 'Persaingan perolehan medali PORPROVSU XII berlangsung sengit. Kota Medan saat ini kokoh di puncak dengan 84 medali emas, dibuntuti Kabupaten Deli Serdang (20 emas) dan Kota Binjai (18 emas).',
    category: 'Pertandingan',
    date: '08 Desember 2026',
    author: 'Tim Liputan Porprovsu',
    image: ASSETS.logo,
    readTime: '4 Menit'
  },
  {
    id: 'news-3',
    title: 'Atlet Pelari Karo Pecahkan Rekor Lari 100m Putra di Stadion Utama Sumatera Utara',
    slug: 'pelari-karo-pecahkan-rekor-100m',
    excerpt: 'Catatan waktu 10.38 detik memastikan medali emas atletik menjadi milik kontingen Kabupaten Karo.',
    content: 'Lintasan atletik Stadion Utama Sumut di Batang Kuis menjadi saksi lahirnya rekor baru nomor lari cepat 100 meter putra. Pelatih dan kontingen menyambut penuh suka cita hasil pembinaan atlet daerah.',
    category: 'Prestasi',
    date: '08 Desember 2026',
    author: 'Tim Teknis KONI Sumut',
    image: ASSETS.logoJpeg,
    readTime: '2 Menit'
  },
  {
    id: 'news-4',
    title: 'Kepulauan Nias Ukir Sejarah Raih Emas Pertama di Cabang Taekwondo Kyorugi',
    slug: 'nias-raih-emas-taekwondo',
    excerpt: 'Teguh Pratama Zebua dari Kota Gunungsitoli mempersembahkan medali emas perdana setelah laga final dramatis.',
    content: 'Pemerataan prestasi olahraga Sumatera Utara kian nyata setelah atlet asal Kepulauan Nias sukses menembus podium tertinggi pada cabang olahraga bela diri Taekwondo kelas Under 68 kg putra.',
    category: 'Inspirasi',
    date: '07 Desember 2026',
    author: 'Media Center PORPROVSU',
    image: ASSETS.logo,
    readTime: '3 Menit'
  }
];
