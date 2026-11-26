import {
  MedalStanding,
  MatchSchedule,
  SportBranch,
  NewsArticle,
  Venue,
  Athlete,
  Coach,
  GalleryItem,
} from '../types';
import { ASSETS } from '../assets';

export const EVENT_CONFIG = {
  title: 'PORPROVSU 2026',
  slogan: 'Pekan Olahraga Provinsi Sumatera Utara 2026',
  heroHeadline: 'Raih Prestasi, Junjung Sportivitas Menuju PON XXII',
  heroSubheadline:
    'Pusat Informasi Resmi Pertandingan, Hasil, dan Perolehan Medali Kontingen se-Sumatera Utara.',
  targetDate: '2026-12-01T09:00:00+07:00',
  openingVenue: 'Gedung Serbaguna Pancing, Medan',
};

export const INITIAL_MEDALS: MedalStanding[] = [
  {
    "id": "18",
    "rank": 1,
    "contingent": "Kab. Humbang Hasundutan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "HHA",
    "emblemInitials": "HHA",
    "badgeBg": "#0284C7"
  },
  {
    "id": "19",
    "rank": 2,
    "contingent": "Kab. Labuhan Batu",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "LBT",
    "emblemInitials": "LBT",
    "badgeBg": "#0F172A"
  },
  {
    "id": "20",
    "rank": 3,
    "contingent": "Kab. Labuhanbatu Selatan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "LBS",
    "emblemInitials": "LBS",
    "badgeBg": "#065F46"
  },
  {
    "id": "21",
    "rank": 4,
    "contingent": "Kab. Labuhanbatu Utara",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "LBU",
    "emblemInitials": "LBU",
    "badgeBg": "#1E3A8A"
  },
  {
    "id": "22",
    "rank": 5,
    "contingent": "Kab. Mandailing Natal",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "MDN",
    "emblemInitials": "MDN",
    "badgeBg": "#7C2D12"
  },
  {
    "id": "26",
    "rank": 6,
    "contingent": "Kab. Nias Barat",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "NBR",
    "emblemInitials": "NBR",
    "badgeBg": "#831843"
  },
  {
    "id": "24",
    "rank": 7,
    "contingent": "Kab. Nias Selatan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "NSE",
    "emblemInitials": "NSE",
    "badgeBg": "#312E81"
  },
  {
    "id": "25",
    "rank": 8,
    "contingent": "Kab. Nias Utara",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "NUT",
    "emblemInitials": "NUT",
    "badgeBg": "#064E3B"
  },
  {
    "id": "27",
    "rank": 9,
    "contingent": "Kab. Padang Lawas",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "PWL",
    "emblemInitials": "PWL",
    "badgeBg": "#713F12"
  },
  {
    "id": "28",
    "rank": 10,
    "contingent": "Kab. Padang Lawas Utara",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "PLU",
    "emblemInitials": "PLU",
    "badgeBg": "#155E75"
  },
  {
    "id": "29",
    "rank": 11,
    "contingent": "Kab. Pakpak Bharat",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "PKB",
    "emblemInitials": "PKB",
    "badgeBg": "#4C1D95"
  },
  {
    "id": "30",
    "rank": 12,
    "contingent": "Kab. Samosir",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "SAM",
    "emblemInitials": "SAM",
    "badgeBg": "#14532D"
  },
  {
    "id": "31",
    "rank": 13,
    "contingent": "Kab. Serdang Bedagai",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "SBG",
    "emblemInitials": "SBG",
    "badgeBg": "#1E3E62"
  },
  {
    "id": "4",
    "rank": 14,
    "contingent": "Kab. Simalungun",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "SIM",
    "emblemInitials": "SIM",
    "badgeBg": "#3F3F46"
  },
  {
    "id": "32",
    "rank": 15,
    "contingent": "Kab. Tapanuli Selatan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "TSE",
    "emblemInitials": "TSE",
    "badgeBg": "#047857"
  },
  {
    "id": "33",
    "rank": 16,
    "contingent": "Kab. Tapanuli Tengah",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "TTE",
    "emblemInitials": "TTE",
    "badgeBg": "#854D0E"
  },
  {
    "id": "9",
    "rank": 17,
    "contingent": "Kab. Tapanuli Utara",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "TUT",
    "emblemInitials": "TUT",
    "badgeBg": "#1E40AF"
  },
  {
    "id": "6",
    "rank": 18,
    "contingent": "Kabupaten Asahan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "ASH",
    "emblemInitials": "ASH",
    "badgeBg": "#9D174D"
  },
  {
    "id": "13",
    "rank": 19,
    "contingent": "Kabupaten Batubara",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "BBR",
    "emblemInitials": "BBR",
    "badgeBg": "#0F766E"
  },
  {
    "id": "10",
    "rank": 20,
    "contingent": "Kabupaten Dairi",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "DAI",
    "emblemInitials": "DAI",
    "badgeBg": "#4338CA"
  },
  {
    "id": "2",
    "rank": 21,
    "contingent": "Kabupaten Karo",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "KAR",
    "emblemInitials": "KAR",
    "badgeBg": "#B45309"
  },
  {
    "id": "8",
    "rank": 22,
    "contingent": "Kabupaten Langkat",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "LKT",
    "emblemInitials": "LKT",
    "badgeBg": "#1D4ED8"
  },
  {
    "id": "23",
    "rank": 23,
    "contingent": "Kabupaten Nias",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "NIA",
    "emblemInitials": "NIA",
    "badgeBg": "#15803D"
  },
  {
    "id": "11",
    "rank": 24,
    "contingent": "Kabupaten Toba",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "TOB",
    "emblemInitials": "TOB",
    "badgeBg": "#BE123C"
  },
  {
    "id": "7",
    "rank": 25,
    "contingent": "Kota Binjai",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "BIN",
    "emblemInitials": "BIN",
    "badgeBg": "#0369A1"
  },
  {
    "id": "14",
    "rank": 26,
    "contingent": "Kota Gunung Sitoli",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "GSI",
    "emblemInitials": "GSI",
    "badgeBg": "#581C87"
  },
  {
    "id": "1",
    "rank": 27,
    "contingent": "Kota Medan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "MED",
    "emblemInitials": "MED",
    "badgeBg": "#334155"
  },
  {
    "id": "15",
    "rank": 28,
    "contingent": "Kota Padang Sidempuan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "PSP",
    "emblemInitials": "PSP",
    "badgeBg": "#7C3AED"
  },
  {
    "id": "5",
    "rank": 29,
    "contingent": "Kota Pematangsiantar",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "PSI",
    "emblemInitials": "PSI",
    "badgeBg": "#0E7490"
  },
  {
    "id": "12",
    "rank": 30,
    "contingent": "Kota Sibolga",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "SIB",
    "emblemInitials": "SIB",
    "badgeBg": "#9A3412"
  },
  {
    "id": "17",
    "rank": 31,
    "contingent": "Kota Tanjung Balai",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "TBA",
    "emblemInitials": "TBA",
    "badgeBg": "#166534"
  },
  {
    "id": "16",
    "rank": 32,
    "contingent": "Kota Tebing Tinggi",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0,
    "regionCode": "TBT",
    "emblemInitials": "TBT",
    "badgeBg": "#1E293B"
  }
];

