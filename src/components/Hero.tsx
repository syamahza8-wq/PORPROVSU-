import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Flame,
  UserCheck,
  Activity,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { ASSETS } from '../assets';

interface HeroProps {
  athletesCount: number;
  coachesCount: number;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  athletesCount,
  coachesCount,
  onNavigate,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date('2026-12-09T23:59:59+07:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hostClusters = [
    { city: 'Kota Medan', desc: 'Kolam Renang Selayang, Taman Cadika, GOR Mini Dispora' },
    { city: 'Kab. Deli Serdang', desc: 'Stadion Utama & Madya Sumut Batang Kuis, GSG Pancing' },
    { city: 'Kota Binjai', desc: 'GOR Baru Jl. Danau Puso Km 18 & GOR Rambung' },
    { city: 'Kota Pematangsiantar', desc: 'GOR Suzuya Merdeka Mall, Hotel Manna, Pelita VC' },
  ];

  return (
    <section className="relative bg-white text-brand-dark overflow-hidden border-b border-slate-200">
      <div className="h-1.5 w-full flex">
        <div className="w-1/3 bg-brand-royal" />
        <div className="w-1/3 bg-brand-gold" />
        <div className="w-1/3 bg-brand-maroon" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-2xs">
              <Flame className="w-4 h-4 text-brand-gold" />
              <span>Pekan Olahraga Provinsi Sumatera Utara</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 p-2 rounded-2xl bg-white border-2 border-slate-200 shadow-sm shrink-0 flex items-center justify-center">
                <img
                  src={ASSETS.logo}
                  alt="Logo PORPROVSU"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = ASSETS.logoJpeg;
                  }}
                />
              </div>

              <div className="space-y-1.5">
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-brand-dark">
                  PORPROVSU <span className="text-brand-gold">XII 2026</span>
                </h1>
                <p className="text-base sm:text-xl font-extrabold text-brand-royal">
                  “Bersatu Juara, Menembus Prestasi Emas Sumatera Utara”
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-base text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Portal informasi publik resmi Pekan Olahraga Provinsi Sumatera Utara berbasis Firebase Cloud Firestore. Pantau jadwal pertandingan, daftar 30 cabang olahraga resmi, lokasi venue, serta kontingen 33 kabupaten/kota.
            </p>

            {/* Action Buttons (Pure Public Navigation) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={() => onNavigate('atlet-pelatih')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-royal hover:bg-brand-dark text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
              >
                <Users className="w-4 h-4 text-brand-gold-light" />
                <span>Data Atlet & Pelatih</span>
              </button>

              <button
                onClick={() => onNavigate('venue')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span>Lokasi & Cabor</span>
              </button>

              <button
                onClick={() => onNavigate('jadwal')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4 text-brand-royal" />
                <span>Jadwal Pertandingan</span>
              </button>
            </div>

            {/* Quick Access Menu Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-slate-200">
              <button
                onClick={() => onNavigate('kontingen')}
                className="p-3 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-left transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-black text-brand-gold">33</span>
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                </div>
                <div className="text-[11px] text-slate-700 font-bold mt-0.5">Kabupaten & Kota</div>
              </button>

              <button
                onClick={() => onNavigate('cabor')}
                className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-left transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-black text-brand-royal">30</span>
                  <Activity className="w-4 h-4 text-brand-royal" />
                </div>
                <div className="text-[11px] text-slate-700 font-bold mt-0.5">Cabang Olahraga</div>
              </button>

              <button
                onClick={() => onNavigate('atlet-pelatih')}
                className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-left transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-black text-emerald-700">{athletesCount}</span>
                  <UserCheck className="w-4 h-4 text-emerald-700" />
                </div>
                <div className="text-[11px] text-slate-700 font-bold mt-0.5">Atlet & {coachesCount} Pelatih</div>
              </button>

              <button
                onClick={() => onNavigate('venue')}
                className="p-3 rounded-2xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 text-left transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-black text-brand-maroon">10</span>
                  <MapPin className="w-4 h-4 text-brand-maroon" />
                </div>
                <div className="text-[11px] text-slate-700 font-bold mt-0.5">Venue Resmi</div>
              </button>
            </div>
          </div>

          {/* Right Column: Bright Countdown & 4 Host Clusters */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                    Jadwal Penyelenggaraan (1–9 Des)
                  </span>
                </div>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  RESMI
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center pt-3">
                <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs">
                  <span className="block text-xl sm:text-2xl font-black text-brand-dark">{timeLeft.days}</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Hari</span>
                </div>
                <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs">
                  <span className="block text-xl sm:text-2xl font-black text-brand-gold">{timeLeft.hours}</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Jam</span>
                </div>
                <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs">
                  <span className="block text-xl sm:text-2xl font-black text-brand-dark">{timeLeft.minutes}</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Menit</span>
                </div>
                <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs">
                  <span className="block text-xl sm:text-2xl font-black text-brand-gold">{timeLeft.seconds}</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Detik</span>
                </div>
              </div>
            </div>

            {/* 4 Klaster Tuan Rumah Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-dark">
                    4 Wilayah Tuan Rumah Venue
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('venue')}
                  className="text-xs font-bold text-brand-royal hover:text-brand-gold flex items-center gap-0.5"
                >
                  <span>Detail Lokasi</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2">
                {hostClusters.map((h) => (
                  <div
                    key={h.city}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80"
                  >
                    <p className="text-xs font-extrabold text-brand-royal">{h.city}</p>
                    <p className="text-[11px] text-slate-600 line-clamp-1">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
