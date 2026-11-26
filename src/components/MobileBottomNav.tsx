import React from 'react';
import {
  Users,
  Home,
  MapPin,
  Calendar,
  Newspaper
} from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
}) => {
  const items = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'atlet-pelatih', label: 'Atlet', icon: Users },
    { id: 'venue', label: 'Lokasi', icon: MapPin },
    { id: 'jadwal', label: 'Jadwal', icon: Calendar },
    { id: 'berita', label: 'Berita', icon: Newspaper },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/98 backdrop-blur-md border-t border-slate-200 py-1.5 px-1 md:hidden shadow-lg">
      <div className="grid grid-cols-5 items-center">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all min-w-0 ${
                isActive
                  ? 'text-brand-royal font-black'
                  : 'text-slate-500 hover:text-slate-800 font-semibold'
              }`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-amber-100 text-amber-900' : ''}`}>
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-gold' : 'text-slate-500'}`} />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight whitespace-nowrap truncate max-w-full">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