// Data atlet & pelatih dikosongkan sampai KONI Kab/Kota menginput melalui portal koni-daerah/
export const INITIAL_ATHLETES: Athlete[] = [];

export const INITIAL_COACHES: Coach[] = [];

export const INITIAL_SCHEDULES: MatchSchedule[] = [
  {
    "id": "sch-1",
    "cabor": "Upacara Pembukaan & Drumband",
    "caborIcon": "Award",
    "category": "Seremonial & Ekshibisi",
    "stage": "Opening Ceremony PORPROVSU XII",
    "teamA": "Kontingen Kab/Kota Sumatera Utara",
    "teamB": "Defile 32 Daerah",
    "venue": "Gedung Serbaguna Pancing, Medan",
    "date": "2026-12-01",
    "time": "09:00 WIB",
    "status": "UPCOMING"
  },
  {
    "id": "sch-2",
    "cabor": "Sepak Bola",
    "caborIcon": "Trophy",
    "category": "Tim Putra Group A",
    "stage": "Babak Penyisihan",
    "teamA": "Kota Medan",
    "teamB": "Kab. Asahan",
    "venue": "Stadion Utama Sumatera Utara",
    "date": "2026-12-02",
    "time": "15:30 WIB",
    "status": "UPCOMING"
  },
  {
    "id": "sch-3",
    "cabor": "Futsal",
    "caborIcon": "Trophy",
    "category": "Tim Putra Babak Utama",
    "stage": "Penyisihan Grup",
    "teamA": "Kota Binjai",
    "teamB": "Kota Pematangsiantar",
    "venue": "GOR Futsal Disporasu",
    "date": "2026-12-02",
    "time": "19:00 WIB",
    "status": "UPCOMING"
  },
  {
    "id": "sch-4",
    "cabor": "Atletik",
    "caborIcon": "Activity",
    "category": "Lari 100m Putra & Putri",
    "stage": "Babak Kualifikasi",
    "teamA": "Pelari Sprint Zona Timur",
    "teamB": "Pelari Sprint Zona Barat",
    "venue": "Stadion Madya Utama Sumatera Utara",
    "date": "2026-12-03",
    "time": "08:00 WIB",
    "status": "UPCOMING"
  },
  {
    "id": "sch-5",
    "cabor": "Renang",
    "caborIcon": "Waves",
    "category": "50m Gaya Bebas Putra",
    "stage": "Penyisihan & Final",
    "teamA": "Perenang Putra Kab/Kota",
    "teamB": "Seri 1 - Seri 4",
    "venue": "Kolam Renang Selayang",
    "date": "2026-12-03",
    "time": "09:30 WIB",
    "status": "UPCOMING"
  },
  {
    "id": "sch-6",
    "cabor": "Bulu Tangkis",
    "caborIcon": "Award",
    "category": "Beregu Putra",
    "stage": "Perempat Final",
    "teamA": "Kota Medan",
    "teamB": "Kab. Langkat",
    "venue": "GOR PBSI Sumut",
    "date": "2026-12-04",
    "time": "13:00 WIB",
    "status": "UPCOMING"
  },
  {
    "id": "sch-7",
    "cabor": "Pencak Silat",
    "caborIcon": "Shield",
    "category": "Tanding Kelas C Putra (55-60kg)",
    "stage": "Babak Semifinal",
    "teamA": "Pesilat Kontingen Unggulan",
    "teamB": "Kontingen Penantang",
    "venue": "GOR SERBAGUNA DISPORASU",
    "date": "2026-12-05",
    "time": "10:00 WIB",
    "status": "UPCOMING"
  },
  {
    "id": "sch-8",
    "cabor": "Bola Voli Indoor",
    "caborIcon": "Trophy",
    "category": "Tim Putra Group A",
    "stage": "Babak Utama",
    "teamA": "Kab. Karo",
    "teamB": "Kab. Simalungun",
    "venue": "GOR Bola Voli Indoor Sport Center",
    "date": "2026-12-06",
    "time": "16:00 WIB",
    "status": "UPCOMING"
  }
];

