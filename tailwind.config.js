/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastel: {
          mint: "#D5FFE8",
          teal: "#B2F5EA",
          emerald: "#A7F3D0",
          green: "#C6F6D5",
          aqua: "#B2F5EA",
          seafoam: "#A7F3D0",
        },
        "pastel-teal": "#B2F5EA",
        "pastel-mint": "#D5FFE8",
        "pastel-emerald": "#A7F3D0",
        "pastel-green": "#C6F6D5",
        mint: {
          50: "#F0FDF9",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
        },
        aqua: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
        },
        seafoam: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
        },
      },
    },
  },
  plugins: [],
};

