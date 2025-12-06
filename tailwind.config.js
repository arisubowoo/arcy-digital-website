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
      },
    },
  },
  plugins: [],
};

