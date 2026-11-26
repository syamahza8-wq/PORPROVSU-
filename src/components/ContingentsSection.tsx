import React, { useState } from 'react';
import { Users, Search, MapPin, Award, ChevronRight } from 'lucide-react';
import { INITIAL_MEDALS } from '../constants/initialData';

export const ContingentsSection: React.FC = () => {
  const [search, setSearch] = useState('');

  const contingents = INITIAL_MEDALS.map((m) => {
    // Estimated athletes count based on rank
    const athletes = Math.max(45, Math.min(380, m.total * 3 + 40));
    const cabor = Math.max(6, Math.min(28, Math.floor(m.total / 5) + 6));
    return {
      id: m.id,
      name: m.contingent,
      code: m.regionCode,
      rank: m.rank,
      totalMedals: m.total,
      gold: m.gold,
      athletes,
      cabor,
    };
  });

  const filtered = contingents.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="kontingen" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-brand-dark text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-brand-gold" />
              <span>Partisipasi Daerah</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
              33 Kontingen Kabupaten & Kota
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Seluruh perwakilan daerah bersatu mempererat persaudaraan dan memajukan olahraga Sumut.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kontingen daerah..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-xs"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 hover:border-brand-royal hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    KODE: {item.code}
                  </span>
                  <span className="text-xs font-bold text-brand-gold bg-amber-50 px-2 py-0.5 rounded">
                    Rank #{item.rank}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 line-clamp-1">
                  {item.name}
                </h3>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 grid grid-cols-3 gap-1 text-center text-xs">
                <div className="bg-slate-50 p-1.5 rounded-lg">
                  <span className="text-[10px] text-slate-400 block font-semibold">Atlet</span>
                  <span className="font-bold text-slate-800">{item.athletes}</span>
                </div>
                <div className="bg-slate-50 p-1.5 rounded-lg">
                  <span className="text-[10px] text-slate-400 block font-semibold">Cabor</span>
                  <span className="font-bold text-slate-800">{item.cabor}</span>
                </div>
                <div className="bg-amber-50/80 p-1.5 rounded-lg border border-amber-200/50">
                  <span className="text-[10px] text-amber-800 block font-semibold">Medali</span>
                  <span className="font-black text-amber-900">{item.totalMedals}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