export const INITIAL_CABOR: SportBranch[] = [
  {
    "id": "cb-21",
    "name": "Angkat Berat",
    "category": "Individu",
    "icon": "Activity",
    "ikon": "🏆",
    "venue": "Komplek Sport Center Sumatera Utara",
    "locationCity": "Kota Medan & Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Angkat Berat pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di Komplek Sport Center Sumatera Utara.",
    "nomorDaftar": []
  },
  {
    "id": "cb-1",
    "name": "Sepak Bola",
    "category": "Beregu",
    "icon": "Trophy",
    "ikon": "⚽",
    "venue": "Stadion Mini Pancing",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 6,
    "description": "Cabang olahraga resmi Sepak Bola pada PORPROVSU XII 2026 dengan 6 nomor pertandingan di Stadion Mini Pancing.",
    "nomorDaftar": [
      "Tim Putra Group A",
      "Tim Putra Group B",
      "Tim Putri Group A",
      "Perempat Final Putra",
      "Semi Final Putra",
      "Final Putra"
    ]
  },
  {
    "id": "cb-2",
    "name": "Futsal",
    "category": "Beregu",
    "icon": "Trophy",
    "ikon": "⚽",
    "venue": "GOR Futsal Disporasu",
    "locationCity": "Kota Medan",
    "athletesCount": 0,
    "goldMedalsCount": 4,
    "description": "Cabang olahraga resmi Futsal pada PORPROVSU XII 2026 dengan 4 nomor pertandingan di GOR Futsal Disporasu.",
    "nomorDaftar": [
      "Tim Putra Babak Utama",
      "Tim Putri Babak Utama",
      "Semi Final Futsal Putra",
      "Final Futsal Putra"
    ]
  },
  {
    "id": "cb-3",
    "name": "Bola Voli Indoor",
    "category": "Beregu",
    "icon": "Trophy",
    "ikon": "🏐",
    "venue": "GOR Bola Voli Indoor Sport Center",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 4,
    "description": "Cabang olahraga resmi Bola Voli Indoor pada PORPROVSU XII 2026 dengan 4 nomor pertandingan di GOR Bola Voli Indoor Sport Center.",
    "nomorDaftar": [
      "Tim Putra Group A",
      "Tim Putra Group B",
      "Tim Putri Group A",
      "Final Voli Putra"
    ]
  },
  {
    "id": "cb-5",
    "name": "Renang",
    "category": "Akuatik",
    "icon": "Waves",
    "ikon": "🏊",
    "venue": "Kolam Renang Selayang",
    "locationCity": "Medan",
    "athletesCount": 0,
    "goldMedalsCount": 7,
    "description": "Cabang olahraga resmi Renang pada PORPROVSU XII 2026 dengan 7 nomor pertandingan di Kolam Renang Selayang.",
    "nomorDaftar": [
      "50m Gaya Bebas Putra",
      "50m Gaya Bebas Putri",
      "100m Gaya Bebas Putra",
      "50m Gaya Dada Putra",
      "100m Gaya Dada Putri",
      "50m Gaya Punggung Putra",
      "200m Gaya Ganti Putra"
    ]
  },
  {
    "id": "cb-6",
    "name": "Atletik",
    "category": "Individu",
    "icon": "Activity",
    "ikon": "🏃",
    "venue": "Stadion Madya Utama Sumatera Utara",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 10,
    "description": "Cabang olahraga resmi Atletik pada PORPROVSU XII 2026 dengan 10 nomor pertandingan di Stadion Madya Utama Sumatera Utara.",
    "nomorDaftar": [
      "Lari 100m Putra",
      "Lari 100m Putri",
      "Lari 200m Putra",
      "Lari 400m Putra",
      "Lari 800m Putra",
      "Lari Estafet 4x100m Putra",
      "Lompat Jauh Putra",
      "Lompat Tinggi Putra",
      "Lempar Lembing Putra",
      "Tolak Peluru Putra"
    ]
  },
  {
    "id": "cb-7",
    "name": "Pencak Silat",
    "category": "Bela Diri",
    "icon": "Shield",
    "ikon": "🥋",
    "venue": "GOR SERBAGUNA DISPORASU",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 6,
    "description": "Cabang olahraga resmi Pencak Silat pada PORPROVSU XII 2026 dengan 6 nomor pertandingan di GOR SERBAGUNA DISPORASU.",
    "nomorDaftar": [
      "Tanding Kelas A Putra (45-50kg)",
      "Tanding Kelas B Putra (50-55kg)",
      "Tanding Kelas C Putra (55-60kg)",
      "Tanding Kelas D Putra (60-65kg)",
      "Seni Tunggal Putra",
      "Seni Ganda Putra"
    ]
  },
  {
    "id": "cb-8",
    "name": "Taekwondo",
    "category": "Bela Diri",
    "icon": "Shield",
    "ikon": "🥋",
    "venue": "Martial Art Arena Sport Center",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 5,
    "description": "Cabang olahraga resmi Taekwondo pada PORPROVSU XII 2026 dengan 5 nomor pertandingan di Martial Art Arena Sport Center.",
    "nomorDaftar": [
      "Kyorugi Kelas 54kg Putra",
      "Kyorugi Kelas 58kg Putra",
      "Kyorugi Kelas 63kg Putra",
      "Poomsae Perorangan Putra",
      "Poomsae Perorangan Putri"
    ]
  },
  {
    "id": "cb-9",
    "name": "Karate",
    "category": "Bela Diri",
    "icon": "Shield",
    "ikon": "🥋",
    "venue": "Martial Art Arena Sport Center",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 5,
    "description": "Cabang olahraga resmi Karate pada PORPROVSU XII 2026 dengan 5 nomor pertandingan di Martial Art Arena Sport Center.",
    "nomorDaftar": [
      "Kata Perorangan Putra",
      "Kata Perorangan Putri",
      "Kumite -55kg Putra",
      "Kumite -60kg Putra",
      "Kumite -67kg Putra"
    ]
  },
  {
    "id": "cb-10",
    "name": "Catur",
    "category": "Akurasi",
    "icon": "Target",
    "ikon": "♟️",
    "venue": "Hotel Manna Pematang Siantar",
    "locationCity": "Kota Pematang Siantar",
    "athletesCount": 0,
    "goldMedalsCount": 5,
    "description": "Cabang olahraga resmi Catur pada PORPROVSU XII 2026 dengan 5 nomor pertandingan di Hotel Manna Pematang Siantar.",
    "nomorDaftar": [
      "Catur Perorangan Putra",
      "Catur Perorangan Putri",
      "Catur Cepat Putra",
      "Catur Kilat Putra",
      "Catur Beregu Putra"
    ]
  },
  {
    "id": "cb-11",
    "name": "Bulu Tangkis",
    "category": "Individu",
    "icon": "Award",
    "ikon": "🏸",
    "venue": "GOR PBSI Sumut",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 7,
    "description": "Cabang olahraga resmi Bulu Tangkis pada PORPROVSU XII 2026 dengan 7 nomor pertandingan di GOR PBSI Sumut.",
    "nomorDaftar": [
      "Tunggal Putra",
      "Tunggal Putri",
      "Ganda Putra",
      "Ganda Putri",
      "Ganda Campuran",
      "Beregu Putra",
      "Beregu Putri"
    ]
  },
  {
    "id": "cb-12",
    "name": "Tenis Meja",
    "category": "Individu",
    "icon": "Award",
    "ikon": "🏓",
    "venue": "Urban Community Park Kebun Bunga",
    "locationCity": "Kota Medan",
    "athletesCount": 0,
    "goldMedalsCount": 5,
    "description": "Cabang olahraga resmi Tenis Meja pada PORPROVSU XII 2026 dengan 5 nomor pertandingan di Urban Community Park Kebun Bunga.",
    "nomorDaftar": [
      "Tunggal Putra",
      "Tunggal Putri",
      "Ganda Putra",
      "Ganda Putri",
      "Ganda Campuran"
    ]
  },
  {
    "id": "cb-14",
    "name": "Tinju",
    "category": "Bela Diri",
    "icon": "Zap",
    "ikon": "🥊",
    "venue": "GOR Bola Basket Disporasu",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 4,
    "description": "Cabang olahraga resmi Tinju pada PORPROVSU XII 2026 dengan 4 nomor pertandingan di GOR Bola Basket Disporasu.",
    "nomorDaftar": [
      "Kelas Terbang (48-51kg) Putra",
      "Kelas Bantam (51-54kg) Putra",
      "Kelas Bulu (54-57kg) Putra",
      "Kelas Ringan (57-60kg) Putra"
    ]
  },
  {
    "id": "cb-15",
    "name": "Wushu",
    "category": "Bela Diri",
    "icon": "Shield",
    "ikon": "🥋",
    "venue": "GOR Veteran Disporasu",
    "locationCity": "Kota Medan",
    "athletesCount": 0,
    "goldMedalsCount": 5,
    "description": "Cabang olahraga resmi Wushu pada PORPROVSU XII 2026 dengan 5 nomor pertandingan di GOR Veteran Disporasu.",
    "nomorDaftar": [
      "Taolu Changquan Putra",
      "Taolu Nanquan Putra",
      "Sanda Kelas 48kg Putra",
      "Sanda Kelas 52kg Putra",
      "Sanda Kelas 48kg Putri"
    ]
  },
  {
    "id": "cb-16",
    "name": "Billiard",
    "category": "Akurasi",
    "icon": "Target",
    "ikon": "🎱",
    "venue": "GOR H. RAYATI SYAFRIN, KOMPLEK SPORT CENTER PANCING",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 4,
    "description": "Cabang olahraga resmi Billiard pada PORPROVSU XII 2026 dengan 4 nomor pertandingan di GOR H. RAYATI SYAFRIN, KOMPLEK SPORT CENTER PANCING.",
    "nomorDaftar": [
      "8-Ball Single Putra",
      "9-Ball Single Putra",
      "10-Ball Single Putra",
      "15-Ball Double Putra"
    ]
  },
  {
    "id": "cb-22",
    "name": "Binaraga",
    "category": "Individu",
    "icon": "Activity",
    "ikon": "🏆",
    "venue": "Gedung Astaka Disporasu",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Binaraga pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di Gedung Astaka Disporasu.",
    "nomorDaftar": []
  },
  {
    "id": "cb-18",
    "name": "Angkat Besi",
    "category": "Individu",
    "icon": "Activity",
    "ikon": "🏋️",
    "venue": "Griya Hotel Medan",
    "locationCity": "Kota Medan",
    "athletesCount": 0,
    "goldMedalsCount": 4,
    "description": "Cabang olahraga resmi Angkat Besi pada PORPROVSU XII 2026 dengan 4 nomor pertandingan di Griya Hotel Medan.",
    "nomorDaftar": [
      "Kelas 55kg Putra",
      "Kelas 61kg Putra",
      "Kelas 67kg Putra",
      "Kelas 49kg Putri"
    ]
  },
  {
    "id": "cb-23",
    "name": "Gulat",
    "category": "Bela Diri",
    "icon": "Shield",
    "ikon": "🏆",
    "venue": "GOR SERBAGUNA DISPORASU",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Gulat pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di GOR SERBAGUNA DISPORASU.",
    "nomorDaftar": []
  },
  {
    "id": "cb-24",
    "name": "Petanque",
    "category": "Akurasi",
    "icon": "Target",
    "ikon": "🏆",
    "venue": "Lapangan Petanque Sumut",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Petanque pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di Lapangan Petanque Sumut.",
    "nomorDaftar": []
  },
  {
    "id": "cb-20",
    "name": "Sepak Takraw",
    "category": "Beregu",
    "icon": "Trophy",
    "ikon": "⚽",
    "venue": "GOR Binjai Km 19",
    "locationCity": "Kota Binjai",
    "athletesCount": 0,
    "goldMedalsCount": 4,
    "description": "Cabang olahraga resmi Sepak Takraw pada PORPROVSU XII 2026 dengan 4 nomor pertandingan di GOR Binjai Km 19.",
    "nomorDaftar": [
      "Regu Putra",
      "Inter Regu Putra",
      "Double Event Putra",
      "Regu Putri"
    ]
  },
  {
    "id": "cb-25",
    "name": "Tarung Derajat",
    "category": "Bela Diri",
    "icon": "Shield",
    "ikon": "🏆",
    "venue": "GOR SERBAGUNA DISPORASU",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Tarung Derajat pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di GOR SERBAGUNA DISPORASU.",
    "nomorDaftar": []
  },
  {
    "id": "cb-26",
    "name": "Drumband",
    "category": "Beregu",
    "icon": "Award",
    "ikon": "🏆",
    "venue": "Stadion Madya Utama Sumatera Utara",
    "locationCity": "Kab. Deli Serdang",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Drumband pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di Stadion Madya Utama Sumatera Utara.",
    "nomorDaftar": []
  },
  {
    "id": "cb-27",
    "name": "Bridge",
    "category": "Akurasi",
    "icon": "Target",
    "ikon": "🏆",
    "venue": "Aula Hotel Dhaksina Medan",
    "locationCity": "Kota Medan",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Bridge pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di Aula Hotel Dhaksina Medan.",
    "nomorDaftar": []
  },
  {
    "id": "cb-28",
    "name": "Gateball",
    "category": "Akurasi",
    "icon": "Target",
    "ikon": "🏆",
    "venue": "Lapangan Pergatsi Sumut",
    "locationCity": "Kota Medan",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Gateball pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di Lapangan Pergatsi Sumut.",
    "nomorDaftar": []
  },
  {
    "id": "cb-29",
    "name": "Menembak",
    "category": "Akurasi",
    "icon": "Target",
    "ikon": "🏆",
    "venue": "Lapangan Tembak Perbakin Sumut",
    "locationCity": "Kota Medan",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Menembak pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di Lapangan Tembak Perbakin Sumut.",
    "nomorDaftar": []
  },
  {
    "id": "cb-30",
    "name": "Bola Voli Pasir",
    "category": "Beregu",
    "icon": "Trophy",
    "ikon": "🏆",
    "venue": "Padepokan Pelita VC",
    "locationCity": "Kota Pematang Siantar",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Bola Voli Pasir pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di Padepokan Pelita VC.",
    "nomorDaftar": []
  },
  {
    "id": "cb-31",
    "name": "Kickboxing",
    "category": "Bela Diri",
    "icon": "Zap",
    "ikon": "🏆",
    "venue": "GOR Rambung Kota Binjai",
    "locationCity": "Kota Binjai",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Kickboxing pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di GOR Rambung Kota Binjai.",
    "nomorDaftar": []
  },
  {
    "id": "cb-32",
    "name": "Muaythai",
    "category": "Bela Diri",
    "icon": "Zap",
    "ikon": "🏆",
    "venue": "GOR Rambung Kota Binjai",
    "locationCity": "Kota Binjai",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Muaythai pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di GOR Rambung Kota Binjai.",
    "nomorDaftar": []
  },
  {
    "id": "cb-33",
    "name": "Judo",
    "category": "Bela Diri",
    "icon": "Shield",
    "ikon": "🏆",
    "venue": "GOR Suzuya Mall Pematang Siantar",
    "locationCity": "Kota Pematang Siantar",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Judo pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di GOR Suzuya Mall Pematang Siantar.",
    "nomorDaftar": []
  },
  {
    "id": "cb-34",
    "name": "Sambo",
    "category": "Bela Diri",
    "icon": "Shield",
    "ikon": "🏆",
    "venue": "GOR Suzuya Mall Pematang Siantar",
    "locationCity": "Kota Pematang Siantar",
    "athletesCount": 0,
    "goldMedalsCount": 1,
    "description": "Cabang olahraga resmi Sambo pada PORPROVSU XII 2026 dengan 1 nomor pertandingan di GOR Suzuya Mall Pematang Siantar.",
    "nomorDaftar": []
  }
];

