import React, { useState } from 'react';
import {
  Database,
  LogIn,
  Trophy,
  UserPlus,
  CheckCircle2,
  Lock,
  User,
  Eye,
  EyeOff,
  Award
} from 'lucide-react';
import { ASSETS } from '../assets';
import { INITIAL_MEDALS, INITIAL_CABOR } from '../constants/initialData';
import { Athlete } from '../types';

interface OfficialFormSectionProps {
  onAddAthlete: (athlete: Athlete) => Promise<void>;
  onLoginSuccess: (user: { name: string; role: string }) => void;
  currentUser: { name: string; role: string } | null;
}

/**
 * Inline Portal Form section featuring Kadis photo as the background (NO kata sambutan).
 */
export const OfficialFormSection: React.FC<OfficialFormSectionProps> = ({
  onAddAthlete,
  onLoginSuccess,
  currentUser,
}) => {
  const [formTab, setFormTab] = useState<'athlete' | 'login'>('athlete');

  // Athlete input form state
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'Putra' | 'Putri'>('Putra');
  const [contingent, setContingent] = useState(INITIAL_MEDALS[0].contingent);
  const [cabor, setCabor] = useState(INITIAL_CABOR[0].name);
  const [eventNumber, setEventNumber] = useState('');
  const [gold, setGold] = useState(1);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [coachName, setCoachName] = useState('');
  const [achievements, setAchievements] = useState('');
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Panitia Pertandingan');
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  const handleAthleteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !eventNumber.trim()) return;
    setIsSaving(true);
    const total = Number(gold) + Number(silver) + Number(bronze);

    const newAthlete: Athlete = {
      id: `atl-${Date.now()}`,
      name: name.trim(),
      gender,
      contingent,
      cabor,
      eventNumber: eventNumber.trim(),
      medals: {
        gold: Number(gold),
        silver: Number(silver),
        bronze: Number(bronze),
        total,
      },
      achievements: achievements.trim() || `Peraih medali ${cabor} Kontingen ${contingent}`,
      coachName: coachName.trim() || 'Pelatih Resmi Kontingen',
    };

    await onAddAthlete(newAthlete);
    setIsSaving(false);
    setSaveMessage(`Data atlet "${newAthlete.name}" berhasil disimpan ke Firestore!`);
    setName('');
    setEventNumber('');
    setAchievements('');
    setTimeout(() => setSaveMessage(null), 4000);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;
    const user = {
      name: username === 'admin' ? 'Administrator Pusat' : username,
      role,
    };
    localStorage.setItem('porprovsu_user', JSON.stringify(user));
    onLoginSuccess(user);
    setLoginStatus(`Berhasil masuk sebagai ${user.name}!`);
    setTimeout(() => setLoginStatus(null), 3500);
  };

  return (
    <section
      id="form-portal"
      className="relative py-14 sm:py-20 overflow-hidden border-b border-slate-200 bg-slate-100"
    >
      {/* Background Photo: kadis.jpeg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.kadis})` }}
      >
        {/* Crisp bright translucent overlay so Kadis background stays visible while form stays bright and high-contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-white/75 to-white/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Spacer / Visual Showcase of Kadis Background (Strictly NO Kata Sambutan) */}
          <div className="lg:col-span-5 flex flex-col justify-end min-h-[220px] lg:min-h-[420px]">
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
                    PORPROVSU XII • FIRESTORE
                  </span>
                  <h3 className="font-black text-base text-brand-dark">
                    Pusat Input & Login Panitia
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-medium">
                Formulir terhubung langsung dengan <strong>Firebase Firestore</strong> untuk pencatatan atlet, pelatih, medali kabupaten/kota, serta otorisasi petugas.
              </p>
            </div>
          </div>

          {/* Right: Bright Glassmorphism Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8">
              {/* Form Switcher Tabs */}
              <div className="flex p-1 bg-slate-100 rounded-2xl border border-slate-200 mb-6">
                <button
                  type="button"
                  onClick={() => setFormTab('athlete')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    formTab === 'athlete'
                      ? 'bg-white text-brand-royal shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <UserPlus className="w-4 h-4 text-brand-gold" />
                  <span>Input Data Atlet & Medali</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormTab('login')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    formTab === 'login'
                      ? 'bg-white text-brand-royal shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <LogIn className="w-4 h-4 text-brand-gold" />
                  <span>Login Panitia / Wasit</span>
                </button>
              </div>

              {/* TAB 1: INPUT ATHLETE & MEDAL TO FIRESTORE */}
              {formTab === 'athlete' && (
                <form onSubmit={handleAthleteSubmit} className="space-y-4 text-xs sm:text-sm">
                  {saveMessage && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{saveMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nama Atlet</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nama lengkap atlet..."
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white focus:outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Kabupaten / Kota</label>
                      <select
                        value={contingent}
                        onChange={(e) => setContingent(e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white font-semibold text-slate-800"
                      >
                        {INITIAL_MEDALS.map((m) => (
                          <option key={m.id} value={m.contingent}>
                            {m.contingent} ({m.regionCode})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Cabang Olahraga</label>
                      <select
                        value={cabor}
                        onChange={(e) => setCabor(e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white font-semibold text-slate-800"
                      >
                        {INITIAL_CABOR.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Kategori</label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value as 'Putra' | 'Putri')}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white font-semibold text-slate-800"
                      >
                        <option value="Putra">Putra</option>
                        <option value="Putri">Putri</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nomor Tanding</label>
                      <input
                        type="text"
                        required
                        value={eventNumber}
                        onChange={(e) => setEventNumber(e.target.value)}
                        placeholder="Misal: Lari 100m"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white focus:outline-none font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-amber-800 mb-1">🥇 Emas</label>
                      <input
                        type="number"
                        min="0"
                        value={gold}
                        onChange={(e) => setGold(Math.max(0, Number(e.target.value)))}
                        className="w-full p-2 bg-amber-50 border border-amber-300 rounded-xl text-center font-black text-amber-950"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">🥈 Perak</label>
                      <input
                        type="number"
                        min="0"
                        value={silver}
                        onChange={(e) => setSilver(Math.max(0, Number(e.target.value)))}
                        className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-center font-black text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-orange-800 mb-1">🥉 Perunggu</label>
                      <input
                        type="number"
                        min="0"
                        value={bronze}
                        onChange={(e) => setBronze(Math.max(0, Number(e.target.value)))}
                        className="w-full p-2 bg-orange-50 border border-orange-300 rounded-xl text-center font-black text-orange-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nama Pelatih</label>
                      <input
                        type="text"
                        value={coachName}
                        onChange={(e) => setCoachName(e.target.value)}
                        placeholder="Nama pelatih pendamping..."
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white focus:outline-none font-medium"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Catatan Prestasi / Rekor</label>
                      <input
                        type="text"
                        value={achievements}
                        onChange={(e) => setAchievements(e.target.value)}
                        placeholder="Misal: Juara 1 / Rekor Baru"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white focus:outline-none font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSaving}
                    className="w-full py-3.5 px-5 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98 disabled:opacity-50"
                  >
                    <Database className="w-4 h-4" />
                    <span>{isSaving ? 'Menyimpan ke Firestore...' : 'Simpan Data Atlet ke Firestore'}</span>
                  </button>
                </form>
              )}

              {/* TAB 2: INLINE LOGIN PANITIA */}
              {formTab === 'login' && (
                <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs sm:text-sm">
                  {loginStatus && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{loginStatus}</span>
                    </div>
                  )}

                  {currentUser && (
                    <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-brand-royal text-xs font-bold flex items-center justify-between">
                      <span>Sedang login sebagai: <strong>{currentUser.name}</strong> ({currentUser.role})</span>
                      <Award className="w-4 h-4 text-brand-gold" />
                    </div>
                  )}

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Username / Email Petugas</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="admin atau wasit.cabor"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white focus:outline-none font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Kata Sandi</label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan kata sandi..."
                        className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white focus:outline-none font-semibold"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Divisi Petugas</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800 focus:ring-2 focus:ring-brand-gold"
                    >
                      <option value="Administrator Pertandingan">Administrator Pusat Pertandingan</option>
                      <option value="Wasit / Juri Cabor">Wasit / Juri Cabang Olahraga</option>
                      <option value="Panitia Pelaksana Daerah">Panitia Pelaksana Kabupaten/Kota</option>
                      <option value="Humas & Media Center">Humas & Liputan Media</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl bg-brand-royal hover:bg-brand-dark text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
                  >
                    <LogIn className="w-4 h-4 text-brand-gold-light" />
                    <span>Masuk & Kelola Firestore</span>
                  </button>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 flex items-center justify-between">
                    <span>Akun Demo: <strong>admin</strong></span>
                    <span>Password: <strong>porprovsu2026</strong></span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
