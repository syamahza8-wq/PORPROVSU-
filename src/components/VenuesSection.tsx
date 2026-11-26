import React, { useState, useMemo } from 'react';
import { MapPin, Navigation, ExternalLink, Search, Activity } from 'lucide-react';
import { INITIAL_VENUES } from '../constants/initialData';

export const VenuesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('ALL');

  const cities = useMemo(() => {
    return Array.from(new Set(INITIAL_VENUES.map((v) => v.city)));
  }, []);

  const filteredVenues = useMemo(() => {
    return INITIAL_VENUES.filter((v) => {
      const matchCity = selectedCity === 'ALL' || v.city === selectedCity;
      const matchSearch =
        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.caborHosted.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCity && matchSearch;
    });
  }, [searchTerm, selectedCity]);

  return (
    <section id="venue" className="scroll-mt-36 py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-brand-royal text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Lokasi Venue & Cabang Olahraga</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
              Lokasi Pertandingan & Daftar Cabor
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Temukan lokasi arena penyelenggaraan beserta cabang olahraga apa saja yang dipertandingkan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari lokasi atau cabor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
            </div>

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="p-2 text-xs sm:text-sm font-semibold bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:ring-2 focus:ring-brand-gold"
            >
              <option value="ALL">Semua Kota/Kab</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVenues.map((v) => (
            <div
              key={v.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:border-brand-royal hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-brand-royal bg-white border border-blue-200 px-2.5 py-0.5 rounded-full">
                    {v.city}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Kapasitas: {v.capacity}
                  </span>
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-brand-royal transition-colors">
                  {v.name}
                </h3>

                <p className="text-xs text-slate-600 mt-1.5 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                  <span>{v.location}</span>
                </p>

                {/* Hosted Cabor */}
                <div className="mt-4 pt-3.5 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-2">
                    <Activity className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Cabor di Lokasi Ini:</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {v.caborHosted.map((cabor, i) => (
                      <span
                        key={i}
                        className="text-xs font-bold bg-white border border-slate-200 text-brand-royal px-2.5 py-1 rounded-lg shadow-2xs"
                      >
                        {cabor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {v.mapUrl && (
                <div className="mt-5 pt-3.5 border-t border-slate-200/80">
                  <a
                    href={v.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:bg-brand-royal hover:text-white hover:border-brand-royal text-slate-800 font-bold text-xs transition-colors shadow-2xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Buka Google Maps</span>
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
