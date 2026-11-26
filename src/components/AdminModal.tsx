import React, { useState } from 'react';
import { 
  X, 
  Database, 
  Save, 
  RefreshCw, 
  Trophy, 
  Calendar, 
  CheckCircle2, 
  AlertCircle,
  Key,
  Flame,
  Settings
} from 'lucide-react';
import { MedalStanding, MatchSchedule } from '../types';
import { 
  getActiveFirebaseConfig, 
  saveFirebaseConfig, 
  resetFirebaseConfig,
  FirebaseCustomConfig 
} from '../services/firebase';
import { 
  updateMedalItem, 
  updateScheduleItem, 
  seedAllToFirestore 
} from '../services/firestoreService';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  medals: MedalStanding[];
  schedules: MatchSchedule[];
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  medals,
  schedules,
}) => {
  const [activeTab, setActiveTab] = useState<'firebase' | 'medals' | 'matches'>('firebase');
  
  // Firebase Config State
  const [fbConfig, setFbConfig] = useState<FirebaseCustomConfig>(getActiveFirebaseConfig());
  const [seedStatus, setSeedStatus] = useState<{ loading: boolean; msg: string; isError?: boolean } | null>(null);

  // Medal Edit State
  const [selectedMedalId, setSelectedMedalId] = useState<string>(medals[0]?.id || '1');
  const selectedMedal = medals.find(m => m.id === selectedMedalId) || medals[0];
  const [goldInput, setGoldInput] = useState<number>(selectedMedal?.gold || 0);
  const [silverInput, setSilverInput] = useState<number>(selectedMedal?.silver || 0);
  const [bronzeInput, setBronzeInput] = useState<number>(selectedMedal?.bronze || 0);
  const [medalSaveMsg, setMedalSaveMsg] = useState<string | null>(null);

  // Match Score Edit State
  const [selectedScheduleId, setSelectedScheduleId] = useState<string>(schedules[0]?.id || 'sch-1');
  const selectedSchedule = schedules.find(s => s.id === selectedScheduleId) || schedules[0];
  const [scoreA, setScoreA] = useState<string | number>(selectedSchedule?.scoreA || '');
  const [scoreB, setScoreB] = useState<string | number>(selectedSchedule?.scoreB || '');
  const [matchStatus, setMatchStatus] = useState<string>(selectedSchedule?.status || 'LIVE');
  const [winner, setWinner] = useState<string>(selectedSchedule?.winner || '');
  const [matchSaveMsg, setMatchSaveMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelectMedal = (id: string) => {
    setSelectedMedalId(id);
    const target = medals.find(m => m.id === id);
    if (target) {
      setGoldInput(target.gold);
      setSilverInput(target.silver);
      setBronzeInput(target.bronze);
    }
  };

  const handleSaveMedal = async () => {
    if (!selectedMedal) return;
    const total = Number(goldInput) + Number(silverInput) + Number(bronzeInput);
    const updated: MedalStanding = {
      ...selectedMedal,
      gold: Number(goldInput),
      silver: Number(silverInput),
      bronze: Number(bronzeInput),
      total,
    };
    await updateMedalItem(updated);
    setMedalSaveMsg(`Perolehan medali ${selectedMedal.contingent} berhasil diperbarui!`);
    setTimeout(() => setMedalSaveMsg(null), 3500);
  };

  const handleSelectSchedule = (id: string) => {
    setSelectedScheduleId(id);
    const target = schedules.find(s => s.id === id);
    if (target) {
      setScoreA(target.scoreA || '');
      setScoreB(target.scoreB || '');
      setMatchStatus(target.status);
      setWinner(target.winner || '');
    }
  };

  const handleSaveMatch = async () => {
    if (!selectedSchedule) return;
    const updated: MatchSchedule = {
      ...selectedSchedule,
      scoreA,
      scoreB,
      status: matchStatus as any,
      winner: winner || undefined,
    };
    await updateScheduleItem(updated);
    setMatchSaveMsg(`Skor pertandingan ${selectedSchedule.cabor} berhasil diperbarui!`);
    setTimeout(() => setMatchSaveMsg(null), 3500);
  };

  const handleSaveFirebaseConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveFirebaseConfig(fbConfig);
  };

  const handleSeedToFirestore = async () => {
    setSeedStatus({ loading: true, msg: 'Mengunggah seluruh data PORPROVSU ke Firestore...' });
    const res = await seedAllToFirestore();
    setSeedStatus({
      loading: false,
      msg: res.message,
      isError: !res.success,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-brand-royal text-white">
              <Database className="w-5 h-5 text-brand-gold-light" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-brand-dark">
                Panel Manajemen & Database Firestore PORPROVSU
              </h3>
              <p className="text-xs text-slate-500">
                Pusat kendali sinkronisasi Firebase dan update data pertandingan
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-white px-5 sm:px-6 gap-2">
          <button
            onClick={() => setActiveTab('firebase')}
            className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'firebase'
                ? 'border-brand-gold text-brand-dark'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Key className="w-4 h-4 text-brand-gold" />
            <span>Koneksi Firebase (Firestore)</span>
          </button>

          <button
            onClick={() => setActiveTab('medals')}
            className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'medals'
                ? 'border-brand-gold text-brand-dark'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Trophy className="w-4 h-4 text-brand-gold" />
            <span>Update Medali</span>
          </button>

          <button
            onClick={() => setActiveTab('matches')}
            className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'matches'
                ? 'border-brand-gold text-brand-dark'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span>Update Skor Live</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">

          {/* TAB 1: FIREBASE CONFIG & SYNC */}
          {activeTab === 'firebase' && (
            <div className="space-y-6">
              
              {/* Status Box */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <Database className="w-4 h-4 text-amber-700" />
                  <span>Integrasi Firestore Siap Pakai & Aman</span>
                </div>
                <p>
                  Aplikasi telah dikonfigurasi dengan Firebase SDK dan Firestore service layer yang mendukung <strong>real-time listener</strong>, offline-first fallback, dan sinkronisasi instan.
                </p>
                <p className="text-xs text-amber-800 font-semibold">
                  Jika Anda memiliki Firebase Project ID sendiri dari Firebase Console, Anda dapat memasukkannya di bawah ini atau gunakan tombol inisialisasi untuk mengunggah seluruh data default ke Firestore.
                </p>
              </div>

              {/* One Click Seed Button */}
              <div className="p-4 sm:p-5 rounded-2xl bg-brand-royal text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-brand-gold-light">
                    Inisialisasi Data Porprovsu ke Firestore
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Unggah 33 data kontingen, jadwal tanding, dan berita ke database Firestore.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleSeedToFirestore}
                  disabled={seedStatus?.loading}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 shrink-0 flex items-center justify-center gap-2"
                >
                  <RefreshCw className={`w-4 h-4 ${seedStatus?.loading ? 'animate-spin' : ''}`} />
                  <span>{seedStatus?.loading ? 'Mengunggah...' : 'Inisialisasi Sekarang'}</span>
                </button>
              </div>

              {seedStatus && (
                <div className={`p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                  seedStatus.isError ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                }`}>
                  {seedStatus.isError ? <AlertCircle className="w-4 h-4 shrink-0" /> : <CheckCircle2 className="w-4 h-4 shrink-0" />}
                  <span>{seedStatus.msg}</span>
                </div>
              )}

              {/* Custom Keys Form */}
              <form onSubmit={handleSaveFirebaseConfig} className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900">
                    Konfigurasi Firebase Pribadi (Opsional)
                  </h4>
                  <button
                    type="button"
                    onClick={resetFirebaseConfig}
                    className="text-xs text-red-600 hover:underline font-semibold"
                  >
                    Reset ke Default
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Project ID</label>
                    <input
                      type="text"
                      value={fbConfig.projectId}
                      onChange={(e) => setFbConfig({ ...fbConfig, projectId: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-gold"
                      placeholder="porprovsu-official"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">API Key</label>
                    <input
                      type="text"
                      value={fbConfig.apiKey}
                      onChange={(e) => setFbConfig({ ...fbConfig, apiKey: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-gold"
                      placeholder="AIzaSy..."
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Auth Domain</label>
                    <input
                      type="text"
                      value={fbConfig.authDomain}
                      onChange={(e) => setFbConfig({ ...fbConfig, authDomain: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-gold"
                      placeholder="project.firebaseapp.com"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Storage Bucket</label>
                    <input
                      type="text"
                      value={fbConfig.storageBucket}
                      onChange={(e) => setFbConfig({ ...fbConfig, storageBucket: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-gold"
                      placeholder="project.appspot.com"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-brand-royal hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    <Save className="w-4 h-4 text-brand-gold-light" />
                    <span>Simpan & Terapkan Konfigurasi</span>
                  </button>
                </div>
              </form>

            </div>
          )}

          {/* TAB 2: UPDATE MEDALS */}
          {activeTab === 'medals' && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Pilih Kontingen Daerah:
                </label>
                <select
                  value={selectedMedalId}
                  onChange={(e) => handleSelectMedal(e.target.value)}
                  className="w-full sm:w-72 p-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 focus:ring-2 focus:ring-brand-gold"
                >
                  {medals.map((m) => (
                    <option key={m.id} value={m.id}>
                      Rank #{m.rank} - {m.contingent} ({m.total} Medali)
                    </option>
                  ))}
                </select>
              </div>

              {selectedMedal && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h4 className="font-extrabold text-base text-slate-900">
                      {selectedMedal.contingent}
                    </h4>
                    <span className="text-xs font-bold text-brand-royal bg-blue-100 px-2.5 py-1 rounded-full">
                      Peringkat Saat Ini: #{selectedMedal.rank}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-amber-800 mb-1">
                        🥇 Medali Emas
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={goldInput}
                        onChange={(e) => setGoldInput(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full p-2.5 bg-white border border-amber-300 rounded-xl text-center font-black text-amber-900 text-base focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        🥈 Medali Perak
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={silverInput}
                        onChange={(e) => setSilverInput(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-center font-black text-slate-800 text-base focus:ring-2 focus:ring-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-orange-800 mb-1">
                        🥉 Medali Perunggu
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={bronzeInput}
                        onChange={(e) => setBronzeInput(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full p-2.5 bg-white border border-orange-300 rounded-xl text-center font-black text-orange-950 text-base focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      Total Baru: <strong className="text-slate-900 text-sm">{Number(goldInput) + Number(silverInput) + Number(bronzeInput)}</strong> Medali
                    </div>
                    <button
                      type="button"
                      onClick={handleSaveMedal}
                      className="px-5 py-2.5 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <Save className="w-4 h-4" />
                      <span>Simpan Perubahan Medali</span>
                    </button>
                  </div>
                </div>
              )}

              {medalSaveMsg && (
                <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{medalSaveMsg}</span>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: UPDATE MATCHES & SCORES */}
          {activeTab === 'matches' && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Pilih Pertandingan:
                </label>
                <select
                  value={selectedScheduleId}
                  onChange={(e) => handleSelectSchedule(e.target.value)}
                  className="w-full sm:w-80 p-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 focus:ring-2 focus:ring-brand-gold"
                >
                  {schedules.map((s) => (
                    <option key={s.id} value={s.id}>
                      [{s.cabor}] {s.teamA} vs {s.teamB} ({s.status})
                    </option>
                  ))}
                </select>
              </div>

              {selectedSchedule && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                      {selectedSchedule.cabor} • {selectedSchedule.category}
                    </span>
                    <h4 className="font-extrabold text-base text-slate-900 mt-0.5">
                      {selectedSchedule.stage}
                    </h4>
                  </div>

                  <div className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-5">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {selectedSchedule.teamA} (Skor)
                      </label>
                      <input
                        type="text"
                        value={scoreA}
                        onChange={(e) => setScoreA(e.target.value)}
                        placeholder="Skor Tim A"
                        className="w-full p-2 bg-white border border-slate-300 rounded-xl text-center font-bold text-slate-900 text-sm focus:ring-2 focus:ring-brand-gold"
                      />
                    </div>

                    <div className="col-span-2 text-center text-xs font-black text-slate-400">
                      VS
                    </div>

                    <div className="col-span-5">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {selectedSchedule.teamB} (Skor)
                      </label>
                      <input
                        type="text"
                        value={scoreB}
                        onChange={(e) => setScoreB(e.target.value)}
                        placeholder="Skor Tim B"
                        className="w-full p-2 bg-white border border-slate-300 rounded-xl text-center font-bold text-slate-900 text-sm focus:ring-2 focus:ring-brand-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Status Laga</label>
                      <select
                        value={matchStatus}
                        onChange={(e) => setMatchStatus(e.target.value)}
                        className="w-full p-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800"
                      >
                        <option value="UPCOMING">TERJADWAL (Akan Datang)</option>
                        <option value="LIVE">LIVE MATCH (Sedang Berlangsung)</option>
                        <option value="COMPLETED">SELESAI</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Pemenang (Opsional)</label>
                      <input
                        type="text"
                        value={winner}
                        onChange={(e) => setWinner(e.target.value)}
                        placeholder="Nama tim pemenang"
                        className="w-full p-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={handleSaveMatch}
                      className="px-5 py-2.5 rounded-xl bg-brand-royal hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <Save className="w-4 h-4 text-brand-gold-light" />
                      <span>Simpan Skor Pertandingan</span>
                    </button>
                  </div>
                </div>
              )}

              {matchSaveMsg && (
                <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{matchSaveMsg}</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Sistem Database Firestore - Porprov Sumatera Utara Resmi</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
