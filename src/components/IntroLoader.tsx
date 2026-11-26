import React, { useState, useEffect } from 'react';
import { Flame, ShieldCheck } from 'lucide-react';
import { ASSETS } from '../assets';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    const totalDuration = 3000; // 3 seconds strictly
    const intervalTime = 30; // updates every 30ms for super smooth animation
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Second countdown tracker: 3s -> 2s -> 1s
    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 1;
        }
        return prev - 1;
      });
    }, 1000);

    // Complete callback strictly at 3000ms
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, totalDuration);

    return () => {
      clearInterval(timer);
      clearInterval(countdownTimer);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-brand-dark flex flex-col items-center justify-center p-6 text-white select-none">
      
      {/* Background Subtle Ambience (Strictly Non-Neon) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-brand-dark to-slate-950 opacity-90" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center space-y-6 animate-fadeIn">
        
        {/* Logo Container */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 p-2 rounded-2xl bg-white border-2 border-brand-gold shadow-2xl flex items-center justify-center">
          <img 
            src={ASSETS.logo} 
            alt="Logo PORPROVSU" 
            className="w-full h-full object-contain animate-pulse"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = ASSETS.logoJpeg;
            }}
          />
        </div>

        {/* Title */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-light uppercase tracking-widest bg-brand-royal/60 px-3 py-1 rounded-full border border-slate-700">
            <Flame className="w-3.5 h-3.5 text-brand-gold-light" />
            <span>Pekan Olahraga Provinsi Sumatera Utara</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            PORPROVSU <span className="text-brand-gold-light">XII 2026</span>
          </h2>
          <p className="text-xs text-slate-300 font-medium">
            Memuat Sistem Data Terpadu & Sinkronisasi Real-Time...
          </p>
        </div>

        {/* Progress Bar Container - Strictly timed to 3 seconds, no skip button */}
        <div className="w-full space-y-2 pt-2">
          <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700 p-0.5">
            <div 
              className="h-full bg-brand-gold rounded-full transition-all ease-linear duration-75"
              style={{ width: `${Math.min(100, Math.floor(progress))}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 px-1">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Memproses Modul ({Math.min(100, Math.floor(progress))}%)</span>
            </span>
            <span className="text-brand-gold-light font-bold">
              {timeLeft > 1 ? `${timeLeft} detik tersisa` : 'Menyiapkan portal...'}
            </span>
          </div>
        </div>

        <div className="pt-4 text-[11px] text-slate-400 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
          <span>Portal Resmi Terverifikasi KONI & DISPORA Sumatera Utara</span>
        </div>

      </div>
    </div>
  );
};
