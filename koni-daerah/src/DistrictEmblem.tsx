import React from 'react';
import { EMBLEM_BY_NAME } from './assets/emblems';

interface DistrictEmblemProps {
  initials: string;
  bg?: string;
  size?: 'sm' | 'md' | 'lg';
  name?: string;
}

function normalizeDistrictKey(value: string): string {
  return value
    .toLowerCase()
    .replace(/^koni\s+/, '')
    .replace(/\bkab\.\s*/g, 'kabupaten')
    .replace(/sidempuan/g, 'sidimpuan')
    .replace(/toba samosir/g, 'toba')
    .replace(/\s+/g, '')
    .trim();
}

const NORMALIZED_EMBLEM_MAP: Record<string, string> = Object.entries(EMBLEM_BY_NAME).reduce(
  (acc, [key, url]) => {
    acc[normalizeDistrictKey(key)] = url;
    return acc;
  },
  {} as Record<string, string>
);

export const DistrictEmblem: React.FC<DistrictEmblemProps> = ({
  initials,
  bg = '#1E3A8A',
  size = 'md',
  name,
}) => {
  const boxSize =
    size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';
  const shieldSize =
    size === 'sm' ? 'w-7 h-8' : size === 'lg' ? 'w-12 h-14' : 'w-9 h-10';
  const fontSize = size === 'sm' ? '9' : size === 'lg' ? '14' : '11';

  const resolvedLogo =
    (name && EMBLEM_BY_NAME[name]) ||
    (name ? NORMALIZED_EMBLEM_MAP[normalizeDistrictKey(name)] : undefined);

  if (resolvedLogo) {
    return (
      <div
        className={`relative inline-flex items-center justify-center shrink-0 rounded-xl bg-white border border-slate-100 p-1 shadow-xs ${boxSize}`}
        title={name ? `Logo Resmi ${name}` : initials}
      >
        <img
          src={resolvedLogo}
          alt={name ? `Logo Resmi ${name}` : initials}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${shieldSize}`}
      title={name ? `Logo Daerah ${name}` : initials}
    >
      <svg viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M20 1L38 6.5V22C38 33.5 29.5 41.2 20 45C10.5 41.2 2 33.5 2 22V6.5L20 1Z" fill="#D97706" />
        <path d="M20 3.2L35.8 8V22C35.8 32.1 28.4 39 20 42.6C11.6 39 4.2 32.1 4.2 22V8L20 3.2Z" fill={bg} />
        <path d="M6 9.2L20 5L34 9.2V12.5H6V9.2Z" fill="#FBBF24" fillOpacity="0.28" />
        <path d="M20 6.5L21 9H23.5L21.5 10.5L22.2 13L20 11.4L17.8 13L18.5 10.5L16.5 9H19L20 6.5Z" fill="#FDE047" />
        <text
          x="20"
          y="27.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize={fontSize}
          fontWeight="800"
          fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
          letterSpacing="0.5"
        >
          {initials.slice(0, 3)}
        </text>
        <path d="M12 32.5L20 36L28 32.5" stroke="#FBBF24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};
