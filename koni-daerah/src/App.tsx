import React, { useState, useEffect, useMemo } from 'react';
import {
  ShieldCheck,
  Lock,
  LogIn,
  LogOut,
  ArrowLeft,
  UserPlus,
  UserCheck,
  Trash2,
  CheckCircle2,
  Database,
  Users,
  Trophy,
  MapPin
} from 'lucide-react';
import { ASSETS } from './assets';
import { DistrictEmblem } from './DistrictEmblem';
import {
  DISTRICTS,
  OFFICIAL_CABOR_LIST,
  Athlete,
  Coach,
  DistrictItem,
  subscribeAthletes,
  subscribeCoaches,
  saveAthlete,
  removeAthlete,
  saveCoach,
  removeCoach,
} from './data';

interface KoniSession {
  regionCode: string;
  contingent: string;
  badgeBg: string;
  emblemInitials: string;
  officerName: string;
}

const SESSION_KEY = 'porprovsu_koni_session';

export const App: React.FC = () => {
  // Check URL query (?kab=MDN) or existing session
  const [session, setSession] = useState<KoniSession | null>(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  // Login state
  const [selectedCode, setSelectedCode] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    const kabParam = params.get('kab');
    if (kabParam && DISTRICTS.some((d) => d.regionCode === kabParam)) {
      return kabParam;
    }
    return 'MDN';
  });
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  // Dashboard tabs
  const [activeTab, setActiveTab] = useState<'athletes' | 'coaches'>('athletes');
  const [allAthletes, setAllAthletes] = useState<Athlete[]>([]);
  const [allCoaches, setAllCoaches] = useState<Coach[]>([]);

  // Athlete Form State
  const [athleteName, setAthleteName] = useState('');
  const [gender, setGender] = useState<'Putra' | 'Putri'>('Putra');
  const [cabor, setCabor] = useState(OFFICIAL_CABOR_LIST[0]);
  const [eventNumber, setEventNumber] = useState('');
  const [coachNameInput, setCoachNameInput] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [achievements, setAchievements] = useState('');
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  // Coach Form State
  const [coachFullName, setCoachFullName] = useState('');
  const [coachCabor, setCoachCabor] = useState(OFFICIAL_CABOR_LIST[0]);
  const [certification, setCertification] = useState('');
  const [experienceYears, setExperienceYears] = useState(3);
  const [athletesTrained, setAthletesTrained] = useState(5);

  useEffect(() => {
    const unsubA = subscribeAthletes((list) => setAllAthletes(list));
    const unsubC = subscribeCoaches((list) => setAllCoaches(list));
    return () => {
      unsubA();
      unsubC();
    };
  }, []);

  const selectedDistrict: DistrictItem = useMemo(
    () => DISTRICTS.find((d) => d.regionCode === selectedCode) || DISTRICTS[0],
    [selectedCode]
  );

  // Strictly isolated data: ONLY athletes and coaches belonging to the logged-in KONI Kabupaten/Kota!
  const ownAthletes = useMemo(() => {
    if (!session) return [];
    return allAthletes.filter(
      (a) => a.contingent.toLowerCase() === session.contingent.toLowerCase()
    );
  }, [allAthletes, session]);

  const ownCoaches = useMemo(() => {
    if (!session) return [];
    return allCoaches.filter(
      (c) => c.contingent.toLowerCase() === session.contingent.toLowerCase()
    );
  }, [allCoaches, session]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    if (!pinInput.trim()) {
      setLoginError('Masukkan Password / Kode Akses resmi KONI Kabupaten/Kota Anda.');
      return;
    }

    const lowerPin = pinInput.trim().toLowerCase();
    const expectedCodePin = `${selectedDistrict.regionCode.toLowerCase()}2026`;
    const altCodePin = `koni_${selectedDistrict.regionCode.toLowerCase()}_2026`;
    if (lowerPin !== expectedCodePin && lowerPin !== altCodePin) {
      setLoginError('Kode akses / password daerah tidak sesuai. Hubungi Sekretariat KONI Sumut.');
      return;
    }

    const newSession: KoniSession = {
      regionCode: selectedDistrict.regionCode,
      contingent: selectedDistrict.contingent,
      badgeBg: selectedDistrict.badgeBg,
      emblemInitials: selectedDistrict.emblemInitials,
      officerName: `Pengurus KONI ${selectedDistrict.contingent}`,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
    setSession(newSession);
    setPinInput('');
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
  };

  const handleSaveAthlete = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session || !athleteName.trim() || !eventNumber.trim()) return;

    // Contingent is STRICTLY locked to session.contingent!
    const total = Number(gold) + Number(silver) + Number(bronze);
    const newAthlete: Athlete = {
      id: `atl-${session.regionCode}-${Date.now()}`,
      name: athleteName.trim(),
      gender,
      contingent: session.contingent,
      cabor,
      eventNumber: eventNumber.trim(),
      medals: {
        gold: Number(gold),
        silver: Number(silver),
        bronze: Number(bronze),
        total,
      },
      achievements: achievements.trim() || `Atlet resmi Kontingen ${session.contingent}`,
      coachName: coachNameInput.trim() || `Pelatih ${cabor} ${session.contingent}`,
    };

    await saveAthlete(newAthlete);
    setAllAthletes((prev) => [newAthlete, ...prev.filter((i) => i.id !== newAthlete.id)]);
    setAthleteName('');
    setEventNumber('');
    setCoachNameInput('');
    setAchievements('');
    setGold(0);
    setSilver(0);
    setBronze(0);
    setStatusMsg(`Atlet "${newAthlete.name}" berhasil disimpan untuk ${session.contingent} ke Firestore!`);
    setTimeout(() => setStatusMsg(null), 4000);
  };

  const handleDeleteAthlete = async (athlete: Athlete) => {
    if (!session || athlete.contingent !== session.contingent) return;
    await removeAthlete(athlete.id);
    setAllAthletes((prev) => prev.filter((a) => a.id !== athlete.id));
  };

  const handleSaveCoach = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session || !coachFullName.trim()) return;

    const newCoach: Coach = {
      id: `coa-${session.regionCode}-${Date.now()}`,
      name: coachFullName.trim(),
      cabor: coachCabor,
      contingent: session.contingent,
      certification: certification.trim() || 'Pelatih Terdaftar KONI Daerah',
      experienceYears: Number(experienceYears) || 1,
      athletesTrained: Number(athletesTrained) || 1,
      medalsProduced: { gold: 0, silver: 0, bronze: 0 },
    };

    await saveCoach(newCoach);
    setAllCoaches((prev) => [newCoach, ...prev.filter((i) => i.id !== newCoach.id)]);
    setCoachFullName('');
    setCertification('');
    setStatusMsg(`Pelatih "${newCoach.name}" berhasil didaftarkan untuk ${session.contingent}!`);
    setTimeout(() => setStatusMsg(null), 4000);
  };

  const handleDeleteCoach = async (coach: Coach) => {
    if (!session || coach.contingent !== session.contingent) return;
    await removeCoach(coach.id);
    setAllCoaches((prev) => prev.filter((c) => c.id !== coach.id));
  };

  // SCREEN 1: LOGIN KONI KABUPATEN / KOTA (With Kadis photo as background!)
  if (!session) {
    return (
      <div className="min-h-screen relative flex flex-col justify-center items-center p-4 bg-slate-100">
        {/* Background Image: kadis.jpeg */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ASSETS.kadis})` }}
        >
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
          <div className="h-1.5 w-full flex">
            <div className="w-1/3 bg-brand-royal" />
            <div className="w-1/3 bg-brand-gold" />
            <div className="w-1/3 bg-brand-maroon" />
          </div>

          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between">
              <a
                href="../"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-royal"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Portal Utama</span>
              </a>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                Folder Khusus KONI
              </span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="w-14 h-14 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs shrink-0 flex items-center justify-center">
                <img src={ASSETS.logo} alt="Logo PORPROVSU" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-black text-brand-dark leading-tight">
                  Portal KONI Kabupaten/Kota
                </h1>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Input Resmi Data Atlet & Pelatih PORPROVSU XII
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <DistrictEmblem
                initials={selectedDistrict.emblemInitials}
                bg={selectedDistrict.badgeBg}
                size="md"
                name={selectedDistrict.contingent}
              />
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block">
                  Wilayah Terpilih
                </span>
                <span className="font-extrabold text-sm text-brand-royal">
                  KONI {selectedDistrict.contingent}
                </span>
              </div>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Pilih KONI Kabupaten / Kota Anda
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={selectedCode}
                    onChange={(e) => setSelectedCode(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:ring-2 focus:ring-brand-gold"
                  >
                    {DISTRICTS.map((d) => (
                      <option key={d.id} value={d.regionCode}>
                        KONI {d.contingent} ({d.regionCode})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Password / Kode Akses Daerah
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    placeholder="Masukkan password KONI..."
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold focus:ring-2 focus:ring-brand-gold focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <LogIn className="w-4 h-4" />
                <span>Masuk ke Portal KONI {selectedDistrict.regionCode}</span>
              </button>
            </form>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900">
              <strong className="block">ℹ️ Keamanan Akses Wilayah:</strong>
              Portal ini hanya diperuntukkan bagi pengurus resmi KONI Kabupaten/Kota dengan kode akses daerah masing-masing.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SCREEN 2: LOCKED KONI KABUPATEN/KOTA DASHBOARD
  return (
    <div className="min-h-screen bg-slate-50 text-brand-dark flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="h-1.5 w-full flex">
          <div className="w-1/3 bg-brand-royal" />
          <div className="w-1/3 bg-brand-gold" />
          <div className="w-1/3 bg-brand-maroon" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <DistrictEmblem
              initials={session.emblemInitials}
              bg={session.badgeBg}
              size="md"
              name={session.contingent}
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-black text-sm sm:text-lg text-brand-dark truncate">
                  KONI {session.contingent}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
                  <Lock className="w-3 h-3" />
                  <span>Wilayah Terkunci</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-semibold truncate">
                Portal Input Atlet & Pelatih • Terhubung Firestore
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="../"
              className="px-3 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Web Utama</span>
            </a>

            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs flex items-center gap-1.5 whitespace-nowrap"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Ganti KONI</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        {statusMsg && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{statusMsg}</span>
          </div>
        )}

        {/* Tab Switcher */}
        <div className="flex p-1.5 bg-white rounded-2xl border border-slate-200 max-w-md shadow-2xs">
          <button
            onClick={() => setActiveTab('athletes')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'athletes'
                ? 'bg-brand-royal text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-4 h-4 text-brand-gold-light" />
            <span>Data Atlet ({ownAthletes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('coaches')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'coaches'
                ? 'bg-brand-royal text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-4 h-4 text-brand-gold-light" />
            <span>Data Pelatih ({ownCoaches.length})</span>
          </button>
        </div>

        {/* TAB 1: ATHLETES FOR THIS COUNTY ONLY */}
        {activeTab === 'athletes' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Form with Kadis Backdrop */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${ASSETS.kadis})` }}
              >
                <div className="absolute inset-0 bg-white/92 backdrop-blur-md" />
              </div>

              <form onSubmit={handleSaveAthlete} className="relative z-10 p-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                  <UserPlus className="w-5 h-5 text-brand-gold" />
                  <h2 className="font-black text-base text-brand-dark">
                    Tambah Atlet {session.contingent}
                  </h2>
                </div>

                {/* Locked Region Display */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Kontingen Daerah (Terkunci Otomatis)
                  </label>
                  <div className="w-full p-2.5 bg-slate-100 border border-slate-300 rounded-xl font-extrabold text-brand-royal flex items-center justify-between">
                    <span>{session.contingent}</span>
                    <Lock className="w-4 h-4 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nama Lengkap Atlet *</label>
                  <input
                    type="text"
                    required
                    value={athleteName}
                    onChange={(e) => setAthleteName(e.target.value)}
                    placeholder="Nama sesuai KTP / KK..."
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Cabang Olahraga *</label>
                    <select
                      value={cabor}
                      onChange={(e) => setCabor(e.target.value)}
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-xl font-semibold text-slate-800 focus:ring-2 focus:ring-brand-gold"
                    >
                      {OFFICIAL_CABOR_LIST.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Kategori *</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value as 'Putra' | 'Putri')}
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-xl font-semibold text-slate-800 focus:ring-2 focus:ring-brand-gold"
                    >
                      <option value="Putra">Putra</option>
                      <option value="Putri">Putri</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nomor Pertandingan / Kelas *</label>
                  <input
                    type="text"
                    required
                    value={eventNumber}
                    onChange={(e) => setEventNumber(e.target.value)}
                    placeholder="Misal: Lari 100m, Tanding Kelas C..."
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Pelatih Pendamping</label>
                  <input
                    type="text"
                    value={coachNameInput}
                    onChange={(e) => setCoachNameInput(e.target.value)}
                    placeholder="Nama pelatih atlet ini..."
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none font-medium"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-amber-800 mb-1">🥇 Emas</label>
                    <input
                      type="number"
                      min="0"
                      value={gold}
                      onChange={(e) => setGold(Math.max(0, Number(e.target.value)))}
                      className="w-full p-2 bg-amber-50 border border-amber-300 rounded-xl text-center font-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">🥈 Perak</label>
                    <input
                      type="number"
                      min="0"
                      value={silver}
                      onChange={(e) => setSilver(Math.max(0, Number(e.target.value)))}
                      className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-center font-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-orange-800 mb-1">🥉 Perunggu</label>
                    <input
                      type="number"
                      min="0"
                      value={bronze}
                      onChange={(e) => setBronze(Math.max(0, Number(e.target.value)))}
                      className="w-full p-2 bg-orange-50 border border-orange-300 rounded-xl text-center font-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Catatan Prestasi / Keterangan</label>
                  <input
                    type="text"
                    value={achievements}
                    onChange={(e) => setAchievements(e.target.value)}
                    placeholder="Opsional..."
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Database className="w-4 h-4" />
                  <span>Simpan Atlet {session.regionCode} ke Firestore</span>
                </button>
              </form>
            </div>

            {/* Region's Registered Athletes List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="font-black text-base sm:text-lg text-brand-dark">
                      Daftar Atlet Resmi {session.contingent}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Hanya atlet milik {session.contingent} yang dapat dilihat & dikelola di sini.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-royal text-white font-bold text-xs">
                    {ownAthletes.length} Atlet
                  </span>
                </div>

                {ownAthletes.length === 0 ? (
                  <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-xs sm:text-sm text-slate-500">
                    Belum ada atlet yang didaftarkan untuk <strong>{session.contingent}</strong>. Silakan isi formulir di sebelah untuk menambahkan atlet.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {ownAthletes.map((a) => (
                      <div
                        key={a.id}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-extrabold text-sm text-slate-900">{a.name}</span>
                            <span className="text-[10px] font-bold bg-blue-100 text-brand-royal px-2 py-0.5 rounded-full">
                              {a.cabor} ({a.gender})
                            </span>
                          </div>
                          <p className="text-xs text-slate-600">
                            Nomor: <strong>{a.eventNumber}</strong> • Pelatih: {a.coachName}
                          </p>
                          {a.medals.total > 0 && (
                            <div className="flex items-center gap-1.5 text-[11px] font-bold pt-1">
                              <Trophy className="w-3.5 h-3.5 text-brand-gold" />
                              <span>🥇 {a.medals.gold}</span>
                              <span>🥈 {a.medals.silver}</span>
                              <span>🥉 {a.medals.bronze}</span>
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => handleDeleteAthlete(a)}
                          className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-white border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Hapus</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COACHES FOR THIS COUNTY ONLY */}
        {activeTab === 'coaches' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${ASSETS.kadis})` }}
              >
                <div className="absolute inset-0 bg-white/92 backdrop-blur-md" />
              </div>

              <form onSubmit={handleSaveCoach} className="relative z-10 p-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                  <UserCheck className="w-5 h-5 text-brand-royal" />
                  <h2 className="font-black text-base text-brand-dark">
                    Tambah Pelatih {session.contingent}
                  </h2>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Kontingen Daerah</label>
                  <div className="w-full p-2.5 bg-slate-100 border border-slate-300 rounded-xl font-extrabold text-brand-royal flex items-center justify-between">
                    <span>{session.contingent}</span>
                    <Lock className="w-4 h-4 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nama Lengkap Pelatih *</label>
                  <input
                    type="text"
                    required
                    value={coachFullName}
                    onChange={(e) => setCoachFullName(e.target.value)}
                    placeholder="Nama lengkap & gelar pelatih..."
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Cabang Olahraga *</label>
                  <select
                    value={coachCabor}
                    onChange={(e) => setCoachCabor(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl font-semibold text-slate-800 focus:ring-2 focus:ring-brand-gold"
                  >
                    {OFFICIAL_CABOR_LIST.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Sertifikasi / Lisensi Pelatih</label>
                  <input
                    type="text"
                    value={certification}
                    onChange={(e) => setCertification(e.target.value)}
                    placeholder="Misal: Lisensi A Nasional / Pelatih Daerah"
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Pengalaman (Th)</label>
                    <input
                      type="number"
                      min="1"
                      value={experienceYears}
                      onChange={(e) => setExperienceYears(Math.max(1, Number(e.target.value)))}
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-center font-bold"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Jml Atlet Binaan</label>
                    <input
                      type="number"
                      min="1"
                      value={athletesTrained}
                      onChange={(e) => setAthletesTrained(Math.max(1, Number(e.target.value)))}
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-center font-bold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-brand-royal hover:bg-brand-dark text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Database className="w-4 h-4 text-brand-gold-light" />
                  <span>Simpan Pelatih {session.regionCode} ke Firestore</span>
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-black text-base sm:text-lg text-brand-dark">
                    Daftar Pelatih Resmi {session.contingent}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Daftar pelatih resmi terdaftar untuk {session.contingent}.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-brand-royal text-white font-bold text-xs">
                  {ownCoaches.length} Pelatih
                </span>
              </div>

              {ownCoaches.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-xs sm:text-sm text-slate-500">
                  Belum ada pelatih yang didaftarkan untuk <strong>{session.contingent}</strong>.
                </div>
              ) : (
                <div className="space-y-3">
                  {ownCoaches.map((c) => (
                    <div
                      key={c.id}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3"
                    >
                      <div>
                        <span className="font-extrabold text-sm text-slate-900">{c.name}</span>
                        <p className="text-xs text-brand-gold font-bold">
                          Cabor: {c.cabor} ({c.experienceYears} Tahun Pengalaman)
                        </p>
                        <p className="text-xs text-slate-500">{c.certification}</p>
                      </div>

                      <button
                        onClick={() => handleDeleteCoach(c)}
                        className="px-3 py-1.5 rounded-xl bg-white border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Hapus</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
