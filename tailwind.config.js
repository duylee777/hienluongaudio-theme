/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '512px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // => @media (min-width: 512px) { ... } 
    },
  },
  plugins: [],
}

