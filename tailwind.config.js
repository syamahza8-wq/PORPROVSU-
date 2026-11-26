/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B192C',
          navy: '#1E293B',
          royal: '#1E3E62',
          gold: '#D97706',
          'gold-light': '#F59E0B',
          'gold-dark': '#B45309',
          maroon: '#991B1B',
          'maroon-dark': '#7F1D1D',
          sky: '#0284C7',
          'sky-dark': '#0369A1',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
