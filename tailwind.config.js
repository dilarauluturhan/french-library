/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      },
      colors: {
        'popup': 'rgba(0,0,0,0.7)'
      },
      spacing: {
        '39': '39%',
      }
    },
  },
  plugins: [],
}

