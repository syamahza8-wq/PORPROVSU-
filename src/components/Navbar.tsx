import React, { useState } from 'react';
import {
  Menu,
  X,
  Database,
  Code2,
  LogIn,
  LogOut,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { ASSETS } from '../assets';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
  onOpenDeveloperNotice: () => void;
  onOpenLogin: () => void;
  currentUser: { name: string; role: string } | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenAdmin,
  onOpenDeveloperNotice,
  onOpenLogin,
  currentUser,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'atlet-pelatih', label: 'Data Atlet & Pelatih' },
    { id: 'venue', label: 'Lokasi & Cabor' },
    { id: 'cabor', label: '28 Cabang Olahraga' },
    { id: 'jadwal', label: 'Jadwal & Skor' },
    { id: 'kontingen', label: '33 Kab/Kota' },
    { id: 'form-portal', label: 'Portal KONI Daerah' },
    { id: 'berita', label: 'Berita' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* 1. Official Top Government Strip */}
      <div className="bg-brand-royal text-white px-4 py-1.5 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0 truncate">
            <span className="font-extrabold text-brand-gold-light tracking-wider uppercase shrink-0">
              PEMPROV SUMUT
            </span>
            <span className="text-slate-400 shrink-0">|</span>
            <span className="text-slate-200 truncate">
              DISPORA & KONI Sumatera Utara
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDeveloperNotice}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold-light font-bold transition-colors whitespace-nowrap"
              title="Pernyataan Developer Muhammad Syam Ahza"
            >
              <Code2 className="w-3.5 h-3.5 text-brand-gold-light" />
              <span>Vibe Coder Note</span>
            </button>

            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Firestore Aktif</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Row 1: Brand Logo & Action Buttons (Zero collision, spacious) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo & Brand Title */}
          <div
            onClick={() => handleLinkClick('beranda')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center p-1 bg-white rounded-xl shadow-xs border border-slate-200 group-hover:border-brand-gold transition-colors shrink-0">
              <img
                src={ASSETS.logo}
                alt="Logo Resmi PORPROVSU"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = ASSETS.logoJpeg;
                }}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg sm:text-2xl tracking-tight text-brand-dark group-hover:text-brand-royal transition-colors">
                  PORPROVSU
                </span>
                <span className="bg-brand-gold text-white font-extrabold text-[10px] sm:text-xs px-2 py-0.5 rounded tracking-wider uppercase whitespace-nowrap">
                  XII 2026
                </span>
              </div>
              <span className="hidden sm:block text-[11px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                Pekan Olahraga Provinsi Sumatera Utara
              </span>
            </div>
          </div>

          {/* Right: Dedicated Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href="./koni-daerah/"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 font-bold text-xs shadow-2xs transition-all whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Input Atlet (KONI Daerah)</span>
              <ExternalLink className="w-3 h-3 text-amber-700" />
            </a>

            {currentUser ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-brand-royal text-white hover:bg-brand-dark transition-all shadow-2xs whitespace-nowrap"
                >
                  <Database className="w-3.5 h-3.5 text-brand-gold-light" />
                  <span>CMS ({currentUser.name})</span>
                </button>
                <button
                  onClick={onLogout}
                  className="p-2 text-xs font-bold rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                  title="Logout Akun"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onOpenLogin}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs shadow-2xs hover:border-brand-royal transition-all whitespace-nowrap"
                >
                  <LogIn className="w-4 h-4 text-brand-royal" />
                  <span>Login</span>
                </button>

                <button
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-royal hover:bg-brand-dark text-white font-bold text-xs shadow-2xs transition-all whitespace-nowrap"
                >
                  <Database className="w-3.5 h-3.5 text-brand-gold-light" />
                  <span>Firestore</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden shrink-0">
            <a
              href="./koni-daerah/"
              className="px-2.5 py-1.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-950 font-bold text-[11px] flex items-center gap-1 whitespace-nowrap"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span>KONI</span>
            </a>

            <button
              onClick={currentUser ? onOpenAdmin : onOpenLogin}
              className="p-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              title={currentUser ? 'Admin Panel' : 'Login Panitia'}
            >
              {currentUser ? (
                <Database className="w-5 h-5 text-brand-gold" />
              ) : (
                <LogIn className="w-5 h-5 text-brand-royal" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-brand-royal hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              aria-label="Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Row 2: Dedicated Horizontal Navigation Tabs Strip (Never collides or overlaps!) */}
      <div className="hidden md:block bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 py-2 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-brand-royal text-white shadow-2xs'
                      : 'text-slate-700 hover:text-brand-royal hover:bg-white hover:shadow-2xs'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 4. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-1.5 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  isActive
                    ? 'bg-brand-royal text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <a
              href="./koni-daerah/"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-gold text-white font-bold text-xs uppercase tracking-wider"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Portal Input Atlet KONI Kab/Kota</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-bold text-xs"
              >
                <LogIn className="w-4 h-4 text-brand-royal" />
                <span>Login Panitia</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-brand-royal text-white font-bold text-xs"
              >
                <Database className="w-4 h-4 text-brand-gold-light" />
                <span>Firestore CMS</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
