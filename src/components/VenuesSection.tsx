import React, { useMemo, useState } from 'react';
import { MapPin, Users, ExternalLink, Search, Building2 } from 'lucide-react';
import { INITIAL_VENUES } from '../constants/initialData';

export const VenuesSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('Semua');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const cityFilters = useMemo(() => {
    const normalized = INITIAL_VENUES.map((v) =>
      v.city === 'Medan' ? 'Kota Medan' : v.city
    );
    const counts: Record<string, number> = {};
    normalized.forEach((c) => {
      counts[c] = (counts[c] || 0) + 1;
    });
    return ['Semua', ...Object.keys(counts)];
  }, []);

  const filteredVenues = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return INITIAL_VENUES.filter((v) => {
      const normalizedCity = v.city === 'Medan' ? 'Kota Medan' : v.city;
      const matchCity = selectedCity === 'Semua' || normalizedCity === selectedCity;
      const matchSearch =
        !q ||
        v.name.toLowerCase().includes(q) ||
        v.location.toLowerCase().includes(q) ||
        v.caborHosted.some((c) => c.toLowerCase().includes(q));
      return matchCity && matchSearch;
    });
  }, [selectedCity, searchTerm]);

  return (
    <section id="venue" className="py-10 sm:py-14 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-extrabold uppercase tracking-wider mb-2.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{INITIAL_VENUES.length} Lokasi Venue Resmi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Lokasi Gelanggang &amp; Arena Pertandingan
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Data lokasi arena pertandingan resmi PORPROVSU XII 2026 di Medan, Deli Serdang, Binjai, dan Pematangsiantar.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari stadion, GOR, atau cabor..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/25 focus:border-[#0284C7]"
            />
          </div>
        </div>

        {/* City Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cityFilters.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                selectedCity === city
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {city === 'Semua' ? `Semua Lokasi (${INITIAL_VENUES.length})` : city}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-lg hover:border-emerald-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-extrabold uppercase tracking-wider">
                    {venue.city === 'Medan' ? 'Kota Medan' : venue.city}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-[#0F172A] leading-snug mb-1.5">
                  {venue.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{venue.location}</span>
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {venue.caborHosted.map((c, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-100 text-[#0284C7] text-[11px] font-bold"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>Kapasitas: {venue.capacity}</span>
                </span>

                {venue.mapUrl && (
                  <a
                    href={venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0284C7] hover:text-[#0369A1]"
                  >
                    <span>Peta</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
