# PORPROVSU XII SUMATERA UTARA 2026 - Official Web Portal

Portal Resmi Pekan Olahraga Provinsi Sumatera Utara (PORPROVSU) yang dikembangkan dengan standar modern SaaS, responsif mobile/desktop, palet warna elegan bersumber dari logo resmi (tanpa gradasi neon), dan terintegrasi dengan database **Firebase (Firestore)** secara real-time.

---

## 🌟 Fitur Utama

1. **Brand & Visual Identity Resmi**:
   - Menampilkan logo resmi PORPROVSU (`logo.jpeg` & `logo.png`).
   - Foto resmi Kepala Dinas Pemuda dan Olahraga Provinsi Sumatera Utara (`kadis.jpeg`) digunakan sebagai backdrop heroik dengan sentuhan overlay gelap berwibawa tanpa gradasi neon.
   - Sambutan resmi Kepala Dinas Pemuda dan Olahraga Sumut.

2. **Rekapitulasi Klasemen Medali Real-time**:
   - Klasemen 33 Kabupaten & Kota se-Sumatera Utara (Medan, Deli Serdang, Binjai, Karo, Asahan, dll.).
   - Filter cepat (Top 5, Top 10, Semua 33 Daerah) dan fitur pencarian nama daerah.
   - Pengurutan dinamis berdasarkan Emas, Perak, Perunggu, atau Total medali.
   - Ekspor data klasemen ke format CSV.

3. **Jadwal & Skor Pertandingan (Live Score)**:
   - Status pertandingan interaktif: **LIVE**, **Selesai**, dan **Terjadwal**.
   - Filter berdasarkan cabang olahraga dan status pertandingan.
   - Detail arena venue dan catatan pertandingan.

4. **Cabang Olahraga & Lokasi Venue**:
   - 28 Cabang Olahraga resmi (Beregu, Bela Diri, Individu, Akuatik, Akurasi) lengkap dengan kuota atlet dan medali.
   - Peta dan petunjuk arah Google Maps untuk venue utama (Stadion Utama Sumut Batang Kuis, GOR Dispora, Gedung Serbaguna, dll.).

5. **33 Kontingen Daerah & Kabar Terkini**:
   - Profil partisipasi seluruh kontingen kabupaten/kota di Sumatera Utara.
   - Liputan berita, pengumuman resmi, dan press release dengan modal baca artikel.

6. **Database Firebase (Firestore) & Admin Panel**:
   - Service layer Firestore terintegrasi (`src/services/firestoreService.ts`).
   - Fitur **1-Click Seed Data** untuk mengunggah dan menyinkronkan seluruh data Porprovsu ke Firestore.
   - Panel admin untuk memperbarui medali dan skor pertandingan secara langsung dengan sinkronisasi real-time.
   - Mode offline-first fallback sehingga aplikasi tetap berfungsi penuh jika kunci API belum dikonfigurasi.

---

## 🚀 Teknologi yang Digunakan

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (Desain resmi bebas gradasi neon)
- **Database Cloud**: Firebase v11 (Cloud Firestore)
- **Icons**: Lucide React

---

## 💻 Menjalankan Secara Lokal

```bash
# Instal dependensi
npm install

# Jalankan server pengembangan
npm run dev

# Bangun versi produksi
npm run build
```

---

## 🔗 Repositori GitHub

Tersambung ke: `https://github.com/syamahza8-wq/PORPROVSU-.git`
