import React from 'react';
import { Bell, Flame, Trophy } from 'lucide-react';
import { MatchSchedule } from '../types';

interface RunningTickerProps {
  schedules: MatchSchedule[];
}

export const RunningTicker: React.FC<RunningTickerProps> = ({ schedules }) => {
  const liveMatches = schedules.filter((s) => s.status === 'LIVE');
  const recentCompleted = schedules.filter((s) => s.status === 'COMPLETED').slice(0, 3);

  return (
    <div className="bg-amber-50 text-slate-800 border-b border-amber-200 text-xs sm:text-sm py-2 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-3 min-w-0">
        {/* Label */}
        <div className="flex items-center gap-1.5 font-extrabold uppercase tracking-wider text-white shrink-0 bg-brand-maroon px-2.5 py-1 rounded-md shadow-xs text-[11px] whitespace-nowrap">
          <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>Live Update</span>
        </div>

        {/* Marquee Container with min-w-0 flex-1 so it never overflows or overlaps */}
        <div className="relative flex-1 min-w-0 overflow-hidden whitespace-nowrap">
          <div className="inline-flex items-center gap-8 animate-[marquee_35s_linear_infinite]">
            {liveMatches.map((m) => (
              <span key={m.id} className="inline-flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <span className="font-bold text-red-700">LIVE [{m.cabor}]</span>
                <span className="font-semibold text-slate-900">
                  {m.teamA} vs {m.teamB}
                </span>
                {m.scoreA !== undefined && (
                  <span className="bg-white text-red-700 font-black px-2 py-0.5 rounded border border-red-200">
                    {m.scoreA} - {m.scoreB}
                  </span>
                )}
                <span className="text-slate-500">({m.venue})</span>
              </span>
            ))}

            {recentCompleted.map((m) => (
              <span key={m.id} className="inline-flex items-center gap-2 shrink-0">
                <Trophy className="w-3.5 h-3.5 text-brand-gold" />
                <span className="font-bold text-brand-royal">HASIL [{m.cabor}]</span>
                <span className="font-medium text-slate-800">
                  {m.teamA} {m.scoreA} - {m.scoreB} {m.teamB}
                </span>
                {m.winner && (
                  <span className="text-emerald-700 font-bold">({m.winner} Menang)</span>
                )}
              </span>
            ))}

            <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium shrink-0">
              <Bell className="w-3.5 h-3.5 text-brand-gold" />
              <span>Portal Data Resmi PORPROVSU XII Sumatera Utara — Real-time Cloud Firestore</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
