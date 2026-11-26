import React, { useMemo, useState } from 'react';
import { Award, Search, Trophy, ChevronRight, Radio } from 'lucide-react';
import { Athlete, MedalStanding } from '../types';
import { DistrictEmblem } from './DistrictEmblem';

interface MedalTableProps {
  medals: MedalStanding[];
  athletes: Athlete[];
  compact?: boolean;
  onViewAll?: () => void;
}

function normalizeName(value: string): string {
  return value
    .toLowerCase()
    .replace(/\bkab\.\s*/g, 'kabupaten')
    .replace(/sidempuan/g, 'sidimpuan')
    .replace(/\s+/g, '')
    .trim();
}

export const MedalTable: React.FC<MedalTableProps> = ({
  medals,
  athletes,
  compact = false,
  onViewAll,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMode, setFilterMode] = useState<'ALL' | 'TOP10'>(compact ? 'TOP10' : 'ALL');

  const athleteCountByContingent = useMemo(() => {
    const map: Record<string, number> = {};
    athletes.forEach((a) => {
      const key = normalizeName(a.contingent);
      map[key] = (map[key] || 0) + 1;
    });
    return map;
  }, [athletes]);

  const sortedMedals = useMemo(() => {
    return [...medals].sort((a, b) => {
      if (b.gold !== a.gold) return b.gold - a.gold;
      if (b.silver !== a.silver) return b.silver - a.silver;
      if (b.bronze !== a.bronze) return b.bronze - a.bronze;
      if (b.total !== a.total) return b.total - a.total;
      return a.rank - b.rank;
    });
  }, [medals]);

  const filteredMedals = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const list = q
      ? sortedMedals.filter(
          (m) =>
            m.contingent.toLowerCase().includes(q) ||
            m.regionCode.toLowerCase().includes(q)
        )
      : sortedMedals;

    if (compact && !q && filterMode === 'TOP10') {
      return list.slice(0, 10);
    }
    return list;
  }, [sortedMedals, searchTerm, compact, filterMode]);

  const totals = useMemo(() => {
    return sortedMedals.reduce(
      (acc, m) => ({
        gold: acc.gold + m.gold,
        silver: acc.silver + m.silver,
        bronze: acc.bronze + m.bronze,
        total: acc.total + m.total,
      }),
      { gold: 0, silver: 0, bronze: 0, total: 0 }
    );
  }, [sortedMedals]);

  return (
    <section id="klasemen" className="py-10 sm:py-14 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-extrabold uppercase tracking-wider mb-2.5">
              <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Klasemen Resmi Kontingen</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Klasemen Perolehan Medali Kabupaten / Kota
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Rekapitulasi perolehan medali Emas, Perak, dan Perunggu seluruh {sortedMedals.length} kontingen resmi Sumatera Utara tersinkronisasi dengan Firestore.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs">
              <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span>Total {totals.total} Medali Terdata</span>
            </span>
            {compact && onViewAll && (
              <button
                onClick={onViewAll}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
              >
                <span>Lihat Semua {sortedMedals.length} Daerah</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 sm:p-4 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari kabupaten/kota atau kode kontingen..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/25 focus:border-[#0284C7]"
            />
          </div>

          <div className="flex items-center gap-2">
            {compact && (
              <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setFilterMode('TOP10')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    filterMode === 'TOP10'
                      ? 'bg-white text-[#0284C7] shadow-2xs'
                      : 'text-slate-600 hover:text-[#0F172A]'
                  }`}
                >
                  10 Teratas
                </button>
                <button
                  onClick={() => setFilterMode('ALL')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    filterMode === 'ALL'
                      ? 'bg-white text-[#0284C7] shadow-2xs'
                      : 'text-slate-600 hover:text-[#0F172A]'
                  }`}
                >
                  Semua ({sortedMedals.length})
                </button>
              </div>
            )}

            <div className="hidden lg:flex items-center gap-3 text-xs font-bold text-slate-500 pl-2">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                Emas: {totals.gold}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                Perak: {totals.silver}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                Perunggu: {totals.bronze}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white text-[11px] font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-5 w-20 text-center">Rank</th>
                  <th className="py-3.5 px-5">Kontingen Kabupaten / Kota</th>
                  <th className="py-3.5 px-4 text-center w-24">
                    <span className="inline-flex items-center gap-1 text-amber-300">
                      <Trophy className="w-3.5 h-3.5" /> Emas
                    </span>
                  </th>
                  <th className="py-3.5 px-4 text-center w-24 text-slate-200">Perak</th>
                  <th className="py-3.5 px-4 text-center w-24 text-orange-200">Perunggu</th>
                  <th className="py-3.5 px-4 text-center w-24">Total</th>
                  <th className="py-3.5 px-5 text-right w-32">Atlet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredMedals.map((item, idx) => {
                  const displayRank = idx + 1;
                  const athleteCount = athleteCountByContingent[normalizeName(item.contingent)] || 0;
                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-sky-50/40 transition-colors"
                    >
                      <td className="py-3.5 px-5 text-center">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-extrabold ${
                            displayRank === 1
                              ? 'bg-amber-100 text-amber-800 border border-amber-300'
                              : displayRank === 2
                              ? 'bg-slate-100 text-slate-700 border border-slate-300'
                              : displayRank === 3
                              ? 'bg-orange-100 text-orange-800 border border-orange-300'
                              : 'bg-slate-50 text-slate-500 border border-slate-200'
                          }`}
                        >
                          {item.rank || displayRank}
                        </span>
                      </td>
                      <td className="py-3.5 px-5">
                        <div className="flex items-center gap-3.5">
                          <DistrictEmblem
                            initials={item.emblemInitials || item.regionCode}
                            bg={item.badgeBg}
                            name={item.contingent}
                            logoUrl={item.logoUrl}
                            size="md"
                          />
                          <div>
                            <div className="font-bold text-[#0F172A]">{item.contingent}</div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                              KODE: {item.regionCode}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center justify-center min-w-[2.25rem] px-2.5 py-1 rounded-lg badge-gold font-extrabold text-xs tabular-nums">
                          {item.gold}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center justify-center min-w-[2.25rem] px-2.5 py-1 rounded-lg badge-silver font-extrabold text-xs tabular-nums">
                          {item.silver}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center justify-center min-w-[2.25rem] px-2.5 py-1 rounded-lg badge-bronze font-extrabold text-xs tabular-nums">
                          {item.bronze}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-extrabold text-[#0F172A] tabular-nums">
                        {item.total}
                      </td>
                      <td className="py-3.5 px-5 text-right text-xs font-bold text-slate-500">
                        {athleteCount > 0 ? `${athleteCount} Atlet` : 'Menunggu Data'}
                      </td>
                    </tr>
                  );
                })}
                {filteredMedals.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-10 text-center text-sm text-slate-500">
                      Tidak ada kontingen yang sesuai dengan pencarian "{searchTerm}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {filteredMedals.map((item, idx) => {
            const displayRank = item.rank || idx + 1;
            const athleteCount = athleteCountByContingent[normalizeName(item.contingent)] || 0;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-xs"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-extrabold shrink-0 ${
                        displayRank <= 3
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      #{displayRank}
                    </span>
                    <DistrictEmblem
                      initials={item.emblemInitials || item.regionCode}
                      bg={item.badgeBg}
                      name={item.contingent}
                      logoUrl={item.logoUrl}
                      size="sm"
                    />
                    <div className="min-w-0">
                      <h3 className="text-sm font-extrabold text-[#0F172A] truncate">
                        {item.contingent}
                      </h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.regionCode} • {athleteCount} Atlet Terdaftar
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-1.5 text-center">
                  <div className="rounded-xl badge-gold py-1.5 px-1">
                    <div className="text-sm font-black tabular-nums">{item.gold}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider">Emas</div>
                  </div>
                  <div className="rounded-xl badge-silver py-1.5 px-1">
                    <div className="text-sm font-black tabular-nums">{item.silver}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider">Perak</div>
                  </div>
                  <div className="rounded-xl badge-bronze py-1.5 px-1">
                    <div className="text-sm font-black tabular-nums">{item.bronze}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider">Prg</div>
                  </div>
                  <div className="rounded-xl bg-[#0F172A] text-white py-1.5 px-1">
                    <div className="text-sm font-black tabular-nums text-[#FBBF24]">{item.total}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-300">Total</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Footer Note */}
        {totals.total === 0 && (
          <div className="mt-4 bg-white border border-sky-200/80 rounded-2xl px-4 py-3 text-xs text-slate-600 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            <span>
              Perolehan medali masih bernilai 0 dan akan terisi otomatis saat pertandingan PORPROVSU XII resmi dimulai pada 1 Desember 2026.
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
