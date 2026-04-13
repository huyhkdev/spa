/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          light: '#e4c563',
          dark: '#b8962f'
        },
        secondary: {
          DEFAULT: '#4A5D4E',
          light: '#6a7d6e',
          dark: '#3a4d3e'
        },
        background: '#FDF8F4',
        text: '#1A1A1A'
      },
      fontFamily: {
        heading: ['Raleway', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        cursive: ['Satisfy', 'cursive']
      }
    },
  },
  plugins: [],
}
