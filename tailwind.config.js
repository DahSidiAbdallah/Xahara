/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A6EA5', // Xahara blue
          50: '#fcfbfb', // logo background
          100: '#F0F6FB',
          200: '#D9E6F6',
          300: '#B3CDED',
          400: '#8DB5E5',
          500: '#3A6EA5', // main blue
          600: '#2C5682', // dark blue
          700: '#1E3E5F',
          800: '#142B40',
          900: '#0A1920',
        },
        accent: {
          DEFAULT: '#fcfbfb', // logo background
          50: '#fcfbfb',
          100: '#F7F7F7',
          200: '#E3E3E3',
          300: '#C8C8C8',
          400: '#A4A4A4',
          500: '#818181',
        },
        gray: {
          DEFAULT: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
};