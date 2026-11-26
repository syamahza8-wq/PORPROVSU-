import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  LogIn,
  AlertCircle
} from 'lucide-react';
import { ASSETS } from '../assets';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; role: string }) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Panitia Pertandingan');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!username.trim() || !password.trim()) {
      setErrorMsg('Harap masukkan username/email dan kata sandi.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const loggedUser = {
        name: username === 'admin' ? 'Administrator Pusat' : username,
        role: role,
      };
      if (rememberMe) {
        localStorage.setItem('porprovsu_user', JSON.stringify(loggedUser));
      }
      onLoginSuccess(loggedUser);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      {/* Main Container with Kadis Photo as Background */}
      <div className="relative rounded-3xl max-w-lg w-full shadow-2xl border border-slate-300 overflow-hidden text-slate-900 bg-white">
        
        {/* Background Image: kadis.jpeg */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ASSETS.kadis})` }}
        >
          {/* Bright elegant frosted-glass backdrop overlay (terang, solid, no neon) */}
          <div className="absolute inset-0 bg-white/92 backdrop-blur-md" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-slate-50/95" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 p-6 sm:p-8">
          
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 p-1.5 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center">
                <img 
                  src={ASSETS.logo} 
                  alt="Logo Porprovsu" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-gold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  DISPORA & KONI SUMATERA UTARA
                </span>
                <h3 className="font-black text-lg sm:text-xl text-slate-900 mt-0.5">
                  Form Login Panitia & Wasit
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mt-2 mb-4 leading-relaxed font-medium">
            Masuk untuk mengakses sistem database Firestore, validasi hasil pertandingan, dan input medali kontingen se-Sumut.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Username */}
            <div>
              <label className="block font-bold text-slate-800 mb-1">
                Username / Email Petugas
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Contoh: admin atau panitia.cabor"
                  className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none text-xs sm:text-sm font-semibold shadow-xs"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block font-bold text-slate-800 mb-1">
                Kata Sandi (Password)
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi..."
                  className="w-full pl-9 pr-10 py-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none text-xs sm:text-sm font-semibold shadow-xs"
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

            {/* Role */}
            <div>
              <label className="block font-bold text-slate-800 mb-1">
                Divisi / Tanggung Jawab
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-brand-gold shadow-xs"
              >
                <option value="Administrator Pertandingan">Administrator Pusat Pertandingan</option>
                <option value="Wasit / Juri Cabor">Wasit / Juri Cabang Olahraga</option>
                <option value="Panitia Pelaksana Daerah">Panitia Pelaksana Kabupaten/Kota</option>
                <option value="Humas & Media Center">Humas & Liputan Media</option>
              </select>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-semibold">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-300 text-brand-gold focus:ring-brand-gold"
                />
                <span>Ingat saya di perangkat ini</span>
              </label>
              <span className="text-brand-royal font-bold hover:underline cursor-pointer">
                Bantuan Panitia
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-98 disabled:opacity-50"
              >
                <LogIn className="w-4 h-4" />
                <span>{isSubmitting ? 'Memproses Masuk...' : 'Masuk ke Sistem Portal'}</span>
              </button>
            </div>

            {/* Quick Demo Credentials */}
            <div className="p-3 bg-white/90 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
              <span>Akun Demo: Username <strong className="text-slate-900">admin</strong></span>
              <span>Password <strong className="text-slate-900">porprovsu2026</strong></span>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};
