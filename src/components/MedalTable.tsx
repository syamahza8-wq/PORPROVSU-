import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  Search, 
  ArrowUpDown, 
  Download, 
  Users, 
  Shield, 
  Sparkles 
} from 'lucide-react';
import { MedalStanding } from '../types';
import { DistrictEmblem } from './DistrictEmblem';

interface MedalTableProps {
  medals: MedalStanding[];
}

type SortField = 'rank' | 'gold' | 'silver' | 'bronze' | 'total';
type SortOrder = 'asc' | 'desc';

export const MedalTable: React.FC<MedalTableProps> = ({ medals }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'top10' | 'top5'>('all');
  const [sortField, setSortField] = useState<SortField>('rank');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Aggregates
  const totalGold = useMemo(() => medals.reduce((acc, m) => acc + m.gold, 0), [medals]);
  const totalSilver = useMemo(() => medals.reduce((acc, m) => acc + m.silver, 0), [medals]);
  const totalBronze = useMemo(() => medals.reduce((acc, m) => acc + m.bronze, 0), [medals]);
  const grandTotal = totalGold + totalSilver + totalBronze;

  // Filtered and sorted medals
  const processedMedals = useMemo(() => {
    let list = [...medals];

    if (searchTerm.trim()) {
      list = list.filter(m => 
        m.contingent.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.regionCode.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterMode === 'top5') {
      list = list.slice(0, 5);
    } else if (filterMode === 'top10') {
      list = list.slice(0, 10);
    }

    list.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      return sortOrder === 'asc' ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
    });

    return list;
  }, [medals, searchTerm, filterMode, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder(field === 'rank' ? 'asc' : 'desc');
    }
  };

  const exportCSV = () => {
    const headers = ['Peringkat', 'Kontingen Kabupaten/Kota', 'Kode', 'Emas', 'Perak', 'Perunggu', 'Total Medali', 'Total Atlet'];
    const rows = medals.map(m => [m.rank, m.contingent, m.regionCode, m.gold, m.silver, m.bronze, m.total, m.athletesTotal || 0]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Klasemen_Medali_PORPROVSU_33_Kabupaten_Kota.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="klasemen" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy text-brand-gold-light text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>Klasemen Resmi 33 Daerah</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
              Klasemen Medali Kabupaten & Kota
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Data rekapitulasi perolehan medali seluruh 33 kontingen kabupaten dan kota se-Sumatera Utara.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Unduh CSV</span>
            </button>
          </div>
        </div>

        {/* Aggregates Summary Cards - Bright & Crisp */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-300 shadow-xs flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-xs">
              🥇
            </div>
            <div>
              <p className="text-[11px] font-bold text-amber-800 uppercase tracking-wide">Total Emas</p>
              <p className="text-2xl font-black text-slate-900">{totalGold}</p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-300 shadow-xs flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-slate-300 text-slate-900 flex items-center justify-center font-black text-xl shrink-0 shadow-xs">
              🥈
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Total Perak</p>
              <p className="text-2xl font-black text-slate-900">{totalSilver}</p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-orange-300 shadow-xs flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-orange-700 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-xs">
              🥉
            </div>
            <div>
              <p className="text-[11px] font-bold text-orange-900 uppercase tracking-wide">Total Perunggu</p>
              <p className="text-2xl font-black text-slate-900">{totalBronze}</p>
            </div>
          </div>

          <div className="bg-brand-royal p-4 sm:p-5 rounded-2xl border border-slate-700 shadow-xs text-white flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-brand-gold text-white flex items-center justify-center font-black text-xl shrink-0 shadow-xs">
              <Trophy className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-brand-gold-light uppercase tracking-wide">Total Medali</p>
              <p className="text-2xl font-black text-white">{grandTotal}</p>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-6 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xs">
          
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari Kabupaten / Kota..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs font-bold text-slate-500 shrink-0">Filter:</span>
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
                filterMode === 'all'
                  ? 'bg-brand-royal text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Semua (33 Daerah)
            </button>
            <button
              onClick={() => setFilterMode('top10')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
                filterMode === 'top10'
                  ? 'bg-brand-royal text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Top 10
            </button>
            <button
              onClick={() => setFilterMode('top5')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
                filterMode === 'top5'
                  ? 'bg-brand-royal text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Top 5
            </button>
          </div>

        </div>

        {/* Desktop View Table */}
        <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th 
                    onClick={() => handleSort('rank')} 
                    className="py-3.5 px-4 cursor-pointer hover:bg-slate-200 transition-colors w-20 text-center"
                  >
                    <div className="flex items-center justify-center gap-1">
                      <span>Rank</span>
                      <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </th>
                  <th className="py-3.5 px-6">
                    <span>Kontingen & Lambang Daerah</span>
                  </th>
                  <th className="py-3.5 px-4 text-center w-28">
                    <span>Total Atlet</span>
                  </th>
                  <th 
                    onClick={() => handleSort('gold')} 
                    className="py-3.5 px-4 cursor-pointer hover:bg-amber-100/60 transition-colors text-center w-28 bg-amber-50/70"
                  >
                    <div className="flex items-center justify-center gap-1 text-amber-950 font-bold">
                      <span>🥇 Emas</span>
                      <ArrowUpDown className="w-3.5 h-3.5 text-amber-700" />
                    </div>
                  </th>
                  <th 
                    onClick={() => handleSort('silver')} 
                    className="py-3.5 px-4 cursor-pointer hover:bg-slate-200 transition-colors text-center w-28"
                  >
                    <div className="flex items-center justify-center gap-1 text-slate-800 font-bold">
                      <span>🥈 Perak</span>
                      <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </th>
                  <th 
                    onClick={() => handleSort('bronze')} 
                    className="py-3.5 px-4 cursor-pointer hover:bg-orange-100/60 transition-colors text-center w-28 bg-orange-50/70"
                  >
                    <div className="flex items-center justify-center gap-1 text-orange-950 font-bold">
                      <span>🥉 Perunggu</span>
                      <ArrowUpDown className="w-3.5 h-3.5 text-orange-700" />
                    </div>
                  </th>
                  <th 
                    onClick={() => handleSort('total')} 
                    className="py-3.5 px-6 cursor-pointer hover:bg-slate-200 transition-colors text-center w-32 bg-slate-100 font-black text-slate-900"
                  >
                    <div className="flex items-center justify-center gap-1 text-brand-royal font-black">
                      <span>Total</span>
                      <ArrowUpDown className="w-3.5 h-3.5 text-slate-600" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {processedMedals.map((m) => {
                  let rankBadge = (
                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs mx-auto">
                      {m.rank}
                    </span>
                  );

                  if (m.rank === 1) {
                    rankBadge = (
                      <span className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs shadow-xs mx-auto">
                        1
                      </span>
                    );
                  } else if (m.rank === 2) {
                    rankBadge = (
                      <span className="w-7 h-7 rounded-lg bg-slate-300 text-slate-900 font-bold flex items-center justify-center text-xs shadow-xs mx-auto">
                        2
                      </span>
                    );
                  } else if (m.rank === 3) {
                    rankBadge = (
                      <span className="w-7 h-7 rounded-lg bg-amber-700 text-white font-bold flex items-center justify-center text-xs shadow-xs mx-auto">
                        3
                      </span>
                    );
                  }

                  return (
                    <tr key={m.id} className="hover:bg-slate-50 transition-colors font-medium">
                      <td className="py-3.5 px-4 text-center">
                        {rankBadge}
                      </td>
                      <td className="py-3.5 px-6">
                        <div className="flex items-center gap-3">
                          {/* Lambang / Logo Daerah */}
                          <DistrictEmblem
                            initials={m.emblemInitials || m.regionCode}
                            bg={m.badgeBg}
                            size="md"
                            name={m.contingent}
                          />

                          <div>
                            <span className="font-bold text-slate-900 text-sm block">{m.contingent}</span>
                            <span className="text-[10px] text-slate-400 font-semibold uppercase">Kode Wilayah: {m.regionCode}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-center text-xs font-semibold text-slate-600">
                        {m.athletesTotal || 120} Atlet
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-amber-900 bg-amber-50/40">
                        {m.gold}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-800">
                        {m.silver}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-orange-950 bg-orange-50/40">
                        {m.bronze}
                      </td>
                      <td className="py-3.5 px-6 text-center font-black text-brand-dark bg-slate-50 text-base">
                        {m.total}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View: High-impact Cards */}
        <div className="block md:hidden space-y-3">
          {processedMedals.map((m) => {
            return (
              <div 
                key={m.id}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Rank Badge */}
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs ${
                      m.rank === 1 ? 'bg-amber-400 text-slate-950' :
                      m.rank === 2 ? 'bg-slate-300 text-slate-900' :
                      m.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {m.rank}
                    </span>

                    {/* Logo / Lambang Kabupaten/Kota */}
                    <DistrictEmblem
                      initials={m.emblemInitials || m.regionCode}
                      bg={m.badgeBg}
                      size="md"
                      name={m.contingent}
                    />

                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900">{m.contingent}</h4>
                      <span className="text-[10px] text-slate-500 font-medium">{m.athletesTotal || 120} Atlet Terdaftar</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Total</span>
                    <span className="text-lg font-black text-brand-dark">{m.total}</span>
                  </div>
                </div>

                {/* Medals Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                  <div className="bg-amber-50 p-1.5 rounded-xl border border-amber-200">
                    <span className="text-[10px] font-bold text-amber-900 block">🥇 Emas</span>
                    <span className="font-black text-amber-950 text-sm">{m.gold}</span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-700 block">🥈 Perak</span>
                    <span className="font-black text-slate-900 text-sm">{m.silver}</span>
                  </div>
                  <div className="bg-orange-50 p-1.5 rounded-xl border border-orange-200">
                    <span className="text-[10px] font-bold text-orange-900 block">🥉 Perunggu</span>
                    <span className="font-black text-orange-950 text-sm">{m.bronze}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
