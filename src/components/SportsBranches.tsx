import React, { useMemo, useState } from 'react';
import {
  Search,
  Trophy,
  MapPin,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { INITIAL_CABOR } from '../constants/initialData';

export const SportsBranches: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedCabor, setExpandedCabor] = useState<Record<string, boolean>>({});

  const categories = ['ALL', 'Beregu', 'Bela Diri', 'Individu', 'Akurasi', 'Akuatik'];

  const filteredCabor = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return INITIAL_CABOR.filter((c) => {
      const matchCat = selectedCategory === 'ALL' || c.category === selectedCategory;
      const matchQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.venue.toLowerCase().includes(q) ||
        c.locationCity.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchTerm]);

  const toggleExpand = (id: string) => {
    setExpandedCabor((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="cabor" className="py-10 sm:py-14 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-extrabold uppercase tracking-wider mb-2.5">
              <Trophy className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{INITIAL_CABOR.length} Cabang Olahraga Resmi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Cabang Olahraga PORPROVSU XII 2026
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Daftar lengkap 30 cabang olahraga resmi beserta nomor pertandingan dan venue pelaksanaannya di Sumatera Utara.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari cabor atau nama venue..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/25 focus:border-[#0284C7]"
            />
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0284C7] border-[#0284C7] text-white shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat === 'ALL' ? `Semua (${INITIAL_CABOR.length})` : cat}
            </button>
          ))}
        </div>

        {/* Cabor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredCabor.map((cabor) => {
            const nomors = cabor.nomorDaftar || [];
            const isExpanded = !!expandedCabor[cabor.id];
            const visibleNomors = isExpanded ? nomors : nomors.slice(0, 3);

            return (
              <div
                key={cabor.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-lg hover:border-sky-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-2xl shrink-0">
                        {cabor.ikon || '🏆'}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base text-[#0F172A] leading-snug">
                          {cabor.name}
                        </h3>
                        <span className="inline-block mt-0.5 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {cabor.category}
                        </span>
                      </div>
                    </div>

                    <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold">
                      <Layers className="w-3 h-3" />
                      {cabor.goldMedalsCount} Nomor
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 rounded-xl p-2.5 border border-slate-100 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-[#0F172A] truncate">{cabor.venue}</div>
                      <div className="text-[11px] text-slate-500">{cabor.locationCity}</div>
                    </div>
                  </div>

                  {nomors.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap gap-1.5">
                        {visibleNomors.map((n, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-sky-50/70 border border-sky-100 text-[10px] font-semibold text-[#0284C7]"
                          >
                            {n}
                          </span>
                        ))}
                      </div>
                      {nomors.length > 3 && (
                        <button
                          onClick={() => toggleExpand(cabor.id)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-[#0284C7] cursor-pointer mt-1"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="w-3.5 h-3.5" /> Sembunyikan nomor
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3.5 h-3.5" /> +{nomors.length - 3} nomor lainnya
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
