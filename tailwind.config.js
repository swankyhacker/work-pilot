/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'success' : '',
        'error' : '',
        'warning' : '',
      }
    },
  },
  plugins: [],
}