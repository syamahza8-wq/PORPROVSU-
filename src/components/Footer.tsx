import React from 'react';
import { Award, Calendar, MapPin, Shield, Trophy, Newspaper, Images, Users } from 'lucide-react';
import { ASSETS } from '../assets';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800 pb-20 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-white p-1.5 flex items-center justify-center shrink-0">
                <img
                  src={ASSETS.logo}
                  alt="Logo PORPROVSU 2026"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white tracking-tight flex items-center gap-1.5">
                  <span>PORPROVSU 2026</span>
                  <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                </h3>
                <p className="text-[11px] font-bold tracking-[0.16em] text-amber-400 uppercase">
                  Pekan Olahraga Provinsi Sumatera Utara
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Pusat informasi resmi Pekan Olahraga Provinsi Sumatera Utara (PORPROVSU XII) Tahun 2026 — menyajikan jadwal pertandingan, 30 cabang olahraga, 26 venue resmi, 32 kontingen Kabupaten/Kota, serta klasemen medali real-time menuju PON XXII.
            </p>
          </div>

          {/* Menu Utama */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3.5">
              Navigasi Portal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('klasemen')}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-[#F59E0B]" /> Klasemen Medali
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('jadwal')}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#0284C7]" /> Jadwal Pertandingan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cabor')}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Trophy className="w-3.5 h-3.5 text-[#F59E0B]" /> 30 Cabang Olahraga
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('venue')}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" /> 26 Lokasi Venue
                </button>
              </li>
            </ul>
          </div>

          {/* Informasi Lainnya */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3.5">
              Kontingen &amp; Media
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('kontingen')}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5 text-indigo-400" /> 32 Kontingen Kab/Kota
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('atlet')}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5 text-sky-400" /> Data Atlet &amp; Pelatih
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('berita')}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Newspaper className="w-3.5 h-3.5 text-amber-400" /> Berita PORPROVSU
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeri')}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Images className="w-3.5 h-3.5 text-emerald-400" /> Galeri Foto
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © 2026 PORPROVSU XII Sumatera Utara. Portal Informasi Resmi Terintegrasi Cloud Firestore.
          </p>
          <p className="font-semibold text-slate-400">
            Lokasi Pembukaan: Gedung Serbaguna Pancing, Medan
          </p>
        </div>
      </div>
    </footer>
  );
};
