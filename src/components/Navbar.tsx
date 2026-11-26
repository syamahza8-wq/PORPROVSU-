import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Trophy, 
  Calendar, 
  Activity, 
  MapPin, 
  Newspaper, 
  ShieldCheck, 
  Database,
  Code2
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
  onOpenDeveloperNotice: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onNavigate, 
  onOpenAdmin,
  onOpenDeveloperNotice
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Beranda', icon: Trophy },
    { id: 'sambutan', label: 'Sambutan Kadis', icon: ShieldCheck },
    { id: 'klasemen', label: 'Klasemen Medali', icon: Trophy },
    { id: 'jadwal', label: 'Jadwal & Hasil', icon: Calendar },
    { id: 'cabor', label: 'Cabang Olahraga', icon: Activity },
    { id: 'venue', label: 'Venue & Lokasi', icon: MapPin },
    { id: 'berita', label: 'Berita & Liputan', icon: Newspaper },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all">
      {/* Top Government Bar */}
      <div className="bg-brand-royal text-white px-4 py-1 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-brand-gold-light tracking-wide uppercase">
              PEMERINTAH PROVINSI SUMATERA UTARA
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-200">
              Dinas Pemuda dan Olahraga (DISPORA) & KONI Sumut
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDeveloperNotice}
              className="inline-flex items-center gap-1 text-brand-gold-light hover:underline font-bold"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Vibe Coder Note</span>
            </button>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              Portal Resmi Aktif
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleLinkClick('beranda')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1 bg-white rounded-xl shadow-sm border border-slate-200/80 group-hover:border-brand-gold transition-colors">
              <img 
                src="/assets/logo.png" 
                alt="Logo Porprovsu" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/logo.jpeg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-brand-dark group-hover:text-brand-royal transition-colors">
                  PORPROVSU
                </span>
                <span className="bg-brand-gold text-white font-bold text-[10px] sm:text-xs px-1.5 py-0.5 rounded tracking-wide uppercase">
                  XII 2026
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-slate-500 uppercase tracking-wider">
                Pekan Olahraga Provinsi Sumatera Utara
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-brand-royal text-white shadow-sm' 
                      : 'text-slate-700 hover:text-brand-royal hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-gold-light' : 'text-slate-500'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Developer Notice & Firebase Admin */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenDeveloperNotice}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 transition-all shadow-xs"
              title="Catatan Developer Muhammad Syam Ahza"
            >
              <Code2 className="w-3.5 h-3.5 text-brand-gold" />
              <span>Pesan Developer</span>
            </button>

            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-300 bg-slate-50 text-slate-800 hover:bg-slate-100 hover:border-brand-royal transition-all active:scale-95 shadow-sm"
              title="Kelola Data & Sinkronisasi Firestore"
            >
              <Database className="w-3.5 h-3.5 text-brand-gold" />
              <span>Kelola Firestore / Admin</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenDeveloperNotice}
              className="p-2 rounded-lg border border-amber-300 bg-amber-50 text-amber-900"
              title="Pesan Pengembang"
            >
              <Code2 className="w-5 h-5 text-brand-gold" />
            </button>
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              title="Panel Admin"
            >
              <Database className="w-5 h-5 text-brand-gold" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-brand-royal hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 px-4 pt-3 pb-6 shadow-xl space-y-1.5 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive 
                    ? 'bg-brand-royal text-white' 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-gold-light' : 'text-slate-500'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeveloperNotice();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs uppercase tracking-wider"
            >
              <Code2 className="w-4 h-4 text-brand-gold" />
              <span>Pesan Developer Muhammad Syam Ahza</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-royal text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-dark transition-colors"
            >
              <Database className="w-4 h-4 text-brand-gold-light" />
              <span>Kelola Firestore / Admin</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
