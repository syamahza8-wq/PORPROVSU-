import React, { useState, useMemo } from 'react';
import {
  Users,
  Search,
  Trophy,
  UserCheck,
  ShieldCheck
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
      initials:
        found?.emblemInitials ||
        found?.regionCode ||
        contingentName.slice(0, 3).toUpperCase(),
      bg: found?.badgeBg || '#1E3A8A',
    };
  };

  const contingentList = useMemo(() => {
    const list =
      activeTab === 'athletes'
        ? athletes.map((a) => a.contingent)
        : coaches.map((c) => c.contingent);
    return Array.from(new Set(list));
  }, [athletes, coaches, activeTab]);

  const caborList = useMemo(() => {
    const list =
      activeTab === 'athletes'
        ? athletes.map((a) => a.cabor)
        : coaches.map((c) => c.cabor);
    return Array.from(new Set(list));
  }, [athletes, coaches, activeTab]);

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
    <section
      id="atlet-pelatih"
      className="scroll-mt-36 py-14 sm:py-20 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-royal text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-brand-gold" />
              <span>Direktori Kontingen 33 Kabupaten/Kota</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
              Data Atlet & Pelatih Resmi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Data resmi terintegrasi dari input internal masing-masing pengurus KONI Kabupaten / Kota.
            </p>
          </div>

          <div className="flex p-1 bg-white rounded-2xl border border-slate-200 w-full sm:w-auto shadow-2xs">
            <button
              onClick={() => {
                setActiveTab('athletes');
                setSearchTerm('');
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === 'athletes'
                  ? 'bg-brand-royal text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trophy className="w-4 h-4 text-brand-gold-light" />
              <span>Data Atlet ({athletes.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('coaches');
                setSearchTerm('');
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === 'coaches'
                  ? 'bg-brand-royal text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-4 h-4 text-brand-gold-light" />
              <span>Data Pelatih ({coaches.length})</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-8 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={
                  activeTab === 'athletes'
                    ? 'Cari nama atlet, nomor tanding, kabupaten...'
                    : 'Cari nama pelatih, sertifikasi, kabupaten...'
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-brand-gold focus:bg-white focus:outline-none"
              />
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedCabor}
                onChange={(e) => setSelectedCabor(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-brand-gold"
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
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-brand-gold"
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

        {/* TAB 1: ATHLETES DIRECTORY OR CLEAN EMPTY STATE (Zero KONI Login Links!) */}
        {activeTab === 'athletes' && (
          <>
            {filteredAthletes.length === 0 ? (
              <div className="bg-white rounded-3xl border-2 border-dashed border-slate-300 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-brand-gold flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-brand-dark">
                  Belum Ada Data Atlet Terdaftar
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Data atlet saat ini masih kosong. Penginputan data atlet bersifat internal dan hanya dilakukan oleh pengurus resmi <strong>KONI Kabupaten / Kota</strong> masing-masing.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredAthletes.map((a) => {
                  const meta = getDistrictMeta(a.contingent);
                  return (
                    <div
                      key={a.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-brand-royal hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <DistrictEmblem
                              initials={meta.initials}
                              bg={meta.bg}
                              size="sm"
                              name={a.contingent}
                            />
                            <span className="text-[11px] font-bold text-brand-royal bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full truncate">
                              {a.contingent}
                            </span>
                          </div>
                          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md shrink-0 whitespace-nowrap">
                            {a.cabor} ({a.gender})
                          </span>
                        </div>

                        <div>
                          <h3 className="font-extrabold text-base text-slate-900">{a.name}</h3>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">
                            Nomor: <strong className="text-slate-700">{a.eventNumber}</strong>
                          </p>
                        </div>

                        {a.medals.total > 0 && (
                          <div className="bg-amber-50/80 rounded-xl p-3 border border-amber-200 flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                              <Trophy className="w-4 h-4 text-brand-gold" />
                              Raihan Medali ({a.medals.total}):
                            </span>
                            <div className="flex items-center gap-1.5 text-xs font-black">
                              {a.medals.gold > 0 && (
                                <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                                  🥇 {a.medals.gold}
                                </span>
                              )}
                              {a.medals.silver > 0 && (
                                <span className="bg-slate-200 text-slate-900 px-2 py-0.5 rounded">
                                  🥈 {a.medals.silver}
                                </span>
                              )}
                              {a.medals.bronze > 0 && (
                                <span className="bg-orange-700 text-white px-2 py-0.5 rounded">
                                  🥉 {a.medals.bronze}
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {a.achievements && (
                          <p className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            "{a.achievements}"
                          </p>
                        )}
                      </div>

                      <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span className="flex items-center gap-1.5 font-semibold text-slate-700 truncate">
                          <UserCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                          <span className="truncate">Pelatih: {a.coachName}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* TAB 2: COACHES DIRECTORY OR CLEAN EMPTY STATE */}
        {activeTab === 'coaches' && (
          <>
            {filteredCoaches.length === 0 ? (
              <div className="bg-white rounded-3xl border-2 border-dashed border-slate-300 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-brand-royal flex items-center justify-center mx-auto">
                  <UserCheck className="w-8 h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-brand-dark">
                  Belum Ada Data Pelatih Terdaftar
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Data pelatih cabang olahraga hanya didaftarkan secara internal oleh masing-masing pengurus <strong>KONI Kabupaten / Kota</strong>.
                </p>
              </div>
            ) : (
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
                          <p className="text-xs font-bold text-brand-gold mt-0.5">Pelatih: {c.cabor}</p>
                          <p className="text-[11px] text-slate-500 mt-1">{c.certification}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
