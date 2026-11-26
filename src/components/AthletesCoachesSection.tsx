import React, { useState, useMemo } from 'react';
import {
  Users,
  Search,
  Trophy,
  UserCheck,
  MapPin
} from 'lucide-react';
import { Athlete, Coach, MedalStanding } from '../types';
import { INITIAL_MEDALS } from '../constants/initialData';
import { DistrictEmblem } from './DistrictEmblem';

interface AthletesCoachesSectionProps {
  athletes: Athlete[];
  coaches: Coach[];
  medals?: MedalStanding[];
}

export const AthletesCoachesSection: React.FC<AthletesCoachesSectionProps> = ({
  athletes,
  coaches,
  medals = INITIAL_MEDALS,
}) => {
  const [activeTab, setActiveTab] = useState<'athletes' | 'coaches'>('athletes');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContingent, setSelectedContingent] = useState('ALL');
  const [selectedCabor, setSelectedCabor] = useState('ALL');

  const getDistrictMeta = (contingentName: string) => {
    const found = medals.find(
      (m) => m.contingent.toLowerCase() === contingentName.toLowerCase()
    );
    return {
      initials: found?.emblemInitials || found?.regionCode || contingentName.slice(0, 3).toUpperCase(),
      bg: found?.badgeBg || '#1E3A8A',
    };
  };

  // Contingent options
  const contingentList = useMemo(() => {
    const list =
      activeTab === 'athletes'
        ? athletes.map((a) => a.contingent)
        : coaches.map((c) => c.contingent);
    return Array.from(new Set(list));
  }, [athletes, coaches, activeTab]);

  // Cabor options
  const caborList = useMemo(() => {
    const list =
      activeTab === 'athletes'
        ? athletes.map((a) => a.cabor)
        : coaches.map((c) => c.cabor);
    return Array.from(new Set(list));
  }, [athletes, coaches, activeTab]);

  // Summary metrics
  const athleteMedalsSummary = useMemo(() => {
    return athletes.reduce(
      (acc, a) => ({
        gold: acc.gold + a.medals.gold,
        silver: acc.silver + a.medals.silver,
        bronze: acc.bronze + a.medals.bronze,
        total: acc.total + a.medals.total,
      }),
      { gold: 0, silver: 0, bronze: 0, total: 0 }
    );
  }, [athletes]);

  const representedCounties = useMemo(() => {
    return Array.from(new Set(athletes.map((a) => a.contingent)));
  }, [athletes]);

  // Filtered Athletes
  const filteredAthletes = useMemo(() => {
    return athletes.filter((a) => {
      const matchSearch =
        a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.achievements.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.eventNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.contingent.toLowerCase().includes(searchTerm.toLowerCase());
      const matchContingent =
        selectedContingent === 'ALL' || a.contingent === selectedContingent;
      const matchCabor = selectedCabor === 'ALL' || a.cabor === selectedCabor;
      return matchSearch && matchContingent && matchCabor;
    });
  }, [athletes, searchTerm, selectedContingent, selectedCabor]);

  // Filtered Coaches
  const filteredCoaches = useMemo(() => {
    return coaches.filter((c) => {
      const matchSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.certification.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.contingent.toLowerCase().includes(searchTerm.toLowerCase());
      const matchContingent =
        selectedContingent === 'ALL' || c.contingent === selectedContingent;
      const matchCabor = selectedCabor === 'ALL' || c.cabor === selectedCabor;
      return matchSearch && matchContingent && matchCabor;
    });
  }, [coaches, searchTerm, selectedContingent, selectedCabor]);

  return (
    <section id="atlet-pelatih" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-royal text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-brand-gold" />
              <span>Direktori Resmi Olahragawan Sumut</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
              Data Atlet, Pelatih & Medali Perseorangan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Rincian atlet peraih medali, kabupaten/kota asal beserta logo daerah, nomor pertandingan, dan pelatih pembina.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex p-1 bg-slate-100 rounded-2xl border border-slate-200 w-full sm:w-auto">
            <button
              onClick={() => {
                setActiveTab('athletes');
                setSearchTerm('');
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'athletes'
                  ? 'bg-white text-brand-royal shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trophy className="w-4 h-4 text-brand-gold" />
              <span>Data Atlet ({athletes.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('coaches');
                setSearchTerm('');
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'coaches'
                  ? 'bg-white text-brand-royal shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-4 h-4 text-brand-gold" />
              <span>Data Pelatih ({coaches.length})</span>
            </button>
          </div>
        </div>

        {/* Summary Strip: Berapa medali didapat atlet & Kab apa saja */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-900 block">
              Ringkasan Capaian Atlet Terdata ({athletes.length} Atlet Unggulan)
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-800">
              <span className="bg-white px-2.5 py-1 rounded-lg border border-amber-200">
                🥇 {athleteMedalsSummary.gold} Emas
              </span>
              <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                🥈 {athleteMedalsSummary.silver} Perak
              </span>
              <span className="bg-white px-2.5 py-1 rounded-lg border border-orange-200">
                🥉 {athleteMedalsSummary.bronze} Perunggu
              </span>
              <span className="bg-brand-royal text-white px-2.5 py-1 rounded-lg">
                Total: {athleteMedalsSummary.total} Medali
              </span>
            </div>
          </div>

          <div className="lg:max-w-md">
            <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1 mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Asal Kabupaten / Kota Atlet Peraih Medali ({representedCounties.length} Daerah):</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {representedCounties.map((kab) => (
                <button
                  key={kab}
                  onClick={() => setSelectedContingent(selectedContingent === kab ? 'ALL' : kab)}
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-md border transition-colors ${
                    selectedContingent === kab
                      ? 'bg-brand-royal text-white border-brand-royal'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-brand-gold'
                  }`}
                >
                  {kab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={
                  activeTab === 'athletes'
                    ? 'Cari nama atlet, nomor pertandingan, kabupaten...'
                    : 'Cari nama pelatih, sertifikasi, kabupaten...'
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-brand-gold focus:outline-none"
              />
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedCabor}
                onChange={(e) => setSelectedCabor(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-brand-gold"
              >
                <option value="ALL">Semua Cabor</option>
                {caborList.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedContingent}
                onChange={(e) => setSelectedContingent(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-brand-gold"
              >
                <option value="ALL">Semua Kabupaten/Kota</option>
                {contingentList.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* TAB 1: ATHLETES DIRECTORY */}
        {activeTab === 'athletes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredAthletes.map((a) => {
              const meta = getDistrictMeta(a.contingent);
              return (
                <div
                  key={a.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-brand-royal hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Top Badge: District Emblem + Contingent + Cabor */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <DistrictEmblem
                          initials={meta.initials}
                          bg={meta.bg}
                          size="sm"
                          name={a.contingent}
                        />
                        <span className="text-[11px] font-bold text-brand-royal bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                          {a.contingent}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                        {a.cabor} ({a.gender})
                      </span>
                    </div>

                    {/* Athlete Name & Event */}
                    <div>
                      <h3 className="font-extrabold text-base text-slate-900">{a.name}</h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Nomor: <strong className="text-slate-700">{a.eventNumber}</strong>
                      </p>
                    </div>

                    {/* Medal Achievement Badge */}
                    <div className="bg-amber-50/80 rounded-xl p-3 border border-amber-200 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
                        <Trophy className="w-4 h-4 text-brand-gold" />
                        <span>Medali ({a.medals.total}):</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-black">
                        {a.medals.gold > 0 && (
                          <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded shadow-xs" title="Emas">
                            🥇 {a.medals.gold}
                          </span>
                        )}
                        {a.medals.silver > 0 && (
                          <span className="bg-slate-300 text-slate-900 px-2 py-0.5 rounded shadow-xs" title="Perak">
                            🥈 {a.medals.silver}
                          </span>
                        )}
                        {a.medals.bronze > 0 && (
                          <span className="bg-orange-700 text-white px-2 py-0.5 rounded shadow-xs" title="Perunggu">
                            🥉 {a.medals.bronze}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      "{a.achievements}"
                    </p>
                  </div>

                  {/* Footer: Coach Name */}
                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                      <UserCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>Pelatih: {a.coachName}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: COACHES DIRECTORY */}
        {activeTab === 'coaches' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCoaches.map((c) => {
              const meta = getDistrictMeta(c.contingent);
              return (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-brand-royal hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <DistrictEmblem
                          initials={meta.initials}
                          bg={meta.bg}
                          size="sm"
                          name={c.contingent}
                        />
                        <span className="text-[11px] font-bold text-brand-royal bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full truncate">
                          {c.contingent}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded shrink-0">
                        {c.experienceYears} Th
                      </span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-slate-900">{c.name}</h3>
                      <p className="text-xs font-bold text-brand-gold mt-0.5">
                        Pelatih: {c.cabor}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1">{c.certification}</p>
                      <p className="text-[11px] text-slate-600 font-semibold mt-1">
                        Atlet Binaan: {c.athletesTrained} Orang
                      </p>
                    </div>
                  </div>

                  {/* Medals Produced */}
                  <div className="pt-3 mt-4 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                      Medali Atlet Asuhan:
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-black">
                      <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                        🥇 {c.medalsProduced.gold}
                      </span>
                      <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                        🥈 {c.medalsProduced.silver}
                      </span>
                      <span className="bg-orange-50 text-orange-950 px-2 py-0.5 rounded border border-orange-200">
                        🥉 {c.medalsProduced.bronze}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
