import React, { useState } from 'react';
import { Users, Search } from 'lucide-react';
import { MedalStanding, Athlete } from '../types';
import { DistrictEmblem } from './DistrictEmblem';

interface ContingentsSectionProps {
  medals: MedalStanding[];
  athletes: Athlete[];
}

export const ContingentsSection: React.FC<ContingentsSectionProps> = ({
  medals,
  athletes,
}) => {
  const [search, setSearch] = useState('');

  const contingents = medals.map((m) => {
    const regAthletes = athletes.filter(
      (a) => a.contingent.toLowerCase() === m.contingent.toLowerCase()
    );
    const caborCount = new Set(regAthletes.map((a) => a.cabor)).size;
    return {
      id: m.id,
      name: m.contingent,
      code: m.regionCode,
      initials: m.emblemInitials || m.regionCode,
      badgeBg: m.badgeBg,
      athletesCount: regAthletes.length,
      caborCount,
    };
  });

  const filtered = contingents.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="kontingen"
      className="scroll-mt-36 py-14 sm:py-20 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-royal text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-brand-gold" />
              <span>Partisipasi Daerah</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
              33 Kontingen Kabupaten & Kota
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Logo resmi masing-masing daerah peserta PORPROVSU XII Sumatera Utara beserta jumlah atlet dan cabang olahraga diikuti.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kabupaten / kota..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-2xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 hover:border-brand-royal hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="flex items-start gap-3">
                <DistrictEmblem
                  initials={item.initials}
                  bg={item.badgeBg}
                  size="md"
                  name={item.name}
                />
                <div className="min-w-0 flex-1">
                  <span className="inline-block text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded mb-1">
                    {item.code}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 line-clamp-1">{item.name}</h3>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-slate-50 p-1.5 rounded-lg">
                  <span className="text-[10px] text-slate-400 block font-semibold">Atlet Terdaftar</span>
                  <span className="font-bold text-slate-800">{item.athletesCount}</span>
                </div>
                <div className="bg-slate-50 p-1.5 rounded-lg">
                  <span className="text-[10px] text-slate-400 block font-semibold">Cabor Diikuti</span>
                  <span className="font-bold text-slate-800">{item.caborCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
