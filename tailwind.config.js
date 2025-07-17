/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia', 'serif'],
        arial: ['Arial', 'sans-serif'],
      },
      fontWeight: {
        'georgia-bold': 'bold',
        'arial-bold': 'bold',
        'arial-regular': 'normal',
      },
    },
  },
  plugins: [],
}
