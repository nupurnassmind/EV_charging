/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        'primary-dark': '#388E3C',
        'primary-light': '#66BB6A',
        accent: '#2E7D32',
        'dark-green': '#1B3A2D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

