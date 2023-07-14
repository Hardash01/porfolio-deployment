/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      gris: "#2b2b2b",
      white: "#ffffff",
      black: "#131313",
      grisclaro: "#86868b",
      grisclaro2: "#d1d5db",
      grisclaro3: "#9ca3af",
      grisoscuro: "#1a1a1a",
      naranja: "#FF6D09",
      naranja700: "#c2410c",
    }
  },
  plugins: [],
}

