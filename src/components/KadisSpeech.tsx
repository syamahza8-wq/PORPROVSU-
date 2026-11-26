import React from 'react';
import { ShieldCheck, Award, Quote, CheckCircle2 } from 'lucide-react';
import { KADIS_PROFILE } from '../constants/initialData';
import { ASSETS } from '../assets';

export const KadisSpeech: React.FC = () => {
  return (
    <section id="sambutan" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Pemerintah Provinsi Sumatera Utara</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Sambutan Resmi Kepala Dinas Pemuda dan Olahraga
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Dinas Pemuda dan Olahraga (DISPORA) Provinsi Sumatera Utara
          </p>
        </div>

        {/* Feature Container with kadis image prominently highlighted */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left: Kadis Official Portrait Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-md border-4 border-white bg-slate-900 group">
                <img 
                  src={ASSETS.kadis} 
                  alt="Kepala Dinas Pemuda dan Olahraga Sumatera Utara" 
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Official Plaque Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent p-4 sm:p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-gold"></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-light">
                      DISPORA PROVINSI SUMATERA UTARA
                    </span>
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug">
                    {KADIS_PROFILE.name}
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Pemerintah Provinsi Sumatera Utara
                  </p>
                </div>
              </div>

              {/* Verified badge */}
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Penyelenggara Resmi Bersama KONI Sumut</span>
              </div>
            </div>

            {/* Right: Official Address Text */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                  Amanat Pembukaan & Semangat Kompetisi
                </span>
                <p className="text-base sm:text-lg font-bold text-brand-royal italic">
                  “{KADIS_PROFILE.speechGreeting}”
                </p>
              </div>

              <div className="relative pl-6 border-l-4 border-brand-gold space-y-3.5 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Quote className="w-7 h-7 text-brand-gold/25 absolute -top-3.5 -left-2.5" />
                <p>
                  {KADIS_PROFILE.speechBody}
                </p>
                <p>
                  {KADIS_PROFILE.speechCommitment}
                </p>
              </div>

              {/* Motto Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-brand-royal text-white flex items-start gap-4 shadow-xs">
                <div className="p-2.5 rounded-xl bg-brand-gold text-slate-950 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-gold-light uppercase tracking-wide">
                    Motto Porprovsu Sumatera Utara
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold mt-0.5 text-slate-100">
                    {KADIS_PROFILE.motto}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
