import React from 'react';
import { MapPin, Users, Navigation, ExternalLink } from 'lucide-react';
import { INITIAL_VENUES } from '../constants/initialData';

export const VenuesSection: React.FC = () => {
  return (
    <section id="venue" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-brand-royal text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            <span>Lokasi Penyelenggaraan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
            Arena & Venue Pertandingan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Fasilitas berstandar nasional di Medan, Deli Serdang, Binjai, dan sekitarnya.
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_VENUES.map((v) => (
            <div 
              key={v.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-brand-royal hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-brand-royal bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                    {v.city}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Kapasitas: {v.capacity}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 group-hover:text-brand-royal transition-colors">
                  {v.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                  <span>{v.location}</span>
                </p>

                {/* Hosted Cabor */}
                <div className="mt-4 pt-4 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Cabang Olahraga Dipertandingkan:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {v.caborHosted.map((cabor, i) => (
                      <span 
                        key={i}
                        className="text-xs font-medium bg-white border border-slate-200 text-slate-800 px-2 py-0.5 rounded-md"
                      >
                        {cabor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {v.mapUrl && (
                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <a
                    href={v.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:bg-brand-royal hover:text-white hover:border-brand-royal text-slate-800 font-bold text-xs transition-colors shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Petunjuk Arah (Google Maps)</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
