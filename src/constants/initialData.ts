import { MedalStanding, MatchSchedule, SportBranch, NewsArticle, Venue, Contingent } from '../types';

export const INITIAL_MEDALS: MedalStanding[] = [
  { id: '1', rank: 1, contingent: 'Kota Medan', gold: 84, silver: 45, bronze: 41, total: 170, regionCode: 'MDN' },
  { id: '2', rank: 2, contingent: 'Kabupaten Deli Serdang', gold: 20, silver: 29, bronze: 43, total: 92, regionCode: 'DS' },
  { id: '3', rank: 3, contingent: 'Kota Binjai', gold: 18, silver: 25, bronze: 28, total: 71, regionCode: 'BNJ' },
  { id: '4', rank: 4, contingent: 'Kabupaten Karo', gold: 16, silver: 14, bronze: 21, total: 51, regionCode: 'KAR' },
  { id: '5', rank: 5, contingent: 'Kabupaten Asahan', gold: 14, silver: 18, bronze: 24, total: 56, regionCode: 'ASH' },
  { id: '6', rank: 6, contingent: 'Kota Pematangsiantar', gold: 12, silver: 15, bronze: 19, total: 46, regionCode: 'PMS' },
  { id: '7', rank: 7, contingent: 'Kabupaten Simalungun', gold: 10, silver: 12, bronze: 18, total: 40, regionCode: 'SML' },
  { id: '8', rank: 8, contingent: 'Kabupaten Serdang Bedagai', gold: 9, silver: 11, bronze: 16, total: 36, regionCode: 'SER' },
  { id: '9', rank: 9, contingent: 'Kabupaten Toba', gold: 8, silver: 9, bronze: 14, total: 31, regionCode: 'TOB' },
  { id: '10', rank: 10, contingent: 'Kabupaten Labuhanbatu', gold: 7, silver: 8, bronze: 12, total: 27, regionCode: 'LBB' },
  { id: '11', rank: 11, contingent: 'Kabupaten Dairi', gold: 6, silver: 7, bronze: 11, total: 24, regionCode: 'DAI' },
  { id: '12', rank: 12, contingent: 'Kota Tanjungbalai', gold: 5, silver: 8, bronze: 10, total: 23, regionCode: 'TJB' },
  { id: '13', rank: 13, contingent: 'Kota Tebing Tinggi', gold: 5, silver: 7, bronze: 9, total: 21, regionCode: 'TBT' },
  { id: '14', rank: 14, contingent: 'Kabupaten Langkat', gold: 4, silver: 6, bronze: 11, total: 21, regionCode: 'LKT' },
  { id: '15', rank: 15, contingent: 'Kota Padangsidimpuan', gold: 4, silver: 5, bronze: 8, total: 17, regionCode: 'PSP' },
  { id: '16', rank: 16, contingent: 'Kabupaten Tapanuli Utara', gold: 3, silver: 6, bronze: 7, total: 16, regionCode: 'TAP' },
  { id: '17', rank: 17, contingent: 'Kabupaten Samosir', gold: 3, silver: 4, bronze: 6, total: 13, regionCode: 'SMS' },
  { id: '18', rank: 18, contingent: 'Kota Sibolga', gold: 2, silver: 5, bronze: 7, total: 14, regionCode: 'SBG' },
  { id: '19', rank: 19, contingent: 'Kabupaten Batubara', gold: 2, silver: 4, bronze: 6, total: 12, regionCode: 'BTR' },
  { id: '20', rank: 20, contingent: 'Kabupaten Humbang Hasundutan', gold: 2, silver: 3, bronze: 5, total: 10, regionCode: 'HMB' },
  { id: '21', rank: 21, contingent: 'Kabupaten Nias', gold: 1, silver: 3, bronze: 4, total: 8, regionCode: 'NIS' },
  { id: '22', rank: 22, contingent: 'Kota Gunungsitoli', gold: 1, silver: 2, bronze: 5, total: 8, regionCode: 'GNS' },
  { id: '23', rank: 23, contingent: 'Kabupaten Mandailing Natal', gold: 1, silver: 2, bronze: 4, total: 7, regionCode: 'MDN' },
  { id: '24', rank: 24, contingent: 'Kabupaten Labuhanbatu Utara', gold: 1, silver: 1, bronze: 4, total: 6, regionCode: 'LBU' },
  { id: '25', rank: 25, contingent: 'Kabupaten Labuhanbatu Selatan', gold: 1, silver: 1, bronze: 3, total: 5, regionCode: 'LBS' },
  { id: '26', rank: 26, contingent: 'Kabupaten Pakpak Bharat', gold: 0, silver: 2, bronze: 3, total: 5, regionCode: 'PKP' },
  { id: '27', rank: 27, contingent: 'Kabupaten Tapanuli Selatan', gold: 0, silver: 2, bronze: 2, total: 4, regionCode: 'TSL' },
  { id: '28', rank: 28, contingent: 'Kabupaten Tapanuli Tengah', gold: 0, silver: 1, bronze: 3, total: 4, regionCode: 'TTG' },
  { id: '29', rank: 29, contingent: 'Kabupaten Padang Lawas', gold: 0, silver: 1, bronze: 2, total: 3, regionCode: 'PDL' },
  { id: '30', rank: 30, contingent: 'Kabupaten Padang Lawas Utara', gold: 0, silver: 1, bronze: 1, total: 2, regionCode: 'PLU' },
  { id: '31', rank: 31, contingent: 'Kabupaten Nias Selatan', gold: 0, silver: 0, bronze: 2, total: 2, regionCode: 'NSS' },
  { id: '32', rank: 32, contingent: 'Kabupaten Nias Utara', gold: 0, silver: 0, bronze: 1, total: 1, regionCode: 'NSU' },
  { id: '33', rank: 33, contingent: 'Kabupaten Nias Barat', gold: 0, silver: 0, bronze: 1, total: 1, regionCode: 'NSB' },
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
    notes: 'Pertandingan berlangsung sengit disaksikan 25.000 penonton.'
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
    category: '100m Gaya Bebas Putra',
    stage: 'Final Waktu',
    teamA: 'Kota Medan (Atlet 1)',
    teamB: 'Kota Binjai (Atlet 2)',
    venue: 'Kolam Renang Selayang, Jl. Dr. Mansyur Medan',
    date: '2026-12-09',
    time: '16:00 WIB',
    status: 'UPCOMING',
  },
  {
    id: 'sch-7',
    cabor: 'Bola Basket',
    category: 'Putra 5x5',
    stage: 'Final',
    teamA: 'Kota Medan',
    teamB: 'Kab. Asahan',
    venue: 'GOR Angsapura, Medan',
    date: '2026-12-09',
    time: '19:00 WIB',
    status: 'UPCOMING',
  },
  {
    id: 'sch-8',
    cabor: 'Atletik',
    category: 'Lari 100m Putra',
    stage: 'Final',
    teamA: 'Kab. Karo',
    teamB: 'Kab. Deli Serdang',
    scoreA: '10.38s (Rekor Baru)',
    scoreB: '10.51s',
    venue: 'Lintasan Atletik Stadion Utama Sumut',
    date: '2026-12-08',
    time: '09:00 WIB',
    status: 'COMPLETED',
    winner: 'Kab. Karo',
  }
];

