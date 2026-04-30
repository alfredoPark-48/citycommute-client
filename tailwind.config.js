/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0f172a',
          lighter: '#1e293b',
          darker: '#020617',
        },
        accent: {
          blue: '#38bdf8',
          green: '#10b981',
          purple: '#a855f7',
          orange: '#f59e0b',
          red: '#f43f5e',
          yellow: '#eab308',
        }
      },
      animation: {
        'water-pulse': 'waterPulse 3s infinite ease-in-out',
        'boarding-scale': 'boardingScale 0.5s ease-in-out infinite alternate',
      },
      keyframes: {
        waterPulse: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '0.7' },
        },
        boardingScale: {
          'from': { transform: 'scale(1)', opacity: '1' },
          'to': { transform: 'scale(0.5)', opacity: '0.5' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
