/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#0F1014",
      },
      fontFamily: {
        roco: ["RocaOne-Rg", "sans-serif"],
      },
    },
  },
  plugins: [],
};
