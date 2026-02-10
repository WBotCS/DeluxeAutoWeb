/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ferrari: {
          red: '#ff2800',
          dark: '#111111',
          black: '#000000',
          gray: '#1f1f1f'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // We'll use Inter as a default, similar to the clean sans-serif
      }
    },
  },
  plugins: [],
}
