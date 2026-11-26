# PORPROVSU XII SUMATERA UTARA 2026 - Official Web Portal

Portal Resmi Pekan Olahraga Provinsi Sumatera Utara (PORPROVSU) berbasis **React + TypeScript + Tailwind CSS + Firebase (Cloud Firestore)** tanpa PHP dan tanpa file `.bat`. Didesain dengan tampilan terang, rapi, responsif penuh (Desktop & Mobile App-style Navigation), serta warna resmi sesuai logo tanpa gradasi neon.

---

## 🌟 Fitur Utama

1. **Tampilan Terang, Bersih & Responsif Penuh (Desktop + Mobile Bottom Navigation)**:
   - Tema terang modern berbasis palet warna logo PORPROVSU (Navy `#1E3E62`, Gold `#D97706`, Maroon `#991B1B`, Slate/White).
   - **Mobile Bottom Navigation Bar** untuk akses cepat di HP ke Beranda, Klasemen Medali, Data Atlet & Pelatih, Lokasi & Cabor, serta Form Portal.

2. **Klasemen Medali 33 Kabupaten & Kota + Logo Daerah**:
   - Lengkap untuk seluruh 33 Kabupaten dan Kota se-Sumatera Utara dengan **perisai lambang/logo daerah** masing-masing.
   - Dilengkapi filter Top 5, Top 10, Semua Daerah, sortir dinamis (Emas, Perak, Perunggu, Total), dan ekspor CSV.

3. **Data Atlet, Data Pelatih & Medali Perseorangan**:
   - Direktori interaktif untuk mencari dan memfilter atlet berdasarkan kabupaten/kota maupun cabor.
   - Menampilkan rincian jumlah medali yang didapat tiap atlet (Emas, Perak, Perunggu), nomor pertandingan, prestasi/rekor, dan pelatih pendamping.
   - Direktori pelatih dengan sertifikasi, jam terbang, dan perolehan medali atlet binaannya.

4. **Lokasi Pertandingan & Cabang Olahraga (28 Cabor)**:
   - Pemetaan lokasi venue (Stadion Utama Sumut Batang Kuis, GOR Mini Dispora, Kolam Renang Selayang, GOR PBSI, Gelanggang Remaja Medan, dll.) beserta cabor apa saja yang digelar di tiap arena dan tautan Google Maps.

5. **Form Input & Login Panitia dengan Background Foto Kadis**:
   - Foto Kepala Dinas (`kadis.jpeg`) digunakan sebagai latar belakang resmi pada formulir Portal & Modal Login Panitia (tanpa teks kata sambutan).
   - Mendukung input langsung data atlet & perolehan medali ke Firebase Firestore.

6. **Database Firebase (Cloud Firestore) Tanpa PHP**:
   - Menggunakan Firebase v11 SDK dengan *real-time listener* (`onSnapshot`), mode offline-first fallback, serta panel admin untuk sinkronisasi 1-klik ke Firestore.

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
