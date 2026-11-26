import React, { useState, useRef, useEffect } from 'react';
import {
  Home,
  LayoutGrid,
  ChevronDown,
  Award,
  Newspaper,
  Images,
  CalendarDays,
  Trophy,
  MapPin,
  Shield,
  Users,
  Menu,
  X,
} from 'lucide-react';
import { ASSETS } from '../assets';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  liveMatchesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  liveMatchesCount,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const pertandinganSections = ['jadwal', 'cabor', 'venue', 'kontingen', 'atlet'];
  const isPertandinganActive = pertandinganSections.includes(activeSection);

  const handleNav = (section: string) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(section);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-t-2 border-t-[#0284C7] border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-3">
        {/* Left: Brand Identity */}
        <button
          onClick={() => handleNav('beranda')}
          className="flex items-center gap-2.5 sm:gap-3 text-left shrink-0 focus:outline-none group"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 shadow-xs p-1 flex items-center justify-center overflow-hidden group-hover:border-[#0284C7]/50 transition-colors">
            <img
              src={ASSETS.logo}
              alt="Logo PORPROVSU 2026"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#0F172A]">
                PORPROVSU 2026
              </span>
              <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            </div>
            <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.16em] text-slate-400 uppercase mt-0.5">
              SUMATERA UTARA 2026
            </span>
          </div>
        </button>

        {/* Center: Floating Pill Nav (Desktop) */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden lg:flex items-center gap-1 bg-slate-100/90 border border-slate-200/80 p-1 rounded-full"
        >
          <button
            onClick={() => handleNav('beranda')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              activeSection === 'beranda'
                ? 'bg-white text-[#0284C7] font-bold shadow-xs'
                : 'text-slate-600 hover:text-[#0F172A] hover:bg-white/60'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </button>

          {/* Pertandingan Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                isPertandinganActive || dropdownOpen
                  ? 'bg-white text-[#0284C7] font-bold shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A] hover:bg-white/60'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Pertandingan</span>
              {liveMatchesCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              )}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2.5 w-64 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/10 p-2 z-50 animate-fadeIn">
                <button
                  onClick={() => handleNav('jadwal')}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    activeSection === 'jadwal'
                      ? 'bg-sky-50 text-[#0284C7]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <CalendarDays className="w-4 h-4 text-[#0284C7]" />
                    Jadwal Pertandingan
                  </span>
                  {liveMatchesCount > 0 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-red-50 text-red-600 text-[10px] font-bold">
                      {liveMatchesCount} Live
                    </span>
                  )}
                </button>

                <button
                  onClick={() => handleNav('cabor')}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    activeSection === 'cabor'
                      ? 'bg-sky-50 text-[#0284C7]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Trophy className="w-4 h-4 text-[#F59E0B]" />
                    Cabang Olahraga
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">30</span>
                </button>

                <button
                  onClick={() => handleNav('venue')}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    activeSection === 'venue'
                      ? 'bg-sky-50 text-[#0284C7]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Lokasi Venue
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">26</span>
                </button>

                <button
                  onClick={() => handleNav('kontingen')}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    activeSection === 'kontingen'
                      ? 'bg-sky-50 text-[#0284C7]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Shield className="w-4 h-4 text-indigo-600" />
                    Kontingen Kab/Kota
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">32</span>
                </button>

                <button
                  onClick={() => handleNav('atlet')}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    activeSection === 'atlet'
                      ? 'bg-sky-50 text-[#0284C7]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-slate-600" />
                    Data Atlet & Pelatih
                  </span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('klasemen')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              activeSection === 'klasemen'
                ? 'bg-white text-[#0284C7] font-bold shadow-xs'
                : 'text-slate-600 hover:text-[#0F172A] hover:bg-white/60'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Rekap Medali</span>
          </button>

          <button
            onClick={() => handleNav('berita')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              activeSection === 'berita'
                ? 'bg-white text-[#0284C7] font-bold shadow-xs'
                : 'text-slate-600 hover:text-[#0F172A] hover:bg-white/60'
            }`}
          >
            <Newspaper className="w-3.5 h-3.5" />
            <span>Berita</span>
          </button>

          <button
            onClick={() => handleNav('galeri')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              activeSection === 'galeri'
                ? 'bg-white text-[#0284C7] font-bold shadow-xs'
                : 'text-slate-600 hover:text-[#0F172A] hover:bg-white/60'
            }`}
          >
            <Images className="w-3.5 h-3.5" />
            <span>Galeri</span>
          </button>
        </nav>

        {/* Right CTA + Mobile Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleNav('klasemen')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white text-xs font-bold shadow-sm shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Klasemen Medali</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
            aria-label="Toggle Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3.5 space-y-1.5 shadow-lg animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleNav('beranda')}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                activeSection === 'beranda'
                  ? 'bg-sky-50 border-sky-200 text-[#0284C7]'
                  : 'bg-slate-50 border-slate-100 text-slate-700'
              }`}
            >
              <Home className="w-4 h-4" /> Beranda
            </button>
            <button
              onClick={() => handleNav('klasemen')}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                activeSection === 'klasemen'
                  ? 'bg-amber-50 border-amber-200 text-amber-700'
                  : 'bg-amber-500 border-amber-500 text-white'
              }`}
            >
              <Award className="w-4 h-4" /> Klasemen Medali
            </button>
            <button
              onClick={() => handleNav('jadwal')}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                activeSection === 'jadwal'
                  ? 'bg-sky-50 border-sky-200 text-[#0284C7]'
                  : 'bg-slate-50 border-slate-100 text-slate-700'
              }`}
            >
              <CalendarDays className="w-4 h-4" /> Jadwal Laga
            </button>
            <button
              onClick={() => handleNav('cabor')}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                activeSection === 'cabor'
                  ? 'bg-sky-50 border-sky-200 text-[#0284C7]'
                  : 'bg-slate-50 border-slate-100 text-slate-700'
              }`}
            >
              <Trophy className="w-4 h-4" /> 30 Cabor Resmi
            </button>
            <button
              onClick={() => handleNav('venue')}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                activeSection === 'venue'
                  ? 'bg-sky-50 border-sky-200 text-[#0284C7]'
                  : 'bg-slate-50 border-slate-100 text-slate-700'
              }`}
            >
              <MapPin className="w-4 h-4" /> 26 Lokasi Venue
            </button>
            <button
              onClick={() => handleNav('kontingen')}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                activeSection === 'kontingen'
                  ? 'bg-sky-50 border-sky-200 text-[#0284C7]'
                  : 'bg-slate-50 border-slate-100 text-slate-700'
              }`}
            >
              <Shield className="w-4 h-4" /> 32 Kontingen
            </button>
            <button
              onClick={() => handleNav('atlet')}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                activeSection === 'atlet'
                  ? 'bg-sky-50 border-sky-200 text-[#0284C7]'
                  : 'bg-slate-50 border-slate-100 text-slate-700'
              }`}
            >
              <Users className="w-4 h-4" /> Atlet & Pelatih
            </button>
            <button
              onClick={() => handleNav('berita')}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                activeSection === 'berita'
                  ? 'bg-sky-50 border-sky-200 text-[#0284C7]'
                  : 'bg-slate-50 border-slate-100 text-slate-700'
              }`}
            >
              <Newspaper className="w-4 h-4" /> Berita Resmi
            </button>
            <button
              onClick={() => handleNav('galeri')}
              className={`col-span-2 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                activeSection === 'galeri'
                  ? 'bg-sky-50 border-sky-200 text-[#0284C7]'
                  : 'bg-slate-50 border-slate-100 text-slate-700'
              }`}
            >
              <Images className="w-4 h-4" /> Galeri Foto PORPROVSU
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
