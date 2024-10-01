/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D19A0",
        secondary: "#1481BA",
        tertiary: "#F7FFF7"
      }
    },
  },
  plugins: [],
}

