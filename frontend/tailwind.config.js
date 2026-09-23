/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d0d0d',
        sand: '#faf7f2',
        parchment: '#f3ede2',
        gold: '#c8a96a',
        slate: '#232323',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}
