# PORPROVSU XII SUMATERA UTARA 2026 - Official Web Portal

Portal Resmi Pekan Olahraga Provinsi Sumatera Utara (PORPROVSU) berbasis **React + TypeScript + Tailwind CSS + Firebase (Cloud Firestore)** tanpa PHP dan tanpa file `.bat`.

---

## 📁 Struktur Multi-Folder

1. **Portal Publik Utama (`/`)**:
   - **Header 2-Tingkat Rapi**: Logo resmi, tombol akses cepat, dan baris tab navigasi horizontal anti-tumpang-tindih.
   - **30 Cabang Olahraga Resmi (28 Pengprov Cabor)** sesuai data resmi *porprovsumut.com*.
   - **Lokasi & Venue Resmi** (Kota Medan, Kab. Deli Serdang, Kota Binjai, Kota Pematangsiantar) lengkap dengan daftar cabor di tiap lokasi dan tautan Google Maps.
   - **33 Kontingen Kabupaten & Kota** lengkap dengan perisai logo daerah masing-masing.
   - **Data Atlet & Data Pelatih** (kosong secara bawaan hingga diisi resmi oleh KONI daerah masing-masing).
   - **Form Akses KONI Daerah** dengan background foto Kadis (tanpa kata sambutan).

2. **Portal Input Khusus KONI Kabupaten/Kota (`koni-daerah/`)**:
   - Berada di folder terpisah (`C:\laragon\www\porprovsu\koni-daerah\`).
   - Pengurus **KONI Kabupaten/Kota** login menggunakan akun daerah masing-masing.
   - Wilayah **terkunci per kabupaten/kota** sehingga KONI Kota Medan hanya dapat menginput, melihat, dan menghapus data atlet/pelatih milik Kota Medan (demikian pula untuk 32 daerah lainnya).
   - Terintegrasi dengan koleksi Firestore yang sama (`porprovsu_athletes` dan `porprovsu_coaches`).

---

## 💻 Perintah Pengembangan

```bash
# Instal dependensi di folder root
npm install

# Jalankan web utama
npm run dev

# Build produksi web utama
npm run build
```

---

## 🔗 Repositori GitHub

`https://github.com/syamahza8-wq/PORPROVSU-.git`
