/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    DEFAULT: 'rgb(75, 75, 75)',
    dark: 'rgb(205, 205, 255)'
  },
  secondary: {
    DEFAULT: 'rgb(41, 120, 181)',
    dark: 'rgb(144, 160, 217)'
  },
  background: {
    DEFAULT: 'rgb(250, 250, 250)',
    dark: 'rgb(35, 40, 62)'
  }
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
    }
  },
  plugins: [],
}