export const INITIAL_CABOR: SportBranch[] = [
  {
    id: 'cabor-1',
    name: 'Sepak Bola',
    category: 'Beregu',
    icon: 'Trophy',
    venue: 'Stadion Utama Sumut & Stadion Baharoeddin Siregar',
    athletesCount: 396,
    goldMedalsCount: 2,
    description: 'Cabang olahraga primadona mempertandingkan tim sepak bola terbaik dari seluruh kabupaten/kota se-Sumut.'
  },
  {
    id: 'cabor-2',
    name: 'Futsal',
    category: 'Beregu',
    icon: 'Flame',
    venue: 'GOR Mini Dispora Sumut, Medan',
    athletesCount: 280,
    goldMedalsCount: 2,
    description: 'Pertandingan futsal kategori putra dan putri dengan tempo cepat dan teknik tinggi.'
  },
  {
    id: 'cabor-3',
    name: 'Bulu Tangkis',
    category: 'Individu',
    icon: 'Zap',
    venue: 'GOR PBSI Sumut, Medan',
    athletesCount: 198,
    goldMedalsCount: 7,
    description: 'Nomor tunggal, ganda, dan beregu putra/putri untuk melahirkan bibit atlet bulutangkis nasional.'
  },
  {
    id: 'cabor-4',
    name: 'Atletik',
    category: 'Individu',
    icon: 'Activity',
    venue: 'Stadion Utama Sumut, Batang Kuis',
    athletesCount: 320,
    goldMedalsCount: 42,
    description: 'Ibu segala cabang olahraga: lari cepat, jarak jauh, estafet, lompat jauh, lompat tinggi, dan tolak peluru.'
  },
  {
    id: 'cabor-5',
    name: 'Pencak Silat',
    category: 'Bela Diri',
    icon: 'Shield',
    venue: 'Gelanggang Remaja Kota Medan',
    athletesCount: 220,
    goldMedalsCount: 22,
    description: 'Seni bela diri warisan leluhur bangsa, mempertandingkan kategori tanding dan seni (tunggal/ganda/regu).'
  },
  {
    id: 'cabor-6',
    name: 'Renang',
    category: 'Akuatik',
    icon: 'Waves',
    venue: 'Kolam Renang Selayang, Medan',
    athletesCount: 180,
    goldMedalsCount: 38,
    description: 'Nomor gaya bebas, punggung, dada, kupu-kupu, dan estafet beregu.'
  },
  {
    id: 'cabor-7',
    name: 'Karate',
    category: 'Bela Diri',
    icon: 'Award',
    venue: 'Gedung Serbaguna Unimed',
    athletesCount: 190,
    goldMedalsCount: 17,
    description: 'Nomor Kata (jurus) dan Kumite (pertarungan) dari berbagai kelas berat badan.'
  },
  {
    id: 'cabor-8',
    name: 'Taekwondo',
    category: 'Bela Diri',
    icon: 'Crosshair',
    venue: 'GOR Cemara Asri, Deli Serdang',
    athletesCount: 175,
    goldMedalsCount: 16,
    description: 'Pertarungan Kyorugi dan keindahan teknik Poomsae.'
  },
  {
    id: 'cabor-9',
    name: 'Bola Basket',
    category: 'Beregu',
    icon: 'CircleDot',
    venue: 'GOR Angsapura Medan',
    athletesCount: 264,
    goldMedalsCount: 4,
    description: 'Kategori 5x5 dan 3x3 putra dan putri.'
  },
  {
    id: 'cabor-10',
    name: 'Bola Voli',
    category: 'Beregu',
    icon: 'Radio',
    venue: 'Gedung Serbaguna Pemprovsu, Jl. William Iskandar',
    athletesCount: 264,
    goldMedalsCount: 4,
    description: 'Voli indoor dan voli pasir pantai putra dan putri.'
  },
  {
    id: 'cabor-11',
    name: 'Wushu',
    category: 'Bela Diri',
    icon: 'Sparkles',
    venue: 'Padepokan Wushu Sumut, Medan',
    athletesCount: 140,
    goldMedalsCount: 20,
    description: 'Cabor lumbung medali Sumut, nomor Taolu dan Sanda.'
  },
  {
    id: 'cabor-12',
    name: 'Catur',
    category: 'Individu',
    icon: 'Compass',
    venue: 'Hotel Saka Grand Ballroom Medan',
    athletesCount: 132,
    goldMedalsCount: 12,
    description: 'Catur standar, catur cepat (rapid), dan catur kilat (blitz).'
  },
  {
    id: 'cabor-13',
    name: 'Tenis Meja',
    category: 'Individu',
    icon: 'Target',
    venue: 'GOR TSP Medan',
    athletesCount: 150,
    goldMedalsCount: 7,
    description: 'Tunggal putra/putri, ganda, dan beregu.'
  },
  {
    id: 'cabor-14',
    name: 'Angkat Besi',
    category: 'Individu',
    icon: 'Dumbbell',
    venue: 'Gedung PABBSI Sumut, Helvetia',
    athletesCount: 95,
    goldMedalsCount: 18,
    description: 'Kategori Snatch, Clean & Jerk berbagai kelas berat.'
  },
  {
    id: 'cabor-15',
    name: 'Panahan',
    category: 'Akurasi',
    icon: 'Crosshair',
    venue: 'Lapangan Batalyon Paskhas Medan',
    athletesCount: 120,
    goldMedalsCount: 14,
    description: 'Divisi Recurve, Compound, dan Nasional.'
  },
  {
    id: 'cabor-16',
    name: 'Dayung',
    category: 'Akuatik',
    icon: 'Anchor',
    venue: 'Danau Toba / Danau Siombak Marelan',
    athletesCount: 110,
    goldMedalsCount: 16,
    description: 'Kano, Kayak, dan Dragon Boat beregu.'
  }
];

