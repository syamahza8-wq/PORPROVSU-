import React from 'react';
import { 
  X, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Flame,
  Layout,
  Database,
  Smartphone
} from 'lucide-react';

interface DeveloperNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperNoticeModal: React.FC<DeveloperNoticeModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Top Header Banner */}
        <div className="bg-brand-royal text-white p-6 sm:p-7 relative">
          <div className="flex items-center justify-between pb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold text-slate-950 text-xs font-black uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>Developer Showcase & Vibe Coder</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Tutup Pesan"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Pernyataan & Komparasi Kualitas Web
          </h3>
          <p className="text-xs text-brand-gold-light font-semibold mt-1">
            Karya: Muhammad Syam Ahza
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Statement Box - Exact requested text */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-brand-gold/60 text-slate-800 space-y-3 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                Catatan Resmi Pengembang
              </span>
            </div>

            <blockquote className="text-base sm:text-lg font-bold text-slate-900 leading-snug italic border-l-4 border-brand-gold pl-3 py-1">
              “Muhammad Syam Ahza membuat web yang sama seperti porprovsu.com karna agar kalian bisa membandingkan yang mana website di tangan developer vibe coder yang bagus yang mana yang gak.”
            </blockquote>
          </div>

          {/* Value Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Standar Kualitas yang Diterapkan:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <Layout className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Desain Resmi Elegan</strong>
                  <span className="text-slate-600">Warna sesuai logo asli, berwibawa, dan tanpa gradasi neon norak.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <Database className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Cloud Firestore Database</strong>
                  <span className="text-slate-600">Integrasi data medali & live score real-time dengan sinkronisasi instan.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <Smartphone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">100% Responsif</strong>
                  <span className="text-slate-600">Lancar sempurna di smartphone, tablet, maupun layar desktop lebar.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Fitur Lengkap Porprovsu</strong>
                  <span className="text-slate-600">33 Kab/Kota + Logo Daerah, 28 Cabor, Data Atlet & Pelatih, Lokasi Venue.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-3.5 px-6 rounded-xl bg-brand-royal hover:bg-brand-dark text-white font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-98"
            >
              <span>Mulai Jelajahi & Bandingkan Website</span>
              <ArrowRight className="w-4 h-4 text-brand-gold-light" />
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-500 font-medium">
          Dibuat dengan dedikasi tinggi untuk olahraga Sumatera Utara • Vibe Coder Standard
        </div>

      </div>
    </div>
  );
};
