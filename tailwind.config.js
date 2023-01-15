/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    container: {
      center: true,
      padding: '24px',
    },
    extend: {  
      colors: {
        prim: "#282828",
        sec: "#240090",
        ter: "#7dd3fc",
        quart: "#0ea5e9",
        pent: "#99738E",
      },
      screens: {
        '2xl': '1320px'
      }
    }
  },
  plugins: [

  ],
}
