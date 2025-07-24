/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'naval-hull': '#1f2937',
        'sea-blue': '#0a192f',
        'gold-insignia': '#f5cb5c',
        'white-wake': '#f9fafb',
        'tactical-steel': '#94a3b8',
      },
      fontFamily: {
        'heading': ['Cinzel', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'wake': 'wake 3s ease-in-out infinite',
        'compass': 'compass 20s linear infinite',
        'radar': 'radar 4s ease-in-out infinite',
      },
      keyframes: {
        wake: {
          '0%, 100%': { transform: 'translateX(-10px)', opacity: 0.5 },
          '50%': { transform: 'translateX(10px)', opacity: 1 },
        },
        compass: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        radar: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}