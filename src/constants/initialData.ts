import { MedalStanding, MatchSchedule, SportBranch, NewsArticle, Venue, Athlete, Coach } from '../types';
import { ASSETS } from '../assets';

// 33 Kabupaten / Kota Sumatera Utara + Metadata Logo/Lambang Daerah
export const INITIAL_MEDALS: MedalStanding[] = [
  { id: '1', rank: 1, contingent: 'Kota Medan', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'MDN', emblemInitials: 'MDN', badgeBg: '#1E3A8A', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '2', rank: 2, contingent: 'Kabupaten Deli Serdang', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'DS', emblemInitials: 'DS', badgeBg: '#065F46', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '3', rank: 3, contingent: 'Kota Binjai', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'BNJ', emblemInitials: 'BNJ', badgeBg: '#7C2D12', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '4', rank: 4, contingent: 'Kabupaten Karo', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'KAR', emblemInitials: 'KAR', badgeBg: '#831843', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '5', rank: 5, contingent: 'Kabupaten Asahan', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'ASH', emblemInitials: 'ASH', badgeBg: '#1E293B', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '6', rank: 6, contingent: 'Kota Pematangsiantar', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'PMS', emblemInitials: 'PMS', badgeBg: '#312E81', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '7', rank: 7, contingent: 'Kabupaten Simalungun', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'SML', emblemInitials: 'SML', badgeBg: '#064E3B', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '8', rank: 8, contingent: 'Kabupaten Serdang Bedagai', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'SER', emblemInitials: 'SER', badgeBg: '#713F12', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '9', rank: 9, contingent: 'Kabupaten Toba', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'TOB', emblemInitials: 'TOB', badgeBg: '#155E75', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '10', rank: 10, contingent: 'Kabupaten Labuhanbatu', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'LBB', emblemInitials: 'LBB', badgeBg: '#4C1D95', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '11', rank: 11, contingent: 'Kabupaten Dairi', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'DAI', emblemInitials: 'DAI', badgeBg: '#14532D', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '12', rank: 12, contingent: 'Kota Tanjungbalai', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'TJB', emblemInitials: 'TJB', badgeBg: '#1E3E62', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '13', rank: 13, contingent: 'Kota Tebing Tinggi', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'TBT', emblemInitials: 'TBT', badgeBg: '#3F3F46', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '14', rank: 14, contingent: 'Kabupaten Langkat', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'LKT', emblemInitials: 'LKT', badgeBg: '#047857', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '15', rank: 15, contingent: 'Kota Padangsidimpuan', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'PSP', emblemInitials: 'PSP', badgeBg: '#854D0E', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '16', rank: 16, contingent: 'Kabupaten Tapanuli Utara', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'TAP', emblemInitials: 'TAP', badgeBg: '#1E40AF', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '17', rank: 17, contingent: 'Kabupaten Samosir', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'SMS', emblemInitials: 'SMS', badgeBg: '#0E7490', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '18', rank: 18, contingent: 'Kota Sibolga', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'SBG', emblemInitials: 'SBG', badgeBg: '#0284C7', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '19', rank: 19, contingent: 'Kabupaten Batubara', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'BTR', emblemInitials: 'BTR', badgeBg: '#475569', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '20', rank: 20, contingent: 'Kabupaten Humbang Hasundutan', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'HMB', emblemInitials: 'HMB', badgeBg: '#15803D', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '21', rank: 21, contingent: 'Kabupaten Nias', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'NIS', emblemInitials: 'NIS', badgeBg: '#B45309', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '22', rank: 22, contingent: 'Kota Gunungsitoli', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'GNS', emblemInitials: 'GNS', badgeBg: '#0369A1', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '23', rank: 23, contingent: 'Kabupaten Mandailing Natal', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'MND', emblemInitials: 'MND', badgeBg: '#991B1B', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '24', rank: 24, contingent: 'Kabupaten Labuhanbatu Utara', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'LBU', emblemInitials: 'LBU', badgeBg: '#5B21B6', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '25', rank: 25, contingent: 'Kabupaten Labuhanbatu Selatan', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'LBS', emblemInitials: 'LBS', badgeBg: '#6B21A8', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '26', rank: 26, contingent: 'Kabupaten Pakpak Bharat', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'PKP', emblemInitials: 'PKP', badgeBg: '#166534', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '27', rank: 27, contingent: 'Kabupaten Tapanuli Selatan', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'TSL', emblemInitials: 'TSL', badgeBg: '#1E3A8A', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '28', rank: 28, contingent: 'Kabupaten Tapanuli Tengah', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'TTG', emblemInitials: 'TTG', badgeBg: '#0284C7', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '29', rank: 29, contingent: 'Kabupaten Padang Lawas', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'PDL', emblemInitials: 'PDL', badgeBg: '#92400E', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '30', rank: 30, contingent: 'Kabupaten Padang Lawas Utara', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'PLU', emblemInitials: 'PLU', badgeBg: '#78350F', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '31', rank: 31, contingent: 'Kabupaten Nias Selatan', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'NSS', emblemInitials: 'NSS', badgeBg: '#C2410C', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '32', rank: 32, contingent: 'Kabupaten Nias Utara', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'NSU', emblemInitials: 'NSU', badgeBg: '#EA580C', badgeColor: '#FFFFFF', athletesTotal: 0 },
  { id: '33', rank: 33, contingent: 'Kabupaten Nias Barat', gold: 0, silver: 0, bronze: 0, total: 0, regionCode: 'NSB', emblemInitials: 'NSB', badgeBg: '#D97706', badgeColor: '#FFFFFF', athletesTotal: 0 },
];

