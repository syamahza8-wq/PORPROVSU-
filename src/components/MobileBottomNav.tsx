import React from 'react';
import {
  Trophy,
  Users,
  Home,
  MapPin,
  FileEdit
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
    { id: 'klasemen', label: 'Medali', icon: Trophy },
    { id: 'atlet-pelatih', label: 'Atlet/Pelatih', icon: Users },
    { id: 'venue', label: 'Lokasi/Cabor', icon: MapPin },
    { id: 'form-portal', label: 'Form', icon: FileEdit },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/98 backdrop-blur-md border-t border-slate-200 py-1.5 px-2 md:hidden shadow-lg">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
                isActive
                  ? 'text-brand-royal font-black'
                  : 'text-slate-500 hover:text-slate-800 font-semibold'
              }`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-amber-100 text-amber-900' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-brand-gold' : 'text-slate-500'}`} />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