export const INITIAL_VENUES: Venue[] = [
  {
    "id": "v-1",
    "name": "Stadion Madya Utama Sumatera Utara",
    "location": "Kawasan Sport Centre Sumut, Batang Kuis, Deli Serdang",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Atletik",
      "Drumband"
    ],
    "capacity": "5.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Stadion+Madya+Utama+Sumatera+Utara+Kawasan+Sport+Centre+Sumut%2C+Batang+Kuis%2C+Deli+Serdang+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-3",
    "name": "Kolam Renang Selayang",
    "location": "Jl. Dr. Mansyur No. 71, Medan Selayang",
    "city": "Medan",
    "caborHosted": [
      "Renang"
    ],
    "capacity": "1.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kolam+Renang+Selayang+Jl.+Dr.+Mansyur+No.+71%2C+Medan+Selayang+Medan+Sumatera+Utara"
  },
  {
    "id": "v-7",
    "name": "Gedung Astaka Disporasu",
    "location": "Jl. William Willem Iskandar Pasar V, Medan Estate",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Binaraga"
    ],
    "capacity": "10.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Gedung+Astaka+Disporasu+Jl.+William+Willem+Iskandar+Pasar+V%2C+Medan+Estate+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-8",
    "name": "Martial Art Arena Sport Center",
    "location": "Sena, Batang Kuis, Deli Serdang Regency, North Sumatra 20372",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Taekwondo",
      "Karate"
    ],
    "capacity": "3.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Martial+Art+Arena+Sport+Center+Sena%2C+Batang+Kuis%2C+Deli+Serdang+Regency%2C+North+Sumatra+20372+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-9",
    "name": "GOR Bola Voli Indoor Sport Center",
    "location": "Sena, Batang Kuis, Deli Serdang Regency, North Sumatra 20372",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Bola Voli Indoor"
    ],
    "capacity": "5.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=GOR+Bola+Voli+Indoor+Sport+Center+Sena%2C+Batang+Kuis%2C+Deli+Serdang+Regency%2C+North+Sumatra+20372+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-10",
    "name": "Komplek Sport Center Desa Sena",
    "location": "Sena, Batang Kuis, Deli Serdang Regency, North Sumatra 20372",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Drumband"
    ],
    "capacity": "26.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Komplek+Sport+Center+Desa+Sena+Sena%2C+Batang+Kuis%2C+Deli+Serdang+Regency%2C+North+Sumatra+20372+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-11",
    "name": "GOR Veteran Disporasu",
    "location": "Jl. Veteran, Pandau Hilir, Kec. Medan Perjuangan, Kota Medan, Sumatera Utara 20232",
    "city": "Kota Medan",
    "caborHosted": [
      "Wushu"
    ],
    "capacity": "1.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=GOR+Veteran+Disporasu+Jl.+Veteran%2C+Pandau+Hilir%2C+Kec.+Medan+Perjuangan%2C+Kota+Medan%2C+Sumatera+Utara+20232+Kota+Medan+Sumatera+Utara"
  },
  {
    "id": "v-12",
    "name": "Stadion Mini Pancing",
    "location": "Jl. Williem Iskandar No.272, Medan Estate, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Sepak Bola"
    ],
    "capacity": "5.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Stadion+Mini+Pancing+Jl.+Williem+Iskandar+No.272%2C+Medan+Estate%2C+Kec.+Percut+Sei+Tuan%2C+Kabupaten+Deli+Serdang%2C+Sumatera+Utara+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-13",
    "name": "GOR Bola Basket Disporasu",
    "location": "Jl. Williem Iskandar, Kenangan Baru, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Tinju"
    ],
    "capacity": "500 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=GOR+Bola+Basket+Disporasu+Jl.+Williem+Iskandar%2C+Kenangan+Baru%2C+Kec.+Percut+Sei+Tuan%2C+Kabupaten+Deli+Serdang%2C+Sumatera+Utara+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-14",
    "name": "Lapangan Petanque Sumut",
    "location": "Jl. Williem Iskandar, Kenangan Baru, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Petanque"
    ],
    "capacity": "1.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lapangan+Petanque+Sumut+Jl.+Williem+Iskandar%2C+Kenangan+Baru%2C+Kec.+Percut+Sei+Tuan%2C+Kabupaten+Deli+Serdang%2C+Sumatera+Utara+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-15",
    "name": "GOR Futsal Disporasu",
    "location": "Jl. Williem Iskandar No.209, Kenangan Baru, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara",
    "city": "Kota Medan",
    "caborHosted": [
      "Futsal"
    ],
    "capacity": "7.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=GOR+Futsal+Disporasu+Jl.+Williem+Iskandar+No.209%2C+Kenangan+Baru%2C+Kec.+Percut+Sei+Tuan%2C+Kabupaten+Deli+Serdang%2C+Sumatera+Utara+Kota+Medan+Sumatera+Utara"
  },
  {
    "id": "v-16",
    "name": "Lapangan Tembak Perbakin Sumut",
    "location": "Jl. Beringin Raya No.1, Helvetia, Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20123",
    "city": "Kota Medan",
    "caborHosted": [
      "Menembak"
    ],
    "capacity": "200 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lapangan+Tembak+Perbakin+Sumut+Jl.+Beringin+Raya+No.1%2C+Helvetia%2C+Kec.+Medan+Helvetia%2C+Kota+Medan%2C+Sumatera+Utara+20123+Kota+Medan+Sumatera+Utara"
  },
  {
    "id": "v-17",
    "name": "GOR PBSI Sumut",
    "location": "Kenangan Baru, Percut Sei Tuan, Kab. Deli Serdang, Sumatera Utara",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Bulu Tangkis"
    ],
    "capacity": "700 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=GOR+PBSI+Sumut+Kenangan+Baru%2C+Percut+Sei+Tuan%2C+Kab.+Deli+Serdang%2C+Sumatera+Utara+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-18",
    "name": "Lapangan Pergatsi Sumut",
    "location": "Jl. KL. Yos Sudarso, Glugur Kota, Kec. Medan Bar., Kota Medan, Sumatera Utara",
    "city": "Kota Medan",
    "caborHosted": [
      "Gateball"
    ],
    "capacity": "3.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lapangan+Pergatsi+Sumut+Jl.+KL.+Yos+Sudarso%2C+Glugur+Kota%2C+Kec.+Medan+Bar.%2C+Kota+Medan%2C+Sumatera+Utara+Kota+Medan+Sumatera+Utara"
  },
  {
    "id": "v-21",
    "name": "Padepokan Pelita VC",
    "location": "JL. MELANTHON SIREGAR. GG. CANTIK MANIS, PEMATANGSIANTAR",
    "city": "Kota Pematang Siantar",
    "caborHosted": [
      "Bola Voli Pasir"
    ],
    "capacity": "200 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Padepokan+Pelita+VC+JL.+MELANTHON+SIREGAR.+GG.+CANTIK+MANIS%2C+PEMATANGSIANTAR+Kota+Pematang+Siantar+Sumatera+Utara"
  },
  {
    "id": "v-22",
    "name": "GOR Rambung Kota Binjai",
    "location": "Jl. Danau Poso No.46, Sumber Karya, Kec. Binjai Tim., Kota Binjai, Sumatera Utara 20735",
    "city": "Kota Binjai",
    "caborHosted": [
      "Kickboxing",
      "Muaythai"
    ],
    "capacity": "500 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=GOR+Rambung+Kota+Binjai+Jl.+Danau+Poso+No.46%2C+Sumber+Karya%2C+Kec.+Binjai+Tim.%2C+Kota+Binjai%2C+Sumatera+Utara+20735+Kota+Binjai+Sumatera+Utara"
  },
  {
    "id": "v-23",
    "name": "GOR Binjai Km 19",
    "location": "Jl. Danau Poso No.46, Sumber Karya, Kec. Binjai Tim., Kota Binjai, Sumatera Utara 20735",
    "city": "Kota Binjai",
    "caborHosted": [
      "Sepak Takraw"
    ],
    "capacity": "500 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=GOR+Binjai+Km+19+Jl.+Danau+Poso+No.46%2C+Sumber+Karya%2C+Kec.+Binjai+Tim.%2C+Kota+Binjai%2C+Sumatera+Utara+20735+Kota+Binjai+Sumatera+Utara"
  },
  {
    "id": "v-24",
    "name": "GOR Suzuya Mall Pematang Siantar",
    "location": "Jl. Sutomo No.24ABC, Proklamasi, Kec. Siantar Bar., Kota Pematang Siantar, Sumatera Utara 21111",
    "city": "Kota Pematang Siantar",
    "caborHosted": [
      "Judo",
      "Sambo"
    ],
    "capacity": "1.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=GOR+Suzuya+Mall+Pematang+Siantar+Jl.+Sutomo+No.24ABC%2C+Proklamasi%2C+Kec.+Siantar+Bar.%2C+Kota+Pematang+Siantar%2C+Sumatera+Utara+21111+Kota+Pematang+Siantar+Sumatera+Utara"
  },
  {
    "id": "v-25",
    "name": "Hotel Manna Pematang Siantar",
    "location": "Jl. Medan, No. 88, Siantar Utara, Jl. Ke Medan No.88, Naga Pita., Kec. Siantar Martoba, Kota Pematang Siantar, Sumatera Utara 21137",
    "city": "Kota Pematang Siantar",
    "caborHosted": [
      "Catur"
    ],
    "capacity": "200 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hotel+Manna+Pematang+Siantar+Jl.+Medan%2C+No.+88%2C+Siantar+Utara%2C+Jl.+Ke+Medan+No.88%2C+Naga+Pita.%2C+Kec.+Siantar+Martoba%2C+Kota+Pematang+Siantar%2C+Sumatera+Utara+21137+Kota+Pematang+Siantar+Sumatera+Utara"
  },
  {
    "id": "v-26",
    "name": "Stadion Utama Sumatera Utara",
    "location": "Jl. Sultan Serdang, Sena, Kec. Batang Kuis, Kabupaten Deli Serdang, Sumatera Utara 20372",
    "city": "Kota Medan",
    "caborHosted": [
      "Sepak Bola"
    ],
    "capacity": "26.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Stadion+Utama+Sumatera+Utara+Jl.+Sultan+Serdang%2C+Sena%2C+Kec.+Batang+Kuis%2C+Kabupaten+Deli+Serdang%2C+Sumatera+Utara+20372+Kota+Medan+Sumatera+Utara"
  },
  {
    "id": "v-27",
    "name": "GOR H. RAYATI SYAFRIN, KOMPLEK SPORT CENTER PANCING",
    "location": "Duta Makmur, Kenangan Baru, Percut Sei Tuan, Deli Serdang Regency, North Sumatra 20371",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Billiard"
    ],
    "capacity": "100 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=GOR+H.+RAYATI+SYAFRIN%2C+KOMPLEK+SPORT+CENTER+PANCING+Duta+Makmur%2C+Kenangan+Baru%2C+Percut+Sei+Tuan%2C+Deli+Serdang+Regency%2C+North+Sumatra+20371+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-28",
    "name": "GOR SERBAGUNA DISPORASU",
    "location": "Jl. Williem Iskandar No.9, Kenangan Baru, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara 20371",
    "city": "Kab. Deli Serdang",
    "caborHosted": [
      "Gulat",
      "Tarung Derajat",
      "Pencak Silat"
    ],
    "capacity": "7.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=GOR+SERBAGUNA+DISPORASU+Jl.+Williem+Iskandar+No.9%2C+Kenangan+Baru%2C+Kec.+Percut+Sei+Tuan%2C+Kabupaten+Deli+Serdang%2C+Sumatera+Utara+20371+Kab.+Deli+Serdang+Sumatera+Utara"
  },
  {
    "id": "v-29",
    "name": "Aula Hotel Dhaksina Medan",
    "location": "Jl. Mesjid Raya No.20, RT.02/RW.02, Mesjid, Kec. Medan Kota, Kota Medan, Sumatera Utara 20213",
    "city": "Kota Medan",
    "caborHosted": [
      "Bridge"
    ],
    "capacity": "1500 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Aula+Hotel+Dhaksina+Medan+Jl.+Mesjid+Raya+No.20%2C+RT.02%2FRW.02%2C+Mesjid%2C+Kec.+Medan+Kota%2C+Kota+Medan%2C+Sumatera+Utara+20213+Kota+Medan+Sumatera+Utara"
  },
  {
    "id": "v-30",
    "name": "Griya Hotel Medan",
    "location": "Jl. T. Amir Hamzah No.38-44 Blok A, Helvetia Tim., Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20123",
    "city": "Kota Medan",
    "caborHosted": [
      "Angkat Besi"
    ],
    "capacity": "200 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Griya+Hotel+Medan+Jl.+T.+Amir+Hamzah+No.38-44+Blok+A%2C+Helvetia+Tim.%2C+Kec.+Medan+Helvetia%2C+Kota+Medan%2C+Sumatera+Utara+20123+Kota+Medan+Sumatera+Utara"
  },
  {
    "id": "v-31",
    "name": "Stadion Unimed",
    "location": "Kenangan, Percut Sei Tuan, Deli Serdang Regency, North Sumatra 20371",
    "city": "Kota Medan",
    "caborHosted": [
      "Sepak Bola"
    ],
    "capacity": "1.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Stadion+Unimed+Kenangan%2C+Percut+Sei+Tuan%2C+Deli+Serdang+Regency%2C+North+Sumatra+20371+Kota+Medan+Sumatera+Utara"
  },
  {
    "id": "v-32",
    "name": "Urban Community Park Kebun Bunga",
    "location": " Jl. Candi Borobudur, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111",
    "city": "Kota Medan",
    "caborHosted": [
      "Tenis Meja"
    ],
    "capacity": "1.000 Penonton",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Urban+Community+Park+Kebun+Bunga++Jl.+Candi+Borobudur%2C+Petisah+Tengah%2C+Kec.+Medan+Petisah%2C+Kota+Medan%2C+Sumatera+Utara+20111+Kota+Medan+Sumatera+Utara"
  }
];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: "n-4",
    title: "5.654 Atlet Sumut Siap Ramaikan Porprovsu XII, 28 Cabor Dipertandingkan",
    slug: "5-654-atlet-sumut-siap-ramaikan-porprovsu-xii-28-cabor-dipertandingkan",
    excerpt: "Sebanyak 5.654 atlet di Sumatera Utara (Sumut) telah mendaftar untuk mengikuti Pekan Olahraga Provinsi Sumatera Utara (Porprovsu) XII Tahun 2026. Jumlah tersebut masih berpotensi bertambah seiring dibukanya pendaftaran tahap kedua untuk ajang yang akan mempertandingkan 28 cabang olahraga (cabor)",
    content: "Sebanyak 5.654 atlet di Sumatera Utara (Sumut) telah mendaftar untuk mengikuti Pekan Olahraga Provinsi Sumatera Utara (Porprovsu) XII Tahun 2026. Jumlah tersebut masih berpotensi bertambah seiring dibukanya pendaftaran tahap kedua untuk ajang yang akan mempertandingkan 28 cabang olahraga (cabor).\n\n“Hingga hari ini sudah terdaftar sebanyak 5.654 atlet yang akan mengikuti ajang Porprovsu XII yang akan kita gelar pada 7-15 November 2026,” ujar Ketua Komite Olahraga Nasional Indonesia (KONI) Sumut Hatunggal Siregar dalam konferensi pers yang digelar Diskominfo Sumut di Lobby Dekranasda Kantor Gubernur Sumut, Kamis (27/8/2026).\n\nHatunggal mengatakan, berbagai persiapan untuk pelaksanaan Porprovsu XII terus dilakukan, mulai dari penyusunan jadwal kedatangan atlet hingga persiapan venue pertandingan. Perencanaan tersebut terus dimatangkan untuk mengantisipasi berbagai kemungkinan perubahan di lapangan.\n\n“Kami sudah mempersiapkan perencanaannya meskipun mungkin saja ada hal insidentil yang berubah karena kondisi lapangan tapi semaksimal mungkin kami minimalisir perubahan,” kata Hatunggal.\n\nDijelaskan Hatunggal, dari 28 cabor yang dipertandingkan, terdapat 386 nomor pertandingan dengan total 2.683 medali yang diperebutkan. Sementara itu, alokasi anggaran pelaksanaan masih menunggu perubahan APBD (P-APBD) dan akan menggunakan pola kerja sama antara KONI Sumut dengan KONI kabupaten/kota.\n\n“Untuk anggaran pelaksanaannya masih menunggu PAPBD, tapi polanya kerjasama 50 persen anggaran dari KONI Kabupaten/Kota dan 50 persen anggaran dari KONI Sumut ini untuk atlet, sedangkan untuk kepanitiaannya nanti 100 persen anggaran dari KONI Sumut,” ujar Hatunggal.\n\nMenurut Hatunggal, KONI Sumut juga terus menggencarkan sosialisasi Porprovsu XII kepada masyarakat melalui berbagai kejuaraan maupun dengan turun langsung ke daerah. Langkah tersebut dilakukan untuk mendorong semakin banyak atlet daerah yang berpartisipasi, sesuai arahan Gubernur Sumut Bobby Nasution agar setiap potensi atlet di daerah mendapat kesempatan tampil di Porprovsu XII.\n\n“Sesuai arahan Gubernur kami terus melakukan sosialisasi termasuk melantik 16 Ketua KONI di kabupaten/kota agar mereka bisa hadir di Porprovsu, termasuk kami juga sudah sosialisasi ke seluruh KONI di kepulauan Nias sudah kami kumpulkan di Gunung Sitoli,” terangnya.\n\nSosialisasi tersebut turut meningkatkan partisipasi atlet dari Kepulauan Nias. Hatunggal menyebut, jumlah atlet dari sejumlah daerah di Kepulauan Nias mengalami peningkatan dibandingkan Porprovsu 2022.\n\nDi Gunungsitoli, misalnya, jumlah atlet yang mengikuti Porprovsu 2022 hanya 33 orang, sedangkan untuk Porprovsu XII 2026 sudah mendaftar 50 atlet. Jumlah tersebut masih berpotensi bertambah karena pendaftaran tahap kedua masih berlangsung.\n\n“Setelah kami datang langsung ke sana ada penambahan atlet yang ikut bertanding sebanyak 17 atlet dan ini masih pendaftaran tahap dua kemungkinan akan bertambah lagi,” kata Hatunggal.\n\nPeningkatan serupa terjadi di Kabupaten Nias, dari sebelumnya hanya 9 atlet pada Porprovsu 2022 menjadi 43 atlet yang telah mendaftar. Nias Utara meningkat dari 21 menjadi 24 atlet, Nias Barat dari 6 menjadi 50 atlet, sedangkan Nias Selatan yang sebelumnya tidak mengikuti Porprovsu kini telah mendaftarkan 31 atlet.\n\n“Dari kepulauan Nias dulu total hanya ada 69 atlet yang ikut sekarang kalau ditotal yang sudah mendaftar sudah ada 198 atlet, sosialisasi ini terus gencar kami lakukan karena Porprovsu merupakan ajang strategis untuk menjaring dan memetakan atlet-atlet potensial Sumut,” katanya.\n\nSementara itu, Kepala Dinas Kepemudaan dan Keolahragaan (Dispora) Provinsi Sumatera Utara M. Mahfullah Pratama Daulay mengatakan, pihaknya akan terus mendukung berbagai kejuaraan olahraga yang digelar KONI Sumut. Dukungan tersebut dinilai semakin optimal apabila Dispora Sumut telah bertransformasi menjadi Badan Layanan Umum Daerah (BLUD).\n\n“Kami terus mendukung ajang kejuaraan yang digelar KONI Sumut, apalagi jika Dispora sudah bertransformasi menjadi BLUD, maka kita bisa mandiri terutama soal keuangan, kita bisa menggelar berbagai event tanpa bergantung lagi dengan APBD,” kata Mahfullah.*(H12/DISKOMINFO SUMUT)",
    category: "Info Resmi",
    date: "2026-08-27",
    author: "admin PORPROVSU",
    image: ASSETS.news4,
    readTime: "3 menit baca",
  },
  {
    id: "n-3",
    title: "Jelang Porprovsu 2026, KONI Sumut intensif pembinaan atlet",
    slug: "jelang-porprovsu-2026-koni-sumut-intensif-pembinaan-atlet",
    excerpt: "Dengan mengandalkan cabang unggulan Atletik, Pencak Silat, dan Catur, Kontingen Karo optimis meraih medali emas maksimal.",
    content: "Ketua KONI Kabupaten Karo menyatakan kesiapan penuh jajaran atlet dan pelatih untuk bersaing merebut medali emas di gelaran PORPROVSU 2026.\n\n\"Kami menargetkan minimal posisi 3 besar di klasemen perolehan medali umum. Atlet-atlet kami dari cabor lari jarak pendek, pencak silat, dan catur telah menjalani pemusatan latihan intensif selama 6 bulan terakhir,\" pungkasnya saat pelepasan kontingen.",
    category: "Info Resmi",
    date: "2026-08-01",
    author: "admin PORPROVSU",
    image: ASSETS.news3,
    readTime: "2 menit baca",
  },
  {
    id: "n-2",
    title: "Ketua KONI Sumut Kunjungi Labuhanbatu, Dorong Semangat Atlet Menuju Porprovsu 2026",
    slug: "ketua-koni-sumut-kunjungi-labuhanbatu-dorong-semangat-atlet-menuju-porprovsu-2026",
    excerpt: "Ketua KONI Sumut Hatunggal Siregar saat mengunjungi KONI Labuhanbatu, Senin (08/06/2026).",
    content: "Labuhanbatu – Semangat menyongsong Pekan Olahraga Provinsi Sumatera Utara (Porprovsu) 2026 semakin terasa. Ketua Umum KONI Provinsi Sumatera Utara, Hatunggal Siregar, mengunjungi Kantor KONI Kabupaten Labuhanbatu di Jalan Binaraga, Rantauprapat, Senin (08/06/2026). Kunjungan tersebut menjadi bagian dari perjalanannya menuju Kabupaten Labuhanbatu Selatan.\n\nDalam kunjungan itu, Hatunggal Siregar didampingi Ketua Bidang Prestasi KONI Sumut, Irwan Pulungan. Kehadiran rombongan disambut hangat Ketua Umum KONI Labuhanbatu, H Boster Sitio bersama Wakil Ketua Ade Huzaini, Pembina Ginting, bendahara Wesly Panjaitan, para ketua bidang dan jajaran beserta pengurus cabang olahraga.\n\nDalam sambutannya, Boster Sitio mengapresiasi kunjungan Hatunggal dan rombongan tersebut. Ia menegaskan, saat ini KONI Labuhanbatu sedang fokus mempersiapkan atlet-atlet terbaik yang akan diterjunkan pada Pekan Olahraga Provinsi Sumatera Utara (Porprovsu) XII yang dijadwalkan berlangsung pada November 2026.\n\nMenurut Boster, seluruh persiapan dilakukan secara maksimal agar kontingen Labuhanbatu mampu tampil kompetitif dan meraih hasil membanggakan. Ia optimistis para atlet yang dipersiapkan memiliki peluang besar untuk mengharumkan nama daerah di tingkat provinsi.\n\n“KONI Labuhanbatu akan mengirim atlet-atlet terbaik. Mudah-mudahan KONI Labuhanbatu dapat meraih prestasi dan bertabur emas pada Porprovsu mendatang,” ujarnya penuh harap.\n\nLebih lanjut, Boster mengungkapkan bahwa Labuhanbatu akan mengikuti 24 cabang olahraga, belum termasuk cabang sepak bola. Karena itu, pihaknya berharap mendapat arahan dan bimbingan dari Ketua Umum KONI Sumut agar persiapan yang dilakukan berjalan sesuai target dan menghasilkan prestasi maksimal.\n\nMenanggapi hal tersebut, Hatunggal Siregar dalam bimbingan dan arahannya memberikan motivasi kepada para pengurus KONI, Cabor dan atlet. Ia menekankan pentingnya disiplin, kerja keras, serta konsistensi dalam menjalani program latihan. Menurutnya, prestasi tidak lahir secara instan, melainkan melalui proses panjang yang dijalani dengan tekun dan penuh semangat.\n\nHatunggal juga mengingatkan bahwa Porprovsu bukan hanya ajang perebutan medali, tetapi sekaligus menjadi wadah penjaringan atlet potensial yang nantinya dipersiapkan untuk memperkuat Sumatera Utara pada Pekan Olahraga Nasional (PON). Ia juga menegaskan komitmennya untuk mempertahankan prestasi Sumut di tingkat nasional.\n\n“Saya akan berusaha mempertahankan peringkat empat pada PON mendatang,” tegas Hatunggal di hadapan para pengurus dan atlet yang hadir.\n\nSebelum menuju PON, KONI Sumut akan melaksanakan 3 agenda besar tahun 2026, yakni Seleksi Provinsi (Selekprov) pada Juni hingga Oktober, Kejuaraan Provinsi (Kejurprov) pada Juli hingga Oktober, serta Porprovsu pada bulan November. Porprov direncanakan diikuti sedikitnya 17 kabupaten/kota dengan mempertandingkan 28 cabang olahraga.\n\nHatunggal memastikan para atlet peraih medali akan mendapatkan perhatian dan pembinaan dari KONI Sumut bersama Pemerintah Provinsi Sumatera Utara sebagai bentuk dukungan terhadap atlet-atlet berprestasi. Pada akhir pertemuan itu, Hatunggal menyerahkan spanduk ke KONI Labuhanbatu berisi ajakan bagi masyarakat untuk mendukung Porprovsu 2026. (Asarpua)",
    category: "Liputan",
    date: "2026-06-08",
    author: "admin PORPROVSU",
    image: ASSETS.news2,
    readTime: "2 menit baca",
  },
];

