import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  Activity,
  Flame,
  MapPin,
  Trophy,
  Shield,
  ChevronRight,
} from 'lucide-react';
import { ASSETS } from '../assets';
import { EVENT_CONFIG } from '../constants/initialData';

interface HeroProps {
  totalContingents: number;
  totalVenues: number;
  totalCabor: number;
  totalSchedules: number;
  onNavigate: (section: string) => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

function getTimeLeft(): TimeLeft {
  const target = new Date(EVENT_CONFIG.targetDate).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isLive: false };
}

export const Hero: React.FC<HeroProps> = ({
  totalContingents,
  totalVenues,
  totalCabor,
  totalSchedules,
  onNavigate,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (val: number) => String(val).padStart(2, '0');

  return (
    <section className="relative">
      {/* Main Hero Canvas */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE]/60 border-b border-slate-200/70">
        {/* Dot Pattern Layer */}
        <div className="hero-dot-pattern absolute inset-0 opacity-70 pointer-events-none" />

        {/* Desktop Right Leader Photo Backdrop (matching porprovsumut.com) */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-[62%] lg:w-[58%] pointer-events-none select-none overflow-hidden">
          <img
            src={ASSETS.kadis}
            alt="Pimpinan Pemerintah Sumatera Utara - PORPROVSU XII 2026"
            className="w-full h-full object-cover object-[75%_14%] opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#EFF6FF]/92 via-32% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/80 via-transparent to-[#F8FAFC]/25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
          <div className="max-w-2xl">
            {/* Official Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200/80 shadow-xs mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="text-[11px] font-extrabold tracking-[0.14em] text-[#0284C7] uppercase">
                {EVENT_CONFIG.title}
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.09] mb-4 sm:mb-5">
              {EVENT_CONFIG.heroHeadline}
            </h1>

            {/* Hero Subtitle */}
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7 sm:mb-8 font-medium">
              {EVENT_CONFIG.heroSubheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('jadwal')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-bold shadow-md shadow-sky-600/20 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Jadwal Pertandingan</span>
              </button>

              <button
                onClick={() => onNavigate('cabor')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Activity className="w-4 h-4" />
                <span>Cabang Olahraga</span>
              </button>
            </div>

            {/* Clean Framed Leader Banner ONLY on Mobile (< md) */}
            <div className="md:hidden mt-6 relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white">
              <img
                src={ASSETS.kadis}
                alt="Pimpinan Pemerintah Sumatera Utara - PORPROVSU XII 2026"
                className="w-full h-44 object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/45 to-transparent px-3.5 py-2.5">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                  Pekan Olahraga Provinsi Sumatera Utara
                </p>
                <p className="text-xs font-bold text-white">
                  Menuju PON XXII Nusa Tenggara Barat &amp; Timur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Countdown Bar & 4 Stat Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-11 sm:-mt-14 pb-8">
        {/* Hitung Mundur Pembukaan Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/[0.06] p-4 sm:p-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B]" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base sm:text-xl font-extrabold text-[#0F172A]">
                  Hitung Mundur Pembukaan
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-[#0284C7] text-[10px] font-extrabold uppercase tracking-wider">
                  PORPROVSU 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>{EVENT_CONFIG.openingVenue}</span>
              </p>
            </div>
          </div>

          {/* 4 Dark Navy Digit Boxes */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 shrink-0">
            <div className="bg-[#0F172A] rounded-2xl px-2 sm:px-4 py-2.5 sm:py-3 text-center min-w-[64px] sm:min-w-[80px] shadow-xs">
              <div className="text-xl sm:text-3xl font-black text-white tabular-nums leading-none">
                {timeLeft.days}
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-slate-400 uppercase mt-1.5">
                HARI
              </div>
            </div>

            <div className="bg-[#0F172A] rounded-2xl px-2 sm:px-4 py-2.5 sm:py-3 text-center min-w-[64px] sm:min-w-[80px] shadow-xs">
              <div className="text-xl sm:text-3xl font-black text-white tabular-nums leading-none">
                {pad(timeLeft.hours)}
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-slate-400 uppercase mt-1.5">
                JAM
              </div>
            </div>

            <div className="bg-[#0F172A] rounded-2xl px-2 sm:px-4 py-2.5 sm:py-3 text-center min-w-[64px] sm:min-w-[80px] shadow-xs">
              <div className="text-xl sm:text-3xl font-black text-white tabular-nums leading-none">
                {pad(timeLeft.minutes)}
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-slate-400 uppercase mt-1.5">
                MENIT
              </div>
            </div>

            <div className="bg-[#0F172A] rounded-2xl px-2 sm:px-4 py-2.5 sm:py-3 text-center min-w-[64px] sm:min-w-[80px] shadow-xs">
              <div className="text-xl sm:text-3xl font-black text-[#FBBF24] tabular-nums leading-none">
                {pad(timeLeft.seconds)}
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-slate-400 uppercase mt-1.5">
                DETIK
              </div>
            </div>
          </div>
        </div>

        {/* 4 Summary Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-5">
          {/* Card 1: 30 Cabor */}
          <button
            onClick={() => onNavigate('cabor')}
            className="text-left bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-none">
                  {totalCabor}
                </div>
                <div className="text-[10px] sm:text-[11px] font-extrabold text-[#0284C7] uppercase tracking-wider mt-1 truncate">
                  CABANG OLAHRAGA
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-medium text-slate-500 group-hover:text-[#0284C7] transition-colors">
              <span className="truncate">Daftar cabor yang bertanding</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            </div>
          </button>

          {/* Card 2: 26 Venues */}
          <button
            onClick={() => onNavigate('venue')}
            className="text-left bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-none">
                  {totalVenues}
                </div>
                <div className="text-[10px] sm:text-[11px] font-extrabold text-emerald-600 uppercase tracking-wider mt-1 truncate">
                  VENUE PERTANDINGAN
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-medium text-slate-500 group-hover:text-emerald-600 transition-colors">
              <span className="truncate">Gelanggang &amp; lokasi stadion</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            </div>
          </button>

          {/* Card 3: 8 Jadwal */}
          <button
            onClick={() => onNavigate('jadwal')}
            className="text-left bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-lg hover:border-amber-300 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-none">
                  {totalSchedules}
                </div>
                <div className="text-[10px] sm:text-[11px] font-extrabold text-[#D97706] uppercase tracking-wider mt-1 truncate">
                  JADWAL PERTANDINGAN
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-medium text-slate-500 group-hover:text-[#D97706] transition-colors">
              <span className="truncate">Kalender tanggal pertandingan</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            </div>
          </button>

          {/* Card 4: 32 Kontingen */}
          <button
            onClick={() => onNavigate('klasemen')}
            className="text-left bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-lg hover:border-indigo-300 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-none">
                  {totalContingents}
                </div>
                <div className="text-[10px] sm:text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider mt-1 truncate">
                  KONTINGEN KAB/KOTA
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-medium text-slate-500 group-hover:text-indigo-600 transition-colors">
              <span className="truncate">Daerah peserta PORPROVSU</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
