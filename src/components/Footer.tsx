import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
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
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-200 pt-14 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-200">
          {/* Brand & Emblem */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white p-1.5 rounded-2xl flex items-center justify-center border border-slate-200 shadow-xs">
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
                <span className="font-black text-2xl text-brand-dark tracking-tight block">
                  PORPROVSU <span className="text-brand-gold">XII 2026</span>
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                  Pekan Olahraga Provinsi Sumatera Utara
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Portal resmi Pekan Olahraga Provinsi Sumatera Utara yang diselenggarakan oleh Pemerintah Provinsi Sumatera Utara melalui DISPORA dan KONI Sumatera Utara.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-brand-royal font-bold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Database Cloud Firebase Firestore</span>
            </div>
          </div>

          {/* Quick Navigation (NO Kata Sambutan link) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-dark border-l-2 border-brand-gold pl-2">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <button onClick={() => onNavigate('beranda')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Beranda Utama</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('klasemen')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Klasemen Medali Kabupaten</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('atlet-pelatih')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Data Atlet & Pelatih</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('jadwal')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Jadwal & Hasil Pertandingan</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cabor')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Cabang Olahraga (28 Cabor)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('venue')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Lokasi Venue & Cabor</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('form-portal')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Form Input & Login Panitia</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Sekretariat & Kontak */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-dark border-l-2 border-brand-gold pl-2">
              Sekretariat Panitia
            </h4>

            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  Gedung Dispora Provinsi Sumatera Utara, Jl. William Iskandar No. 9, Deli Serdang - Medan 20371
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
                <span>www.porprovsu.com</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenLogin}
                className="w-full py-2.5 px-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-brand-dark font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <LogIn className="w-4 h-4 text-brand-royal" />
                <span>Login Akun Panitia / Wasit</span>
              </button>

              <button
                onClick={onOpenAdmin}
                className="w-full py-2.5 px-3 rounded-xl bg-brand-royal hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>Kelola Database Firestore</span>
                <ChevronRight className="w-4 h-4 text-brand-gold-light" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Panitia Besar PORPROVSU. Pemerintah Provinsi Sumatera Utara.
          </div>
          <div className="flex items-center gap-3">
            <span>Dispora Sumut & KONI Sumut</span>
            <span>•</span>
            <span className="text-brand-gold font-bold">Sumut Hebat & Berprestasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
