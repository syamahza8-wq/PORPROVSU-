import React from 'react';
import { Bell, Flame, Trophy } from 'lucide-react';
import { MatchSchedule } from '../types';

interface RunningTickerProps {
  schedules: MatchSchedule[];
}

export const RunningTicker: React.FC<RunningTickerProps> = ({ schedules }) => {
  const liveMatches = schedules.filter(s => s.status === 'LIVE');
  const recentCompleted = schedules.filter(s => s.status === 'COMPLETED').slice(0, 3);

  return (
    <div className="bg-brand-dark text-slate-200 border-b border-slate-800 text-xs sm:text-sm py-2 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {/* Label */}
        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-brand-gold-light shrink-0 bg-brand-royal/60 px-2.5 py-1 rounded">
          <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Update Terkini</span>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden w-full whitespace-nowrap">
          <div className="inline-flex items-center gap-8 animate-[marquee_35s_linear_infinite]">
            {liveMatches.map((m) => (
              <span key={m.id} className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="font-semibold text-white">LIVE [{m.cabor}]</span>
                <span>{m.teamA} vs {m.teamB}</span>
                {m.scoreA !== undefined && (
                  <span className="bg-red-950 text-red-300 font-bold px-1.5 py-0.5 rounded border border-red-800/60">
                    {m.scoreA} - {m.scoreB}
                  </span>
                )}
                <span className="text-slate-400">({m.venue})</span>
              </span>
            ))}

            {recentCompleted.map((m) => (
              <span key={m.id} className="inline-flex items-center gap-2">
                <Trophy className="w-3.5 h-3.5 text-brand-gold-light" />
                <span className="font-semibold text-amber-300">HASIL [{m.cabor}]</span>
                <span>{m.teamA} {m.scoreA} - {m.scoreB} {m.teamB}</span>
                {m.winner && (
                  <span className="text-emerald-400 font-medium">({m.winner} Menang)</span>
                )}
              </span>
            ))}

            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Bell className="w-3.5 h-3.5 text-brand-gold" />
              <span>Pekan Olahraga Provinsi Sumatera Utara (PORPROVSU) - Menjunjung Tinggi Sportivitas & Prestasi!</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
