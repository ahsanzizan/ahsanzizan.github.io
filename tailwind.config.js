/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '24px',
    },
    extend: {  
      colors: {
        light: "#22d3ee",
        sec: "#240090",
      },
      screens: {
        '2xl': '1320px'
      }
    }
  },
  plugins: [

  ],
}
