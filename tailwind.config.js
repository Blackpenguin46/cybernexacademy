/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'neon-blue': 'rgb(var(--neon-blue))',
        'neon-green': 'rgb(var(--neon-green))',
        'neon-pink': 'rgb(var(--neon-pink))',
        'neon-purple': 'rgb(var(--neon-purple))',
        'dark': '#090909',
        'dark-background': 'rgb(var(--dark-background))',
        'dark-card': 'rgb(var(--dark-card))',
        'dark-border': 'rgb(var(--dark-border))',
        'dark-lighter': 'rgb(var(--dark-lighter))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'url("/images/grid-pattern.svg")',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-space-mono)'],
        display: ['var(--font-orbitron)'],
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(var(--neon-blue), 0.3)',
        'neon': '0 0 5px rgba(var(--neon-blue), 0.5), 0 0 20px rgba(var(--neon-blue), 0.3)',
        'neon-green': '0 0 5px rgba(var(--neon-green), 0.5), 0 0 20px rgba(var(--neon-green), 0.3)',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} 