// Data Atlet dikosongkan sesuai ketentuan: hanya dapat diisi oleh KONI Kab/Kota masing-masing di portal koni-daerah/
export const INITIAL_ATHLETES: Athlete[] = [];

export const INITIAL_COACHES: Coach[] = [];

export const INITIAL_SCHEDULES: MatchSchedule[] = [
  {
    id: 'sch-1',
    cabor: 'Sepak Bola',
    category: 'Putra',
    stage: 'Babak Penyisihan - Penentuan',
    teamA: 'Kota Medan',
    teamB: 'Kab. Deli Serdang',
    scoreA: '-',
    scoreB: '-',
    venue: 'Stadion Utama Sumatera Utara (Sport Centre Batang Kuis)',
    date: '2026-12-01',
    time: '15:30 WIB',
    status: 'UPCOMING',
    notes: 'Laga pembuka di Stadion Utama Sumut.'
  },
  {
    id: 'sch-2',
    cabor: 'Futsal',
    category: 'Putra',
    stage: 'Penyisihan Grup',
    teamA: 'Kab. Karo',
    teamB: 'Kota Pematangsiantar',
    scoreA: '-',
    scoreB: '-',
    venue: 'GOR Serbaguna (GSG) Pancing, Medan / Deli Serdang',
    date: '2026-12-02',
    time: '10:00 WIB',
    status: 'UPCOMING',
  },
  {
    id: 'sch-3',
    cabor: 'Catur',
    category: 'Catur Standar & Cepat',
    stage: 'Babak I - VII',
    teamA: 'Seluruh Kontingen',
    teamB: '33 Kab/Kota',
    venue: 'Hotel Manna Pematangsiantar',
    date: '2026-12-03',
    time: '09:00 WIB',
    status: 'UPCOMING',
    notes: 'Berlangsung 3–7 Desember 2026 di klaster Pematangsiantar.'
  },
  {
    id: 'sch-4',
    cabor: 'Bola Voli Pasir',
    category: 'Putra & Putri',
    stage: 'Penyisihan Grup',
    teamA: 'Kontingen Daerah',
    teamB: 'Kontingen Daerah',
    venue: 'Padepokan Pelita VC, Jl. Melanthon Siregar, Pematangsiantar',
    date: '2026-12-01',
    time: '08:30 WIB',
    status: 'UPCOMING',
    notes: 'Berlangsung 1–7 Desember 2026.'
  },
  {
    id: 'sch-5',
    cabor: 'Judo',
    category: 'Semua Kelas',
    stage: 'Penyisihan & Final',
    teamA: 'Seluruh Kontingen',
    teamB: '33 Kab/Kota',
    venue: 'GOR Lantai 4 Suzuya Merdeka Mall, Pematangsiantar',
    date: '2026-12-07',
    time: '09:00 WIB',
    status: 'UPCOMING',
    notes: 'Berlangsung 7–8 Desember 2026.'
  },
  {
    id: 'sch-6',
    cabor: 'Akuatik / Renang',
    category: 'Gaya Bebas, Dada, Punggung, Kupu-kupu',
    stage: 'Penyisihan & Final Waktu',
    teamA: 'Seluruh Kontingen',
    teamB: '33 Kab/Kota',
    venue: 'Kolam Renang Selayang, Jl. Dr. Mansyur Medan',
    date: '2026-12-04',
    time: '08:00 WIB',
    status: 'UPCOMING',
  }
];

