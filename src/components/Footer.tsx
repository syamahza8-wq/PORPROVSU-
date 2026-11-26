import React from 'react';
import { 
  Trophy, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  ExternalLink, 
  ChevronRight,
  LogIn
} from 'lucide-react';
import { ASSETS } from '../assets';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin, onOpenLogin }) => {
  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Emblem (Col 1 - 5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white p-1 rounded-2xl flex items-center justify-center border border-slate-700 shadow-sm">
                <img 
                  src={ASSETS.logo} 
                  alt="Logo Porprovsu" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = ASSETS.logoJpeg;
                  }}
                />
              </div>
              <div>
                <span className="font-black text-2xl text-white tracking-tight block">
                  PORPROVSU <span className="text-brand-gold-light">XII 2026</span>
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                  Pekan Olahraga Provinsi Sumatera Utara
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Pekan Olahraga Provinsi Sumatera Utara merupakan pesta olahraga multi-cabang resmi tertinggi tingkat provinsi yang diselenggarakan oleh Pemerintah Provinsi Sumatera Utara melalui Dinas Pemuda dan Olahraga (DISPORA) bersama Komite Olahraga Nasional Indonesia (KONI) Sumatera Utara.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-brand-gold-light font-bold">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Portal Resmi Berbasis Cloud Firestore</span>
            </div>
          </div>

          {/* Quick Navigation (Col 6 - 8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-brand-gold pl-2">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => onNavigate('beranda')} className="hover:text-brand-gold-light flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Beranda Utama</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sambutan')} className="hover:text-brand-gold-light flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sambutan Kadispora</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('klasemen')} className="hover:text-brand-gold-light flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Klasemen Medali Sementara</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('jadwal')} className="hover:text-brand-gold-light flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Jadwal & Hasil Pertandingan</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cabor')} className="hover:text-brand-gold-light flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Cabang Olahraga (28 Cabor)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kontingen')} className="hover:text-brand-gold-light flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>33 Kontingen Daerah</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('venue')} className="hover:text-brand-gold-light flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Venue Pertandingan</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('berita')} className="hover:text-brand-gold-light flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Berita & Press Release</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Sekretariat & Kontak (Col 9 - 12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-brand-gold pl-2">
              Sekretariat Panitia
            </h4>

            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  Gedung Dinas Pemuda dan Olahraga Provinsi Sumatera Utara, Jl. William Iskandar No. 9, Kenangan Baru, Percut Sei Tuan, Deli Serdang - Medan 20371
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>(061) 7360241 / Sekretariat KONI Sumut</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>sekretariat@porprovsumut.com</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-brand-gold shrink-0" />
                <span>www.porprovsu.com / dispora.sumutprov.go.id</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenLogin}
                className="w-full py-2.5 px-3 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4 text-brand-royal" />
                <span>Login Akun Panitia / Wasit</span>
              </button>

              <button
                onClick={onOpenAdmin}
                className="w-full py-2.5 px-3 rounded-xl bg-brand-royal border border-slate-700 hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Kelola Database Firestore (Panitia)</span>
                <ChevronRight className="w-4 h-4 text-brand-gold-light" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Panitia Besar PORPROVSU. Pemerintah Provinsi Sumatera Utara. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Dispora Sumut & KONI Sumut</span>
            <span>•</span>
            <span className="text-brand-gold-light font-semibold">Sumut Hebat & Berprestasi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
