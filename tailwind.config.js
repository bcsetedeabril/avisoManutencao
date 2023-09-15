/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-costom': '#313FB9',
        'yellow-costum': '#FECC00',
      },
    },
  },
  plugins: [],
}
