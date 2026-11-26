import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Filter, 
  CheckCircle, 
  Flame, 
  Trophy,
  ChevronRight
} from 'lucide-react';
import { MatchSchedule, MatchStatus } from '../types';

interface MatchScheduleProps {
  schedules: MatchSchedule[];
}

export const MatchScheduleSection: React.FC<MatchScheduleProps> = ({ schedules }) => {
  const [selectedCabor, setSelectedCabor] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  // Extract distinct sports branches
  const caborList = useMemo(() => {
    const set = new Set(schedules.map(s => s.cabor));
    return Array.from(set);
  }, [schedules]);

  const filtered = useMemo(() => {
    return schedules.filter(s => {
      const matchCabor = selectedCabor === 'ALL' || s.cabor === selectedCabor;
      const matchStatus = selectedStatus === 'ALL' || s.status === selectedStatus;
      return matchCabor && matchStatus;
    });
  }, [schedules, selectedCabor, selectedStatus]);

  return (
    <section id="jadwal" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-brand-royal text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-brand-gold" />
              <span>Pusat Pertandingan</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
              Jadwal & Skor Pertandingan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Pantau jalannya pertandingan seluruh cabang olahraga secara langsung.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedStatus('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedStatus === 'ALL'
                  ? 'bg-brand-royal text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Semua Pertandingan
            </button>
            <button
              onClick={() => setSelectedStatus('LIVE')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1 ${
                selectedStatus === 'LIVE'
                  ? 'bg-red-600 text-white'
                  : 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>LIVE Sekarang</span>
            </button>
            <button
              onClick={() => setSelectedStatus('COMPLETED')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedStatus === 'COMPLETED'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              Selesai
            </button>
            <button
              onClick={() => setSelectedStatus('UPCOMING')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedStatus === 'UPCOMING'
                  ? 'bg-slate-800 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Akan Datang
            </button>
          </div>
        </div>

        {/* Cabor Selector Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          <span className="text-xs font-bold text-slate-400 shrink-0 uppercase tracking-wider">Cabor:</span>
          <button
            onClick={() => setSelectedCabor('ALL')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors ${
              selectedCabor === 'ALL'
                ? 'bg-brand-gold text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Semua Cabor
          </button>
          {caborList.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCabor(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors ${
                selectedCabor === c
                  ? 'bg-brand-gold text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Match Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filtered.map((m) => {
            const isLive = m.status === 'LIVE';
            const isDone = m.status === 'COMPLETED';

            return (
              <div 
                key={m.id}
                className={`bg-white rounded-2xl border p-5 sm:p-6 transition-all shadow-xs hover:shadow-md ${
                  isLive ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Top Card Info */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-xs sm:text-sm text-brand-dark uppercase tracking-wide">
                      {m.cabor}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 font-semibold">{m.category}</span>
                  </div>

                  <div>
                    {isLive && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 text-red-700 border border-red-200 font-extrabold text-[11px] animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        LIVE MATCH
                      </span>
                    )}
                    {isDone && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        SELESAI
                      </span>
                    )}
                    {m.status === 'UPCOMING' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-bold text-[11px]">
                        <Clock className="w-3.5 h-3.5" />
                        TERJADWAL
                      </span>
                    )}
                  </div>
                </div>

                {/* Match Stage & Competitors */}
                <div className="py-4 space-y-3">
                  <div className="text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-gold bg-amber-50 px-2.5 py-1 rounded-md">
                      {m.stage}
                    </span>
                  </div>

                  {/* Competitors Display */}
                  <div className="grid grid-cols-12 items-center gap-2 py-2">
                    
                    {/* Team A */}
                    <div className="col-span-5 text-center">
                      <p className={`font-bold text-sm sm:text-base ${m.winner === m.teamA ? 'text-emerald-700' : 'text-slate-900'}`}>
                        {m.teamA}
                      </p>
                      {m.winner === m.teamA && (
                        <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          🏆 Pemenang
                        </span>
                      )}
                    </div>

                    {/* Score / VS Center */}
                    <div className="col-span-2 text-center">
                      {isDone || isLive ? (
                        <div className="px-2 py-1 rounded-lg bg-slate-900 text-white font-black text-sm sm:text-base">
                          {m.scoreA !== undefined ? `${m.scoreA} - ${m.scoreB}` : 'VS'}
                        </div>
                      ) : (
                        <span className="font-extrabold text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                          VS
                        </span>
                      )}
                    </div>

                    {/* Team B */}
                    <div className="col-span-5 text-center">
                      <p className={`font-bold text-sm sm:text-base ${m.winner === m.teamB ? 'text-emerald-700' : 'text-slate-900'}`}>
                        {m.teamB}
                      </p>
                      {m.winner === m.teamB && (
                        <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          🏆 Pemenang
                        </span>
                      )}
                    </div>

                  </div>

                  {m.notes && (
                    <p className="text-xs text-center text-slate-500 italic bg-slate-50 py-1.5 px-3 rounded-lg border border-slate-100">
                      ℹ️ {m.notes}
                    </p>
                  )}
                </div>

                {/* Footer Details: Date, Time & Venue */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {m.date}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {m.time}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1 text-slate-600 truncate">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span className="truncate">{m.venue}</span>
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
