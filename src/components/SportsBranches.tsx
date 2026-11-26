import React, { useState } from 'react';
import { Activity, MapPin, Search, Award } from 'lucide-react';
import { INITIAL_CABOR } from '../constants/initialData';

export const SportsBranches: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'ALL', label: `Semua (${INITIAL_CABOR.length})` },
    { id: 'Beregu', label: 'Beregu' },
    { id: 'Bela Diri', label: 'Bela Diri' },
    { id: 'Individu', label: 'Individu' },
    { id: 'Akuatik', label: 'Akuatik' },
    { id: 'Akurasi', label: 'Akurasi' },
  ];

  const filteredCabor = INITIAL_CABOR.filter((c) => {
    const matchCat = selectedCategory === 'ALL' || c.category === selectedCategory;
    const matchSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.locationCity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section
      id="cabor"
      className="scroll-mt-36 py-14 sm:py-20 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-dark text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-brand-gold" />
            <span>Sesuai Data Resmi porprovsumut.com</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
            30 Cabang Olahraga Resmi PORPROVSU
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Seluruh cabang olahraga dan disiplin resmi yang dipertandingkan di 4 klaster wilayah tuan rumah (Medan, Deli Serdang, Binjai, Pematangsiantar).
          </p>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-brand-royal text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari cabor atau lokasi kota..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-2xs"
            />
          </div>
        </div>

        {/* Cabor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {filteredCabor.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:shadow-md hover:border-brand-royal transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {c.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 whitespace-nowrap">
                    <Award className="w-3 h-3 text-amber-600" />
                    <span>{c.goldMedalsCount} Nomor</span>
                  </span>
                </div>

                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-brand-royal transition-colors">
                  {c.name}
                </h3>

                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                  {c.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-600">
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="line-clamp-2">
                    <strong className="text-brand-royal">{c.locationCity}:</strong> {c.venue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
