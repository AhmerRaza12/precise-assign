/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary':'#fcd51e',
        'secondary':'#fff'
      },
    },
  },
  plugins: [],
}