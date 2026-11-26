import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  LogIn
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

    // Simulate authentication check
    setTimeout(() => {
      setIsSubmitting(false);
      // Valid credentials or demo check
      if (
        (username.toLowerCase() === 'admin' && password === 'porprovsu2026') ||
        (username.toLowerCase() === 'panitia' && password === 'sumut2026') ||
        password.length >= 4 // Allow simple entry for convenience
      ) {
        const loggedUser = {
          name: username === 'admin' ? 'Administrator Pusat' : username,
          role: role,
        };
        if (rememberMe) {
          localStorage.setItem('porprovsu_user', JSON.stringify(loggedUser));
        }
        onLoginSuccess(loggedUser);
        onClose();
      } else {
        setErrorMsg('Kata sandi salah. Gunakan kata sandi minimal 4 karakter atau akun demo.');
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-brand-royal text-white p-6 relative">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 p-1 bg-white rounded-xl flex items-center justify-center shadow-xs">
                <img 
                  src={ASSETS.logo} 
                  alt="Logo Porprovsu" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-brand-gold-light uppercase block">
                  Sistem Autentikasi
                </span>
                <h3 className="font-extrabold text-base sm:text-lg leading-tight">
                  Login Panitia & Wasit
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-200 mt-1">
            Masuk untuk memperbarui skor pertandingan dan data klasemen medali PORPROVSU XII.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
          
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Username */}
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Username atau Email Panitia
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Contoh: admin atau wasit.silat"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all text-xs sm:text-sm font-medium"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block font-bold text-slate-700 mb-1">
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
                className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all text-xs sm:text-sm font-medium"
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

          {/* Role Selection */}
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Peran / Kategori Tugas
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-brand-gold"
            >
              <option value="Administrator Pertandingan">Administrator Pusat Pertandingan</option>
              <option value="Wasit / Juri Cabor">Wasit / Juri Cabang Olahraga</option>
              <option value="Panitia Pelaksana Kontingen">Panitia Pelaksana Daerah</option>
              <option value="Humas & Media Center">Humas & Media Center Dispora</option>
            </select>
          </div>

          {/* Remember me & Forgot */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-300 text-brand-royal focus:ring-brand-gold"
              />
              <span>Ingat saya di perangkat ini</span>
            </label>
            <span className="text-slate-400 hover:underline cursor-pointer">
              Bantuan Akun
            </span>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-brand-royal hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              <LogIn className="w-4 h-4 text-brand-gold-light" />
              <span>{isSubmitting ? 'Memverifikasi Akun...' : 'Masuk ke Sistem'}</span>
            </button>
          </div>

          {/* Demo Hint */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
            <strong className="block text-amber-950 font-bold mb-0.5">ℹ️ Akun Demo Cepat:</strong>
            Username: <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">admin</code> • Kata Sandi: <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">porprovsu2026</code>
          </div>

        </form>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-400">
          Sistem Portal Resmi Dinas Pemuda & Olahraga Provinsi Sumatera Utara
        </div>

      </div>
    </div>
  );
};
