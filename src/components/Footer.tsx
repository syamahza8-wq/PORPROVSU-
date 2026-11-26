import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { ASSETS } from '../assets';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-200 pt-14 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-dark border-l-2 border-brand-gold pl-2">
              Navigasi Informasi
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <button onClick={() => onNavigate('beranda')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Beranda Utama</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('atlet-pelatih')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Data Atlet & Pelatih</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('venue')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Lokasi Venue & Cabor</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cabor')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>30 Cabang Olahraga</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('jadwal')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Jadwal & Hasil Pertandingan</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kontingen')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>33 Kontingen Kab/Kota</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('berita')} className="hover:text-brand-royal flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Berita & Liputan</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Sekretariat & Kontak */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-dark border-l-2 border-brand-gold pl-2">
              Sekretariat Penyelenggara
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
