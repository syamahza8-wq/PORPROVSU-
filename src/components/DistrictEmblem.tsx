import React from 'react';

interface DistrictEmblemProps {
  initials: string;
  bg?: string;
  size?: 'sm' | 'md' | 'lg';
  name?: string;
}

/**
 * Heraldic shield emblem for each of the 33 Kabupaten & Kota in Sumatera Utara.
 */
export const DistrictEmblem: React.FC<DistrictEmblemProps> = ({
  initials,
  bg = '#1E3A8A',
  size = 'md',
  name,
}) => {
  const dimensions =
    size === 'sm' ? 'w-7 h-8' : size === 'lg' ? 'w-12 h-14' : 'w-9 h-10';
  const fontSize =
    size === 'sm' ? '9' : size === 'lg' ? '14' : '11';

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${dimensions}`}
      title={name ? `Logo Daerah ${name}` : initials}
    >
      <svg
        viewBox="0 0 40 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Outer Gold Rim */}
        <path
          d="M20 1L38 6.5V22C38 33.5 29.5 41.2 20 45C10.5 41.2 2 33.5 2 22V6.5L20 1Z"
          fill="#D97706"
        />
        {/* Inner Shield Body */}
        <path
          d="M20 3.2L35.8 8V22C35.8 32.1 28.4 39 20 42.6C11.6 39 4.2 32.1 4.2 22V8L20 3.2Z"
          fill={bg}
        />
        {/* Top White/Gold Accent Bar */}
        <path
          d="M6 9.2L20 5L34 9.2V12.5H6V9.2Z"
          fill="#FBBF24"
          fillOpacity="0.28"
        />
        {/* Sumut Star Motif at Top */}
        <path
          d="M20 6.5L21 9H23.5L21.5 10.5L22.2 13L20 11.4L17.8 13L18.5 10.5L16.5 9H19L20 6.5Z"
          fill="#FDE047"
        />
        {/* Region Code Monogram */}
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
        {/* Bottom Subtle Chevron */}
        <path
          d="M12 32.5L20 36L28 32.5"
          stroke="#FBBF24"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
