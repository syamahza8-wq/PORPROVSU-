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
  Code2,
  LogIn,
  Users,
  LogOut
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
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'klasemen', label: 'Klasemen Medali' },
    { id: 'atlet-pelatih', label: 'Atlet & Pelatih' },
    { id: 'venue', label: 'Lokasi & Cabor' },
    { id: 'jadwal', label: 'Jadwal & Skor' },
    { id: 'form-portal', label: 'Form' },
    { id: 'berita', label: 'Berita' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      
      {/* 1. Official Top Government Strip */}
      <div className="bg-brand-royal text-white px-4 py-1.5 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-brand-gold-light tracking-wider uppercase">
              PEMPROV SUMUT
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-200 hidden md:inline">
              Dinas Pemuda dan Olahraga (DISPORA) & KONI Sumatera Utara
            </span>
            <span className="text-slate-200 md:hidden">
              DISPORA & KONI Sumut
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDeveloperNotice}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold-light font-bold transition-colors"
              title="Pernyataan Developer Muhammad Syam Ahza"
            >
              <Code2 className="w-3.5 h-3.5 text-brand-gold-light" />
              <span>Vibe Coder Note</span>
            </button>

            <span className="text-slate-500 hidden sm:inline">•</span>

            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Portal Resmi Aktif</span>
            </span>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Title */}
          <div 
            onClick={() => handleLinkClick('beranda')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1 bg-white rounded-xl shadow-xs border border-slate-200 group-hover:border-brand-gold transition-colors">
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
                <span className="font-black text-xl sm:text-2xl tracking-tight text-brand-dark group-hover:text-brand-royal transition-colors">
                  PORPROVSU
                </span>
                <span className="bg-brand-gold text-white font-extrabold text-[10px] sm:text-xs px-2 py-0.5 rounded tracking-wider uppercase">
                  XII 2026
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Pekan Olahraga Provinsi Sumatera Utara
              </span>
            </div>
          </div>

          {/* Center: Desktop Navigation Tabs */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                    isActive 
                      ? 'bg-brand-royal text-white shadow-xs' 
                      : 'text-slate-700 hover:text-brand-royal hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Auth & Admin Actions */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {currentUser ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenAdmin}
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl bg-brand-royal text-white hover:bg-brand-dark transition-all shadow-xs"
                >
                  <Database className="w-3.5 h-3.5 text-brand-gold-light" />
                  <span>Admin ({currentUser.name})</span>
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
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenLogin}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs shadow-xs hover:border-brand-royal transition-all active:scale-95"
                >
                  <LogIn className="w-4 h-4 text-brand-royal" />
                  <span>Login Panitia</span>
                </button>

                <button
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-royal hover:bg-brand-dark text-white font-bold text-xs shadow-xs transition-all active:scale-95"
                >
                  <Database className="w-3.5 h-3.5 text-brand-gold-light" />
                  <span>Database CMS</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={currentUser ? onOpenAdmin : onOpenLogin}
              className="p-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              title={currentUser ? "Admin Panel" : "Login Panitia"}
            >
              {currentUser ? <Database className="w-5 h-5 text-brand-gold" /> : <LogIn className="w-5 h-5 text-brand-royal" />}
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

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-1 animate-fadeIn">
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
            {currentUser ? (
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-royal text-white font-bold text-xs uppercase tracking-wider"
                >
                  <Database className="w-4 h-4 text-brand-gold-light" />
                  <span>Buka Panel Database ({currentUser.name})</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-red-200 text-red-600 font-bold text-xs"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar / Logout</span>
                </button>
              </div>
            ) : (
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
                  <span>Database CMS</span>
                </button>
              </div>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeveloperNotice();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-300 font-bold text-xs"
            >
              <Code2 className="w-4 h-4 text-brand-gold" />
              <span>Catatan Developer Muhammad Syam Ahza</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