// 30 Cabang Olahraga Resmi PORPROVSU XII 2026 (28 Pengprov Cabor) sesuai porprovsumut.com
export const INITIAL_CABOR: SportBranch[] = [
  { id: 'cabor-1', name: 'Sepak Bola', category: 'Beregu', icon: 'Trophy', venue: 'Stadion Utama Sumatera Utara (Sport Centre Batang Kuis)', locationCity: 'Kab. Deli Serdang', athletesCount: 0, goldMedalsCount: 2, description: 'Cabang olahraga sepak bola resmi PORPROVSU XII.' },
  { id: 'cabor-2', name: 'Futsal', category: 'Beregu', icon: 'Flame', venue: 'GOR Serbaguna (GSG) Pancing', locationCity: 'Medan / Deli Serdang', athletesCount: 0, goldMedalsCount: 2, description: 'Cabang olahraga futsal putra dan putri di bawah naungan Asosiasi Futsal/PSSI Sumut.' },
  { id: 'cabor-3', name: 'Bola Voli Indoor', category: 'Beregu', icon: 'Radio', venue: 'GOR Serbaguna (GSG) Pancing / Pemprovsu', locationCity: 'Deli Serdang', athletesCount: 0, goldMedalsCount: 2, description: 'Pertandingan bola voli indoor putra dan putri antarkabupaten/kota.' },
  { id: 'cabor-4', name: 'Bola Voli Pasir', category: 'Beregu', icon: 'Sun', venue: 'Padepokan Pelita VC, Jl. Melanthon Siregar, Gg. Cantik Manis', locationCity: 'Kota Pematangsiantar', athletesCount: 0, goldMedalsCount: 2, description: 'Diselenggarakan di klaster Kota Pematangsiantar (1–7 Desember 2026).' },
  { id: 'cabor-5', name: 'Atletik', category: 'Individu', icon: 'Activity', venue: 'Stadion Utama & Stadion Madya Utama Sumut (Batang Kuis)', locationCity: 'Kab. Deli Serdang', athletesCount: 0, goldMedalsCount: 42, description: 'Nomor lintasan lari, lompat, tolak peluru, dan lempar lembing.' },
  { id: 'cabor-6', name: 'Akuatik / Renang', category: 'Akuatik', icon: 'Waves', venue: 'Kolam Renang Selayang, Jl. Dr. Mansyur No. 71', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 38, description: 'Cabang akuatik gaya bebas, dada, punggung, kupu-kupu, dan estafet.' },
  { id: 'cabor-7', name: 'Pencak Silat', category: 'Bela Diri', icon: 'Shield', venue: 'Gelanggang Remaja / GOR Serbaguna Pancing', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 22, description: 'Kategori tanding berbagai kelas berat serta kategori seni tunggal, ganda, dan regu.' },
  { id: 'cabor-8', name: 'Karate', category: 'Bela Diri', icon: 'Award', venue: 'Gedung Serbaguna Pancing / Unimed', locationCity: 'Deli Serdang', athletesCount: 0, goldMedalsCount: 17, description: 'Pertandingan nomor Kata dan Kumite di bawah naungan FORKI Sumut.' },
  { id: 'cabor-9', name: 'Taekwondo', category: 'Bela Diri', icon: 'Crosshair', venue: 'Martial Arts Arena / GOR Medan - Deli Serdang', locationCity: 'Medan / Deli Serdang', athletesCount: 0, goldMedalsCount: 16, description: 'Kompetisi Kyorugi (tanding) dan Poomsae (jurus) resmi TI Sumut.' },
  { id: 'cabor-10', name: 'Wushu', category: 'Bela Diri', icon: 'Sparkles', venue: 'GOR Serbaguna Pancing / Padepokan Wushu Sumut', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 20, description: 'Nomor seni Taolu dan pertarungan Sanda.' },
  { id: 'cabor-11', name: 'Catur', category: 'Individu', icon: 'Compass', venue: 'Hotel Manna Pematangsiantar', locationCity: 'Kota Pematangsiantar', athletesCount: 0, goldMedalsCount: 12, description: 'Catur standar, cepat, dan kilat di klaster Pematangsiantar (3–7 Desember 2026).' },
  { id: 'cabor-12', name: 'Bulu Tangkis', category: 'Individu', icon: 'Zap', venue: 'GOR Serbaguna Pancing / GOR PBSI Sumut', locationCity: 'Deli Serdang', athletesCount: 0, goldMedalsCount: 7, description: 'Nomor tunggal, ganda, dan beregu putra/putri PBSI Sumut.' },
  { id: 'cabor-13', name: 'Tenis Meja', category: 'Individu', icon: 'Target', venue: 'GOR Pancing / Arena Tenis Meja Medan', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 7, description: 'Nomor tunggal, ganda, ganda campuran, dan beregu PTMSI.' },
  { id: 'cabor-14', name: 'Tinju', category: 'Bela Diri', icon: 'Shield', venue: 'Gelanggang Remaja / Arena Tinju Medan', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 14, description: 'Tinju amatir kelas putra dan putri di bawah naungan PERTINA Sumut.' },
  { id: 'cabor-15', name: 'Billiard', category: 'Akurasi', icon: 'CircleDot', venue: 'Arena Biliar Pancing / Medan', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 14, description: 'Nomor Pool, Carom, dan Snooker resmi POBSI Sumut.' },
  { id: 'cabor-16', name: 'Angkat Besi', category: 'Individu', icon: 'Dumbbell', venue: 'Gedung PABBSI / Stadion Madya Sumut', locationCity: 'Medan / Deli Serdang', athletesCount: 0, goldMedalsCount: 14, description: 'Kategori Snatch dan Clean & Jerk berbagai kelas berat PABSI.' },
  { id: 'cabor-17', name: 'Angkat Berat', category: 'Individu', icon: 'Dumbbell', venue: 'Gedung PABBSI / Medan Helvetia', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 12, description: 'Nomor Squat, Bench Press, dan Deadlift resmi PABERSI Sumut.' },
  { id: 'cabor-18', name: 'Binaraga', category: 'Individu', icon: 'Award', venue: 'Gedung Astaka Disporasu, Jl. Willem Iskandar', locationCity: 'Kab. Deli Serdang', athletesCount: 0, goldMedalsCount: 8, description: 'Cabang binaraga dan men fitness resmi PBFI Sumut di Gedung Astaka.' },
  { id: 'cabor-19', name: 'Gulat', category: 'Bela Diri', icon: 'Shield', venue: 'GOR Serbaguna / Martial Arts Arena Sumut', locationCity: 'Deli Serdang', athletesCount: 0, goldMedalsCount: 18, description: 'Gaya Bebas (Freestyle) dan Gaya Grego-Romawi PGSI Sumut.' },
  { id: 'cabor-20', name: 'Tarung Derajat', category: 'Bela Diri', icon: 'Flame', venue: 'GOR Mini Dispora / Pancing', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 15, description: 'Seni bela diri asli Indonesia nomor Tarung dan Seni Gerak (KODRAT).' },
  { id: 'cabor-21', name: 'Muaythai', category: 'Bela Diri', icon: 'Zap', venue: 'GOR Baru Jl. Danau Puso Km 18 / GOR Rambung', locationCity: 'Kota Binjai', athletesCount: 0, goldMedalsCount: 14, description: 'Diselenggarakan di wilayah klaster Kota Binjai.' },
  { id: 'cabor-22', name: 'Kickboxing', category: 'Bela Diri', icon: 'Flame', venue: 'GOR Baru Jl. Danau Puso Km 18 / GOR Rambung', locationCity: 'Kota Binjai', athletesCount: 0, goldMedalsCount: 12, description: 'Nomor Ring Sports dan Tatami Sports di klaster Kota Binjai.' },
  { id: 'cabor-23', name: 'Sambo', category: 'Bela Diri', icon: 'Shield', venue: 'GOR Suzuya Merdeka Mall', locationCity: 'Kota Pematangsiantar', athletesCount: 0, goldMedalsCount: 14, description: 'Kategori Sport Sambo dan Combat Sambo (29 Nov – 1 Des 2026).' },
  { id: 'cabor-24', name: 'Judo', category: 'Bela Diri', icon: 'Award', venue: 'GOR Lantai 4 Suzuya Merdeka Mall', locationCity: 'Kota Pematangsiantar', athletesCount: 0, goldMedalsCount: 16, description: 'Nomor Nage-no-kata dan tanding berbagai kelas berat (7–8 Des 2026).' },
  { id: 'cabor-25', name: 'Sepak Takraw', category: 'Beregu', icon: 'Activity', venue: 'GOR Baru Jl. Danau Puso Km 18 / GOR Rambung', locationCity: 'Kota Binjai', athletesCount: 0, goldMedalsCount: 6, description: 'Nomor Tim, Regu, dan Double Event di klaster Kota Binjai.' },
  { id: 'cabor-26', name: 'Petanque', category: 'Akurasi', icon: 'Target', venue: 'Lapangan Taman Cadika / Sport Centre', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 11, description: 'Nomor Shooting, Single, Double, dan Triple FOPI Sumut.' },
  { id: 'cabor-27', name: 'Drumband', category: 'Beregu', icon: 'Radio', venue: 'Stadion Madya Utama Sumatera Utara (Batang Kuis)', locationCity: 'Kab. Deli Serdang', athletesCount: 0, goldMedalsCount: 8, description: 'Lomba Baris Berbaris (LBB), Ketahanan dan Ketepatan Berbaris (LKKB), dan Unjuk Gelar.' },
  { id: 'cabor-28', name: 'Bridge', category: 'Akurasi', icon: 'Compass', venue: 'Arena Bridge / Hotel Medan', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 6, description: 'Olahraga pikiran beregu dan pasangan GABSI Sumut.' },
  { id: 'cabor-29', name: 'Gateball', category: 'Akurasi', icon: 'Target', venue: 'Lapangan Taman Cadika / Kebun Bunga', locationCity: 'Kota Medan', athletesCount: 0, goldMedalsCount: 8, description: 'Nomor Single, Double, Triple, dan Beregu PERGATSI Sumut.' },
  { id: 'cabor-30', name: 'Menembak', category: 'Akurasi', icon: 'Crosshair', venue: 'Lapangan Tembak Perbakin Sumut', locationCity: 'Deli Serdang / Medan', athletesCount: 0, goldMedalsCount: 16, description: 'Nomor Air Rifle, Air Pistol, dan Target Perbakin Sumut.' }
];

