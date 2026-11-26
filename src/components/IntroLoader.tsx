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
    const totalDuration = 3000; // 3 seconds strictly, no skip
    const intervalTime = 30;
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

    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 1;
        }
        return prev - 1;
      });
    }, 1000);

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
    <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900 select-none">
      {/* Clean top official accent bar */}
      <div className="fixed top-0 inset-x-0 h-1.5 bg-brand-royal flex">
        <div className="w-1/3 bg-brand-gold h-full" />
        <div className="w-1/3 bg-brand-maroon h-full" />
        <div className="w-1/3 bg-brand-sky h-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
        {/* Logo Container */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 p-2 rounded-2xl bg-white border-2 border-brand-gold shadow-sm flex items-center justify-center">
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
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-royal uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Flame className="w-3.5 h-3.5 text-brand-gold" />
            <span>Pekan Olahraga Provinsi Sumatera Utara</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
            PORPROVSU <span className="text-brand-gold">XII 2026</span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Menghubungkan Database Cloud Firestore & Memuat Portal...
          </p>
        </div>

        {/* Progress Bar Container - Strictly 3 seconds, no skip button */}
        <div className="w-full space-y-2 pt-1">
          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200 p-0.5">
            <div
              className="h-full bg-brand-gold rounded-full transition-all ease-linear duration-75"
              style={{ width: `${Math.min(100, Math.floor(progress))}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>Memuat Data ({Math.min(100, Math.floor(progress))}%)</span>
            </span>
            <span className="text-brand-royal font-bold">
              {timeLeft > 1 ? `${timeLeft} detik` : 'Hampir selesai...'}
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 w-full text-[11px] text-slate-500 flex items-center justify-center gap-1.5 font-medium">
          <ShieldCheck className="w-4 h-4 text-brand-gold" />
          <span>Portal Resmi Berbasis Firebase Firestore</span>
        </div>
      </div>
    </div>
  );
};
