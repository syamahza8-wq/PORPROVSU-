/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.source.html",
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
          sky: '#0284C7',
          surface: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