export const INITIAL_VENUES: Venue[] = [
  {
    id: 'ven-1',
    name: 'Stadion Utama Sumatera Utara',
    location: 'Kawasan Sport Centre Batang Kuis, Deli Serdang',
    city: 'Deli Serdang',
    caborHosted: ['Sepak Bola (Final)', 'Atletik', 'Upacara Penutupan'],
    capacity: '25.750 Kursi',
    mapUrl: 'https://maps.google.com/?q=Stadion+Utama+Sumatera+Utara+Batang+Kuis'
  },
  {
    id: 'ven-2',
    name: 'Gedung Serbaguna Pemprovsu',
    location: 'Jl. William Iskandar No. 9, Kenangan Baru, Deli Serdang',
    city: 'Medan - Deli Serdang',
    caborHosted: ['Bola Voli', 'Senam', 'Judo'],
    capacity: '10.000 Penonton',
    mapUrl: 'https://maps.google.com/?q=Gedung+Serbaguna+Pemprov+Sumut'
  },
  {
    id: 'ven-3',
    name: 'GOR Mini Dispora Sumatera Utara',
    location: 'Kompleks Dispora Sumut, Jl. William Iskandar Medan',
    city: 'Medan',
    caborHosted: ['Futsal', 'Tarung Derajat'],
    capacity: '3.500 Penonton',
    mapUrl: 'https://maps.google.com/?q=Dispora+Sumatera+Utara'
  },
  {
    id: 'ven-4',
    name: 'Kolam Renang Selayang',
    location: 'Jl. Dr. Mansyur No. 71, PB Selayang I, Medan Selayang',
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
    title: 'Pembukaan Spektakuler PORPROVSU: Menyatukan Semangat Olahraga 33 Kabupaten & Kota Se-Sumatera Utara',
    slug: 'pembukaan-spektakuler-porprovsu-sumut',
    excerpt: 'Gubernur Sumatera Utara bersama Kadispora secara resmi membuka ajang bergengsi Pekan Olahraga Provinsi Sumatera Utara.',
    content: 'Pekan Olahraga Provinsi Sumatera Utara (PORPROVSU) resmi dibuka dalam seremoni meriah di hadapan puluhan ribu warga dan atlet. Kepala Dinas Pemuda dan Olahraga Provinsi Sumatera Utara menegaskan bahwa Porprovsu bukan sekadar kompetisi perburuan medali, melainkan kawah candradimuka bagi pembinaan atlet muda berprestasi yang akan mewakili Sumatera Utara di tingkat nasional hingga internasional.',
    category: 'Utama',
    date: '08 Desember 2026',
    author: 'Humas Dispora Sumut',
    image: '/assets/kadis.jpeg',
    readTime: '3 Menit'
  },
  {
    id: 'news-2',
    title: 'Kota Medan Kokoh di Puncak Klasemen Sementara, Deli Serdang dan Binjai Membayangi Ketat',
    slug: 'kota-medan-kokoh-puncak-klasemen-porprovsu',
    excerpt: 'Perolehan medali emas kontingen Kota Medan melonjak berkat dominasi di cabang atletik, renang, dan wushu.',
    content: 'Hingga hari ke-7 pelaksanaan Porprovsu, Kontingen Kota Medan menunjukkan performa dominan dengan memimpin klasemen perolehan medali emas. Kendati demikian, persaingan di posisi kedua dan ketiga berlangsung sengit antara Kabupaten Deli Serdang dan Kota Binjai yang terus saling mengejar dalam perolehan medali di cabang bela diri dan cabor beregu.',
    category: 'Pertandingan',
    date: '08 Desember 2026',
    author: 'Tim Liputan Porprovsu',
    image: '/assets/logo.jpeg',
    readTime: '4 Menit'
  },
  {
    id: 'news-3',
    title: 'Kadispora Sumut Apresiasi Sportivitas Atlet dan Kesiapan Seluruh Venue Pertandingan',
    slug: 'kadispora-sumut-apresiasi-sportivitas-atlet',
    excerpt: 'Kadispora meninjau langsung pertandingan di GOR Dispora dan Stadion Utama Sumut, memastikan seluruh sarana prima.',
    content: 'Kepala Dinas Pemuda dan Olahraga Provinsi Sumatera Utara melakukan inspeksi langsung ke beberapa venue pertandingan strategis. Beliau menyampaikan rasa bangga atas sportivitas tinggi yang ditunjukkan oleh seluruh atlet dari 33 kabupaten/kota. Standar fasilitas dan kelayakan arena pertandingan juga terus dipantau untuk menjamin kenyamanan seluruh peserta dan penonton.',
    category: 'Dispora Update',
    date: '07 Desember 2026',
    author: 'Sekretariat Panitia Porprovsu',
    image: '/assets/kadis.jpeg',
    readTime: '3 Menit'
  },
  {
    id: 'news-4',
    title: 'Cabor Wushu dan Pencak Silat Cetak Rekor Atlet Muda Berbakat Baru',
    slug: 'cabor-wushu-silat-cetak-rekor-baru',
    excerpt: 'Munculnya atlet-atlet muda berbakat dari daerah seperti Karo, Simalungun, dan Nias mencuri perhatian pengamat olahraga nasional.',
    content: 'Gelanggang pertarungan seni bela diri Porprovsu melahirkan kejutan besar dengan tampilnya para atlet muda dari daerah-daerah di luar Medan yang berhasil mengamankan medali emas. Hal ini membuktikan bahwa pemerataan pembinaan olahraga di Sumatera Utara membuahkan hasil nyata.',
    category: 'Prestasi',
    date: '06 Desember 2026',
    author: 'Tim Teknis KONI Sumut',
    image: '/assets/logo.jpeg',
    readTime: '2 Menit'
  }
];

