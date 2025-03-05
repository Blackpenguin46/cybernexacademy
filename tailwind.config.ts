/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
	theme: {
	  extend: {
		colors: {
		  blue: {
			500: "#3b82f6",
			600: "#2563eb",
			700: "#1d4ed8",
		  },
		  gray: {
			800: "#1f2937",
			900: "#111827",
		  },
		},
		boxShadow: {
		  glow: "0 0 15px rgba(59, 130, 246, 0.5)",
		},
	  },
	},
	plugins: [],
  };