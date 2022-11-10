/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Layout/Layout.jsx",
  ],
  theme: {
    extend: {
      screens: {
        phone: { max: "700px" },
      },
    },
  },
  plugins: [],
};
