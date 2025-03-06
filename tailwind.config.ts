/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
	theme: {
	  extend: {
		colors: {
		  primary: {
			DEFAULT: "#3b82f6", // Primary blue
			50: "#eff6ff",
			100: "#dbeafe",
			200: "#bfdbfe",
			300: "#93c5fd",
			400: "#60a5fa",
			500: "#3b82f6",
			600: "#2563eb",
			700: "#1d4ed8",
			800: "#1e40af",
			900: "#1e3a8a",
			950: "#172554",
		  },
		  secondary: {
			DEFAULT: "#10b981", // Emerald for accents
			50: "#ecfdf5",
			100: "#d1fae5",
			200: "#a7f3d0",
			300: "#6ee7b7",
			400: "#34d399",
			500: "#10b981",
			600: "#059669",
			700: "#047857",
			800: "#065f46",
			900: "#064e3b",
			950: "#022c22",
		  },
		  accent: {
			DEFAULT: "#f43f5e", // Rose for important elements
			50: "#fff1f2",
			100: "#ffe4e6",
			200: "#fecdd3",
			300: "#fda4af",
			400: "#fb7185",
			500: "#f43f5e",
			600: "#e11d48",
			700: "#be123c",
			800: "#9f1239",
			900: "#881337",
			950: "#4c0519",
		  },
		  neon: {
			blue: "#00f3ff",  // Cyan neon blue
			pink: "#ff00ff",  // Magenta neon pink
			green: "#00ff66", // Bright neon green
			yellow: "#ffff00", // Neon yellow
			purple: "#bf00ff", // Neon purple
		  },
		  dark: {
			DEFAULT: "#111827",
			light: "#1f2937",
			lighter: "#374151",
			card: "#0f172a",
			border: "#1e293b",
		  },
		  cyber: {
			black: "#0a0a0c",
			purple: "#3d0077",
			blue: "#004e8c",
			teal: "#007882",
			green: "#00776b",
		  },
		},
		boxShadow: {
		  glow: "0 0 15px rgba(59, 130, 246, 0.5)",
		  "neon-blue": "0 0 5px #00f3ff, 0 0 20px rgba(0, 243, 255, 0.3)",
		  "neon-pink": "0 0 5px #ff00ff, 0 0 20px rgba(255, 0, 255, 0.3)",
		  "neon-green": "0 0 5px #00ff66, 0 0 20px rgba(0, 255, 102, 0.3)",
		  card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
		  "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
		},
		backgroundImage: {
		  'cyber-grid': "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'cyber-glow': 'linear-gradient(to right, rgba(0, 243, 255, 0.15), rgba(59, 130, 246, 0.15), rgba(255, 0, 255, 0.15))',
		},
		backgroundSize: {
		  'grid-lg': '50px 50px',
		  'grid-md': '25px 25px',
		  'grid-sm': '10px 10px',
		},
		animation: {
		  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
		  'glow': 'glow 1.5s ease-in-out infinite alternate',
		  'float': 'float 6s ease-in-out infinite',
		  'type': 'type 3.5s steps(40, end)',
		  'gradient-x': 'gradient-x 15s ease infinite',
		},
		keyframes: {
		  glow: {
			'0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)' },
			'100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.7), 0 0 30px rgba(59, 130, 246, 0.5)' },
		  },
		  float: {
			'0%, 100%': { transform: 'translateY(0)' },
			'50%': { transform: 'translateY(-10px)' },
		  },
		  type: {
			'0%': { width: '0%' },
			'100%': { width: '100%' },
		  },
		  'gradient-x': {
			'0%, 100%': {
			  'background-size': '200% 200%',
			  'background-position': 'left center'
			},
			'50%': {
			  'background-size': '200% 200%',
			  'background-position': 'right center'
			},
		  },
		},
		fontFamily: {
		  mono: ['Space Mono', 'monospace'],
		  sans: ['Inter', 'system-ui', 'sans-serif'],
		  display: ['Orbitron', 'sans-serif'],
		},
		borderRadius: {
		  'xl': '1rem',
		  '2xl': '1.5rem',
		  '3xl': '2rem',
		},
		backdropFilter: {
		  'none': 'none',
		  'blur': 'blur(20px)',
		},
		borderWidth: {
		  '1': '1px',
		},
	  },
	},
	plugins: [],
  };