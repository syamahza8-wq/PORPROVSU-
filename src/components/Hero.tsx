import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Flame, 
  ChevronRight, 
  Award,
  Sparkles 
} from 'lucide-react';
import { MedalStanding } from '../types';

interface HeroProps {
  topMedals: MedalStanding[];
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ topMedals, onNavigate }) => {
  // Countdown to closing / next event
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: 09 December 2026 23:59:59
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

  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      
      {/* Background Image: kadis.jpeg with solid elegant dark tint (NO NEON) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('/assets/kadis.jpeg')` }}
      >
        {/* Authoritative deep dark overlay to ensure maximum readability and zero neon effect */}
        <div className="absolute inset-0 bg-brand-dark/85 backdrop-blur-[1px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-royal border border-slate-700/80 text-brand-gold-light text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <Flame className="w-4 h-4 text-brand-gold-light" />
              <span>Pekan Olahraga Provinsi Sumatera Utara</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                PORPROVSU <span className="text-brand-gold-light">XII 2026</span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-slate-200">
                “Bersatu Juara, Menembus Prestasi Emas Sumatera Utara”
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Portal data terintegrasi Pekan Olahraga Provinsi Sumatera Utara. Pantau klasemen perolehan medali, hasil pertandingan langsung (live score), dan jadwal resmi dari seluruh 33 kontingen kabupaten/kota se-Sumut.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('klasemen')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Trophy className="w-5 h-5" />
                <span>Lihat Klasemen Medali</span>
              </button>

              <button
                onClick={() => onNavigate('jadwal')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-royal text-slate-100 border border-slate-700 font-bold text-sm sm:text-base hover:border-slate-500 transition-all active:scale-95"
              >
                <Calendar className="w-5 h-5 text-brand-gold-light" />
                <span>Jadwal & Skor Pertandingan</span>
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-800">
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-gold-light">33</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase mt-0.5">Kabupaten / Kota</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">28</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase mt-0.5">Cabang Olahraga</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-gold-light">380+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase mt-0.5">Medali Emas</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">5.400+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase mt-0.5">Atlet & Ofisial</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Countdown & Top 3 Podium Card */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Official Countdown Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-brand-navy/90 border border-slate-700/80 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-gold-light" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
                    Sisa Waktu Penyelenggaraan
                  </span>
                </div>
                <span className="text-[11px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/80 px-2 py-0.5 rounded">
                  AKTIF
                </span>
              </div>

              {/* Timer Counters */}
              <div className="grid grid-cols-4 gap-2 text-center py-4">
                <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800">
                  <span className="block text-2xl sm:text-3xl font-black text-white">{timeLeft.days}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Hari</span>
                </div>
                <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800">
                  <span className="block text-2xl sm:text-3xl font-black text-brand-gold-light">{timeLeft.hours}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Jam</span>
                </div>
                <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800">
                  <span className="block text-2xl sm:text-3xl font-black text-white">{timeLeft.minutes}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Menit</span>
                </div>
                <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800">
                  <span className="block text-2xl sm:text-3xl font-black text-brand-gold-light">{timeLeft.seconds}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Detik</span>
                </div>
              </div>
            </div>

            {/* Quick Leaders Preview Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-brand-gold-light" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
                    Pimpinan Klasemen Sementara
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('klasemen')}
                  className="text-xs font-semibold text-brand-gold-light hover:text-white flex items-center gap-0.5"
                >
                  <span>Lengkap</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2.5">
                {topMedals.slice(0, 3).map((item, idx) => {
                  const rankColors = [
                    'bg-amber-400 text-slate-950 font-black',
                    'bg-slate-300 text-slate-900 font-bold',
                    'bg-amber-700 text-white font-bold'
                  ];
                  return (
                    <div 
                      key={item.id}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${rankColors[idx] || 'bg-slate-800 text-slate-300'}`}>
                          {item.rank}
                        </span>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-white">{item.contingent}</p>
                          <p className="text-[10px] text-slate-400">Total: {item.total} Medali</p>
                        </div>
                      </div>

                      {/* Medal Counts */}
                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                          🥇 {item.gold}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-700 text-slate-200 font-bold">
                          🥈 {item.silver}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-800/40 font-bold">
                          🥉 {item.bronze}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
