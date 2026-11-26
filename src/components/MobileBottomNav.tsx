import React from 'react';
import { Home, Award, CalendarDays, MapPin, Newspaper } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
}) => {
  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'klasemen', label: 'Medali', icon: Award },
    { id: 'jadwal', label: 'Jadwal', icon: CalendarDays },
    { id: 'venue', label: 'Lokasi', icon: MapPin },
    { id: 'berita', label: 'Berita', icon: Newspaper },
  ];

  return (
    <nav
      aria-label="Navigasi Mobile"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_-4px_rgba(15,23,42,0.08)] pb-safe"
    >
      <div className="grid grid-cols-5 h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            activeSection === item.id ||
            (item.id === 'klasemen' && activeSection === 'kontingen') ||
            (item.id === 'jadwal' && (activeSection === 'cabor' || activeSection === 'atlet')) ||
            (item.id === 'berita' && activeSection === 'galeri');

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors relative cursor-pointer ${
                isActive ? 'text-[#0284C7]' : 'text-slate-500 hover:text-[#0F172A]'
              }`}
            >
              {isActive && (
                <span className="absolute top-0 inset-x-4 h-0.5 rounded-b-full bg-[#0284C7]" />
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.9]'}`} />
              <span className={`text-[10px] tracking-tight ${isActive ? 'font-extrabold' : 'font-semibold'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
