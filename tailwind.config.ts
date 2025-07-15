/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#082832',
        secondary: {
          DEFAULT: '#14171A',
          light: '#657786'
        },
        brand: {
          50: '#f5faff',
          100: '#e0f0ff',
          200: '#b8ddff',
          300: '#80c3ff',
          400: '#40a3ff',
          500: '#1a8cff',
          600: '#006fe6',
          700: '#0055b4',
          800: '#003c80',
          900: '#00264d'
        }
      }
    }
  },
  plugins: []
};
