import React, { useState } from 'react';
import {
  ShieldCheck,
  LogIn,
  Lock,
  ExternalLink,
  Search,
  MapPin,
  CheckCircle2,
  UserCheck
} from 'lucide-react';
import { ASSETS } from '../assets';
import { INITIAL_MEDALS } from '../constants/initialData';
import { Athlete } from '../types';
import { DistrictEmblem } from './DistrictEmblem';

interface OfficialFormSectionProps {
  athletes: Athlete[];
}

/**
 * Form Portal section featuring Kadis photo as the background (NO kata sambutan).
 * Routes KONI Kabupaten/Kota officers directly to the dedicated koni-daerah/ portal.
 */
export const OfficialFormSection: React.FC<OfficialFormSectionProps> = ({ athletes }) => {
  const [formTab, setFormTab] = useState<'koni' | 'cek'>('koni');
  const [selectedRegionCode, setSelectedRegionCode] = useState('MDN');
  const [pinCode, setPinCode] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Verification Search
  const [checkQuery, setCheckQuery] = useState('');

  const selectedDistrict =
    INITIAL_MEDALS.find((m) => m.regionCode === selectedRegionCode) || INITIAL_MEDALS[0];

  const matchedAthletes = athletes.filter(
    (a) =>
      checkQuery.trim().length > 0 &&
      (a.name.toLowerCase().includes(checkQuery.toLowerCase()) ||
        a.contingent.toLowerCase().includes(checkQuery.toLowerCase()) ||
        a.cabor.toLowerCase().includes(checkQuery.toLowerCase()))
  );

  const handleKoniRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!pinCode.trim()) {
      setErrorMsg('Masukkan Kode Akses / Password KONI Daerah Anda (Demo: koni2026).');
      return;
    }

    // Save auth session for the selected Kabupaten/Kota so koni-daerah portal opens straight into that region
    const koniSession = {
      regionCode: selectedDistrict.regionCode,
      contingent: selectedDistrict.contingent,
      badgeBg: selectedDistrict.badgeBg,
      emblemInitials: selectedDistrict.emblemInitials,
      officerName: `Pengurus KONI ${selectedDistrict.contingent}`,
      loggedInAt: new Date().toISOString(),
    };
    localStorage.setItem('porprovsu_koni_session', JSON.stringify(koniSession));
    window.location.href = `./koni-daerah/?kab=${encodeURIComponent(selectedDistrict.regionCode)}`;
  };

  return (
    <section
      id="form-portal"
      className="scroll-mt-36 relative py-14 sm:py-20 overflow-hidden border-b border-slate-200 bg-slate-100"
    >
      {/* Background Photo: kadis.jpeg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.kadis})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-white/75 to-white/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Visual Card (No Kata Sambutan) */}
          <div className="lg:col-span-5 flex flex-col justify-end lg:min-h-[380px]">
            <div className="bg-white/92 backdrop-blur-md p-5 rounded-2xl border border-white shadow-lg max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 p-1 shrink-0 flex items-center justify-center">
                  <img
                    src={ASSETS.logo}
                    alt="Logo PORPROVSU"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-gold block">
                    PORTAL KHUSUS DAERAH
                  </span>
                  <h3 className="font-black text-base text-brand-dark">
                    Akses Input KONI Kab/Kota
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-medium">
                Pengisian data atlet dan pelatih hanya diizinkan oleh masing-masing <strong>KONI Kabupaten / Kota</strong> pada folder portal terpisah (<code className="text-brand-royal font-bold">koni-daerah/</code>) yang terhubung ke Cloud Firestore.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8">
              {/* Switcher Tabs */}
              <div className="flex p-1 bg-slate-100 rounded-2xl border border-slate-200 mb-6">
                <button
                  type="button"
                  onClick={() => setFormTab('koni')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    formTab === 'koni'
                      ? 'bg-white text-brand-royal shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  <span>Masuk Portal KONI Kab/Kota</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormTab('cek')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    formTab === 'cek'
                      ? 'bg-white text-brand-royal shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Search className="w-4 h-4 text-brand-gold" />
                  <span>Cek Status Data Atlet</span>
                </button>
              </div>

              {/* TAB 1: LOGIN & REDIRECT KE PORTAL KONI KAB/KOTA */}
              {formTab === 'koni' && (
                <form onSubmit={handleKoniRedirect} className="space-y-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <DistrictEmblem
                      initials={selectedDistrict.emblemInitials || selectedDistrict.regionCode}
                      bg={selectedDistrict.badgeBg}
                      size="md"
                      name={selectedDistrict.contingent}
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Akses Terkunci Per Wilayah
                      </span>
                      <h4 className="font-extrabold text-sm text-brand-dark">
                        KONI {selectedDistrict.contingent}
                      </h4>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Pilih KONI Kabupaten / Kota Anda
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        value={selectedRegionCode}
                        onChange={(e) => setSelectedRegionCode(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:ring-2 focus:ring-brand-gold focus:bg-white"
                      >
                        {INITIAL_MEDALS.map((m) => (
                          <option key={m.id} value={m.regionCode}>
                            KONI {m.contingent} ({m.regionCode})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Kode Akses / Password KONI Daerah
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        placeholder="Masukkan password daerah (Demo: koni2026)"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white focus:outline-none font-semibold"
                      />
                    </div>
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-5 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Masuk Portal Input KONI Daerah</span>
                    </button>

                    <a
                      href="./koni-daerah/"
                      className="py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Buka Folder KONI</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 flex items-center justify-between">
                    <span>Setiap daerah hanya dapat mengelola atletnya sendiri.</span>
                    <span className="font-bold">Password Demo: koni2026</span>
                  </div>
                </form>
              )}

              {/* TAB 2: CEK VERIFIKASI DATA ATLET */}
              {formTab === 'cek' && (
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={checkQuery}
                      onChange={(e) => setCheckQuery(e.target.value)}
                      placeholder="Ketik nama atlet, cabor, atau nama kabupaten..."
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white focus:outline-none font-medium"
                    />
                  </div>

                  {checkQuery.trim() === '' ? (
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
                      <UserCheck className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                      Ketikkan nama atlet atau kontingen kabupaten/kota untuk memverifikasi status keikutsertaan dari database Firestore.
                    </div>
                  ) : matchedAthletes.length === 0 ? (
                    <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-center text-xs text-amber-900">
                      Data tidak ditemukan. Saat ini terdaftar <strong>{athletes.length} atlet</strong> di database Firestore.
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {matchedAthletes.map((a) => (
                        <div
                          key={a.id}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                        >
                          <div>
                            <p className="font-bold text-slate-900">{a.name}</p>
                            <p className="text-[11px] text-slate-500">
                              {a.contingent} • {a.cabor} ({a.eventNumber})
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Terverifikasi</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
