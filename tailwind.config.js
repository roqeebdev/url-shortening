/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: '#32CECD',
        lightGrey: '#F0F1F6',
        white: 'hsl(0, 0%, 100%)',
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(230, 25%, 95%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },
      backgroundImage: {
        searchBack:  "url('/public/images/bg-boost-desktop.svg')",
      }
    },
  },
  plugins: [],
}