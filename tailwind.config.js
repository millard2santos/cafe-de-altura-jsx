/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        grey: '#515051',
        darkGrey: '#2B2A2B',
        black: '#1F1815',
        taupe: '#E3DED7',
        green: '#2A5B45',
        offWhite: '#F7F5F3',
        greyInput: '#D1D5DB',
        greyHoverInput: '#9B9EA3',
        greenFocusInput: '#3F8F6B',
        greenCounter: 'hsla(153, 37%, 26%, 0.1)'
      },
      boxShadow: {
        normal: '0px 5px 5px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