// Lokasi Venue Resmi PORPROVSU XII 2026 (diambil & disesuaikan dari data porprovsumut.com)
export const INITIAL_VENUES: Venue[] = [
  {
    id: 'ven-1',
    name: 'Stadion Utama Sumatera Utara',
    location: 'Kawasan Sport Centre Sumatera Utara, Batang Kuis',
    city: 'Kab. Deli Serdang',
    caborHosted: ['Sepak Bola', 'Atletik', 'Seremoni Resmi'],
    capacity: '25.750 Kursi',
    mapUrl: 'https://maps.google.com/?q=Stadion+Utama+Sumatera+Utara+Batang+Kuis'
  },
  {
    id: 'ven-2',
    name: 'Stadion Madya Utama Sumatera Utara',
    location: 'Kawasan Sport Centre Sumatera Utara, Batang Kuis',
    city: 'Kab. Deli Serdang',
    caborHosted: ['Atletik', 'Drumband'],
    capacity: '5.000 Penonton',
    mapUrl: 'https://maps.google.com/?q=Sport+Centre+Sumatera+Utara+Batang+Kuis'
  },
  {
    id: 'ven-3',
    name: 'GOR Serbaguna (GSG) Pancing & Astaka Disporasu',
    location: 'Jl. Willem Iskandar / Pancing, Kenangan Baru, Percut Sei Tuan',
    city: 'Medan - Deli Serdang',
    caborHosted: ['Futsal', 'Bola Voli Indoor', 'Bulu Tangkis', 'Karate', 'Wushu', 'Binaraga', 'Gulat'],
    capacity: '10.000 Penonton',
    mapUrl: 'https://maps.google.com/?q=Gedung+Serbaguna+Pemprov+Sumut+Pancing'
  },
  {
    id: 'ven-4',
    name: 'Kolam Renang Selayang',
    location: 'Jl. Dr. Mansyur No. 71, PB Selayang I, Medan Selayang',
    city: 'Kota Medan',
    caborHosted: ['Akuatik / Renang'],
    capacity: '2.000 Penonton',
    mapUrl: 'https://maps.google.com/?q=Kolam+Renang+Selayang+Medan'
  },
  {
    id: 'ven-5',
    name: 'Taman Cadika & Stadion Kebun Bunga',
    location: 'Jl. Karya Wisata (Cadika) & Jl. Candi Borobudur (Kebun Bunga)',
    city: 'Kota Medan',
    caborHosted: ['Petanque', 'Gateball', 'Fasilitas Pendukung Pemko Medan'],
    capacity: 'Terbuka',
    mapUrl: 'https://maps.google.com/?q=Taman+Cadika+Medan'
  },
  {
    id: 'ven-6',
    name: 'GOR Mini Dispora & Gelanggang Remaja Medan',
    location: 'Jl. William Iskandar & Jl. Sutomo No. 4 Medan',
    city: 'Kota Medan',
    caborHosted: ['Pencak Silat', 'Tinju', 'Tarung Derajat', 'Tenis Meja', 'Taekwondo'],
    capacity: '3.500 Penonton',
    mapUrl: 'https://maps.google.com/?q=Gelanggang+Remaja+Medan'
  },
  {
    id: 'ven-7',
    name: 'GOR Baru Jl. Danau Puso & GOR Rambung Binjai',
    location: 'Jl. Danau Puso Km 18 & Kawasan GOR Rambung',
    city: 'Kota Binjai',
    caborHosted: ['Sepak Takraw', 'Kickboxing', 'Muaythai'],
    capacity: '3.000 Penonton',
    mapUrl: 'https://maps.google.com/?q=GOR+Rambung+Binjai'
  },
  {
    id: 'ven-8',
    name: 'GOR Suzuya Merdeka Mall (Lantai 4)',
    location: 'Jl. Merdeka, Proklamasi, Siantar Barat',
    city: 'Kota Pematangsiantar',
    caborHosted: ['Judo (7–8 Des)', 'Sambo (29 Nov–1 Des)'],
    capacity: '2.000 Penonton',
    mapUrl: 'https://maps.google.com/?q=Suzuya+Merdeka+Mall+Pematangsiantar'
  },
  {
    id: 'ven-9',
    name: 'Hotel Manna Pematangsiantar',
    location: 'Jl. Sisingamangaraja, Kota Pematangsiantar',
    city: 'Kota Pematangsiantar',
    caborHosted: ['Catur (3–7 Des)'],
    capacity: '500 Kursi',
    mapUrl: 'https://maps.google.com/?q=Hotel+Manna+Pematangsiantar'
  },
  {
    id: 'ven-10',
    name: 'Padepokan Pelita VC Pematangsiantar',
    location: 'Jl. Melanthon Siregar, Gg. Cantik Manis',
    city: 'Kota Pematangsiantar',
    caborHosted: ['Bola Voli Pasir (1–7 Des)'],
    capacity: '1.500 Penonton',
    mapUrl: 'https://maps.google.com/?q=Jalan+Melanthon+Siregar+Pematangsiantar'
  }
];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'PORPROVSU XII Resmi Digelar 1–9 Desember 2026 di 4 Daerah Tuan Rumah Sumatera Utara',
    slug: 'porprovsu-xii-digelar-desember-2026',
    excerpt: 'Kota Medan, Kabupaten Deli Serdang, Kota Binjai, dan Kota Pematangsiantar siap menyambut 30 cabang olahraga resmi.',
    content: 'Pekan Olahraga Provinsi Sumatera Utara (PORPROVSU) XII Tahun 2026 resmi dijadwalkan pada 1–9 Desember 2026. Sebanyak 30 cabang olahraga dari 28 Pengprov Cabor dipertandingkan secara tersebar di 4 klaster wilayah tuan rumah guna menjamin pemerataan kemeriahan olahraga se-Sumatera Utara.',
    category: 'Utama',
    date: '01 Desember 2026',
    author: 'Humas Panitia PORPROVSU',
    image: ASSETS.logoJpeg,
    readTime: '3 Menit'
  },
  {
    id: 'news-2',
    title: 'Stadion Utama & Stadion Madya Sumut Batang Kuis Siap Jadi Pusat Sepak Bola & Atletik',
    slug: 'stadion-utama-sumut-batang-kuis-siap',
    excerpt: 'Fasilitas berstandar internasional di Sport Centre Deli Serdang menjadi arena utama laga bergengsi PORPROVSU XII.',
    content: 'Kawasan Sport Centre Sumatera Utara di Batang Kuis, Deli Serdang ditetapkan sebagai tuan rumah untuk cabang olahraga Sepak Bola, Atletik, dan Drumband, sementara Gedung Astaka menjadi lokasi pertandingan Binaraga.',
    category: 'Venue',
    date: '01 Desember 2026',
    author: 'Tim Liputan Porprovsu',
    image: ASSETS.logo,
    readTime: '3 Menit'
  },
  {
    id: 'news-3',
    title: 'Kota Pematangsiantar Menjadi Tuan Rumah Catur, Judo, Sambo, dan Voli Pasir',
    slug: 'pematangsiantar-tuan-rumah-4-cabor',
    excerpt: 'Empat venue utama di Kota Pematangsiantar termasuk Hotel Manna, GOR Suzuya Merdeka Mall, dan Padepokan Pelita VC telah diverifikasi.',
    content: 'KONI Kota Pematangsiantar memastikan kesiapan lokasi penyelenggaraan empat cabang olahraga resmi PORPROVSU XII, yakni Catur di Hotel Manna, Judo dan Sambo di GOR Suzuya Merdeka Mall, serta Voli Pasir di Padepokan Pelita VC.',
    category: 'Klaster',
    date: '30 November 2026',
    author: 'Sekretariat Panitia',
    image: ASSETS.logoJpeg,
    readTime: '2 Menit'
  },
  {
    id: 'news-4',
    title: 'Kota Binjai Siapkan GOR Danau Puso & Rambung untuk Sepak Takraw, Muaythai, & Kickboxing',
    slug: 'binjai-siapkan-gor-danau-puso',
    excerpt: 'Tiga cabang olahraga penuh energi dan bela diri siap menyemarakkan klaster Kota Binjai.',
    content: 'Sebagai salah satu klaster resmi PORPROVSU XII 2026, Kota Binjai menghadirkan venue di GOR Baru Jl. Danau Puso Km 18 dan GOR Rambung untuk cabang olahraga Sepak Takraw, Muaythai, dan Kickboxing.',
    category: 'Klaster',
    date: '29 November 2026',
    author: 'Media Center PORPROVSU',
    image: ASSETS.logo,
    readTime: '2 Menit'
  }
];
