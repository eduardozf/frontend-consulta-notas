/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        madeira: {
          50: '#fff7ed',
          100: '#ffeed5',
          200: '#fed8aa',
          300: '#fdbc74',
          400: '#fb953c',
          500: '#f97616',
          600: '#ea5b0c',
          700: '#c2430c',
          800: '#9a3612',
          900: '#7c2e12',
          950: '#431507'
        }
      }
    }
  }
}
