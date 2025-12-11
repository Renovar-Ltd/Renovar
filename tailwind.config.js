/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "agri-green": "#2d5016",
        "agri-light-green": "#4a7c2a",
        "agri-earth": "#8b6914",
        "agri-brown": "#6b4423",
        "agri-cream": "#f5f1e8",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
