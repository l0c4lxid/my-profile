/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan jalur ini sesuai dengan struktur proyek Anda
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  daisyui: {
    themes: ["corporate", "dark"],
  },
};
