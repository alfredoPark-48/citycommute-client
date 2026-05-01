/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          blue: '#38bdf8',
          green: '#10b981',
          purple: '#a855f7',
          orange: '#f59e0b',
          red: '#f43f5e',
          yellow: '#eab308',
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        // Legacy background tokens
        "bg-lighter": '#1e293b',
        "bg-default": '#0f172a',
        "bg-darker": '#020617',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        waterPulse: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '0.7' },
        },
        boardingScale: {
          'from': { transform: 'scale(1)', opacity: '1' },
          'to': { transform: 'scale(0.5)', opacity: '0.5' },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--base-ui-collapsible-panel-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--base-ui-collapsible-panel-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        'water-pulse': 'waterPulse 3s infinite ease-in-out',
        'boarding-scale': 'boardingScale 0.5s ease-in-out infinite alternate',
        "collapsible-down": "collapsible-down 0.3s ease-out",
        "collapsible-up": "collapsible-up 0.3s ease-out",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