export const KADIS_PROFILE = {
  name: 'Kepala Dinas Pemuda dan Olahraga Provinsi Sumatera Utara',
  office: 'Dinas Pemuda dan Olahraga (DISPORA) Pemerintah Provinsi Sumatera Utara',
  tagline: 'Sumut Berprestasi, Menuju Kejayaan Olahraga Nusantara',
  speechGreeting: 'Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera, Horas, Mejuah-juah, Njuah-njuah.',
  speechBody: 'Pekan Olahraga Provinsi Sumatera Utara (PORPROVSU) adalah panggung kehormatan bagi putra-putri terbaik dari seluruh penjuru Sumatera Utara. Melalui ajang ini, kita tidak hanya menguji ketangkasan fisik dan strategi pertandingan, melainkan menanamkan nilai luhur sportivitas, daya juang pantang menyerah, dan persatuan sejati anak bangsa.',
  speechCommitment: 'Pemerintah Provinsi Sumatera Utara berkomitmen penuh menghadirkan sarana prasarana olahraga berstandar tinggi, mendukung penuh pembinaan atlet sejak dini, dan mengantarkan talenta emas Sumut menuju puncak prestasi nasional hingga panggung dunia.',
  motto: '“Kalah Menang Adalah Hal Biasa, Integritas dan Sportivitas Adalah Yang Utama!”'
};