export const INITIAL_GALERI: GalleryItem[] = [
  {
    "id": "gal-6",
    "title": "Stadion Utama Pembukaan",
    "category": "Venue",
    "date": "2026-10-07",
    "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    "description": "Kesiapan stadion utama untuk menggelar Upacara Pembukaan PORPROVSU XII 2026."
  },
  {
    "id": "gal-5",
    "title": "Maskot & Fun Walk Porprovsu",
    "category": "Seremonial",
    "date": "2026-10-07",
    "image": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    "description": "Maskot resmi PORPROVSU XII menebar semangat sportivitas dan kebersamaan."
  },
  {
    "id": "gal-4",
    "title": "Bulu Tangkis",
    "category": "Pertandingan",
    "date": "2026-10-07",
    "image": "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80",
    "description": "Foto bersama pemusatan latihan atlet bulu tangkis unggulan kontingen Sumatera Utara."
  },
  {
    "id": "gal-3",
    "title": "Venue Basket",
    "category": "Venue",
    "date": "2026-10-07",
    "image": "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    "description": "Kemegahan arena bola basket indoor GOR Pancing siap menggelar laga puncak antar kontingen."
  },
  {
    "id": "gal-2",
    "title": "Suasana CFD di Sport City Kota Medan",
    "category": "Kegiatan",
    "date": "2026-10-07",
    "image": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    "description": "Keseruan aksi gowes dan sosialisasi akbar maskot PORPROVSU XII 2026 bersama masyarakat."
  },
  {
    "id": "gal-1",
    "title": "Sirkuit BMX",
    "category": "Venue",
    "date": "2026-10-07",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "description": "Peninjauan kesiapan sirkuit BMX PORPROVSU XII 2026 oleh panitia teknis pelaksana."
  }
];
